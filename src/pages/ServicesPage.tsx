import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  HandCoins, 
  Key, 
  FileText, 
  Hammer, 
  Palette,
  ArrowRight,
  CheckCircle,
  Star,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import servicesImage from "@/assets/services-villa.jpg";

const Services = () => {
  const services = [
    {
      id: "gestion",
      icon: Building,
      title: "Gestion immobilière premium",
      description: "Administration complète et transparente de vos biens immobiliers avec un service de qualité exceptionnelle.",
      image: servicesImage,
      features: [
        "Gestion locative intégrale",
        "Maintenance préventive et curative",
        "Suivi comptable détaillé",
        "Relation client privilégiée",
        "Rapports mensuels personnalisés",
        "Optimisation des revenus locatifs"
      ],
      benefits: [
        "Rentabilité maximisée",
        "Tranquillité d'esprit totale",
        "Valorisation du patrimoine",
        "Service client 24/7"
      ]
    },
    {
      id: "achat-vente",
      icon: HandCoins,
      title: "Achat et vente d'exception",
      description: "Accompagnement personnalisé dans vos transactions immobilières avec expertise du marché et négociation optimisée.",
      image: servicesImage,
      features: [
        "Évaluation gratuite professionnelle",
        "Marketing digital premium",
        "Négociation d'expert",
        "Accompagnement juridique complet",
        "Visites VIP organisées",
        "Suivi post-transaction"
      ],
      benefits: [
        "Prix de vente optimisé",
        "Délais raccourcis",
        "Sécurité juridique totale",
        "Process simplifié"
      ]
    },
    {
      id: "location",
      icon: Key,
      title: "Solutions locatives de luxe",
      description: "Services de location haut de gamme avec sélection rigoureuse des locataires et gestion complète des contrats.",
      image: servicesImage,
      features: [
        "Recherche ciblée et qualifiée",
        "Vérification approfondie des candidats",
        "Contrats sécurisés sur mesure",
        "Gestion des états des lieux",
        "Assurance loyers impayés",
        "Médiation en cas de conflit"
      ],
      benefits: [
        "Locataires de qualité",
        "Risques minimisés",
        "Revenus garantis",
        "Gestion sans stress"
      ]
    },
    {
      id: "plans",
      icon: FileText,
      title: "Architecture et conception",
      description: "Conception architecturale sur mesure et établissement de devis détaillés pour tous vos projets de construction.",
      image: servicesImage,
      features: [
        "Plans architecturaux personnalisés",
        "Devis détaillés et transparents",
        "Études de faisabilité",
        "Conseils en optimisation",
        "Suivi de projet intégral",
        "Coordination des artisans"
      ],
      benefits: [
        "Design unique",
        "Budget maîtrisé",
        "Délais respectés",
        "Qualité garantie"
      ]
    },
    {
      id: "construction",
      icon: Hammer,
      title: "Construction clé en main",
      description: "Réalisation complète de vos projets de construction avec des artisans qualifiés et matériaux premium.",
      image: servicesImage,
      features: [
        "Construction clé en main",
        "Artisans certifiés et qualifiés",
        "Matériaux haut de gamme",
        "Suivi de chantier quotidien",
        "Respect des normes et délais",
        "Garanties étendues"
      ],
      benefits: [
        "Qualité exceptionnelle",
        "Finitions impeccables",
        "Garantie décennale",
        "Interlocuteur unique"
      ]
    },
    {
      id: "decoration",
      icon: Palette,
      title: "Décoration et aménagement",
      description: "Aménagement et décoration sur mesure pour créer des espaces d'exception qui reflètent votre personnalité.",
      image: servicesImage,
      features: [
        "Design personnalisé exclusif",
        "Aménagement intérieur et extérieur",
        "Sélection mobilier haut de gamme",
        "Conseils déco professionnels",
        "Coordination des fournisseurs",
        "Livraison clé en main"
      ],
      benefits: [
        "Style unique",
        "Valeur ajoutée",
        "Confort optimal",
        "Satisfaction garantie"
      ]
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clients satisfaits",
      description: "Particuliers et professionnels"
    },
    {
      icon: Building,
      number: "1000+",
      label: "Biens gérés",
      description: "Portfolio diversifié"
    },
    {
      icon: Star,
      number: "98%",
      label: "Satisfaction client",
      description: "Taux de recommandation"
    },
    {
      icon: CheckCircle,
      number: "300+",
      label: "Projets réalisés",
      description: "Construction et rénovation"
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
                <span className="gradient-text">Services Premium</span>
                <span className="block text-primary">Immobilier de Luxe</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
                Découvrez notre gamme complète de services haut de gamme, 
                conçus pour transformer vos projets immobiliers en succès exceptionnels.
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div 
                    key={index} 
                    className="text-center animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                    <div className="text-sm font-semibold text-accent mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Detailed */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <div className="space-y-32">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  id={service.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                    <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                      <div className="w-16 h-16 bg-gradient-luxury rounded-2xl flex items-center justify-center mb-6">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      
                      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                        <span className="text-primary">{service.title.split(' ')[0]} {service.title.split(' ')[1]}</span>
                        <span className="block gradient-text">{service.title.split(' ').slice(2).join(' ')}</span>
                      </h2>
                      
                      <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="mb-8">
                        <h3 className="text-xl font-semibold text-primary mb-4">Nos prestations :</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                          {service.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center space-x-3">
                              <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                              <span className="text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Benefits */}
                      <Card className="luxury-card mb-8">
                        <CardContent className="p-6">
                          <h4 className="text-lg font-semibold text-primary mb-4">Vos avantages :</h4>
                          <div className="grid grid-cols-2 gap-4">
                            {service.benefits.map((benefit, idx) => (
                              <div key={idx} className="flex items-center space-x-2">
                                <Star className="w-4 h-4 text-accent fill-current" />
                                <span className="text-sm text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>

                      <Link to="/contact">
                        <Button size="lg" className="luxury-button text-white">
                          Demander un devis gratuit
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                      </Link>
                    </div>

                    <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-3xl shadow-luxury w-full h-auto"
                      />
                      <div className="absolute -bottom-6 -right-6 luxury-card p-6">
                        <div className="text-2xl font-bold text-accent mb-2">Premium</div>
                        <div className="text-sm text-muted-foreground">Service garanti</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                Notre Méthode
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Un processus
                <span className="block gradient-text">d'excellence éprouvé</span>
              </h3>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {[
                {
                  step: "01",
                  title: "Consultation",
                  description: "Analyse approfondie de vos besoins et objectifs"
                },
                {
                  step: "02", 
                  title: "Stratégie",
                  description: "Élaboration d'une stratégie personnalisée sur mesure"
                },
                {
                  step: "03",
                  title: "Exécution",
                  description: "Mise en œuvre avec suivi quotidien et reporting"
                },
                {
                  step: "04",
                  title: "Livraison",
                  description: "Finalisation et accompagnement post-livraison"
                }
              ].map((process, index) => (
                <Card 
                  key={index} 
                  className="luxury-card text-center animate-fade-in"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                      {process.step}
                    </div>
                    <h4 className="text-xl font-bold text-primary mb-4">{process.title}</h4>
                    <p className="text-muted-foreground">{process.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Transformons ensemble
                <span className="block text-accent">votre vision en réalité</span>
              </h2>
              <p className="text-xl mb-12 text-white/90 leading-relaxed">
                Contactez nos experts dès aujourd'hui pour une consultation gratuite 
                et découvrons comment nous pouvons vous accompagner.
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
                <Link to="/faq">
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-2 border-white/40 text-white hover:bg-white/10 text-xl px-10 py-6 h-auto"
                  >
                    Questions fréquentes
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

export default Services;