import { Card, CardContent } from "@/components/ui/card";
import { Shield, Eye, Award, Users } from "lucide-react";
import teamImage from "@/assets/team-about.jpg";

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Confiance",
      description: "Nous bâtissons des relations durables basées sur la transparence et l'intégrité."
    },
    {
      icon: Eye,
      title: "Transparence",
      description: "Chaque étape de votre projet est clairement expliquée et documentée."
    },
    {
      icon: Award,
      title: "Expertise",
      description: "Notre équipe possède une connaissance approfondie du marché ivoirien."
    },
    {
      icon: Users,
      title: "Accessibilité",
      description: "Nous sommes toujours disponibles pour répondre à vos questions et besoins."
    }
  ];

  return (
    <section id="apropos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={teamImage}
              alt="Équipe Property Immobilier"
              className="rounded-2xl shadow-luxury w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-xl shadow-gold">
              <div className="text-2xl font-bold">Agent agréé</div>
              <div className="text-sm opacity-90">Côte d'Ivoire</div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                À propos de nous
              </h2>
              <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6 leading-tight">
                Notre Mission
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Agent immobilier agréé basé à <strong>Abidjan (Angré Carrefour Les Oscars)</strong>, 
                Property Immobilier accompagne ses clients dans tous leurs projets immobiliers en Côte d'Ivoire.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nous mettons notre expertise et notre connaissance approfondie du marché local au service 
                de vos ambitions immobilières, que vous soyez particulier ou professionnel.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              {values.map((value, index) => (
                <Card key={index} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-2">{value.title}</h4>
                        <p className="text-sm text-muted-foreground">{value.description}</p>
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

export default About;