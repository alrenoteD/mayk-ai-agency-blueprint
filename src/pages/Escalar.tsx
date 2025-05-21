
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const scaleStages = [
  {
    title: "Estágio Inicial (1-5 clientes)",
    revenue: "R$3.000 - R$10.000/mês",
    tools: [
      {
        category: "Infraestrutura",
        items: [
          "VPS básica (2GB RAM, 1 vCPU)",
          "Hospedagem compartilhada para site",
          "Domínio com email profissional",
          "Backup manual"
        ]
      },
      {
        category: "Ferramentas de IA",
        items: [
          "Flowise (instalação básica)",
          "OpenRouter com crédito inicial",
          "Z-API para WhatsApp (plano básico)",
          "GPT-3.5 para maioria dos casos"
        ]
      },
      {
        category: "Marketing",
        items: [
          "Site simples em WordPress",
          "Perfil LinkedIn/Instagram",
          "Facebook Ads com orçamento mínimo",
          "Google Meu Negócio"
        ]
      },
      {
        category: "Operações",
        items: [
          "1 desenvolvedor (você mesmo)",
          "Atendimento direto pelo fundador",
          "Processos manuais",
          "Trello ou Notion para organização"
        ]
      }
    ],
    next: [
      "Documente seus processos e crie templates reutilizáveis",
      "Colete depoimentos e casos de sucesso dos primeiros clientes",
      "Defina um nicho específico para se especializar",
      "Inicie criação de conteúdo educacional para atrair leads"
    ]
  },
  {
    title: "Crescimento (5-15 clientes)",
    revenue: "R$10.000 - R$30.000/mês",
    tools: [
      {
        category: "Infraestrutura",
        items: [
          "VPS dedicada (4-8GB RAM, 2-4 vCPUs)",
          "Servidor web separado com CDN",
          "Backup automatizado",
          "Monitoramento básico 24/7"
        ]
      },
      {
        category: "Ferramentas de IA",
        items: [
          "Flowise com componentes customizados",
          "Twilio ou 360dialog para WhatsApp",
          "Múltiplos modelos de IA especializados",
          "Sistema de fallback entre modelos"
        ]
      },
      {
        category: "Marketing",
        items: [
          "Site profissional com blog",
          "CRM para gestão de leads",
          "Funil de vendas estruturado",
          "Email marketing e automação",
          "Facebook/Google Ads com orçamento otimizado"
        ]
      },
      {
        category: "Operações",
        items: [
          "1-2 desenvolvedores",
          "Assistente administrativo",
          "Atendente de suporte",
          "Processos semi-automatizados",
          "Contratos e SLAs padronizados"
        ]
      }
    ],
    next: [
      "Desenvolva uma biblioteca de componentes reutilizáveis",
      "Crie processos de onboarding padronizados para novos clientes",
      "Implemente SLAs e sistema de suporte estruturado",
      "Explore parcerias estratégicas com outras empresas"
    ]
  },
  {
    title: "Escala (15+ clientes)",
    revenue: "R$30.000+/mês",
    tools: [
      {
        category: "Infraestrutura",
        items: [
          "Cluster de servidores ou nuvem escalável",
          "Load balancers e redundância",
          "Monitoramento avançado e alertas",
          "Disaster recovery plan",
          "CI/CD para deploy contínuo"
        ]
      },
      {
        category: "Ferramentas de IA",
        items: [
          "API oficial do WhatsApp Business",
          "Sistemas proprietários ou LangChain",
          "IA especializada por vertical de negócio",
          "Fine-tuning de modelos próprios",
          "Vetorização e RAG avançados"
        ]
      },
      {
        category: "Marketing",
        items: [
          "Marca consolidada e reconhecida",
          "Marketing multicanal integrado",
          "Equipe de vendas especializada",
          "Webinars e eventos recorrentes",
          "Análise avançada de dados de marketing"
        ]
      },
      {
        category: "Operações",
        items: [
          "Equipe técnica especializada",
          "Gerentes de projeto dedicados",
          "Equipe de customer success",
          "Processos documentados e automatizados",
          "Treinamento contínuo"
        ]
      }
    ],
    next: [
      "Desenvolva produtos proprietários além de serviços",
      "Considere financiamento para expansão acelerada",
      "Explore internacionalização dos serviços",
      "Crie modelo de parceria ou franquia",
      "Implemente gestão por OKRs"
    ]
  }
];

const transitionPoints = [
  {
    title: "De Iniciante para Crescimento",
    description: "Quando fazer a transição do estágio inicial para o de crescimento",
    triggers: [
      "Volume de atendimentos excede 1.000 mensagens/dia por cliente",
      "Tempo de resposta do Flowise ultrapassa 5 segundos",
      "Número de clientes simultâneos superior a 5",
      "Necessidade de personalizações complexas no Flowise",
      "Problemas recorrentes de estabilidade"
    ],
    transitions: [
      {
        from: "Flowise básico em VPS simples",
        to: "Flowise em cluster ou com recursos dedicados"
      },
      {
        from: "Z-API básico",
        to: "Z-API Business ou Twilio/360dialog"
      },
      {
        from: "Templates genéricos de bots",
        to: "Bots customizados por vertical"
      },
      {
        from: "Atendimento direto pelo fundador",
        to: "Equipe de suporte estruturada"
      }
    ]
  },
  {
    title: "De Crescimento para Escala",
    description: "Quando fazer a transição da fase de crescimento para a de escala completa",
    triggers: [
      "Mais de 15 clientes ativos com alta demanda",
      "Limitações técnicas do Flowise mesmo com recursos adequados",
      "Necessidade de personalização profunda dos modelos de IA",
      "Requisitos de segurança e compliance mais rigorosos",
      "Limitações das soluções de terceiros para WhatsApp"
    ],
    transitions: [
      {
        from: "Flowise em servidor dedicado",
        to: "Solução proprietária baseada em LangChain ou similares"
      },
      {
        from: "Provedores intermediários de WhatsApp",
        to: "API oficial do WhatsApp Business"
      },
      {
        from: "Modelos de IA genéricos",
        to: "Fine-tuning de modelos para casos específicos"
      },
      {
        from: "Processos semi-automatizados",
        to: "Sistema completo de gestão e automação"
      }
    ]
  }
];

