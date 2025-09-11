import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Comment estimer la valeur de mon bien immobilier ?",
      answer: "Nous proposons une évaluation gratuite et professionnelle de votre bien. Notre estimation se base sur l'analyse du marché local, les caractéristiques de votre propriété, sa localisation et les transactions récentes dans votre quartier. Contactez-nous pour une estimation précise."
    },
    {
      question: "Quels documents sont nécessaires pour une location ?",
      answer: "Pour une location, vous aurez besoin de : votre pièce d'identité, justificatifs de revenus (bulletins de salaire, contrat de travail), attestation d'emploi, caution ou garant, et éventuellement une attestation bancaire. Nous vous accompagnons dans la constitution de votre dossier."
    },
    {
      question: "Combien de temps prend la vente d'un bien ?",
      answer: "Le délai de vente varie selon plusieurs facteurs : type de bien, localisation, prix, et conditions du marché. En moyenne, comptez entre 3 à 6 mois. Notre expertise du marché local nous permet d'optimiser ce délai grâce à un prix de vente adapté et une stratégie marketing efficace."
    },
    {
      question: "Quelles sont vos zones d'intervention ?",
      answer: "Nous intervenons dans toute la région d'Abidjan et ses environs : Jacqueville, Grand-Bassam, Bingerville, Anyama, Songon, et bien sûr tous les quartiers d'Abidjan. Notre connaissance approfondie de ces zones nous permet de vous offrir les meilleures opportunités."
    },
    {
      question: "Proposez-vous des facilités de paiement ?",
      answer: "Oui, nous proposons différentes solutions de financement et facilités de paiement adaptées à votre situation. Nous travaillons avec plusieurs partenaires financiers pour vous accompagner dans votre projet immobilier. Contactez-nous pour étudier les options disponibles."
    },
    {
      question: "Comment se déroule la construction clé en main ?",
      answer: "Notre service clé en main comprend : étude de faisabilité, conception des plans, obtention des autorisations, réalisation des travaux avec suivi de chantier, et livraison. Vous avez un interlocuteur unique qui coordonne toutes les étapes de votre projet."
    }
  ];

  const testimonials = [
    {
      name: "Marie Kouassi",
      role: "Propriétaire",
      content: "Excellente agence ! Property Immobilier a vendu ma villa en moins de 2 mois. Service professionnel et suivi impeccable. Je recommande vivement.",
      rating: 5
    },
    {
      name: "David Ouattara",
      role: "Investisseur",
      content: "Ils ont géré la construction de mon immeuble de A à Z. Respect des délais, qualité irréprochable et transparence totale. Très satisfait du résultat.",
      rating: 5
    },
    {
      name: "Sarah Diallo",
      role: "Locataire",
      content: "Grâce à Property Immobilier, j'ai trouvé l'appartement de mes rêves à Cocody. Équipe à l'écoute et processus de location très simple.",
      rating: 5
    }
  ];

  return (
    <section id="faq" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
            FAQ & Témoignages
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Questions fréquentes et
            <span className="block text-accent">avis clients</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* FAQ Section */}
          <div>
            <h4 className="text-2xl font-bold text-primary mb-8">Questions fréquentes</h4>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="border border-border rounded-lg px-6 bg-background shadow-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline hover:text-accent">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-6">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Testimonials Section */}
          <div>
            <h4 className="text-2xl font-bold text-primary mb-8">Témoignages clients</h4>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Quote className="w-8 h-8 text-accent" />
                      </div>
                      <div className="flex-1">
                        <p className="text-muted-foreground italic mb-4 leading-relaxed">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold text-primary">{testimonial.name}</div>
                            <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                          </div>
                          <div className="flex space-x-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-accent fill-current" />
                            ))}
                          </div>
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
    </section>
  );
};

export default FAQ;