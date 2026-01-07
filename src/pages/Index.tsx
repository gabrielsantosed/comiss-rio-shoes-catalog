import { useState, useMemo } from 'react';
import Header from '@/components/Header';
import CategoryFilter from '@/components/CategoryFilter';
import SizeFilter from '@/components/SizeFilter';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Index = () => {
  const [category, setCategory] = useState<'todos' | 'masculino' | 'feminino'>('todos');
  const [selectedSize, setSelectedSize] = useState<number | null>(null);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = category === 'todos' || product.category === category;
      const sizeMatch = selectedSize === null || product.sizes.includes(selectedSize);
      return categoryMatch && sizeMatch;
    });
  }, [category, selectedSize]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-10 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Catálogo de Calçados
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Encontre o calçado perfeito para você. Qualidade, estilo e conforto em cada passo.
          </p>
        </div>

        {/* Filters */}
        <div className="space-y-6 mb-10">
          <div>
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              Categoria
            </h3>
            <CategoryFilter selected={category} onSelect={setCategory} />
          </div>

          <div>
            <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-4">
              Numeração
            </h3>
            <SizeFilter selected={selectedSize} onSelect={setSelectedSize} category={category} />
          </div>
        </div>

        {/* Results Count */}
        <div className="text-center mb-6">
          <span className="text-sm text-muted-foreground">
            {filteredProducts.length} {filteredProducts.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
          </span>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
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
            <p className="text-muted-foreground">
              Tente ajustar os filtros para ver mais opções
            </p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Comissário Shoes. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
