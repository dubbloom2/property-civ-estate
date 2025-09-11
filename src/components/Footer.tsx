import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center transition-luxury group-hover:scale-110">
                <span className="text-accent-foreground font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold">Property Immobilier</span>
            </Link>
            <p className="text-primary-foreground/80 leading-relaxed">
              Votre partenaire immobilier de confiance en Côte d'Ivoire. 
              Agent agréé spécialisé dans l'immobilier de luxe et les projets d'exception.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-luxury group">
                <Facebook className="w-6 h-6 group-hover:scale-110 transition-luxury" />
              </a>
              <a href="#" className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-luxury group">
                <Instagram className="w-6 h-6 group-hover:scale-110 transition-luxury" />
              </a>
              <a href="#" className="w-12 h-12 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-luxury group">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-luxury" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-accent">Navigation</h4>
            <nav className="flex flex-col space-y-3">
              <Link
                to="/"
                className="text-left text-primary-foreground/80 hover:text-accent transition-luxury text-lg"
              >
                Accueil
              </Link>
              <Link
                to="/a-propos"
                className="text-left text-primary-foreground/80 hover:text-accent transition-luxury text-lg"
              >
                À propos
              </Link>
              <Link
                to="/services"
                className="text-left text-primary-foreground/80 hover:text-accent transition-luxury text-lg"
              >
                Services
              </Link>
              <Link
                to="/faq"
                className="text-left text-primary-foreground/80 hover:text-accent transition-luxury text-lg"
              >
                FAQ
              </Link>
              <Link
                to="/contact"
                className="text-left text-primary-foreground/80 hover:text-accent transition-luxury text-lg"
              >
                Contact
              </Link>
            </nav>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Nos Services</h4>
            <div className="flex flex-col space-y-2 text-primary-foreground/80">
              <span>Gestion immobilière</span>
              <span>Achat et vente</span>
              <span>Location</span>
              <span>Plans et devis</span>
              <span>Construction</span>
              <span>Décoration</span>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <div className="text-primary-foreground/80">
                  <p>Angré Carrefour Les Oscars</p>
                  <p>Cocody, Abidjan</p>
                  <p>Côte d'Ivoire</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">0749719196</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/80">property2220@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Zones desservies */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <h4 className="text-lg font-semibold text-accent mb-4">Zones desservies</h4>
          <div className="flex flex-wrap gap-3">
            {["Jacqueville", "Grand-Bassam", "Bingerville", "Anyama", "Songon", "Abidjan"].map((zone) => (
              <span 
                key={zone}
                className="bg-primary-foreground/10 text-primary-foreground/80 px-3 py-1 rounded-full text-sm"
              >
                {zone}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Property Immobilier. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Mentions légales
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;