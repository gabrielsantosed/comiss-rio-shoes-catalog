import { ShoppingBag } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-3">
          <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <ShoppingBag className="w-5 h-5 text-primary-foreground" />
          </div>
          <div className="text-center">
            <h1 className="font-display text-2xl md:text-3xl font-bold tracking-tight">
              <span className="text-gradient-gold">COMISSÁRIO</span>
            </h1>
            <p className="text-xs tracking-[0.3em] text-muted-foreground uppercase">Shoes</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
