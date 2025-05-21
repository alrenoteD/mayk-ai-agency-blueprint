
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const agentCategories = {
  "atendimento": {
    title: "Atendimento ao Cliente",
    description: "Bots para automatizar e melhorar o atendimento ao cliente",
    agents: [
      {
        name: "Chatbot de SAC",
        description: "Responde dúvidas frequentes, registra reclamações e direciona para atendentes humanos quando necessário",
        features: [
          "Sistema de FAQ dinâmico",
          "Identificação de intent do cliente",
          "Escalação inteligente para humanos",
          "Acesso a histórico de pedidos"
        ],
        implementation: "Use o Flowise com memória de buffer e integração com CRM"
      },
      {
        name: "Assistente de Pós-Venda",
        description: "Acompanha clientes após a compra, solicita feedback e oferece ajuda proativamente",
        features: [
          "Lembretes automáticos",
          "Coleta de feedbacks",
          "Sugestões personalizadas",
          "Resolução de problemas comuns"
        ],
        implementation: "Combine Flowise com automação temporizada e base de conhecimento de produtos"
      },
      {
        name: "Triagem de Suporte Técnico",
        description: "Identifica e categoriza problemas técnicos antes de encaminhar para a equipe adequada",
        features: [
          "Diagnóstico inicial de problemas",
          "Soluções para questões simples",
          "Coleta de informações técnicas",
          "Categorização de tickets"
        ],
        implementation: "Use Retrieval QA com documentação técnica e integração com sistema de tickets"
      }
    ]
  },
  "vendas": {
    title: "Vendas e Conversão",
    description: "Agentes focados em gerar leads e converter vendas",
    agents: [
      {
        name: "Qualificador de Leads",
        description: "Avalia e qualifica leads iniciais para o time de vendas",
        features: [
          "Perguntas qualificadoras personalizadas",
          "Scoring de leads",
          "Agendamento com vendedores",
          "Captura de dados para CRM"
        ],
        implementation: "Use Flowise com memória persistente e integração com seu CRM via webhook"
      },
      {
        name: "Assistente de Vendas",
        description: "Apresenta produtos, responde objeções e conduz o cliente pelo funil de vendas",
        features: [
          "Catálogo de produtos dinâmico",
          "Respostas a objeções comuns",
          "Upsell e cross-sell inteligente",
          "Fechamento de vendas simples"
        ],
        implementation: "Use RAG com sua base de produtos e treinamento específico para vendas"
      },
      {
        name: "Reativador de Clientes",
        description: "Recupera clientes inativos com ofertas personalizadas",
        features: [
          "Análise de histórico de compras",
          "Ofertas exclusivas personalizadas",
          "Identificação de motivos de abandono",
          "Sequência de reconversão"
        ],
        implementation: "Integre com seu banco de dados de clientes e sistema de descontos"
      }
    ]
  },
  "agendamento": {
    title: "Agendamento e Reservas",
    description: "Bots para gerenciar agendas, marcar compromissos e reservas",
    agents: [
      {
        name: "Agendador de Consultas",
        description: "Marca, remarca e cancela consultas ou atendimentos",
        features: [
          "Visualização da agenda disponível",
          "Confirmação automática",
          "Lembretes antes do compromisso",
          "Reagendamento simplificado"
        ],
        implementation: "Integre com Google Calendar ou outro sistema de agenda via API"
      },
      {
        name: "Gerenciador de Reservas",
        description: "Gerencia reservas para restaurantes, hotéis ou serviços",
        features: [
          "Verificação de disponibilidade em tempo real",
          "Personalização de reservas",
          "Processamento de pedidos especiais",
          "Confirmações e modificações"
        ],
        implementation: "Use N8N para integrar sistemas de reserva com o Flowise"
      },
      {
        name: "Coordenador de Eventos",
        description: "Organiza participantes e detalhes de eventos corporativos ou sociais",
        features: [
          "Envio de convites",
          "Registro de participantes",
          "Lembretes e atualizações",
          "Coleta de confirmações"
        ],
        implementation: "Combine Flowise com sistemas de email marketing e gestão de eventos"
      }
    ]
  },
  "educacional": {
    title: "Educação e Treinamento",
    description: "Agentes para ensinar, treinar e apoiar o aprendizado",
    agents: [
      {
        name: "Tutor Personalizado",
        description: "Oferece explicações detalhadas e exercícios adaptados ao nível do aluno",
        features: [
          "Explicações passo a passo",
          "Exercícios adaptados ao nível",
          "Feedback detalhado",
          "Plano de estudos personalizado"
        ],
        implementation: "Use Claude ou GPT-4 com contexto amplo e base de conhecimento educacional"
      },
      {
        name: "Assistente de Curso",
        description: "Responde dúvidas sobre um curso específico e fornece recursos complementares",
        features: [
          "FAQ do curso",
          "Materiais complementares",
          "Lembretes de prazos",
          "Explicações de conceitos-chave"
        ],
        implementation: "RAG com material do curso e conexão com LMS se disponível"
      },
      {
        name: "Simulador de Provas",
        description: "Cria simulados e avalia respostas para preparação para provas",
        features: [
          "Geração de questões personalizadas",
          "Feedback detalhado",
          "Estatísticas de desempenho",
          "Foco em áreas de dificuldade"
        ],
        implementation: "Flowise com Function Calling para avaliação estruturada de respostas"
      }
    ]
  },
  "analise": {
    title: "Análise e Business Intelligence",
    description: "Agentes especializados em dados e insights de negócio",
    agents: [
      {
        name: "Analista de Dados",
        description: "Interpreta dados empresariais e gera relatórios sob demanda",
        features: [
          "Consultas em linguagem natural",
          "Visualização de dados simplificada",
          "Identificação de tendências",
          "Relatórios personalizados"
        ],
        implementation: "Integre com SQL e ferramentas de BI via API ou plugins"
      },
      {
        name: "Monitor de Métricas",
        description: "Acompanha KPIs e alerta sobre desvios significativos",
        features: [
          "Monitoramento contínuo",
          "Alertas personalizados",
          "Análise de causa raiz",
          "Recomendações de ação"
        ],
        implementation: "Use N8N para monitoramento e Flowise para análise e comunicação"
      },
      {
        name: "Gerador de Insights",
        description: "Analisa grandes volumes de dados para extrair insights acionáveis",
        features: [
          "Análise multidimensional",
          "Correlações não óbvias",
          "Previsões simples",
          "Recomendações de estratégia"
        ],
        implementation: "Combine ferramentas de análise com LLMs via funções personalizadas"
      }
    ]
  },
  "produtividade": {
    title: "Produtividade Pessoal",
    description: "Assistentes para aumentar produtividade e organização",
    agents: [
      {
        name: "Gerenciador de Tarefas",
        description: "Ajuda a organizar, priorizar e acompanhar tarefas pessoais ou de equipe",
        features: [
          "Criação e organização de tarefas",
          "Lembretes inteligentes",
          "Priorização contextual",
          "Delegação e acompanhamento"
        ],
        implementation: "Integre com Todoist, Microsoft Todo ou outros apps via API"
      },
      {
        name: "Assistente de Reuniões",
        description: "Prepara pautas, toma notas e distribui atas de reuniões",
        features: [
          "Templates de pauta",
          "Transcrição e resumo",
          "Extração de itens de ação",
          "Distribuição de atas"
        ],
        implementation: "Combine com ferramentas de transcrição e integre com calendários e email"
      },
      {
        name: "Coach de Produtividade",
        description: "Oferece técnicas e feedback para melhorar a produtividade pessoal",
        features: [
          "Técnicas personalizadas de produtividade",
          "Acompanhamento de hábitos",
          "Análise de padrões de trabalho",
          "Recomendações contextuais"
        ],
        implementation: "Use LLMs com prompt engineering para análise comportamental"
      }
    ]
  }
};

