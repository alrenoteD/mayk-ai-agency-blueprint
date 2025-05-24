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
    useCase: "Empresas que recebem muitas mensagens no WhatsApp e precisam de atendimento 24/7",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "meta": {
          "instanceId": "whatsapp-attendant-v1"
        },
        "nodes": [
          {
            "parameters": {
              "httpMethod": "POST",
              "path": "webhook",
              "responseMode": "responseNode",
              "options": {}
            },
            "id": "webhook-node",
            "name": "WhatsApp Webhook",
            "type": "n8n-nodes-base.webhook",
            "typeVersion": 1,
            "position": [240, 300]
          },
          {
            "parameters": {
              "conditions": {
                "string": [
                  {
                    "value1": "={{ $json.entry[0].changes[0].value.messages[0].type }}",
                    "value2": "text"
                  }
                ]
              }
            },
            "id": "if-node",
            "name": "Is Text Message",
            "type": "n8n-nodes-base.if",
            "typeVersion": 1,
            "position": [460, 300]
          }
        ],
        "connections": {
          "WhatsApp Webhook": {
            "main": [
              [
                {
                  "node": "Is Text Message",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          }
        }
      },
      flowise: {
        "nodes": [
          {
            "width": 300,
            "height": 400,
            "id": "chatOpenAI_0",
            "position": {
              "x": 1000,
              "y": 300
            },
            "type": "customNode",
            "data": {
              "id": "chatOpenAI_0",
              "label": "ChatOpenAI",
              "version": 1,
              "name": "chatOpenAI",
              "type": "ChatOpenAI",
              "baseClasses": ["ChatOpenAI", "BaseChatModel"],
              "category": "Chat Models",
              "inputParams": [
                {
                  "label": "Connect Credential",
                  "name": "credential",
                  "type": "credential",
                  "credentialNames": ["openAIApi"]
                }
              ]
            }
          }
        ]
      }
    }
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
    useCase: "Clínicas, salões, consultórios e prestadores de serviços",
    popular: true,
    trending: false,
    templateContent: {
      n8n: {
        "meta": {
          "instanceId": "scheduling-agent-v1"
        },
        "nodes": [
          {
            "parameters": {
              "calendar": "primary",
              "operation": "create",
              "summary": "={{ $json.appointmentTitle }}",
              "start": "={{ $json.startTime }}",
              "end": "={{ $json.endTime }}"
            },
            "id": "google-calendar",
            "name": "Google Calendar",
            "type": "n8n-nodes-base.googleCalendar",
            "typeVersion": 1,
            "position": [800, 300]
          }
        ]
      }
    }
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
    useCase: "Empresas de RH e departamentos de recursos humanos",
    popular: false,
    trending: true,
    templateContent: {
      make: {
        "name": "Recruitment AI Pipeline",
        "flow": [
          {
            "id": 1,
            "module": "email:ActionWatchEmails",
            "version": 2,
            "parameters": {
              "folder": "INBOX",
              "criteria": "subject:CV OR subject:Resume"
            }
          }
        ]
      },
      flowise: {
        "nodes": [
          {
            "id": "documentLoader_0",
            "data": {
              "label": "PDF File Loader",
              "name": "pdfFile"
            }
          }
        ]
      }
    }
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
    useCase: "Lojas online e e-commerce que precisam manter clientes informados",
    popular: false,
    trending: false,
    templateContent: {
      n8n: {
        "nodes": [
          {
            "parameters": {
              "url": "https://api.correios.com.br/rastreio/{{ $json.trackingCode }}",
              "options": {
                "headers": {
                  "Authorization": "Bearer {{ $credentials.correiosApi.token }}"
                }
              }
            },
            "name": "Correios API",
            "type": "n8n-nodes-base.httpRequest"
          }
        ]
      }
    }
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
    useCase: "Agências que querem criar um produto SaaS próprio",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "meta": {
          "instanceId": "micro-saas-v1"
        }
      },
      flowise: {
        "nodes": []
      },
      make: {
        "name": "SaaS Multi-tenant Flow"
      }
    }
  },
  {
    id: "social-media-manager",
    name: "Gerenciador de Redes Sociais IA",
    description: "Automatiza posts, responde comentários e gera conteúdo para múltiplas redes sociais",
    purpose: "Marketing",
    creationTime: "5-7 horas",
    difficulty: "Média",
    monthlyCost: 40,
    suggestedPrice: { min: 1200, max: 3500 },
    tools: ["Make", "OpenAI", "Facebook API", "Instagram API", "Buffer"],
    category: "Marketing Digital",
    cloneUrl: "#social-media-manager",
    features: ["Posts automáticos", "Resposta a comentários", "Análise de engajamento", "Geração de conteúdo"],
    useCase: "Agências de marketing e influenciadores digitais",
    popular: true,
    trending: true,
    templateContent: {
      make: {
        "name": "Social Media Automation",
        "flow": [
          {
            "id": 1,
            "module": "openai:ActionCreateChatCompletion",
            "parameters": {
              "model": "gpt-4",
              "messages": [
                {
                  "role": "system",
                  "content": "Você é um especialista em marketing digital. Crie posts engajantes para redes sociais."
                }
              ]
            }
          }
        ]
      }
    }
  },
  {
    id: "voice-assistant-calls",
    name: "Assistente IA para Chamadas",
    description: "Bot que faz e recebe chamadas telefônicas com IA conversacional",
    purpose: "Atendimento",
    creationTime: "8-10 horas",
    difficulty: "Alta",
    monthlyCost: 60,
    suggestedPrice: { min: 2000, max: 6000 },
    tools: ["n8n", "Twilio", "OpenAI", "Speech-to-Text", "Text-to-Speech"],
    category: "Atendimento ao Cliente",
    cloneUrl: "#voice-assistant-calls",
    features: ["Reconhecimento de voz", "Síntese de fala", "Transferência para humanos", "Gravação de chamadas"],
    useCase: "Call centers e empresas com alto volume de chamadas",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "nodes": [
          {
            "parameters": {
              "operation": "makeCall",
              "to": "{{ $json.phoneNumber }}",
              "from": "{{ $credentials.twilio.phoneNumber }}",
              "twiml": "{{ $json.twimlResponse }}"
            },
            "name": "Twilio Voice",
            "type": "n8n-nodes-base.twilio"
          }
        ]
      }
    }
  },
  {
    id: "inventory-manager-ai",
    name: "Gerenciador de Estoque IA",
    description: "Sistema inteligente para controle de estoque com previsão de demanda",
    purpose: "Operacional",
    creationTime: "6-8 horas",
    difficulty: "Média",
    monthlyCost: 30,
    suggestedPrice: { min: 1500, max: 4000 },
    tools: ["n8n", "Google Sheets", "OpenAI", "Email", "Slack"],
    category: "Operações",
    cloneUrl: "#inventory-manager",
    features: ["Previsão de demanda", "Alertas de estoque baixo", "Relatórios automáticos", "Integração ERP"],
    useCase: "Lojas físicas e e-commerce com gestão de estoque",
    popular: false,
    trending: false,
    templateContent: {
      n8n: {
        "nodes": [
          {
            "parameters": {
              "operation": "read",
              "sheetId": "{{ $json.spreadsheetId }}",
              "range": "A:Z"
            },
            "name": "Google Sheets",
            "type": "n8n-nodes-base.googleSheets"
          }
        ]
      }
    }
  },
  {
    id: "financial-advisor-ai",
    name: "Consultor Financeiro IA",
    description: "Bot que analisa gastos e oferece conselhos financeiros personalizados",
    purpose: "Consultoria",
    creationTime: "7-9 horas",
    difficulty: "Alta",
    monthlyCost: 45,
    suggestedPrice: { min: 2500, max: 7000 },
    tools: ["Flowise", "OpenAI", "Plaid API", "n8n", "WhatsApp"],
    category: "Serviços Financeiros",
    cloneUrl: "#financial-advisor",
    features: ["Análise de gastos", "Planejamento financeiro", "Alertas de orçamento", "Relatórios mensais"],
    useCase: "Bancos, fintechs e consultores financeiros",
    popular: false,
    trending: true,
    templateContent: {
      flowise: {
        "nodes": [
          {
            "id": "chatOpenAI_0",
            "data": {
              "label": "Financial Advisor AI",
              "name": "chatOpenAI",
              "instructions": "Você é um consultor financeiro especializado em análise de gastos e planejamento financeiro."
            }
          }
        ]
      }
    }
  },
  {
    id: "real-estate-lead-qualifier",
    name: "Qualificador de Leads Imobiliários",
    description: "Sistema que qualifica leads imobiliários e agenda visitas automaticamente",
    purpose: "Vendas",
    creationTime: "4-6 horas",
    difficulty: "Média",
    monthlyCost: 25,
    suggestedPrice: { min: 1000, max: 3000 },
    tools: ["n8n", "WhatsApp", "Google Calendar", "CRM", "OpenAI"],
    category: "Imobiliário",
    cloneUrl: "#real-estate-qualifier",
    features: ["Qualificação de leads", "Agendamento de visitas", "Integração CRM", "Follow-up automático"],
    useCase: "Imobiliárias e corretores autônomos",
    popular: true,
    trending: false,
    templateContent: {
      n8n: {
        "nodes": [
          {
            "parameters": {
              "conditions": {
                "number": [
                  {
                    "value1": "={{ $json.budget }}",
                    "operation": "larger",
                    "value2": 100000
                  }
                ]
              }
            },
            "name": "Qualify Lead",
            "type": "n8n-nodes-base.if"
          }
        ]
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
  "Slack"
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
  "Imobiliário"
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
  "Consultoria"
];
