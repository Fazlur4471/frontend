import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ShowcaseCard from '@/components/products/ShowcaseCard';
import ProductDetailModal from '@/components/products/ProductDetailModal';
import { useProducts } from '@/context/ProductContext';
import { ManufacturedProduct } from '@/types/product';

const ManufacturedShowcase: React.FC = () => {
  const { getFeaturedManufactured } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<ManufacturedProduct | null>(null);

  const showcaseProducts = getFeaturedManufactured();

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-20 lg:py-28 gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">
              Manufactured Products
            </span>
            <h1 className="font-heading font-bold text-4xl md:text-5xl text-primary-foreground mt-2 mb-6">
              Our Flagship Industrial Solutions
            </h1>
            <p className="text-lg text-primary-foreground/80 max-w-xl">
              Discover our premium range of manufactured electronics, engineered for reliability and performance in demanding industrial environments.
            </p>
          </div>
        </div>
      </section>

      {/* Showcase Products */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8">
            {showcaseProducts.map((product) => (
              <ShowcaseCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>

          {/* View All Link */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Looking for more products? Browse our complete catalog.
            </p>
            <Button asChild size="lg" className="btn-accent">
              <Link to="/manufactured-products">
                View All Manufactured Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </Layout>
  );
};

export default ManufacturedShowcase;
