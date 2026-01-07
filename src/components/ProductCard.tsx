import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import CountdownTimer from './CountdownTimer';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const discountPercentage = product.originalPrice 
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;

  return (
    <Link to={`/produto/${product.id}`} className="block">
      <div className="flex gap-4 p-3 bg-card rounded-lg border border-border hover:border-primary/50 transition-all duration-300 group">
        {/* Image */}
        <div className="relative w-28 h-28 flex-shrink-0 rounded-lg overflow-hidden bg-secondary">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Info */}
        <div className="flex-1 min-w-0 flex flex-col justify-center">
          <h3 className="font-display text-base font-semibold text-foreground line-clamp-1">
            {product.name}
          </h3>

          {/* Badge inline */}
          {product.badge === 'promocao' && product.promoEndTime && (
            <div className="flex items-center gap-1 text-xs text-primary mt-1">
              <span className="text-primary">🔥</span>
              <span>{discountPercentage}% OFF até</span>
              <CountdownTimer endTime={product.promoEndTime} />
            </div>
          )}

          {product.badge === 'ultimas-unidades' && (
            <div className="text-xs text-warning mt-1">
              🔥 Últimas Unidades
            </div>
          )}

          {!product.badge && (
            <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
              {product.description}
            </p>
          )}

          {/* Price */}
          <div className="flex items-baseline gap-2 mt-2">
            <span className="text-lg font-bold text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-muted-foreground line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
