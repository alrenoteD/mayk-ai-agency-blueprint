
import React from 'react';
import PageLayout from '@/components/PageLayout';
import Comparison from '@/components/Comparison';

const iaProviders = [
  {
    name: "OpenRouter",
    description: "Plataforma que oferece acesso unificado a vários modelos de IA",
    advantages: [
      "Acesso a múltiplos modelos em uma única API",
      "Fallback automático entre modelos",
      "Preços competitivos",
      "Fácil integração"
    ],
    disadvantages: [
      "Camada adicional de latência",
      "Menos controle sobre configurações específicas de cada provedor"
    ],
    pricing: "Pay-as-you-go por token",
    bestFor: "Agências que precisam de flexibilidade entre diferentes modelos"
  },
  {
    name: "OpenAI API",
    description: "API oficial da OpenAI para acesso aos modelos GPT",
    advantages: [
      "Acesso aos modelos mais avançados",
      "Excelente documentação",
      "Atualizações frequentes",
      "Comunidade ativa"
    ],
    disadvantages: [
      "Preços mais elevados",
      "Limitações de uso em alguns casos",
      "Possível congestionamento em horas de pico"
    ],
    pricing: "Pay-as-you-go por token com níveis de preço por modelo",
    bestFor: "Projetos que exigem o estado da arte em LLMs"
  },
  {
    name: "Anthropic Claude",
    description: "API da Anthropic para acesso aos modelos Claude",
    advantages: [
      "Excelente em seguir instruções detalhadas",
      "Context window maior",
      "Bom para conteúdo sensível",
      "Respostas mais seguras e éticas"
    ],
    disadvantages: [
      "Portfólio de produtos mais limitado",
      "Menos recursos complementares",
      "Integração menos madura que OpenAI"
    ],
    pricing: "Pay-as-you-go por token",
    bestFor: "Casos de uso com necessidade de processamento de documentos longos e segurança"
  },
  {
    name: "Local LLMs",
    description: "Implementação de modelos em sua própria infraestrutura",
    advantages: [
      "Privacidade total dos dados",
      "Sem custos por token",
      "Controle completo",
      "Funciona offline"
    ],
    disadvantages: [
      "Requer hardware potente (GPUs)",
      "Configuração técnica complexa",
      "Desempenho geralmente inferior aos modelos comerciais",
      "Manutenção constante"
    ],
    pricing: "Custo inicial de hardware + manutenção",
    bestFor: "Projetos com alta necessidade de privacidade ou grande volume de requisições"
  }
];

const whatsappProviders = [
  {
    name: "Z-API",
    description: "API brasileira para WhatsApp, mais acessível para início",
    advantages: [
      "Interface em português",
      "Suporte técnico no Brasil",
      "Configuração simplificada",
      "Bom custo-benefício para começar"
    ],
    disadvantages: [
      "Menos recursos avançados",
      "Pode ter limitações em grande escala",
      "Menos estável que soluções oficiais"
    ],
    pricing: "A partir de R$97/mês por número",
    bestFor: "Agências brasileiras iniciantes"
  },
  {
    name: "Twilio",
    description: "Plataforma global de comunicação com suporte a WhatsApp Business API",
    advantages: [
      "Alta confiabilidade",
      "Documentação extensa",
      "Escalabilidade global",
      "Integrações múltiplas"
    ],
    disadvantages: [
      "Custo mais elevado",
      "Complexidade para iniciantes",
      "Suporte pode ser mais demorado"
    ],
    pricing: "Pagamento por mensagem + mensalidade",
    bestFor: "Agências com clientes internacionais ou grande volume"
  },
  {
    name: "API Oficial Meta",
    description: "Acesso direto à API oficial do WhatsApp Business",
    advantages: [
      "Sem intermediários",
      "Mais estável a longo prazo",
      "Acesso a recursos antecipados",
      "Limite de mensagens mais alto"
    ],
    disadvantages: [
      "Processo de aprovação demorado",
      "Configuração técnica mais complexa",
      "Requer número de telefone dedicado"
    ],
    pricing: "Preços variáveis por volume e região",
    bestFor: "Agências em fase de escala e com equipe técnica"
  },
  {
    name: "360dialog",
    description: "Parceiro oficial do WhatsApp com foco em mensageria",
    advantages: [
      "Interface amigável",
      "Bom para campanhas de marketing",
      "Acesso a métricas detalhadas",
      "Parceiro oficial da Meta"
    ],
    disadvantages: [
      "Preços podem escalar rapidamente com volume",
      "Menos flexibilidade em alguns casos"
    ],
    pricing: "Mensal + por mensagem",
    bestFor: "Marketing e campanhas promocionais"
  },
  {
    name: "Ultramsg",
    description: "Solução acessível para pequenos negócios",
    advantages: [
      "Fácil configuração",
      "Preço acessível",
      "Documentação clara",
      "Bom para testes iniciais"
    ],
    disadvantages: [
      "Menos robusto para grandes volumes",
      "Suporte mais limitado",
      "Menos recursos avançados"
    ],
    pricing: "Planos a partir de $39/mês",
    bestFor: "MVPs e testes de conceito"
  }
];

