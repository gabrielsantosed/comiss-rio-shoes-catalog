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
      <div className="card-product group">
        <div className="relative aspect-square overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          
          {/* Badge */}
          {product.badge === 'promocao' && product.promoEndTime && (
            <div className="absolute top-3 left-3 badge-promo rounded-md flex items-center gap-2">
              <span>{discountPercentage}% OFF</span>
              <span className="opacity-80">até</span>
              <CountdownTimer endTime={product.promoEndTime} />
            </div>
          )}
          
          {product.badge === 'ultimas-unidades' && (
            <div className="absolute top-3 left-3 badge-ultimas rounded-md">
              🔥 Últimas Unidades
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="font-display text-lg font-semibold text-foreground mb-1 line-clamp-1">
            {product.name}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
            {product.description}
          </p>
          
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-primary">
              R$ {product.price.toFixed(2).replace('.', ',')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                R$ {product.originalPrice.toFixed(2).replace('.', ',')}
              </span>
            )}
          </div>
          
          <div className="mt-3 flex flex-wrap gap-1">
            {product.sizes.slice(0, 5).map((size) => (
              <span
                key={size}
                className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
              >
                {size}
              </span>
            ))}
            {product.sizes.length > 5 && (
              <span className="text-xs px-2 py-1 rounded bg-secondary text-muted-foreground">
                +{product.sizes.length - 5}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
