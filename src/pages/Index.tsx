import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Cpu, Zap, Settings, Users, Award, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Layout from '@/components/layout/Layout';
import ProductCard from '@/components/products/ProductCard';
import ProductDetailModal from '@/components/products/ProductDetailModal';
import { useProducts } from '@/context/ProductContext';
import { ManufacturedProduct, TradingProduct } from '@/types/product';

const Index: React.FC = () => {
  const { getFeaturedManufactured, getFeaturedTrading } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<ManufacturedProduct | TradingProduct | null>(null);

  const featuredManufactured = getFeaturedManufactured();
  const featuredTrading = getFeaturedTrading();

  const capabilities = [
    {
      icon: Cpu,
      title: 'Advanced Manufacturing',
      description: 'State-of-the-art production facilities with precision engineering capabilities.'
    },
    {
      icon: Shield,
      title: 'Quality Assurance',
      description: 'ISO 9001 certified processes ensuring consistent, reliable products.'
    },
    {
      icon: Settings,
      title: 'Custom Solutions',
      description: 'Tailored products designed to meet your specific industrial requirements.'
    },
    {
      icon: Users,
      title: 'Technical Support',
      description: 'Expert team providing comprehensive pre and post-sales support.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-cyan-light blur-3xl" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Zap className="w-4 h-4 text-accent" />
              <span className="text-sm text-primary-foreground/90">Industry-Leading Electronics Solutions</span>
            </div>
            
            <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-6 animate-slide-up">
              Powering Industry with
              <span className="block text-accent">Precision Electronics</span>
            </h1>
            
            <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl animate-slide-up" style={{ animationDelay: '0.1s' }}>
              From custom-manufactured power controllers to a comprehensive range of industrial components, we deliver solutions that keep your operations running efficiently.
            </p>
            
            <div className="flex flex-wrap gap-4 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <Button asChild size="lg" className="btn-accent">
                <Link to="/trading-products">
                  View Trading Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20">
                <Link to="/manufactured-showcase">
                  View Manufactured Products
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-primary-foreground/60">
          <span className="text-xs uppercase tracking-wider">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wide">About Us</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2 mb-6">
                Trusted Partner in Industrial Electronics
              </h2>
              <p className="text-muted-foreground mb-6">
                With over two decades of experience, ElectroPro has established itself as a leading name in industrial electronics manufacturing and trading. We combine cutting-edge technology with deep industry expertise to deliver products that exceed expectations.
              </p>
              <p className="text-muted-foreground mb-8">
                Our dual focus on manufacturing and trading allows us to offer comprehensive solutions – from custom-engineered power systems to a vast inventory of quality components from global brands.
              </p>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl text-accent">25+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl text-accent">500+</div>
                  <div className="text-sm text-muted-foreground">Products</div>
                </div>
                <div className="text-center">
                  <div className="font-heading font-bold text-3xl text-accent">1000+</div>
                  <div className="text-sm text-muted-foreground">Clients Served</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800"
                  alt="Industrial electronics manufacturing"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-lg">
                <Award className="w-8 h-8 mb-2" />
                <div className="font-heading font-semibold">ISO 9001:2015</div>
                <div className="text-sm opacity-80">Certified Quality</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-sm font-medium text-accent uppercase tracking-wide">Why Choose Us</span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2 mb-4">
              Capabilities That Set Us Apart
            </h2>
            <p className="text-muted-foreground">
              We combine manufacturing excellence with trading expertise to deliver comprehensive industrial solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capabilities.map((cap, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border card-hover"
              >
                <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
                  <cap.icon className="w-6 h-6 text-accent-foreground" />
                </div>
                <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                  {cap.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Manufactured Products */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wide">Our Products</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2">
                Featured Manufactured Products
              </h2>
            </div>
            <Link
              to="/manufactured-showcase"
              className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium"
            >
              View All Products
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredManufactured.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
                linkTo="/manufactured-products"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Trading Products */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-12">
            <div>
              <span className="text-sm font-medium text-accent uppercase tracking-wide">Trading Division</span>
              <h2 className="font-heading font-bold text-3xl md:text-4xl text-foreground mt-2">
                Featured Trading Products
              </h2>
            </div>
            <Link
              to="/trading-products"
              className="inline-flex items-center gap-2 text-accent hover:gap-3 transition-all font-medium"
            >
              View All Products
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTrading.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onViewDetails={setSelectedProduct}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 gradient-hero">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-primary-foreground mb-4">
            Ready to Power Your Next Project?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Whether you need custom-manufactured electronics or quality trading components, our team is ready to help you find the perfect solution.
          </p>
          <Button asChild size="lg" className="btn-accent">
            <Link to="/contact">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
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

export default Index;
