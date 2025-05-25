
import { AutomationTemplate } from '@/types/automation';

export const productivityTemplates: AutomationTemplate[] = [
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
  }
];
