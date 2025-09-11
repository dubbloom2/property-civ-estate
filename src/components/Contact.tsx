import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  Send,
  MessageSquare
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adresse",
      content: "Angré Carrefour Les Oscars, Cocody, Abidjan, Côte d'Ivoire",
      details: "Zones desservies : Jacqueville, Grand-Bassam, Bingerville, Anyama, Songon, Abidjan"
    },
    {
      icon: Phone,
      title: "Téléphone",
      content: "0749719196",
      details: "Disponible 7j/7 de 8h à 20h"
    },
    {
      icon: Mail,
      title: "Email",
      content: "property2220@gmail.com",
      details: "Réponse garantie sous 24h"
    },
    {
      icon: Clock,
      title: "Horaires",
      content: "Lun - Sam : 8h - 19h",
      details: "Dimanche : 9h - 17h"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
            Contact
          </h2>
          <h3 className="text-3xl md:text-5xl font-bold text-primary mb-6 leading-tight">
            Parlons de votre
            <span className="block text-accent">projet immobilier</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Notre équipe d'experts est à votre disposition pour répondre à toutes vos questions 
            et vous accompagner dans vos projets immobiliers.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="border-0 shadow-card hover:shadow-luxury transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                      <p className="text-foreground font-medium mb-1">{info.content}</p>
                      <p className="text-sm text-muted-foreground">{info.details}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <div className="space-y-4 pt-6">
              <h4 className="font-semibold text-primary mb-4">Actions rapides</h4>
              
              <a
                href="https://forms.gle/jWZKQqkiurj1iori9"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold"
                  size="lg"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Formulaire rapide 1
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>

              <a
                href="https://forms.gle/6ZTHbcqo2z1NAvtW8"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button 
                  variant="outline"
                  className="w-full border-accent text-accent hover:bg-accent/10"
                  size="lg"
                >
                  <MessageSquare className="w-4 h-4 mr-2" />
                  Formulaire rapide 2
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-luxury">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Envoyez-nous un message</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nom complet *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Votre nom"
                        className="focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="votre@email.com"
                        className="focus:ring-accent focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Téléphone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="0749719196"
                        className="focus:ring-accent focus:border-accent"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Sujet *</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="Objet de votre demande"
                        className="focus:ring-accent focus:border-accent"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Décrivez votre projet ou votre demande..."
                      className="min-h-[120px] focus:ring-accent focus:border-accent"
                    />
                  </div>

                  <Button 
                    type="submit"
                    size="lg"
                    className="w-full md:w-auto bg-accent text-accent-foreground hover:bg-accent/90 shadow-gold text-lg px-8 py-4 h-auto"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;