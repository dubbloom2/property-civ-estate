import Header from "@/components/Header";
import LuxuryHero from "@/components/LuxuryHero";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, HandCoins, Key, FileText, Hammer, Palette, ArrowRight, Star, Award } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import servicesImage from "@/assets/services-villa.jpg";

const Home = () => {
  const services = [
    {
      icon: Building,
      title: "Gestion immobilière",
      description: "Administration complète de vos biens avec expertise et transparence totale.",
      href: "/services#gestion"
    },
    {
      icon: HandCoins,
      title: "Achat et vente",
      description: "Transactions sécurisées avec accompagnement personnalisé premium.",
      href: "/services#achat-vente"
    },
    {
      icon: Key,
      title: "Location",
      description: "Solutions locatives haut de gamme adaptées à vos exigences.",
      href: "/services#location"
    },
    {
      icon: FileText,
      title: "Plans et devis",
      description: "Conception architecturale d'exception pour vos projets.",
      href: "/services#plans"
    },
    {
      icon: Hammer,
      title: "Construction",
      description: "Réalisation clé en main avec les meilleurs artisans.",
      href: "/services#construction"
    },
    {
      icon: Palette,
      title: "Décoration",
      description: "Aménagement sur mesure pour des espaces d'exception.",
      href: "/services#decoration"
    }
  ];

  const testimonials = [
    {
      name: "Marie Kouassi",
      role: "Propriétaire Villa Cocody",
      content: "Un service d'exception ! Property Immobilier a transformé ma vision en réalité avec un professionnalisme remarquable.",
      rating: 5
    },
    {
      name: "David Ouattara",
      role: "Investisseur Immobilier",
      content: "L'excellence à l'état pur. Chaque étape de mon projet a été gérée avec une expertise incomparable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <LuxuryHero />
        
        {/* Services Preview */}
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-20 animate-fade-in">
              <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Nos Expertises
              </h2>
              <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                <span className="gradient-text">Services premium</span>
                <span className="block text-primary">pour l'immobilier de luxe</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Découvrez notre gamme complète de services haut de gamme, 
                conçus pour répondre aux exigences les plus élevées.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {services.map((service, index) => (
                <Link key={index} to={service.href}>
                  <Card className="luxury-card group cursor-pointer h-full">
                    <CardContent className="p-8">
                      <div className="w-20 h-20 bg-gradient-luxury rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-luxury">
                        <service.icon className="w-10 h-10 text-white" />
                      </div>
                      <h4 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-luxury">
                        {service.title}
                      </h4>
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {service.description}
                      </p>
                      <div className="flex items-center text-accent font-semibold group-hover:translate-x-2 transition-luxury">
                        Découvrir
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link to="/services">
                <Button size="lg" className="luxury-button text-white text-lg px-8 py-4">
                  Voir tous nos services
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                  Pourquoi nous choisir
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  L'excellence immobilière
                  <span className="block gradient-text">redéfinie</span>
                </h3>
                <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                  Avec Property Immobilier, bénéficiez d'une expertise reconnue et d'un service 
                  personnalisé qui transforme vos projets immobiliers en succès garantis.
                </p>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-2">Expertise certifiée</h4>
                      <p className="text-muted-foreground">Agent immobilier agréé avec une connaissance approfondie du marché ivoirien.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Star className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-primary mb-2">Service premium</h4>
                      <p className="text-muted-foreground">Accompagnement personnalisé et suivi de qualité pour chaque client.</p>
                    </div>
                  </div>
                </div>

                <Link to="/a-propos">
                  <Button size="lg" className="luxury-button text-white">
                    Découvrir notre histoire
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img
                  src={servicesImage}
                  alt="Villa de luxe Property Immobilier"
                  className="rounded-3xl shadow-luxury w-full h-auto"
                />
                <div className="absolute -bottom-8 -right-8 luxury-card p-6">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Projets réalisés</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Témoignages
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                L'avis de nos
                <span className="block gradient-text">clients prestigieux</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="luxury-card animate-fade-in" style={{ animationDelay: `${index * 0.2}s` }}>
                  <CardContent className="p-8">
                    <div className="flex space-x-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-lg text-muted-foreground italic mb-6 leading-relaxed">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-bold text-primary text-lg">{testimonial.name}</div>
                      <div className="text-accent font-medium">{testimonial.role}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link to="/faq">
                <Button variant="outline" size="lg" className="border-accent text-accent hover:bg-accent/10">
                  Voir tous les témoignages
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Prêt à réaliser votre
                <span className="block text-accent">projet immobilier de rêve ?</span>
              </h2>
              <p className="text-xl mb-12 text-white/90 leading-relaxed">
                Contactez-nous dès aujourd'hui pour une consultation personnalisée et découvrons 
                ensemble comment transformer votre vision en réalité.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold text-xl px-10 py-6 h-auto"
                  >
                    Consultation gratuite
                    <ArrowRight className="ml-3 w-6 h-6" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/40 text-white hover:bg-white/10 text-xl px-10 py-6 h-auto"
                  >
                    Nos réalisations
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;