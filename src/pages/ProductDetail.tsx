import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Send } from 'lucide-react';
import { products } from '@/data/products';
import Header from '@/components/Header';
import CountdownTimer from '@/components/CountdownTimer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === id);
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display text-foreground mb-4">Produto não encontrado</h1>
          <Link to="/" className="btn-gold inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            Voltar ao catálogo
          </Link>
        </div>
      </div>
    );
  }

  const discountPercentage = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  const handleSendOrder = () => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse no produto:\n\n*${product.name}*\nPreço: R$ ${product.price.toFixed(2).replace('.', ',')}\n\nGostaria de mais informações!`
    );
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Badge Bar */}
      {product.badge && (
        <div className={`w-full py-2 text-center ${
          product.badge === 'promocao' ? 'bg-destructive' : 'bg-warning'
        }`}>
          <div className="container mx-auto px-4">
            {product.badge === 'promocao' && product.promoEndTime ? (
              <span className="text-sm font-bold text-destructive-foreground flex items-center justify-center gap-2">
                🔥 {discountPercentage}% OFF - Oferta termina em{' '}
                <CountdownTimer endTime={product.promoEndTime} />
              </span>
            ) : (
              <span className="text-sm font-bold text-warning-foreground">
                ⚡ Últimas Unidades Disponíveis!
              </span>
            )}
          </div>
        </div>
      )}

      <Header />

      <main className="container mx-auto px-4 py-6">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Voltar ao catálogo
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-xl overflow-hidden bg-card">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>
            
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary'
                        : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="space-y-6 animate-slide-up">
            <div>
              <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-2">
                {product.name}
              </h1>
              
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-primary">
                  R$ {product.price.toFixed(2).replace('.', ',')}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                )}
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Sizes */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                Numerações Disponíveis
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <span
                    key={size}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground font-medium"
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>

            {/* Video Link */}
            {product.videoUrl && (
              <a
                href={product.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
              >
                <div className="w-12 h-12 rounded-full bg-destructive flex items-center justify-center">
                  <Play className="w-5 h-5 text-destructive-foreground fill-current" />
                </div>
                <div>
                  <span className="font-semibold text-foreground">Ver Vídeo do Produto</span>
                  <p className="text-sm text-muted-foreground">Confira todos os detalhes</p>
                </div>
              </a>
            )}

            {/* Order Button */}
            <Button
              onClick={handleSendOrder}
              className="w-full btn-gold text-lg py-6 flex items-center justify-center gap-3"
            >
              <Send className="w-5 h-5" />
              Enviar Pedido
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Você será redirecionado para o WhatsApp
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetail;
