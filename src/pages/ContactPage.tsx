import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  Send,
  MessageSquare,
  Award,
  Shield,
  Star,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    serviceType: "",
    budget: "",
    timeline: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message envoyé avec succès !",
      description: "Notre équipe vous contactera dans les 2 heures ouvrées.",
    });
    setFormData({ 
      name: "", 
      email: "", 
      phone: "", 
      subject: "", 
      serviceType: "",
      budget: "",
      timeline: "",
      message: "" 
    });
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
      title: "Adresse Premium",
      content: "Angré Carrefour Les Oscars, Cocody, Abidjan",
      details: "Côte d'Ivoire",
      extra: "Zones desservies : Jacqueville, Grand-Bassam, Bingerville, Anyama, Songon, Abidjan"
    },
    {
      icon: Phone,
      title: "Contact Direct",
      content: "0749719196",
      details: "Ligne prioritaire clients",
      extra: "Disponible 7j/7 de 8h à 20h"
    },
    {
      icon: Mail,
      title: "Email Professionnel",
      content: "property2220@gmail.com",
      details: "Support client premium",
      extra: "Réponse garantie sous 2h en semaine"
    },
    {
      icon: Clock,
      title: "Horaires d'Excellence",
      content: "Lun - Sam : 8h - 19h",
      details: "Dimanche : 9h - 17h",
      extra: "Rendez-vous sur mesure disponibles"
    }
  ];

  const guarantees = [
    {
      icon: Award,
      title: "Expertise Certifiée",
      description: "Agent immobilier agréé avec 6 ans d'expérience"
    },
    {
      icon: Shield,
      title: "Sécurité Totale",
      description: "Transactions sécurisées et assurance professionnelle"
    },
    {
      icon: Star,
      title: "Service Premium",
      description: "Accompagnement personnalisé et suivi privilégié"
    },
    {
      icon: CheckCircle,
      title: "Satisfaction Garantie",
      description: "98% de clients satisfaits et recommandations"
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
                <span className="gradient-text">Contactez</span>
                <span className="block text-primary">nos Experts</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed mb-12">
                Notre équipe d'experts est à votre disposition pour transformer 
                vos projets immobiliers en succès garantis.
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">2h</div>
                  <div className="text-sm text-muted-foreground">Délai de réponse</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                  <div className="text-sm text-muted-foreground">Support disponible</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">500+</div>
                  <div className="text-sm text-muted-foreground">Clients satisfaits</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">98%</div>
                  <div className="text-sm text-muted-foreground">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="container mx-auto px-4 py-24">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-8 animate-fade-in">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Informations de Contact</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Plusieurs moyens de nous joindre pour une réponse rapide et personnalisée.
                </p>
              </div>

              {contactInfo.map((info, index) => (
                <Card key={index} className="luxury-card group hover:scale-105">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4">
                      <div className="w-14 h-14 bg-gradient-luxury rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-luxury">
                        <info.icon className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-primary mb-2 text-lg">{info.title}</h4>
                        <p className="text-foreground font-semibold mb-1 text-lg">{info.content}</p>
                        <p className="text-accent font-medium mb-2">{info.details}</p>
                        <p className="text-sm text-muted-foreground">{info.extra}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Quick Actions */}
              <div className="space-y-6 pt-8">
                <h4 className="text-xl font-bold text-primary mb-6">Actions Rapides</h4>
                
                <a
                  href="https://forms.gle/jWZKQqkiurj1iori9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button 
                    className="w-full luxury-button text-white font-semibold text-lg py-6"
                    size="lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-3" />
                    Formulaire Express 1
                    <ExternalLink className="w-5 h-5 ml-3" />
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
                    className="w-full border-2 border-accent text-accent hover:bg-accent/10 font-semibold text-lg py-6"
                    size="lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-3" />
                    Formulaire Express 2
                    <ExternalLink className="w-5 h-5 ml-3" />
                  </Button>
                </a>
              </div>

              {/* Guarantees */}
              <div className="space-y-4 pt-8">
                <h4 className="text-xl font-bold text-primary mb-6">Nos Garanties</h4>
                {guarantees.map((guarantee, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <guarantee.icon className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <div className="font-semibold text-primary text-sm">{guarantee.title}</div>
                      <div className="text-xs text-muted-foreground">{guarantee.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Card className="luxury-card">
                <CardHeader className="pb-6">
                  <CardTitle className="text-3xl text-primary mb-2">
                    Parlons de votre projet
                  </CardTitle>
                  <p className="text-lg text-muted-foreground">
                    Remplissez ce formulaire détaillé pour recevoir une proposition personnalisée.
                  </p>
                </CardHeader>
                <CardContent className="p-8">
                  <form onSubmit={handleSubmit} className="space-y-8">
                    {/* Personal Info */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="name" className="text-base font-semibold">Nom complet *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          placeholder="Votre nom et prénom"
                          className="h-12 text-base focus:ring-accent focus:border-accent"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="email" className="text-base font-semibold">Email professionnel *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="votre@email.com"
                          className="h-12 text-base focus:ring-accent focus:border-accent"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="phone" className="text-base font-semibold">Téléphone *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          placeholder="0749719196"
                          className="h-12 text-base focus:ring-accent focus:border-accent"
                        />
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="subject" className="text-base font-semibold">Sujet de la demande *</Label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          placeholder="Objet de votre demande"
                          className="h-12 text-base focus:ring-accent focus:border-accent"
                        />
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-3">
                        <Label htmlFor="serviceType" className="text-base font-semibold">Type de service</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, serviceType: value }))}>
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Sélectionnez un service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="gestion">Gestion immobilière</SelectItem>
                            <SelectItem value="achat-vente">Achat / Vente</SelectItem>
                            <SelectItem value="location">Location</SelectItem>
                            <SelectItem value="construction">Construction</SelectItem>
                            <SelectItem value="decoration">Décoration</SelectItem>
                            <SelectItem value="plans">Plans et devis</SelectItem>
                            <SelectItem value="conseil">Conseil</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-3">
                        <Label htmlFor="budget" className="text-base font-semibold">Budget estimé</Label>
                        <Select onValueChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}>
                          <SelectTrigger className="h-12 text-base">
                            <SelectValue placeholder="Fourchette budgétaire" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="0-50M">0 - 50 millions FCFA</SelectItem>
                            <SelectItem value="50-100M">50 - 100 millions FCFA</SelectItem>
                            <SelectItem value="100-200M">100 - 200 millions FCFA</SelectItem>
                            <SelectItem value="200M+">Plus de 200 millions FCFA</SelectItem>
                            <SelectItem value="a-definir">À définir ensemble</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="timeline" className="text-base font-semibold">Délai souhaité</Label>
                      <Select onValueChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}>
                        <SelectTrigger className="h-12 text-base">
                          <SelectValue placeholder="Quand souhaitez-vous commencer ?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="immediat">Immédiatement</SelectItem>
                          <SelectItem value="1-mois">Dans le mois</SelectItem>
                          <SelectItem value="3-mois">Dans les 3 mois</SelectItem>
                          <SelectItem value="6-mois">Dans les 6 mois</SelectItem>
                          <SelectItem value="flexible">Flexible</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label htmlFor="message" className="text-base font-semibold">Description détaillée du projet *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Décrivez votre projet en détail : localisation souhaitée, caractéristiques importantes, objectifs, contraintes particulières..."
                        className="min-h-[150px] text-base focus:ring-accent focus:border-accent"
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        type="submit"
                        size="lg"
                        className="flex-1 luxury-button text-white text-lg px-8 py-6 h-auto"
                      >
                        <Send className="w-5 h-5 mr-3" />
                        Envoyer ma demande
                      </Button>
                      <Button 
                        type="button"
                        variant="outline"
                        size="lg"
                        className="border-2 border-accent text-accent hover:bg-accent/10 text-lg px-8 py-6 h-auto"
                        onClick={() => window.open('tel:0749719196')}
                      >
                        <Phone className="w-5 h-5 mr-3" />
                        Appeler maintenant
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <section className="py-24 bg-gradient-card">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                Nos zones
                <span className="block gradient-text">d'intervention</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Property Immobilier vous accompagne dans l'ensemble de la région du Grand Abidjan 
                et ses zones d'extension stratégiques.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {["Abidjan", "Jacqueville", "Grand-Bassam", "Bingerville", "Anyama", "Songon"].map((zone, index) => (
                <Card 
                  key={zone} 
                  className="luxury-card text-center group animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-luxury rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-luxury">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-primary group-hover:text-accent transition-luxury">
                      {zone}
                    </h4>
                    <p className="text-sm text-muted-foreground mt-2">
                      Expertise locale reconnue
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;