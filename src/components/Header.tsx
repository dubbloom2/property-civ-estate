import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/50 transition-luxury">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 bg-gradient-luxury rounded-xl flex items-center justify-center transition-luxury group-hover:scale-110 group-hover:rotate-3">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-2xl font-bold gradient-text">Property Immobilier</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-lg font-medium transition-luxury hover:text-accent relative ${
                isActive('/') ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              Accueil
              {isActive('/') && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"></div>}
            </Link>
            <Link
              to="/a-propos"
              className={`text-lg font-medium transition-luxury hover:text-accent relative ${
                isActive('/a-propos') ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              À propos
              {isActive('/a-propos') && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"></div>}
            </Link>
            <Link
              to="/services"
              className={`text-lg font-medium transition-luxury hover:text-accent relative ${
                isActive('/services') ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              Services
              {isActive('/services') && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"></div>}
            </Link>
            <Link
              to="/faq"
              className={`text-lg font-medium transition-luxury hover:text-accent relative ${
                isActive('/faq') ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              FAQ
              {isActive('/faq') && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"></div>}
            </Link>
            <Link
              to="/contact"
              className={`text-lg font-medium transition-luxury hover:text-accent relative ${
                isActive('/contact') ? 'text-accent' : 'text-muted-foreground'
              }`}
            >
              Contact
              {isActive('/contact') && <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"></div>}
            </Link>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone size={18} className="text-accent" />
              <span className="font-medium">0749719196</span>
            </div>
            <Link to="/contact">
              <Button className="luxury-button text-white font-semibold">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-3 rounded-lg bg-primary/10 transition-luxury hover:bg-primary/20"
          >
            {isMenuOpen ? <X size={24} className="text-primary" /> : <Menu size={24} className="text-primary" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50 bg-background/95 backdrop-blur-md animate-fade-in">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className={`text-left py-3 px-2 text-lg font-medium transition-luxury hover:text-accent ${
                  isActive('/') ? 'text-accent' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Accueil
              </Link>
              <Link
                to="/a-propos"
                className={`text-left py-3 px-2 text-lg font-medium transition-luxury hover:text-accent ${
                  isActive('/a-propos') ? 'text-accent' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                À propos
              </Link>
              <Link
                to="/services"
                className={`text-left py-3 px-2 text-lg font-medium transition-luxury hover:text-accent ${
                  isActive('/services') ? 'text-accent' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/faq"
                className={`text-left py-3 px-2 text-lg font-medium transition-luxury hover:text-accent ${
                  isActive('/faq') ? 'text-accent' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className={`text-left py-3 px-2 text-lg font-medium transition-luxury hover:text-accent ${
                  isActive('/contact') ? 'text-accent' : 'text-muted-foreground'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-4 px-2">
                  <Phone size={18} className="text-accent" />
                  <span className="font-medium">0749719196</span>
                </div>
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                  <Button className="w-full luxury-button text-white font-semibold">
                    Contactez-nous
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;