const advancedTechniques = [
  {
    title: "Vetorização e RAG Avançado",
    description: "Técnicas avançadas de Retrieval Augmented Generation para melhorar a qualidade das respostas",
    techniques: [
      "Implementação de bancos vetoriais como Pinecone ou Qdrant",
      "Chunking inteligente de documentos com sobreposição",
      "Metadata filtering para resultados mais precisos",
      "Reranking de resultados usando modelos específicos",
      "Hybrid search combinando vetores e keywords"
    ]
  },
  {
    title: "Fine-tuning e Modelos Personalizados",
    description: "Criação de modelos personalizados para casos de uso específicos",
    techniques: [
      "LoRA (Low-Rank Adaptation) para adaptação eficiente",
      "Fine-tuning supervisionado com dados proprietários",
      "RLHF (Reinforcement Learning from Human Feedback)",
      "Criação de datasets sintéticos para treinamento",
      "Distilação de modelos para melhor performance"
    ]
  },
  {
    title: "Automação Avançada",
    description: "Técnicas de automação para escalar operações",
    techniques: [
      "Implementação de Function Calling para ações estruturadas",
      "Integração com APIs externas via OpenAI Actions",
      "Criação de agentes autônomos com ReAct pattern",
      "Pipeline de validação automatizada de respostas",
      "Roteamento inteligente entre modelos por complexidade"
    ]
  },
  {
    title: "Infraestrutura Robusta",
    description: "Criação de infraestrutura escalável e resiliente",
    techniques: [
      "Arquitetura de microserviços para componentes do sistema",
      "Sistema de filas para processamento assíncrono (RabbitMQ/Kafka)",
      "Cache inteligente de embeddings e respostas frequentes",
      "Monitoramento avançado com alertas preditivos",
      "Deployment via Kubernetes para alta disponibilidade"
    ]
  }
];

const Escalar: React.FC = () => {
  return (
    <PageLayout 
      title="Como Escalar sua Agência" 
      subtitle="Estratégias, ferramentas e pontos de transição para crescimento sustentável"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Estágios de Crescimento</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Cada estágio de crescimento da sua agência de IA requer diferentes ferramentas, processos e estratégias.
              Conheça o que é necessário em cada fase e planeje sua evolução.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {scaleStages.map((stage, index) => (
              <Card key={index} className={`card-gradient ${
                index === 0 ? 'border-blue-300 dark:border-blue-800' : 
                index === 1 ? 'border-purple-300 dark:border-purple-800' : 
                'border-teal-300 dark:border-teal-800'
              } border-2`}>
                <CardHeader>
                  <CardTitle className={
                    index === 0 ? 'text-blue-600 dark:text-blue-400' : 
                    index === 1 ? 'text-purple-600 dark:text-purple-400' : 
                    'text-teal-600 dark:text-teal-400'
                  }>
                    {stage.title}
                  </CardTitle>
                  <p className="text-muted-foreground font-medium">{stage.revenue}</p>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="infraestrutura" className="w-full">
                    <TabsList className="grid grid-cols-2 mb-4">
                      <TabsTrigger value="infraestrutura">Ferramentas</TabsTrigger>
                      <TabsTrigger value="next">Próximos Passos</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="infraestrutura">
                      {stage.tools.map((toolCategory, i) => (
                        <div key={i} className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">{toolCategory.category}</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            {toolCategory.items.map((item, j) => (
                              <li key={j}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </TabsContent>
                    
                    <TabsContent value="next">
                      <h4 className="text-sm font-semibold mb-2">Próximos Passos</h4>
                      <ul className="list-disc pl-5 space-y-2 text-sm">
                        {stage.next.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Pontos de Transição</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Identificar o momento certo para evoluir sua infraestrutura e processos é crucial para o crescimento sustentável.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {transitionPoints.map((point, index) => (
              <Card key={index} className="card-gradient">
                <CardHeader>
                  <CardTitle>{point.title}</CardTitle>
                  <p className="text-muted-foreground">{point.description}</p>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold mb-2">Gatilhos para mudança:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {point.triggers.map((trigger, i) => (
                        <li key={i}>{trigger}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-semibold mb-2">Transições principais:</h4>
                    <div className="space-y-3">
                      {point.transitions.map((transition, i) => (
                        <div key={i} className="flex items-center">
                          <div className="text-sm flex-grow">
                            <span className="text-gray-600 dark:text-gray-400">{transition.from}</span>
                            <div className="flex items-center my-1">
                              <div className="flex-grow h-0.5 bg-gray-300 dark:bg-gray-700"></div>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-2">
                                <path d="M5 12h14"></path>
                                <path d="m12 5 7 7-7 7"></path>
                              </svg>
                              <div className="flex-grow h-0.5 bg-gray-300 dark:bg-gray-700"></div>
                            </div>
                            <span className="font-medium text-mayk-purple dark:text-mayk-teal">{transition.to}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mt-16 mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Técnicas Avançadas</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Conheça as técnicas avançadas que permitirão sua agência se destacar na fase de escala.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {advancedTechniques.map((technique, index) => (
              <Card key={index} className="card-gradient">
                <CardHeader>
                  <CardTitle>{technique.title}</CardTitle>
                  <p className="text-muted-foreground">{technique.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    {technique.techniques.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Escalar;
