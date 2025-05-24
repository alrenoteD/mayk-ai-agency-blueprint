
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Star, TrendingUp, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const TemplateShowcase: React.FC = () => {
  const featuredTemplates = [
    {
      name: "Atendente IA para WhatsApp",
      description: "Chatbot inteligente para atendimento 24/7",
      tools: ["n8n", "Flowise", "WhatsApp"],
      price: "R$ 800 - 2.500",
      difficulty: "Média",
      time: "4-6h",
      popular: true
    },
    {
      name: "Agente IA de Agendamento", 
      description: "Sistema automatizado para consultas e reuniões",
      tools: ["n8n", "Google Calendar", "Twilio"],
      price: "R$ 600 - 2.000",
      difficulty: "Média",
      time: "3-5h",
      popular: false
    },
    {
      name: "Micro-SaaS para WhatsApp",
      description: "Plataforma completa para criação de chatbots",
      tools: ["n8n", "Flowise", "Make", "Stripe"],
      price: "R$ 5.000 - 15.000",
      difficulty: "Alta",
      time: "2-3 sem",
      popular: true
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="gradient-text">Templates de Automação IA</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Templates prontos para n8n, Make, Flowise e suas combinações. 
            Transforme ideias em soluções lucrativas rapidamente.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {featuredTemplates.map((template, index) => (
            <Card key={index} className="relative hover:shadow-lg transition-shadow">
              {template.popular && (
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                    <Star className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}
              
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Tools */}
                <div>
                  <p className="text-xs font-medium text-muted-foreground mb-1">Ferramentas:</p>
                  <div className="flex flex-wrap gap-1">
                    {template.tools.slice(0, 2).map(tool => (
                      <Badge key={tool} variant="secondary" className="text-xs">
                        {tool}
                      </Badge>
                    ))}
                    {template.tools.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{template.tools.length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 text-xs">
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3 text-muted-foreground" />
                    <span>{template.time}</span>
                  </div>
                  <div>
                    <Badge variant="outline" className="text-xs">
                      {template.difficulty}
                    </Badge>
                  </div>
                </div>

                {/* Price */}
                <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-md">
                  <div className="flex items-center gap-1 mb-1">
                    <TrendingUp className="h-3 w-3 text-green-600" />
                    <span className="text-xs font-medium text-green-700 dark:text-green-400">Valor sugerido:</span>
                  </div>
                  <p className="text-sm font-bold text-green-800 dark:text-green-300">
                    {template.price}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
            <span>✅ Templates testados em produção</span>
            <span>✅ Documentação completa incluída</span>
            <span>✅ Estimativas de ROI precisas</span>
          </div>
          
          <Link to="/templates">
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              Ver Todos os Templates
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
          
          <p className="text-sm text-muted-foreground">
            Mais de 50+ templates disponíveis | Valores de R$ 500 a R$ 15.000
          </p>
        </div>
      </div>
    </section>
  );
};

export default TemplateShowcase;
