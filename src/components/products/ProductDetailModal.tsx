import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ManufacturedProduct, TradingProduct } from "@/types/product";

interface ProductDetailModalProps {
  product: ManufacturedProduct | TradingProduct;
  onClose: () => void;
}

const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="relative bg-white max-w-3xl w-full rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">{product.name}</h2>
          <Button
            variant="ghost"
            size="icon"
            aria-label="Close product details"
            onClick={onClose}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <p className="text-muted-foreground">{product.description}</p>

          {product.images?.length > 0 && (
            <div className="grid grid-cols-2 gap-4">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={product.name}
                  className="rounded border object-cover"
                />
              ))}
            </div>
          )}

          <div>
            <h3 className="font-semibold mb-2">Specifications</h3>
            <ul className="list-disc list-inside text-sm">
              {Object.entries(product.specifications).map(([key, value]) => (
                <li key={key}>
                  <strong>{key}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>

          {product.applications?.length > 0 && (
            <div>
              <h3 className="font-semibold mb-2">Applications</h3>
              <ul className="list-disc list-inside text-sm">
                {product.applications.map((app, idx) => (
                  <li key={idx}>{app}</li>
                ))}
              </ul>
            </div>
          )}

          {"brand" in product && product.brand && (
            <p className="text-sm">
              <strong>Brand:</strong> {product.brand}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetailModal;
