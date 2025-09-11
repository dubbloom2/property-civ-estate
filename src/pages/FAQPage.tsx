import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, Award, Users, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQPage = () => {
  const faqs = [
    {
      question: "Comment Property Immobilier estime-t-elle la valeur de mon bien ?",
      answer: "Notre expertise unique combine l'analyse approfondie du marché local, l'étude des caractéristiques spécifiques de votre propriété, son positionnement géographique et l'analyse comparative des transactions récentes. Nous utilisons des outils professionnels et notre connaissance du terrain pour vous proposer une évaluation gratuite et précise qui optimise vos chances de vente au meilleur prix."
    },
    {
      question: "Quels documents sont nécessaires pour une location premium ?",
      answer: "Pour nos services de location haut de gamme, nous vous accompagnons dans la constitution d'un dossier complet : pièces d'identité valides, justificatifs de revenus récents (3 derniers bulletins de salaire, contrat de travail), attestation d'emploi, références bancaires, caution solidaire ou garantie locative, et si nécessaire, attestation d'assurance habitation. Notre équipe vous guide étape par étape pour optimiser votre dossier."
    },
    {
      question: "Combien de temps faut-il pour vendre un bien avec Property Immobilier ?",
      answer: "Grâce à notre expertise du marché et notre stratégie marketing premium, nous réduisons significativement les délais de vente. En moyenne, nos biens se vendent entre 2 à 4 mois, contre 6 à 12 mois pour le marché traditionnel. Cette performance s'explique par notre pricing stratégique, notre réseau qualifié d'acquéreurs potentiels et notre accompagnement personnalisé tout au long du processus."
    },
    {
      question: "Dans quelles zones Property Immobilier intervient-elle ?",
      answer: "Nous couvrons l'ensemble de la région du Grand Abidjan et ses zones d'extension stratégiques : tous les quartiers d'Abidjan (Cocody, Plateau, Marcory, Treichville, Adjamé, Yopougon, etc.), ainsi que Jacqueville, Grand-Bassam, Bingerville, Anyama et Songon. Notre connaissance approfondie de ces marchés locaux nous permet de vous offrir les meilleures opportunités selon vos critères."
    },
    {
      question: "Quelles solutions de financement proposez-vous ?",
      answer: "Nous avons développé un réseau de partenaires financiers de premier plan pour vous accompagner : facilités de paiement personnalisées, solutions de crédit immobilier optimisées, montages financiers innovants pour les investisseurs, et conseils en optimisation fiscale. Nos experts financiers étudient votre situation pour vous proposer les meilleures conditions du marché."
    },
    {
      question: "Comment se déroule votre service de construction clé en main ?",
      answer: "Notre approche clé en main vous garantit une expérience sans stress : étude de faisabilité complète, conception architecturale personnalisée, obtention de toutes les autorisations, coordination de tous les corps de métier, suivi de chantier quotidien avec reporting, respect strict des délais et budgets, et livraison avec garanties étendues. Vous avez un interlocuteur unique qui pilote l'intégralité de votre projet."
    },
    {
      question: "Quelles garanties offrez-vous sur vos prestations ?",
      answer: "Property Immobilier s'engage sur des garanties exceptionnelles : garantie satisfaction client ou remboursement, assurance responsabilité civile professionnelle renforcée, garantie décennale sur tous nos travaux de construction, service après-vente pendant 2 ans, et engagement de résultat sur nos prestations de vente (si votre bien ne se vend pas dans les délais convenus, nous révisons notre stratégie gratuitement)."
    },
    {
      question: "Comment puis-je suivre l'avancement de mon projet ?",
      answer: "Nous avons développé un système de suivi premium pour nos clients : espace client personnalisé en ligne, rapports d'avancement hebdomadaires, photos et vidéos de suivi de chantier, rendez-vous réguliers avec votre chef de projet dédié, hotline prioritaire 24/7, et application mobile pour suivre en temps réel l'évolution de votre dossier. La transparence totale est notre engagement."
    }
  ];

  const testimonials = [
    {
      name: "Marie-Claire Kouassi",
      role: "Propriétaire Villa Riviera Golf",
      content: "Property Immobilier a transformé mon projet de villa en une réalité qui dépasse toutes mes attentes. De la conception à la livraison, chaque détail a été pensé avec un raffinement exceptionnel. Le service client est tout simplement parfait.",
      rating: 5,
      project: "Construction villa 450m²",
      location: "Riviera Golf"
    },
    {
      name: "David Ouattara",
      role: "Investisseur & Entrepreneur",
      content: "En tant qu'investisseur expérimenté, j'ai rarement rencontré une agence aussi professionnelle. Property Immobilier a géré la construction de mon complexe immobilier avec une expertise remarquable. ROI dépassé, délais respectés, qualité irréprochable.",
      rating: 5,
      project: "Complexe résidentiel 15 logements",
      location: "Angré"
    },
    {
      name: "Sarah Diallo-Mbaye",
      role: "Cadre Dirigeante",
      content: "Grâce à Property Immobilier, j'ai trouvé l'appartement de mes rêves à Cocody en moins de 15 jours. Leur approche personnalisée et leur réseau exclusif font vraiment la différence. Je recommande vivement leurs services premium.",
      rating: 5,
      project: "Location appartement standing",
      location: "Cocody Les Deux Plateaux"
    },
    {
      name: "Jean-Baptiste Koné",
      role: "Dirigeant d'Entreprise",
      content: "La décoration et l'aménagement de nos bureaux par Property Immobilier ont créé un environnement de travail exceptionnel. Leur créativité et leur attention aux détails ont impressionné tous nos clients et partenaires.",
      rating: 5,
      project: "Aménagement bureaux 800m²",
      location: "Plateau"
    },
    {
      name: "Aminata Traoré",
      role: "Consultante Internationale",
      content: "Le service de gestion locative de Property Immobilier me permet de vivre sereinement à l'étranger. Rapports mensuels détaillés, maintenance préventive, locataires de qualité... Une gestion vraiment professionnelle de mon patrimoine.",
      rating: 5,
      project: "Gestion portfolio 5 biens",
      location: "Abidjan"
    },
    {
      name: "Dr. Fabrice Gbagbo",
      role: "Médecin Spécialiste",
      content: "L'achat de ma clinique s'est fait dans des conditions exceptionnelles grâce à Property Immobilier. Négociation experte, accompagnement juridique complet, et un suivi post-achat remarquable. Une référence dans le secteur.",
      rating: 5,
      project: "Achat local commercial 600m²",
      location: "Marcory"
    }
  ];

  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Clients Premium",
      description: "Satisfaction garantie"
    },
    {
      icon: Star,
      number: "98%",
      label: "Satisfaction",
      description: "Taux de recommandation"
    },
    {
      icon: Award,
      number: "6 ans",
      label: "Expertise",
      description: "Sur le marché ivoirien"
    },
    {
      icon: CheckCircle,
      number: "24/7",
      label: "Support",
      description: "Service client premium"
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
                <span className="gradient-text">Questions & Réponses</span>
                <span className="block text-primary">Expertise Immobilière</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
                Découvrez les réponses à vos questions et les témoignages de nos clients prestigieux 
                qui nous font confiance pour leurs projets immobiliers d'exception.
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

        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* FAQ Section */}
            <div className="animate-fade-in">
              <div className="mb-12">
                <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                  Questions Fréquentes
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  Tout savoir sur nos
                  <span className="block gradient-text">services premium</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Nos experts répondent aux questions les plus courantes de nos clients.
                </p>
              </div>
              
              <Accordion type="single" collapsible className="space-y-6">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="luxury-card rounded-2xl px-8 animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <AccordionTrigger className="text-left hover:no-underline hover:text-accent text-lg font-semibold py-6">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed pb-8 text-base">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>

            {/* Testimonials Section */}
            <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <div className="mb-12">
                <h2 className="text-sm font-semibold text-accent uppercase tracking-widest mb-4">
                  Témoignages Clients
                </h2>
                <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                  L'avis de nos
                  <span className="block gradient-text">clients d'exception</span>
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Découvrez les retours de nos clients sur leurs expériences avec Property Immobilier.
                </p>
              </div>
              
              <div className="space-y-8 max-h-[800px] overflow-y-auto pr-4">
                {testimonials.map((testimonial, index) => (
                  <Card 
                    key={index} 
                    className="luxury-card animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardContent className="p-8">
                      {/* Rating */}
                      <div className="flex space-x-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-accent fill-current" />
                        ))}
                      </div>
                      
                      {/* Quote */}
                      <div className="flex items-start space-x-4 mb-6">
                        <Quote className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                        <p className="text-lg text-muted-foreground italic leading-relaxed">
                          "{testimonial.content}"
                        </p>
                      </div>
                      
                      {/* Client Info */}
                      <div className="border-t border-border/50 pt-6">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="font-bold text-primary text-lg mb-1">{testimonial.name}</div>
                            <div className="text-accent font-medium mb-2">{testimonial.role}</div>
                          </div>
                        </div>
                        <div className="bg-accent/5 rounded-lg p-4 mt-4">
                          <div className="text-sm text-muted-foreground">
                            <strong>Projet :</strong> {testimonial.project}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            <strong>Localisation :</strong> {testimonial.location}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <section className="py-24 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-4xl mx-auto animate-fade-in">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                Une question spécifique ?
                <span className="block text-accent">Parlons-en ensemble</span>
              </h2>
              <p className="text-xl mb-12 text-white/90 leading-relaxed">
                Nos experts sont disponibles pour répondre à toutes vos questions 
                et vous accompagner dans votre projet immobilier.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <Link to="/contact">
                  <Button 
                    size="lg"
                    className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold text-xl px-10 py-6 h-auto"
                  >
                    Poser une question
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

export default FAQPage;