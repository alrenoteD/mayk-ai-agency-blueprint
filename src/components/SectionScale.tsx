
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

interface ScaleStage {
  title: string;
  revenue: string;
  clients: string;
  tools: {
    category: string;
    items: string[];
  }[];
  nextSteps: string[];
}

const scaleStages: ScaleStage[] = [
  {
    title: "Iniciante",
    revenue: "R$3.000 - R$10.000/mês",
    clients: "1-5 clientes",
    tools: [
      {
        category: "IA e Automação",
        items: ["Flowise (local/VPS básica)", "Z-API para WhatsApp", "OpenRouter (crédito inicial)"]
      },
      {
        category: "Infraestrutura",
        items: ["VPS básica (2GB RAM)", "Domínio com email profissional", "Cloudflare (gratuito)"]
      },
      {
        category: "Marketing",
        items: ["Site simples", "Perfil Instagram", "Facebook Ads (orçamento baixo)"]
      }
    ],
    nextSteps: [
      "Documente seus processos",
      "Crie templates reutilizáveis para bots",
      "Colete depoimentos dos primeiros clientes",
      "Defina nichos específicos para especialização"
    ]
  },
  {
    title: "Em Crescimento",
    revenue: "R$10.000 - R$30.000/mês",
    clients: "5-15 clientes",
    tools: [
      {
        category: "IA e Automação",
        items: ["Flowise (VPS dedicada)", "Twilio ou 360dialog", "APIs de IA diversificadas", "Serviço de fallback"]
      },
      {
        category: "Infraestrutura",
        items: ["VPS robusta (8GB+ RAM)", "CDN otimizado", "Backup automatizado", "Monitoramento 24/7"]
      },
      {
        category: "Marketing e Vendas",
        items: ["CRM completo", "Funil de vendas estruturado", "Conteúdo especializado", "Webinars e demonstrações"]
      }
    ],
    nextSteps: [
      "Contrate assistentes para tarefas repetitivas",
      "Desenvolva uma biblioteca de componentes reutilizáveis",
      "Implemente SLAs e suporte estruturado",
      "Explore parcerias estratégicas"
    ]
  },
  {
    title: "Escala",
    revenue: "R$30.000+/mês",
    clients: "15+ clientes",
    tools: [
      {
        category: "IA e Automação",
        items: ["API oficial do WhatsApp Business", "Cluster de servidores", "IA especializada por vertical", "CI/CD para desenvolvimento rápido"]
      },
      {
        category: "Infraestrutura",
        items: ["Infraestrutura em nuvem escalável", "Load balancers", "Monitoramento avançado", "Equipe DevOps"]
      },
      {
        category: "Operações",
        items: ["Equipe especializada por função", "Processos documentados", "Treinamento contínuo", "Software proprietário"]
      }
    ],
    nextSteps: [
      "Desenvolva produtos próprios além de serviços",
      "Considere financiamento para expansão",
      "Estabeleça núcleos de inovação internos",
      "Expanda para novos mercados geográficos"
    ]
  }
];

const SectionScale: React.FC = () => {
  return (
    <section id="scale" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="gradient-text">Escalando</span> Sua Agência
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um roteiro para crescer sua agência de IA de forma sustentável, com ferramentas adequadas para cada estágio.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scaleStages.map((stage, index) => (
            <div key={index} className="flex flex-col">
              <Card className="card-gradient flex-grow">
                <CardHeader className="border-b border-border pb-4">
                  <CardTitle className="text-xl text-center">
                    <span className={index === 0 ? "text-blue-500" : index === 1 ? "text-purple-500" : "text-teal-500"}>
                      {stage.title}
                    </span>
                  </CardTitle>
                  <CardDescription className="text-center">
                    {stage.revenue} • {stage.clients}
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-6">
                  {stage.tools.map((toolCategory, idx) => (
                    <div key={idx} className="mb-6">
                      <h4 className="font-medium text-sm mb-2">{toolCategory.category}</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        {toolCategory.items.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div>
                    <h4 className="font-medium text-sm mb-2">Próximos Passos</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {stage.nextSteps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
              {index < scaleStages.length - 1 && (
                <div className="hidden md:flex justify-center my-4">
                  <div className="w-8 h-8 rounded-full bg-mayk-purple/20 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mayk-purple">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionScale;
