import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-accent rounded-md flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold">Property Immobilier</span>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed">
              Votre partenaire immobilier de confiance en Côte d'Ivoire. 
              Agent agréé spécialisé dans tous vos projets immobiliers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent/20 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-accent">Navigation</h4>
            <nav className="flex flex-col space-y-2">
              <button
                onClick={() => scrollToSection("accueil")}
                className="text-left text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Accueil
              </button>
              <button
                onClick={() => scrollToSection("apropos")}
                className="text-left text-primary-foreground/80 hover:text-accent transition-colors"
              >
                À propos
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-left text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="text-left text-primary-foreground/80 hover:text-accent transition-colors"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Contact
              </button>
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