const CategoriasAgentes: React.FC = () => {
  return (
    <PageLayout 
      title="Categorias de Agentes" 
      subtitle="Explore diferentes tipos de agentes de IA para diversos setores e necessidades"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Biblioteca de Agentes</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Descubra diferentes categorias de agentes de IA que sua agência pode criar e oferecer
              para seus clientes. Cada agente possui características e implementações específicas.
            </p>
          </div>
          
          <Tabs defaultValue="atendimento" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 mb-8">
              <TabsTrigger value="atendimento">Atendimento</TabsTrigger>
              <TabsTrigger value="vendas">Vendas</TabsTrigger>
              <TabsTrigger value="agendamento">Agendamento</TabsTrigger>
              <TabsTrigger value="educacional">Educação</TabsTrigger>
              <TabsTrigger value="analise">Análise</TabsTrigger>
              <TabsTrigger value="produtividade">Produtividade</TabsTrigger>
            </TabsList>
            
            {Object.entries(agentCategories).map(([key, category]) => (
              <TabsContent key={key} value={key}>
                <div className="mb-8">
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-muted-foreground mb-6">{category.description}</p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {category.agents.map((agent, index) => (
                    <Card key={index} className="card-gradient">
                      <CardHeader>
                        <CardTitle>{agent.name}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4">{agent.description}</p>
                        
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold mb-2">Funcionalidades:</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            {agent.features.map((feature, i) => (
                              <li key={i}>{feature}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-md">
                          <h4 className="text-sm font-semibold mb-1">Implementação:</h4>
                          <p className="text-sm text-blue-700 dark:text-blue-300">
                            {agent.implementation}
                          </p>
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
    </PageLayout>
  );
};

export default CategoriasAgentes;
