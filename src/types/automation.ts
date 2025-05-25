
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
