import Header from '@/components/Header';
import { useNavigate, useParams } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';

const SelectSize = () => {
  const navigate = useNavigate();
  const { category } = useParams<{ category: 'masculino' | 'feminino' }>();

  const masculinoSizes = [38, 39, 40, 41, 42, 43, 44, 45];
  const femininoSizes = [34, 35, 36, 37, 38, 39, 40];

  const sizes = category === 'masculino' ? masculinoSizes : femininoSizes;

  const handleSelect = (size: number) => {
    navigate(`/resultados/${category}/${size}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ChevronLeft size={20} />
          <span>Voltar</span>
        </button>

        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block px-4 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium mb-4">
            {category === 'masculino' ? '👞 Masculino' : '👠 Feminino'}
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Selecione a Numeração
          </h2>
          <p className="text-muted-foreground">
            Qual é o seu número?
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
          {sizes.map((size, index) => (
            <button
              key={size}
              onClick={() => handleSelect(size)}
              className="group relative overflow-hidden rounded-xl bg-card border border-border p-6 md:p-8 transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/20 animate-slide-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <span className="font-display text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                {size}
              </span>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          ))}
        </div>
      </main>
    </div>
  );
};

export default SelectSize;
