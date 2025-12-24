import React from 'react';
import { Eye, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ManufacturedProduct, TradingProduct } from '@/types/product';
import { useEnquiry } from '@/context/EnquiryContext';

interface ProductCardProps {
  product: ManufacturedProduct | TradingProduct;
  onViewDetails: (product: ManufacturedProduct | TradingProduct) => void;
  linkTo?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails, linkTo }) => {
  const { openEnquiryModal } = useEnquiry();

  const handleCardClick = (e: React.MouseEvent) => {
    // Only navigate if clicking the card itself, not the buttons
    if ((e.target as HTMLElement).closest('button')) {
      return;
    }
    if (linkTo) {
      window.location.href = linkTo;
    }
  };

  const handleEnquire = (e: React.MouseEvent) => {
    e.stopPropagation();
    openEnquiryModal({
      id: product.id,
      name: product.name,
      type: product.productType,
    });
  };

  return (
    <div
      onClick={handleCardClick}
      className={`group bg-card rounded-xl border border-border overflow-hidden card-hover ${
        linkTo ? 'cursor-pointer' : ''
      }`}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.featured && (
          <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs font-semibold px-2 py-1 rounded">
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2">
          <span className="text-xs font-medium text-accent uppercase tracking-wide">
            {product.category}
          </span>
        </div>
        <h3 className="font-heading font-semibold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.shortDescription}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="sm"
            onClick={(e) => {
              e.stopPropagation();
              onViewDetails(product);
            }}
            className="flex-1"
          >
            <Eye className="w-4 h-4 mr-2" />
            Details
          </Button>
          <Button
            size="sm"
            className="flex-1 btn-accent"
            onClick={handleEnquire}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Enquire
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
