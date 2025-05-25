
import { AutomationTemplate } from '@/types/automation';

export const operationsTemplates: AutomationTemplate[] = [
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
  }
];
