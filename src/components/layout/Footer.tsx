import React from 'react';
import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent flex items-center justify-center">
                <Zap className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <span className="font-heading font-bold text-lg">ElectroPro</span>
                <span className="block text-xs text-primary-foreground/70 -mt-1">Industrial Solutions</span>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Leading manufacturer and trader of industrial electronics, providing innovative solutions for automation, control, and power management.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-accent transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/manufactured-showcase" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Our Products
                </Link>
              </li>
              <li>
                <Link to="/trading-products" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Trading Products
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/manufactured-products" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Power Electronics
                </Link>
              </li>
              <li>
                <Link to="/manufactured-products" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Motion Control
                </Link>
              </li>
              <li>
                <Link to="/manufactured-products" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Industrial IoT
                </Link>
              </li>
              <li>
                <Link to="/trading-products" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  Components & Parts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  123 Industrial Avenue, Tech Park, City 12345
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/80">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <span className="text-sm text-primary-foreground/80">info@electropro.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-primary-foreground/60">
            © {new Date().getFullYear()} ElectroPro Industrial Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-primary-foreground/60 hover:text-accent transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
