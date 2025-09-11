import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building, 
  HandCoins, 
  Key, 
  FileText, 
  Hammer, 
  Palette,
  ArrowRight 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesImage from "@/assets/services-villa.jpg";

const Services = () => {
  const services = [
    {
      icon: Building,
      title: "Gestion immobilière",
      description: "Administration complète de vos biens : gestion locative, maintenance, suivi des paiements et relation avec les locataires.",
      features: ["Gestion locative", "Maintenance", "Suivi comptable"]
    },
    {
      icon: HandCoins,
      title: "Achat et vente",
      description: "Accompagnement personnalisé dans vos transactions immobilières avec évaluation professionnelle et négociation optimisée.",
      features: ["Évaluation gratuite", "Négociation", "Accompagnement juridique"]
    },
    {
      icon: Key,
      title: "Location",
      description: "Solutions de location adaptées à vos besoins avec sélection rigoureuse des locataires et contrats sécurisés.",
      features: ["Recherche ciblée", "Vérification locataires", "Contrats sécurisés"]
    },
    {
      icon: FileText,
      title: "Plans et devis",
      description: "Conception architecturale et établissement de devis détaillés pour tous vos projets de construction.",
      features: ["Plans architecturaux", "Devis détaillés", "Suivi de projet"]
    },
    {
      icon: Hammer,
      title: "Construction",
      description: "Réalisation clé en main de vos projets de construction avec des artisans qualifiés et matériaux de qualité.",
      features: ["Construction clé en main", "Artisans qualifiés", "Suivi de chantier"]
    },
    {
      icon: Palette,
      title: "Décoration intérieure & extérieure",
      description: "Aménagement et décoration sur mesure pour valoriser vos espaces intérieurs et extérieurs.",
      features: ["Design personnalisé", "Aménagement", "Conseils déco"]
    }
  ];

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
            Nos Services
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Solutions complètes pour
            <span className="block text-accent">vos projets immobiliers</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            De la conception à la réalisation, nous vous accompagnons à chaque étape 
            de votre parcours immobilier en Côte d'Ivoire.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-card hover:shadow-luxury transition-all duration-300 group cursor-pointer"
              onClick={scrollToContact}
            >
              <CardHeader className="pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors" />
                </div>
                <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex items-center text-accent text-sm font-medium pt-2 group-hover:translate-x-1 transition-transform">
                  En savoir plus
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="relative rounded-3xl overflow-hidden shadow-luxury">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${servicesImage})` }}
          >
            <div className="absolute inset-0 bg-primary/80"></div>
          </div>
          
          <div className="relative z-10 px-8 py-16 md:py-20 text-center text-white">
            <h4 className="text-2xl md:text-3xl font-bold mb-4">
              Prêt à démarrer votre projet ?
            </h4>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et découvrons 
              ensemble comment nous pouvons réaliser vos ambitions immobilières.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold text-lg px-8 py-4 h-auto"
            >
              Demander un devis gratuit
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;