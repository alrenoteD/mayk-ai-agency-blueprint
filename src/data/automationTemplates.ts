
export interface AutomationTemplate {
  id: string;
  name: string;
  description: string;
  purpose: string;
  creationTime: string;
  difficulty: 'Baixa' | 'Média' | 'Alta';
  monthlyCost: {
    usd: number;
    brl: number;
  };
  costBreakdown: {
    item: string;
    cost: {
      usd: number;
      brl: number;
    };
    description: string;
  }[];
  suggestedPrice: {
    min: {
      usd: number;
      brl: number;
    };
    max: {
      usd: number;
      brl: number;
    };
  };
  tools: string[];
  category: string;
  cloneUrl: string;
  features: string[];
  useCase: string;
  popular: boolean;
  trending: boolean;
  templateContent: {
    n8n?: any;
    make?: any;
    flowise?: any;
  };
  previewImages?: string[];
}

export const automationTemplates: AutomationTemplate[] = [
  {
    id: "whatsapp-attendant-simple",
    name: "Atendente IA Simples para WhatsApp",
    description: "Chatbot básico para respostas automáticas e redirecionamento para humanos",
    purpose: "Atendimento",
    creationTime: "2-3 horas",
    difficulty: "Baixa",
    monthlyCost: { usd: 15, brl: 75 },
    costBreakdown: [
      { item: "WhatsApp Business API", cost: { usd: 10, brl: 50 }, description: "Mensagens enviadas e recebidas" },
      { item: "Hosting (n8n)", cost: { usd: 5, brl: 25 }, description: "Servidor para automação" }
    ],
    suggestedPrice: { min: { usd: 100, brl: 500 }, max: { usd: 300, brl: 1500 } },
    tools: ["n8n", "WhatsApp Business API"],
    category: "Atendimento ao Cliente",
    cloneUrl: "#whatsapp-simple-template",
    features: ["Respostas automáticas", "Horário de funcionamento", "Redirecionamento para humano"],
    useCase: "Pequenas empresas que precisam de atendimento básico 24/7",
    popular: true,
    trending: false,
    templateContent: {
      n8n: {
        "meta": { "instanceId": "whatsapp-simple-v1" },
        "nodes": [
          {
            "parameters": {
              "httpMethod": "POST",
              "path": "webhook",
              "responseMode": "responseNode"
            },
            "id": "webhook-node",
            "name": "WhatsApp Webhook",
            "type": "n8n-nodes-base.webhook",
            "typeVersion": 1,
            "position": [240, 300]
          }
        ]
      }
    }
  },
  {
    id: "whatsapp-attendant-advanced",
    name: "Atendente IA Avançado para WhatsApp",
    description: "Sistema completo com IA conversacional, histórico e integração CRM",
    purpose: "Atendimento",
    creationTime: "1-2 semanas",
    difficulty: "Alta",
    monthlyCost: { usd: 85, brl: 425 },
    costBreakdown: [
      { item: "WhatsApp Business API", cost: { usd: 25, brl: 125 }, description: "Alto volume de mensagens" },
      { item: "OpenAI API", cost: { usd: 30, brl: 150 }, description: "Processamento de linguagem natural" },
      { item: "Database", cost: { usd: 15, brl: 75 }, description: "Armazenamento de conversas" },
      { item: "Hosting", cost: { usd: 15, brl: 75 }, description: "Infraestrutura robusta" }
    ],
    suggestedPrice: { min: { usd: 500, brl: 2500 }, max: { usd: 1500, brl: 7500 } },
    tools: ["n8n", "Flowise", "WhatsApp Business API", "OpenAI", "PostgreSQL", "Redis"],
    category: "Atendimento ao Cliente",
    cloneUrl: "#whatsapp-advanced-template",
    features: ["IA conversacional", "Histórico completo", "Integração CRM", "Analytics", "Escalação inteligente"],
    useCase: "Empresas médias/grandes com alto volume de atendimento",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "meta": { "instanceId": "whatsapp-advanced-v1" },
        "nodes": []
      },
      flowise: {
        "nodes": [
          {
            "id": "chatOpenAI_0",
            "data": {
              "label": "ChatOpenAI Advanced",
              "name": "chatOpenAI"
            }
          }
        ]
      }
    }
  },
  {
    id: "appointment-scheduler-basic",
    name: "Agendador Básico",
    description: "Sistema simples de agendamento com Google Calendar",
    purpose: "Agendamento",
    creationTime: "3-4 horas",
    difficulty: "Baixa",
    monthlyCost: { usd: 8, brl: 40 },
    costBreakdown: [
      { item: "Google Calendar API", cost: { usd: 0, brl: 0 }, description: "Gratuito para uso básico" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Servidor básico" },
      { item: "SMS/Email", cost: { usd: 3, brl: 15 }, description: "Notificações" }
    ],
    suggestedPrice: { min: { usd: 80, brl: 400 }, max: { usd: 250, brl: 1250 } },
    tools: ["n8n", "Google Calendar", "Email"],
    category: "Produtividade",
    cloneUrl: "#scheduler-basic-template",
    features: ["Agendamento simples", "Confirmação por email", "Lembretes"],
    useCase: "Profissionais autônomos e pequenos consultórios",
    popular: false,
    trending: false,
    templateContent: {
      n8n: {
        "nodes": [
          {
            "parameters": {
              "calendar": "primary",
              "operation": "create"
            },
            "name": "Google Calendar",
            "type": "n8n-nodes-base.googleCalendar"
          }
        ]
      }
    }
  },
  {
    id: "appointment-scheduler-ai",
    name: "Agendador IA Inteligente",
    description: "Sistema avançado com IA para otimização de horários e reagendamentos automáticos",
    purpose: "Agendamento",
    creationTime: "1-2 semanas",
    difficulty: "Alta",
    monthlyCost: { usd: 45, brl: 225 },
    costBreakdown: [
      { item: "OpenAI API", cost: { usd: 20, brl: 100 }, description: "Processamento inteligente" },
      { item: "WhatsApp/SMS", cost: { usd: 15, brl: 75 }, description: "Comunicação multi-canal" },
      { item: "Database", cost: { usd: 5, brl: 25 }, description: "Dados de clientes" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Infraestrutura" }
    ],
    suggestedPrice: { min: { usd: 400, brl: 2000 }, max: { usd: 1200, brl: 6000 } },
    tools: ["n8n", "Flowise", "Google Calendar", "OpenAI", "WhatsApp", "Twilio"],
    category: "Produtividade",
    cloneUrl: "#scheduler-ai-template",
    features: ["IA para otimização", "Reagendamento automático", "Multi-canal", "Analytics preditivos"],
    useCase: "Clínicas, salões e empresas com agenda complexa",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "nodes": []
      },
      flowise: {
        "nodes": []
      }
    }
  },
  {
    id: "lead-qualifier-basic",
    name: "Qualificador de Leads Básico",
    description: "Sistema simples para captura e qualificação inicial de leads",
    purpose: "Vendas",
    creationTime: "2-3 horas",
    difficulty: "Baixa",
    monthlyCost: { usd: 12, brl: 60 },
    costBreakdown: [
      { item: "Webhooks/Forms", cost: { usd: 0, brl: 0 }, description: "Captura de dados" },
      { item: "Email Marketing", cost: { usd: 7, brl: 35 }, description: "Envio automatizado" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Processamento" }
    ],
    suggestedPrice: { min: { usd: 60, brl: 300 }, max: { usd: 200, brl: 1000 } },
    tools: ["n8n", "Email", "Webhook"],
    category: "Vendas",
    cloneUrl: "#lead-qualifier-basic",
    features: ["Formulários automáticos", "Pontuação simples", "Email follow-up"],
    useCase: "Pequenas empresas e freelancers",
    popular: false,
    trending: false,
    templateContent: {
      n8n: {
        "nodes": []
      }
    }
  },
  {
    id: "lead-qualifier-ai",
    name: "Qualificador de Leads IA Avançado",
    description: "Sistema inteligente com scoring automático e conversação natural",
    purpose: "Vendas",
    creationTime: "1-2 semanas",
    difficulty: "Alta",
    monthlyCost: { usd: 65, brl: 325 },
    costBreakdown: [
      { item: "OpenAI API", cost: { usd: 25, brl: 125 }, description: "Análise inteligente de leads" },
      { item: "WhatsApp/Chat", cost: { usd: 20, brl: 100 }, description: "Conversação automática" },
      { item: "CRM Integration", cost: { usd: 10, brl: 50 }, description: "HubSpot/Pipedrive" },
      { item: "Database", cost: { usd: 5, brl: 25 }, description: "Armazenamento" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Infraestrutura" }
    ],
    suggestedPrice: { min: { usd: 600, brl: 3000 }, max: { usd: 2000, brl: 10000 } },
    tools: ["n8n", "Flowise", "OpenAI", "HubSpot", "WhatsApp", "Make"],
    category: "Vendas",
    cloneUrl: "#lead-qualifier-ai",
    features: ["Scoring inteligente", "Conversação natural", "Integração CRM", "Analytics avançados"],
    useCase: "Agências e empresas B2B com processo de vendas complexo",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "nodes": []
      },
      flowise: {
        "nodes": []
      },
      make: {
        "name": "AI Lead Qualification"
      }
    }
  },
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
    id: "voice-assistant-basic",
    name: "Assistente de Voz Básico",
    description: "Bot simples para atendimento telefônico com menu de opções",
    purpose: "Atendimento",
    creationTime: "4-6 horas",
    difficulty: "Média",
    monthlyCost: { usd: 35, brl: 175 },
    costBreakdown: [
      { item: "Twilio Voice", cost: { usd: 25, brl: 125 }, description: "Chamadas telefônicas" },
      { item: "Text-to-Speech", cost: { usd: 5, brl: 25 }, description: "Síntese de voz" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Processamento" }
    ],
    suggestedPrice: { min: { usd: 200, brl: 1000 }, max: { usd: 600, brl: 3000 } },
    tools: ["n8n", "Twilio", "Text-to-Speech"],
    category: "Atendimento ao Cliente",
    cloneUrl: "#voice-basic",
    features: ["Menu por voz", "Redirecionamento", "Gravação de chamadas"],
    useCase: "Pequenas empresas com atendimento telefônico",
    popular: false,
    trending: false,
    templateContent: {
      n8n: {
        "nodes": []
      }
    }
  },
  {
    id: "voice-assistant-ai",
    name: "Assistente de Voz IA Conversacional",
    description: "Sistema avançado com IA conversacional e reconhecimento de voz",
    purpose: "Atendimento",
    creationTime: "2-3 semanas",
    difficulty: "Alta",
    monthlyCost: { usd: 120, brl: 600 },
    costBreakdown: [
      { item: "Twilio Voice", cost: { usd: 50, brl: 250 }, description: "Alto volume de chamadas" },
      { item: "OpenAI API", cost: { usd: 35, brl: 175 }, description: "Processamento conversacional" },
      { item: "Speech-to-Text", cost: { usd: 20, brl: 100 }, description: "Reconhecimento de voz" },
      { item: "Text-to-Speech", cost: { usd: 10, brl: 50 }, description: "Síntese natural" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Infraestrutura" }
    ],
    suggestedPrice: { min: { usd: 1000, brl: 5000 }, max: { usd: 4000, brl: 20000 } },
    tools: ["n8n", "Flowise", "Twilio", "OpenAI", "Speech-to-Text", "Text-to-Speech"],
    category: "Atendimento ao Cliente",
    cloneUrl: "#voice-ai",
    features: ["Conversação natural", "Reconhecimento de contexto", "Transferência inteligente", "Analytics de chamadas"],
    useCase: "Call centers e empresas com atendimento complexo",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "nodes": []
      },
      flowise: {
        "nodes": []
      }
    }
  },
  {
    id: "inventory-tracker-basic",
    name: "Controle de Estoque Básico",
    description: "Sistema simples para monitoramento de estoque com alertas",
    purpose: "Operacional",
    creationTime: "3-5 horas",
    difficulty: "Baixa",
    monthlyCost: { usd: 10, brl: 50 },
    costBreakdown: [
      { item: "Google Sheets API", cost: { usd: 0, brl: 0 }, description: "Armazenamento gratuito" },
      { item: "Email/SMS", cost: { usd: 5, brl: 25 }, description: "Alertas" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Automação" }
    ],
    suggestedPrice: { min: { usd: 80, brl: 400 }, max: { usd: 300, brl: 1500 } },
    tools: ["n8n", "Google Sheets", "Email"],
    category: "Operações",
    cloneUrl: "#inventory-basic",
    features: ["Alertas de estoque baixo", "Relatórios semanais", "Integração planilhas"],
    useCase: "Pequenas lojas e estoques simples",
    popular: false,
    trending: false,
    templateContent: {
      n8n: {
        "nodes": []
      }
    }
  },
  {
    id: "inventory-tracker-ai",
    name: "Gerenciador de Estoque IA Preditivo",
    description: "Sistema inteligente com previsão de demanda e otimização automática",
    purpose: "Operacional",
    creationTime: "2-3 semanas",
    difficulty: "Alta",
    monthlyCost: { usd: 85, brl: 425 },
    costBreakdown: [
      { item: "OpenAI API", cost: { usd: 30, brl: 150 }, description: "Análise preditiva" },
      { item: "Database", cost: { usd: 25, brl: 125 }, description: "Histórico detalhado" },
      { item: "ERP Integration", cost: { usd: 20, brl: 100 }, description: "Sistemas empresariais" },
      { item: "Hosting", cost: { usd: 10, brl: 50 }, description: "Infraestrutura robusta" }
    ],
    suggestedPrice: { min: { usd: 1000, brl: 5000 }, max: { usd: 5000, brl: 25000 } },
    tools: ["n8n", "Flowise", "OpenAI", "PostgreSQL", "ERP APIs", "Power BI"],
    category: "Operações",
    cloneUrl: "#inventory-ai",
    features: ["Previsão de demanda", "Otimização automática", "Integração ERP", "Dashboards inteligentes"],
    useCase: "Empresas médias/grandes com estoque complexo",
    popular: false,
    trending: true,
    templateContent: {
      n8n: {
        "nodes": []
      },
      flowise: {
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
    id: "financial-assistant-basic",
    name: "Assistente Financeiro Simples",
    description: "Bot básico para consultas de saldo e extrato",
    purpose: "Financeiro",
    creationTime: "4-6 horas",
    difficulty: "Média",
    monthlyCost: { usd: 25, brl: 125 },
    costBreakdown: [
      { item: "Banking APIs", cost: { usd: 15, brl: 75 }, description: "Integração bancária" },
      { item: "WhatsApp", cost: { usd: 5, brl: 25 }, description: "Interface de comunicação" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Segurança" }
    ],
    suggestedPrice: { min: { usd: 200, brl: 1000 }, max: { usd: 800, brl: 4000 } },
    tools: ["n8n", "Banking API", "WhatsApp"],
    category: "Serviços Financeiros",
    cloneUrl: "#financial-basic",
    features: ["Consulta de saldo", "Extrato por período", "Alertas de movimentação"],
    useCase: "Bancos digitais e fintechs",
    popular: false,
    trending: false,
    templateContent: {
      n8n: {
        "nodes": []
      }
    }
  },
  {
    id: "recruitment-basic",
    name: "Recrutamento Básico",
    description: "Sistema simples para triagem inicial de candidatos",
    purpose: "Recrutamento",
    creationTime: "3-5 horas",
    difficulty: "Baixa",
    monthlyCost: { usd: 15, brl: 75 },
    costBreakdown: [
      { item: "Email/Forms", cost: { usd: 5, brl: 25 }, description: "Coleta de dados" },
      { item: "File Storage", cost: { usd: 5, brl: 25 }, description: "Armazenamento de CVs" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Processamento" }
    ],
    suggestedPrice: { min: { usd: 100, brl: 500 }, max: { usd: 400, brl: 2000 } },
    tools: ["n8n", "Email", "Google Drive"],
    category: "Recursos Humanos",
    cloneUrl: "#recruitment-basic",
    features: ["Triagem por palavras-chave", "Agendamento automático", "Notificações"],
    useCase: "Pequenas empresas e consultores de RH",
    popular: false,
    trending: false,
    templateContent: {
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
  },
  {
    id: "order-tracking-advanced",
    name: "Rastreamento Avançado de Pedidos",
    description: "Sistema completo com múltiplas transportadoras e notificações inteligentes",
    purpose: "E-commerce",
    creationTime: "1 semana",
    difficulty: "Média",
    monthlyCost: { usd: 35, brl: 175 },
    costBreakdown: [
      { item: "Shipping APIs", cost: { usd: 20, brl: 100 }, description: "Múltiplas transportadoras" },
      { item: "WhatsApp/SMS", cost: { usd: 10, brl: 50 }, description: "Notificações" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Processamento" }
    ],
    suggestedPrice: { min: { usd: 300, brl: 1500 }, max: { usd: 1000, brl: 5000 } },
    tools: ["n8n", "Correios API", "FedEx API", "WhatsApp", "SMS"],
    category: "E-commerce",
    cloneUrl: "#order-tracking-advanced",
    features: ["Múltiplas transportadoras", "Notificações inteligentes", "Previsão de entrega", "Mapa de rastreamento"],
    useCase: "E-commerce médio/grande porte",
    popular: false,
    trending: false,
    templateContent: {
      n8n: {
        "nodes": []
      }
    }
  },
  {
    id: "survey-analyzer-ai",
    name: "Analisador de Pesquisas IA",
    description: "Sistema para criação, distribuição e análise inteligente de pesquisas",
    purpose: "Pesquisa",
    creationTime: "1-2 semanas",
    difficulty: "Média",
    monthlyCost: { usd: 45, brl: 225 },
    costBreakdown: [
      { item: "OpenAI API", cost: { usd: 25, brl: 125 }, description: "Análise de sentimentos" },
      { item: "Survey Platform", cost: { usd: 15, brl: 75 }, description: "Criação de pesquisas" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Processamento" }
    ],
    suggestedPrice: { min: { usd: 400, brl: 2000 }, max: { usd: 1200, brl: 6000 } },
    tools: ["n8n", "Flowise", "Typeform", "OpenAI", "Power BI"],
    category: "Pesquisa e Análise",
    cloneUrl: "#survey-analyzer",
    features: ["Criação automática", "Análise de sentimentos", "Relatórios inteligentes", "Insights automáticos"],
    useCase: "Empresas de pesquisa e departamentos de marketing",
    popular: false,
    trending: true,
    templateContent: {
      n8n: {
        "nodes": []
      },
      flowise: {
        "nodes": []
      }
    }
  },
  {
    id: "micro-saas-complete",
    name: "Micro-SaaS Completo Multi-Tenant",
    description: "Plataforma completa para criação de SaaS com billing e dashboard",
    purpose: "SaaS",
    creationTime: "1-2 meses",
    difficulty: "Alta",
    monthlyCost: { usd: 150, brl: 750 },
    costBreakdown: [
      { item: "Database", cost: { usd: 50, brl: 250 }, description: "PostgreSQL robusto" },
      { item: "Stripe", cost: { usd: 30, brl: 150 }, description: "Processamento de pagamentos" },
      { item: "Hosting", cost: { usd: 40, brl: 200 }, description: "Infraestrutura escalável" },
      { item: "CDN", cost: { usd: 15, brl: 75 }, description: "Entrega de conteúdo" },
      { item: "Monitoring", cost: { usd: 15, brl: 75 }, description: "Monitoramento e logs" }
    ],
    suggestedPrice: { min: { usd: 2000, brl: 10000 }, max: { usd: 10000, brl: 50000 } },
    tools: ["n8n", "Flowise", "Make", "Stripe", "PostgreSQL", "React", "Docker"],
    category: "SaaS",
    cloneUrl: "#micro-saas-complete",
    features: ["Multi-tenant", "Billing automático", "Dashboard completo", "White-label", "API completa"],
    useCase: "Agências que querem criar produtos SaaS próprios",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "nodes": []
      },
      flowise: {
        "nodes": []
      },
      make: {
        "name": "Complete SaaS Platform"
      }
    }
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
  "Correios API",
  "Speech-to-Text",
  "Text-to-Speech",
  "Google Sheets",
  "Plaid API",
  "Facebook API",
  "Instagram API",
  "Slack",
  "PostgreSQL",
  "Redis",
  "DALL-E",
  "Mailchimp",
  "SendGrid",
  "Typeform",
  "Power BI",
  "Docker",
  "React"
];

export const categoriesOptions = [
  "Atendimento ao Cliente",
  "Produtividade", 
  "Recursos Humanos",
  "E-commerce",
  "SaaS",
  "Vendas",
  "Marketing Digital",
  "Financeiro",
  "Operações",
  "Serviços Financeiros",
  "Imobiliário",
  "Pesquisa e Análise"
];

export const difficultyOptions = ["Baixa", "Média", "Alta"];

export const purposeOptions = [
  "Atendimento",
  "Agendamento", 
  "Recrutamento",
  "Vendas",
  "Marketing",
  "Financeiro",
  "Operacional",
  "Consultoria",
  "E-commerce",
  "SaaS",
  "Pesquisa"
];
