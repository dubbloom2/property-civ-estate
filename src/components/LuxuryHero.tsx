import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Star, Play } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-property.jpg";

const LuxuryHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat parallax-bg scale-110"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 gradient-hero"></div>
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-5xl mx-auto page-transition">
          {/* Badge */}
          <div className="inline-flex items-center space-x-3 luxury-card backdrop-blur-md rounded-full px-6 py-3 mb-8 border border-accent/30">
            <Star className="w-5 h-5 text-accent" fill="currentColor" />
            <span className="text-sm font-semibold text-primary">Agent immobilier agréé premium</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight animate-fade-in-up">
            L'excellence immobilière
            <span className="block gradient-text text-6xl md:text-8xl lg:text-9xl">à votre service</span>
          </h1>

          {/* Promise */}
          <p className="text-xl md:text-3xl mb-12 text-white/90 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Gestion • Achat • Location • Vente • Plans • Construction • Décoration
            <span className="block mt-4 text-lg md:text-xl text-accent font-medium">
              Votre vision, notre expertise
            </span>
          </p>

          {/* Location */}
          <div className="flex items-center justify-center space-x-3 mb-12 text-white/80 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <MapPin className="w-6 h-6 text-accent" />
            <span className="text-xl font-medium">Abidjan • Angré Carrefour Les Oscars</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <Link to="/contact">
              <Button 
                size="lg"
                className="luxury-button text-white text-xl px-10 py-6 h-auto group"
              >
                Découvrir nos services
                <ArrowRight className="ml-3 w-6 h-6 transition-luxury group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/a-propos">
              <Button 
                variant="outline"
                size="lg"
                className="border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm text-xl px-10 py-6 h-auto group transition-luxury"
              >
                <Play className="mr-3 w-6 h-6 transition-luxury group-hover:scale-110" />
                Notre histoire
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-white/20 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 transition-luxury group-hover:scale-110">500+</div>
              <div className="text-white/80 text-lg">Clients prestigieux</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 transition-luxury group-hover:scale-110">6</div>
              <div className="text-white/80 text-lg">Zones d'excellence</div>
            </div>
            <div className="text-center group">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 transition-luxury group-hover:scale-110">24/7</div>
              <div className="text-white/80 text-lg">Service premium</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-accent/70 rounded-full flex justify-center">
          <div className="w-1.5 h-4 bg-accent/80 rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryHero;