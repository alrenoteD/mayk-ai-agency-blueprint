
import { AutomationTemplate } from '@/types/automation';

export const saasTemplates: AutomationTemplate[] = [
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
