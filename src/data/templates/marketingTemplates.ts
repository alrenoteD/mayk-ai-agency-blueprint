
import { AutomationTemplate } from '@/types/automation';

export const marketingTemplates: AutomationTemplate[] = [
  {
    id: "social-media-basic",
    name: "Gerenciador Social Básico",
    description: "Postagem automática simples em redes sociais",
    purpose: "Marketing",
    creationTime: "2-4 horas",
    difficulty: "Baixa",
    monthlyCost: { usd: 18, brl: 90 },
    costBreakdown: [
      { item: "Buffer/Hootsuite", cost: { usd: 15, brl: 75 }, description: "Agendamento de posts" },
      { item: "Hosting", cost: { usd: 3, brl: 15 }, description: "Automação" }
    ],
    suggestedPrice: { min: { usd: 100, brl: 500 }, max: { usd: 400, brl: 2000 } },
    tools: ["Make", "Buffer", "Facebook API", "Instagram API"],
    category: "Marketing Digital",
    cloneUrl: "#social-basic",
    features: ["Agendamento automático", "Multi-plataforma", "Relatórios básicos"],
    useCase: "Pequenas empresas e influenciadores iniciantes",
    popular: false,
    trending: false,
    templateContent: {
      make: {
        "name": "Basic Social Media Automation"
      }
    }
  },
  {
    id: "social-media-ai",
    name: "Gerenciador Social IA Completo",
    description: "Sistema completo com geração de conteúdo IA e análise de engajamento",
    purpose: "Marketing",
    creationTime: "2-3 semanas",
    difficulty: "Alta",
    monthlyCost: { usd: 95, brl: 475 },
    costBreakdown: [
      { item: "OpenAI API", cost: { usd: 40, brl: 200 }, description: "Geração de conteúdo" },
      { item: "Social APIs", cost: { usd: 25, brl: 125 }, description: "Facebook, Instagram, LinkedIn" },
      { item: "Image Generation", cost: { usd: 15, brl: 75 }, description: "DALL-E, Midjourney" },
      { item: "Analytics Tools", cost: { usd: 10, brl: 50 }, description: "Métricas avançadas" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Infraestrutura" }
    ],
    suggestedPrice: { min: { usd: 800, brl: 4000 }, max: { usd: 3000, brl: 15000 } },
    tools: ["Make", "n8n", "OpenAI", "DALL-E", "Facebook API", "Instagram API", "LinkedIn API"],
    category: "Marketing Digital",
    cloneUrl: "#social-ai-complete",
    features: ["Geração automática de conteúdo", "Criação de imagens", "Análise de sentimento", "Otimização de horários"],
    useCase: "Agências de marketing e grandes empresas",
    popular: true,
    trending: true,
    templateContent: {
      make: {
        "name": "AI Social Media Manager"
      },
      n8n: {
        "nodes": []
      }
    }
  },
  {
    id: "email-marketing-basic",
    name: "Email Marketing Básico",
    description: "Automação simples de campanhas de email",
    purpose: "Marketing",
    creationTime: "2-3 horas",
    difficulty: "Baixa",
    monthlyCost: { usd: 12, brl: 60 },
    costBreakdown: [
      { item: "Mailchimp/SendGrid", cost: { usd: 10, brl: 50 }, description: "Envio de emails" },
      { item: "Hosting", cost: { usd: 2, brl: 10 }, description: "Automação" }
    ],
    suggestedPrice: { min: { usd: 60, brl: 300 }, max: { usd: 250, brl: 1250 } },
    tools: ["Make", "Mailchimp", "Webhook"],
    category: "Marketing Digital",
    cloneUrl: "#email-basic",
    features: ["Campanhas automáticas", "Segmentação básica", "Relatórios"],
    useCase: "Pequenas empresas e startups",
    popular: false,
    trending: false,
    templateContent: {
      make: {
        "name": "Basic Email Marketing"
      }
    }
  },
  {
    id: "email-marketing-ai",
    name: "Email Marketing IA Personalizado",
    description: "Sistema avançado com personalização IA e otimização automática",
    purpose: "Marketing",
    creationTime: "1-2 semanas",
    difficulty: "Alta",
    monthlyCost: { usd: 75, brl: 375 },
    costBreakdown: [
      { item: "OpenAI API", cost: { usd: 30, brl: 150 }, description: "Personalização de conteúdo" },
      { item: "Email Platform", cost: { usd: 25, brl: 125 }, description: "Envio em massa" },
      { item: "Analytics", cost: { usd: 15, brl: 75 }, description: "Análise comportamental" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Processamento" }
    ],
    suggestedPrice: { min: { usd: 500, brl: 2500 }, max: { usd: 2000, brl: 10000 } },
    tools: ["Make", "n8n", "OpenAI", "Mailchimp", "Google Analytics"],
    category: "Marketing Digital",
    cloneUrl: "#email-ai",
    features: ["Personalização IA", "A/B testing automático", "Otimização de horários", "Segmentação inteligente"],
    useCase: "E-commerce e empresas com base grande de clientes",
    popular: true,
    trending: true,
    templateContent: {
      make: {
        "name": "AI Email Marketing"
      },
      n8n: {
        "nodes": []
      }
    }
  },
  {
    id: "content-creator-ai",
    name: "Criador de Conteúdo IA",
    description: "Sistema para geração automática de conteúdo para blogs e redes sociais",
    purpose: "Marketing",
    creationTime: "1-2 semanas",
    difficulty: "Média",
    monthlyCost: { usd: 55, brl: 275 },
    costBreakdown: [
      { item: "OpenAI API", cost: { usd: 40, brl: 200 }, description: "Geração de texto" },
      { item: "Image APIs", cost: { usd: 10, brl: 50 }, description: "Geração de imagens" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Processamento" }
    ],
    suggestedPrice: { min: { usd: 400, brl: 2000 }, max: { usd: 1500, brl: 7500 } },
    tools: ["n8n", "OpenAI", "DALL-E", "WordPress API"],
    category: "Marketing Digital",
    cloneUrl: "#content-creator",
    features: ["Geração automática de artigos", "Criação de imagens", "Publicação automática", "SEO otimizado"],
    useCase: "Blogs, agências de conteúdo e marketing",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "nodes": []
      }
    }
  }
];
