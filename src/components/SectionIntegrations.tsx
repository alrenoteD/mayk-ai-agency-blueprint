
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const integrations = {
  whatsapp: {
    title: "WhatsApp",
    providers: [
      {
        name: "Z-API",
        description: "API brasileira para WhatsApp, mais acessível para início",
        advantages: ["Interface em português", "Suporte técnico no Brasil", "Configuração simplificada", "Bom custo-benefício para começar"],
        disadvantages: ["Menos recursos avançados", "Pode ter limitações em grande escala"]
      },
      {
        name: "Twilio",
        description: "Provedor global com ampla documentação e suporte",
        advantages: ["Documentação extensa", "Escalabilidade global", "Integrações múltiplas", "Confiabilidade"],
        disadvantages: ["Custo mais elevado", "Complexidade para iniciantes"]
      },
      {
        name: "API Oficial Meta",
        description: "Acesso direto à API oficial do WhatsApp Business",
        advantages: ["Sem intermediários", "Mais estável a longo prazo", "Acesso a recursos antecipados"],
        disadvantages: ["Processo de aprovação demorado", "Configuração técnica mais complexa"]
      },
      {
        name: "360dialog",
        description: "Parceiro oficial do WhatsApp com foco em mensageria",
        advantages: ["Interface amigável", "Bom para marketing", "Acesso a métricas detalhadas"],
        disadvantages: ["Preços podem escalar rapidamente com volume"]
      },
      {
        name: "Ultramsg",
        description: "Solução acessível para pequenos negócios",
        advantages: ["Fácil configuração", "Preço acessível", "Documentação clara"],
        disadvantages: ["Menos robusto para grandes volumes", "Suporte mais limitado"]
      }
    ]
  },
  ai: {
    title: "Provedores de IA",
    providers: [
      {
        name: "OpenRouter",
        description: "Acesso unificado a vários modelos de IA",
        advantages: ["Acesso a múltiplos modelos", "Fallback automático", "API unificada", "Preços competitivos"],
        disadvantages: ["Camada adicional de latência", "Menos controle direto"]
      },
      {
        name: "OpenAI API",
        description: "Acesso direto aos modelos GPT",
        advantages: ["Modelos de ponta", "Boa documentação", "Integrações amplas"],
        disadvantages: ["Preços mais altos", "Pode ter limitações de velocidade"]
      },
      {
        name: "Anthropic Claude",
        description: "Foco em respostas seguras e confiáveis",
        advantages: ["Bom em seguir instruções", "Context window grande", "Respostas mais seguras"],
        disadvantages: ["Menos modelos disponíveis", "Menos recursos complementares"]
      },
      {
        name: "Local LLMs",
        description: "Modelos rodando em sua própria infraestrutura",
        advantages: ["Privacidade de dados", "Sem custos por token", "Controle total"],
        disadvantages: ["Requer hardware potente", "Configuração técnica complexa"]
      }
    ]
  },
  crm: {
    title: "CRM e Automação",
    providers: [
      {
        name: "Pipedrive",
        description: "CRM visual com foco em pipeline de vendas",
        advantages: ["Interface intuitiva", "Bom para equipes de vendas", "Muitas integrações"],
        disadvantages: ["Menos personalização", "Pode ficar caro com muitos usuários"]
      },
      {
        name: "HubSpot",
        description: "Plataforma completa de marketing, vendas e atendimento",
        advantages: ["Versão gratuita robusta", "Ecossistema completo", "Muitas integrações"],
        disadvantages: ["Versões pagas são caras", "Pode ser complexo"]
      },
      {
        name: "n8n",
        description: "Automação de workflows de código aberto",
        advantages: ["Código aberto", "Hospedagem própria possível", "Muito flexível"],
        disadvantages: ["Requer conhecimento técnico", "Precisa de manutenção"]
      },
      {
        name: "Make (Integromat)",
        description: "Plataforma visual de automação",
        advantages: ["Intuitivo", "Muitos conectores", "Templates prontos"],
        disadvantages: ["Limites na versão gratuita", "Pode ficar caro com uso intenso"]
      }
    ]
  }
};

const SectionIntegrations: React.FC = () => {
  return (
    <section id="integrations" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="gradient-text">Integrações</span> Essenciais
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Conheça as principais ferramentas e APIs que sua agência de IA precisa dominar para entregar soluções completas.
          </p>
        </div>
        
        <Tabs defaultValue="whatsapp" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="whatsapp">WhatsApp</TabsTrigger>
            <TabsTrigger value="ai">IA</TabsTrigger>
            <TabsTrigger value="crm">CRM & Automação</TabsTrigger>
          </TabsList>
          
          {Object.entries(integrations).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.providers.map((provider, index) => (
                  <Card key={index} className="card-gradient">
                    <CardHeader>
                      <CardTitle>{provider.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4">{provider.description}</p>
                      <div className="mb-3">
                        <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Vantagens:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {provider.advantages.map((adv, i) => (
                            <li key={i}>{adv}</li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Desvantagens:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {provider.disadvantages.map((disadv, i) => (
                            <li key={i}>{disadv}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SectionIntegrations;
