
import { AutomationTemplate } from '@/types/automation';

export const customerServiceTemplates: AutomationTemplate[] = [
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
  }
];
