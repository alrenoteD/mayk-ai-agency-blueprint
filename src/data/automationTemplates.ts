
export interface AutomationTemplate {
  id: string;
  name: string;
  description: string;
  purpose: string;
  creationTime: string;
  difficulty: 'Baixa' | 'Média' | 'Alta';
  monthlyCost: number;
  suggestedPrice: {
    min: number;
    max: number;
  };
  tools: string[];
  category: string;
  cloneUrl: string;
  features: string[];
  useCase: string;
}

export const automationTemplates: AutomationTemplate[] = [
  {
    id: "whatsapp-attendant",
    name: "Atendente IA para WhatsApp",
    description: "Chatbot inteligente para atendimento ao cliente 24/7 com integração WhatsApp Business API",
    purpose: "Atendimento",
    creationTime: "4-6 horas",
    difficulty: "Média",
    monthlyCost: 25,
    suggestedPrice: { min: 800, max: 2500 },
    tools: ["n8n", "Flowise", "WhatsApp Business API", "OpenAI"],
    category: "Atendimento ao Cliente",
    cloneUrl: "#whatsapp-attendant-template",
    features: ["Respostas automáticas", "Escalação humana", "Histórico de conversas", "Métricas de atendimento"],
    useCase: "Empresas que recebem muitas mensagens no WhatsApp e precisam de atendimento 24/7"
  },
  {
    id: "ai-scheduling-agent",
    name: "Agente IA de Agendamento",
    description: "Sistema automatizado para agendamento de consultas e reuniões com confirmação automática",
    purpose: "Agendamento",
    creationTime: "3-5 horas",
    difficulty: "Média",
    monthlyCost: 20,
    suggestedPrice: { min: 600, max: 2000 },
    tools: ["n8n", "Google Calendar", "Twilio", "OpenAI"],
    category: "Produtividade",
    cloneUrl: "#ai-scheduling-template",
    features: ["Integração com calendários", "SMS/WhatsApp confirmação", "Reagendamento automático", "Lembretes"],
    useCase: "Clínicas, salões, consultórios e prestadores de serviços"
  },
  {
    id: "recruitment-ai",
    name: "Agente IA de Recrutamento",
    description: "Sistema para triagem automática de candidatos e agendamento de entrevistas",
    purpose: "Recrutamento",
    creationTime: "6-8 horas",
    difficulty: "Alta",
    monthlyCost: 35,
    suggestedPrice: { min: 1200, max: 4000 },
    tools: ["n8n", "Flowise", "Make", "LinkedIn API", "OpenAI"],
    category: "Recursos Humanos",
    cloneUrl: "#recruitment-ai-template",
    features: ["Análise de CVs", "Triagem automática", "Agendamento de entrevistas", "Score de candidatos"],
    useCase: "Empresas de RH e departamentos de recursos humanos"
  },
  {
    id: "order-tracking-ai",
    name: "Rastreamento de Pedidos via IA",
    description: "Bot que fornece atualizações automáticas sobre status de pedidos via WhatsApp/SMS",
    purpose: "Vendas",
    creationTime: "3-4 horas",
    difficulty: "Baixa",
    monthlyCost: 15,
    suggestedPrice: { min: 500, max: 1500 },
    tools: ["n8n", "Correios API", "WhatsApp", "SMS"],
    category: "E-commerce",
    cloneUrl: "#order-tracking-template",
    features: ["Rastreamento em tempo real", "Notificações automáticas", "Múltiplos transportadores", "Interface amigável"],
    useCase: "Lojas online e e-commerce que precisam manter clientes informados"
  },
  {
    id: "micro-saas-whatsapp",
    name: "Micro-SaaS para WhatsApp",
    description: "Plataforma completa para criação de chatbots personalizados para empresas",
    purpose: "Vendas",
    creationTime: "2-3 semanas",
    difficulty: "Alta",
    monthlyCost: 50,
    suggestedPrice: { min: 5000, max: 15000 },
    tools: ["n8n", "Flowise", "Make", "Stripe", "Database"],
    category: "SaaS",
    cloneUrl: "#micro-saas-template",
    features: ["Multi-tenant", "Billing automático", "Dashboard analytics", "White-label"],
    useCase: "Agências que querem criar um produto SaaS próprio"
  },
  {
    id: "sdr-automation",
    name: "Agente SDR Automatizado",
    description: "Sistema de prospecção e qualificação automática de leads via LinkedIn e email",
    purpose: "Vendas",
    creationTime: "1-2 semanas",
    difficulty: "Alta",
    monthlyCost: 40,
    suggestedPrice: { min: 2000, max: 6000 },
    tools: ["n8n", "Make", "LinkedIn Sales Navigator", "OpenAI", "HubSpot"],
    category: "Vendas",
    cloneUrl: "#sdr-automation-template",
    features: ["Prospecção automática", "Mensagens personalizadas", "Follow-up sequencial", "CRM integration"],
    useCase: "Empresas B2B que precisam de geração constante de leads qualificados"
  },
  {
    id: "content-generator",
    name: "Gerador de Conteúdo IA",
    description: "Sistema para criação automática de posts para redes sociais e blog",
    purpose: "Marketing",
    creationTime: "4-6 horas",
    difficulty: "Média",
    monthlyCost: 30,
    suggestedPrice: { min: 800, max: 2500 },
    tools: ["n8n", "OpenAI", "Canva API", "Buffer"],
    category: "Marketing Digital",
    cloneUrl: "#content-generator-template",
    features: ["Criação de posts", "Agendamento automático", "Múltiplas redes sociais", "Análise de engajamento"],
    useCase: "Agências de marketing e empresas que precisam de conteúdo constante"
  },
  {
    id: "lead-qualifier",
    name: "Qualificador de Leads IA",
    description: "Bot que qualifica leads automaticamente através de questionários inteligentes",
    purpose: "Vendas",
    creationTime: "2-3 horas",
    difficulty: "Baixa",
    monthlyCost: 20,
    suggestedPrice: { min: 600, max: 1800 },
    tools: ["Flowise", "n8n", "Webhook", "OpenAI"],
    category: "Vendas",
    cloneUrl: "#lead-qualifier-template",
    features: ["Questionários dinâmicos", "Score automático", "Integração CRM", "Relatórios detalhados"],
    useCase: "Empresas que recebem muitos leads e precisam qualificar rapidamente"
  },
  {
    id: "invoice-automation",
    name: "Automação de Cobrança IA",
    description: "Sistema que automatiza envio de faturas e follow-up de pagamentos",
    purpose: "Financeiro",
    creationTime: "5-7 horas",
    difficulty: "Média",
    monthlyCost: 25,
    suggestedPrice: { min: 1000, max: 3000 },
    tools: ["n8n", "Make", "Stripe", "WhatsApp", "Email"],
    category: "Financeiro",
    cloneUrl: "#invoice-automation-template",
    features: ["Envio automático", "Lembretes escalonados", "Múltiplos canais", "Relatórios de inadimplência"],
    useCase: "Empresas que precisam melhorar o fluxo de caixa e reduzir inadimplência"
  },
  {
    id: "support-ticket-ai",
    name: "Sistema de Tickets IA",
    description: "Chatbot que categoriza e direciona tickets de suporte automaticamente",
    purpose: "Atendimento",
    creationTime: "6-8 horas",
    difficulty: "Média",
    monthlyCost: 30,
    suggestedPrice: { min: 1200, max: 3500 },
    tools: ["Flowise", "n8n", "Zendesk", "OpenAI"],
    category: "Atendimento ao Cliente",
    cloneUrl: "#support-ticket-template",
    features: ["Categorização automática", "Priorização inteligente", "Respostas sugeridas", "Escalação automática"],
    useCase: "Empresas com alto volume de tickets de suporte"
  }
];

export const toolsOptions = [
  "n8n",
  "Flowise", 
  "Make",
  "OpenAI",
  "WhatsApp Business API",
  "Google Calendar",
  "Twilio",
  "LinkedIn API",
  "Stripe",
  "HubSpot",
  "Canva API",
  "Buffer",
  "Zendesk",
  "Correios API"
];

export const categoriesOptions = [
  "Atendimento ao Cliente",
  "Produtividade", 
  "Recursos Humanos",
  "E-commerce",
  "SaaS",
  "Vendas",
  "Marketing Digital",
  "Financeiro"
];

export const difficultyOptions = ["Baixa", "Média", "Alta"];

export const purposeOptions = [
  "Atendimento",
  "Agendamento", 
  "Recrutamento",
  "Vendas",
  "Marketing",
  "Financeiro"
];
