import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, Eye, Award, Users, MapPin, Clock, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import teamImage from "@/assets/team-about.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Confiance",
      description: "Nous bâtissons des relations durables basées sur la transparence absolue et l'intégrité professionnelle.",
      color: "bg-blue-500/20 text-blue-600"
    },
    {
      icon: Eye,
      title: "Transparence",
      description: "Chaque étape de votre projet est clairement expliquée avec une communication ouverte et honnête.",
      color: "bg-green-500/20 text-green-600"
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Notre équipe possède une connaissance approfondie et reconnue du marché immobilier ivoirien.",
      color: "bg-purple-500/20 text-purple-600"
    },
    {
      icon: Users,
      title: "Accessibilité",
      description: "Un service client premium disponible 24/7 pour répondre à tous vos besoins immobiliers.",
      color: "bg-orange-500/20 text-orange-600"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Création de l'agence",
      description: "Fondation de Property Immobilier avec la vision de révolutionner l'immobilier en Côte d'Ivoire."
    },
    {
      year: "2020",
      title: "Certification premium",
      description: "Obtention de l'agrément officiel et reconnaissance en tant qu'expert du marché immobilier."
    },
    {
      year: "2022",
      title: "Expansion régionale",
      description: "Extension de nos services dans 6 zones stratégiques autour d'Abidjan."
    },
    {
      year: "2024",
      title: "Excellence reconnue",
      description: "Plus de 500 clients satisfaits et une expertise reconnue dans l'immobilier de luxe."
    }
  ];

  return (
    <div className="min-h-screen bg-background page-transition">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center animate-fade-in">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
                <span className="gradient-text">Notre Histoire,</span>
                <span className="block text-primary">Votre Réussite</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                Découvrez l'histoire de Property Immobilier, votre partenaire d'excellence 
                pour tous vos projets immobiliers en Côte d'Ivoire.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-fade-in">
                <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                  Notre Mission
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                  Excellence et Innovation
                  <span className="block gradient-text">au service de vos projets</span>
                </h3>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-primary">Agent immobilier agréé</strong> basé à 
                    <strong className="text-accent"> Abidjan (Angré Carrefour Les Oscars)</strong>, 
                    Property Immobilier s'est imposé comme la référence de l'immobilier premium en Côte d'Ivoire.
                  </p>
                  <p>
                    Nous accompagnons nos clients avec une expertise reconnue et un service personnalisé 
                    qui transforme chaque projet immobilier en succès garanti.
                  </p>
                  <p>
                    Notre engagement ? Vous offrir une expérience immobilière d'exception, 
                    alliant savoir-faire traditionnel et innovations technologiques.
                  </p>
                </div>

                {/* Contact Info */}
                <div className="grid md:grid-cols-2 gap-6 mt-12">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Localisation</div>
                      <div className="text-sm text-muted-foreground">Angré Carrefour Les Oscars</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary">Contact direct</div>
                      <div className="text-sm text-muted-foreground">0749719196</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative animate-fade-in" style={{ animationDelay: '0.3s' }}>
                <img
                  src={teamImage}
                  alt="Équipe Property Immobilier"
                  className="rounded-3xl shadow-luxury w-full h-auto"
                />
                <div className="absolute -bottom-8 -left-8 luxury-card p-8">
                  <div className="text-3xl font-bold gradient-text mb-2">6 ans</div>
                  <div className="text-sm text-muted-foreground">d'excellence</div>
                </div>
                <div className="absolute -top-8 -right-8 luxury-card p-6">
                  <div className="text-2xl font-bold text-accent mb-2">Certifié</div>
                  <div className="text-xs text-muted-foreground">Agent agréé</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Nos Valeurs
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Les piliers de notre
                <span className="block gradient-text">excellence</span>
              </h3>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Nos valeurs fondamentales guident chaque action et décision, 
                garantissant un service d'exception à chaque client.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card 
                  key={index} 
                  className="luxury-card text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className={`w-20 h-20 mx-auto rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-luxury ${value.color}`}>
                      <value.icon className="w-10 h-10" />
                    </div>
                    <h4 className="text-2xl font-bold text-primary mb-4 group-hover:text-accent transition-luxury">
                      {value.title}
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Notre Parcours
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Une croissance
                <span className="block gradient-text">exceptionnelle</span>
              </h3>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent/30"></div>
                
                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div 
                      key={index} 
                      className="relative flex items-start space-x-8 animate-fade-in"
                      style={{ animationDelay: `${index * 0.2}s` }}
                    >
                      {/* Timeline Dot */}
                      <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-gold">
                        {milestone.year.slice(-2)}
                      </div>
                      
                      {/* Content */}
                      <Card className="luxury-card flex-1">
                        <CardContent className="p-8">
                          <div className="text-sm font-semibold text-accent uppercase tracking-wide mb-2">
                            {milestone.year}
                          </div>
                          <h4 className="text-2xl font-bold text-primary mb-4">
                            {milestone.title}
                          </h4>
                          <p className="text-muted-foreground leading-relaxed">
                            {milestone.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Rejoignez nos
                <span className="block text-accent">clients d'exception</span>
              </h2>
              <p className="text-xl mb-12 text-white/90 leading-relaxed">
                Découvrez pourquoi plus de 500 clients nous font confiance 
                pour leurs projets immobiliers les plus ambitieux.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold text-xl px-10 py-6 h-auto"
                  >
                    Planifier un rendez-vous
                  </Button>
                </Link>
                <Link to="/services">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/40 text-white hover:bg-white/10 text-xl px-10 py-6 h-auto"
                  >
                    Découvrir nos services
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

export default About;