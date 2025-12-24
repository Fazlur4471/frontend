import React from 'react';
import { X, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ManufacturedProduct, TradingProduct } from '@/types/product';
import { useEnquiry } from '@/context/EnquiryContext';

interface ProductDetailModalProps {
  product: ManufacturedProduct | TradingProduct;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({ product, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = React.useState(0);
  const { openEnquiryModal } = useEnquiry();

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleEnquire = () => {
    onClose();
    openEnquiryModal({
      id: product.id,
      name: product.name,
      type: product.productType,
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-foreground/50 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-card rounded-2xl shadow-xl overflow-hidden">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="overflow-y-auto max-h-[90vh]">
          <div className="grid lg:grid-cols-2">
            {/* Image Gallery */}
            <div className="relative bg-muted">
              <div className="aspect-square">
                <img
                  src={product.images[currentImageIndex]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              {product.images.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background/80 flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          index === currentImageIndex ? 'bg-accent' : 'bg-background/50'
                        }`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>

            {/* Details */}
            <div className="p-6 lg:p-8">
              <span className="text-xs font-medium text-accent uppercase tracking-wide">
                {product.category}
              </span>
              <h2 className="font-heading font-bold text-2xl text-foreground mt-2 mb-4">
                {product.name}
              </h2>
              <p className="text-muted-foreground mb-6">{product.description}</p>

              {/* Specifications */}
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-lg mb-3">Specifications</h3>
                <div className="bg-muted rounded-lg overflow-hidden">
                  <table className="w-full text-sm">
                    <tbody>
                      {Object.entries(product.specifications).map(([key, value], index) => (
                        <tr key={key} className={index % 2 === 0 ? 'bg-muted' : 'bg-background'}>
                          <td className="px-4 py-2 font-medium text-foreground">{key}</td>
                          <td className="px-4 py-2 text-muted-foreground">{value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Applications */}
              <div className="mb-6">
                <h3 className="font-heading font-semibold text-lg mb-3">Applications</h3>
                <ul className="grid grid-cols-2 gap-2">
                  {product.applications.map((app, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {app}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <Button onClick={handleEnquire} className="w-full btn-accent">
                <MessageSquare className="w-4 h-4 mr-2" />
                Enquire Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
