import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { ChevronLeft } from 'lucide-react';

const Results = () => {
  const navigate = useNavigate();
  const { category, size } = useParams<{ category: string; size: string }>();
  const selectedSize = size ? parseInt(size, 10) : null;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = product.category === category;
      const sizeMatch = selectedSize === null || product.sizes.includes(selectedSize);
      return categoryMatch && sizeMatch;
    });
  }, [category, selectedSize]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-8">
        <button
          onClick={() => navigate(`/numeracao/${category}`)}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          <span>Voltar</span>
        </button>

        <div className="mb-6 animate-fade-in">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-block px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium">
              {category === 'masculino' ? 'Masculino' : 'Feminino'}
            </span>
            <span className="inline-block px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium">
              Nº {selectedSize}
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="flex flex-col gap-3">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">👟</div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Nenhum produto encontrado
            </h3>
            <p className="text-muted-foreground mb-6">
              Não encontramos produtos para essa numeração
            </p>
            <button
              onClick={() => navigate(`/numeracao/${category}`)}
              className="btn-primary"
            >
              Escolher outra numeração
            </button>
          </div>
        )}
      </main>

      <footer className="border-t border-border py-8 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Comissário Shoes. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Results;
