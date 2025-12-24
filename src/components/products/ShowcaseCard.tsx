import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ManufacturedProduct } from '@/types/product';
import { useEnquiry } from '@/context/EnquiryContext';

interface ShowcaseCardProps {
  product: ManufacturedProduct;
  onViewDetails: (product: ManufacturedProduct) => void;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ product, onViewDetails }) => {
  const { openEnquiryModal } = useEnquiry();

  const handleEnquire = () => {
    openEnquiryModal({
      id: product.id,
      name: product.name,
      type: product.productType,
    });
  };

  return (
    <div className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover">
      {/* Large Image */}
      <Link to="/manufactured-products" className="block">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
          
          {/* Overlay Text */}
          <div className="absolute bottom-0 left-0 right-0 p-6 text-primary-foreground">
            <span className="text-xs font-medium text-accent uppercase tracking-wide">
              {product.category}
            </span>
            <h3 className="font-heading font-bold text-2xl mt-1">
              {product.name}
            </h3>
          </div>
        </div>
      </Link>

      {/* Content */}
      <div className="p-6">
        <p className="text-muted-foreground mb-6">
          {product.shortDescription}
        </p>

        {/* Quick Specs */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.entries(product.specifications).slice(0, 4).map(([key, value]) => (
            <div key={key} className="text-sm">
              <span className="block text-muted-foreground text-xs">{key}</span>
              <span className="font-medium text-foreground">{value}</span>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={() => onViewDetails(product)}
            className="flex-1"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
          <Button onClick={handleEnquire} className="flex-1 btn-accent">
            <MessageSquare className="w-4 h-4 mr-2" />
            Enquire Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard;
