
import { AutomationTemplate } from '@/types/automation';

export const salesTemplates: AutomationTemplate[] = [
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
  }
];