const automationTools = [
  {
    name: "Flowise",
    description: "Plataforma open-source para criar fluxos de IA com interface visual",
    advantages: [
      "Código aberto e gratuito",
      "Interface visual drag-and-drop",
      "Compatível com múltiplos LLMs",
      "Comunidade ativa",
      "Fácil de customizar"
    ],
    disadvantages: [
      "Requer hospedagem própria",
      "Menos suporte corporativo",
      "Pode necessitar de customizações para casos avançados"
    ],
    pricing: "Gratuito (open-source)",
    bestFor: "Criação de bots e automações de IA"
  },
  {
    name: "N8N",
    description: "Ferramenta de automação de workflows com código aberto",
    advantages: [
      "Código aberto",
      "Hospedagem própria possível",
      "Muito flexível",
      "Boa documentação",
      "Integração com centenas de serviços"
    ],
    disadvantages: [
      "Requer conhecimento técnico",
      "Precisa de manutenção",
      "Menos templates prontos"
    ],
    pricing: "Gratuito (self-hosted) ou planos pagos em cloud",
    bestFor: "Automação de processos e integração entre sistemas"
  },
  {
    name: "Make (Integromat)",
    description: "Plataforma visual de automação com foco em simplicidade",
    advantages: [
      "Interface intuitiva",
      "Muitos conectores prontos",
      "Templates disponíveis",
      "Bom suporte técnico"
    ],
    disadvantages: [
      "Limites na versão gratuita",
      "Pode ficar caro com uso intenso",
      "Algumas integrações avançadas são limitadas"
    ],
    pricing: "Freemium com planos pagos por operações",
    bestFor: "Marketing digital e automações de negócios"
  }
];

const Ambiente: React.FC = () => {
  return (
    <PageLayout 
      title="Ambiente e Ferramentas" 
      subtitle="Conheça as principais ferramentas e tecnologias para criar sua agência de IA"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Kits de Ferramentas por Nível</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              A escolha das ferramentas corretas é fundamental para o sucesso da sua agência de IA.
              Conheça as opções e selecione as que melhor se adaptam ao seu estágio atual.
            </p>
          </div>
          
          <Comparison 
            title="Provedores de IA" 
            description="Compare os principais provedores de modelos de linguagem para sua agência"
            items={iaProviders}
          />
          
          <div className="py-8"></div>
          
          <Comparison 
            title="APIs de WhatsApp" 
            description="Compare as diferentes opções para integrar seus bots com WhatsApp"
            items={whatsappProviders}
          />
          
          <div className="py-8"></div>
          
          <Comparison 
            title="Ferramentas de Automação" 
            description="Escolha as melhores ferramentas para criar seus fluxos de automação"
            items={automationTools}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default Ambiente;
