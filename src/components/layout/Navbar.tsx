import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Trading Products', path: '/trading-products' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-lg gradient-hero flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-heading font-bold text-lg text-foreground">ElectroPro</span>
              <span className="block text-xs text-muted-foreground -mt-1">Industrial Solutions</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(link.path) ? 'text-accent' : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Manufactured Products Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium transition-colors hover:text-accent text-foreground">
                Manufactured Products
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="center" className="bg-card border border-border z-50">
                <DropdownMenuItem asChild>
                  <Link to="/manufactured-showcase" className="cursor-pointer">
                    Showcase
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/manufactured-products" className="cursor-pointer">
                    View All Products
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors hover:text-accent ${
                isActive('/contact') ? 'text-accent' : 'text-foreground'
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="btn-accent">
              <Link to="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-sm font-medium py-2 ${
                    isActive(link.path) ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <div className="py-2">
                <span className="text-sm font-medium text-muted-foreground">Manufactured Products</span>
                <div className="ml-4 mt-2 flex flex-col gap-2">
                  <Link
                    to="/manufactured-showcase"
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-foreground hover:text-accent"
                  >
                    Showcase
                  </Link>
                  <Link
                    to="/manufactured-products"
                    onClick={() => setIsOpen(false)}
                    className="text-sm text-foreground hover:text-accent"
                  >
                    View All Products
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium py-2 ${
                  isActive('/contact') ? 'text-accent' : 'text-foreground'
                }`}
              >
                Contact
              </Link>
              <Button asChild className="btn-accent mt-2">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Get a Quote</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
