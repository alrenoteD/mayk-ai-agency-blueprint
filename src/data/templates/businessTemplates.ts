
import { AutomationTemplate } from '@/types/automation';

export const businessTemplates: AutomationTemplate[] = [
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
  }
];
