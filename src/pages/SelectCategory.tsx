import Header from '@/components/Header';
import { useNavigate } from 'react-router-dom';

const SelectCategory = () => {
  const navigate = useNavigate();

  const handleSelect = (category: 'masculino' | 'feminino') => {
    navigate(`/numeracao/${category}`);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main className="flex-1 container mx-auto px-4 py-12 flex flex-col items-center justify-center">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
            Selecione a Categoria
          </h2>
          <p className="text-muted-foreground">
            Escolha o tipo de calçado que você procura
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          <button
            onClick={() => handleSelect('masculino')}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-12 transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20 animate-slide-up"
          >
            <div className="text-6xl md:text-8xl mb-4">👞</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Masculino
            </h3>
            <p className="text-muted-foreground text-sm">
              Numerações 38 ao 45
            </p>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <button
            onClick={() => handleSelect('feminino')}
            className="group relative overflow-hidden rounded-2xl bg-card border border-border p-8 md:p-12 transition-all duration-300 hover:border-primary hover:shadow-xl hover:shadow-primary/20 animate-slide-up"
            style={{ animationDelay: '0.1s' }}
          >
            <div className="text-6xl md:text-8xl mb-4">👠</div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Feminino
            </h3>
            <p className="text-muted-foreground text-sm">
              Numerações 34 ao 40
            </p>
            <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default SelectCategory;
