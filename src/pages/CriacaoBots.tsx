
import React from 'react';
import PageLayout from '@/components/PageLayout';
import Tutorial, { TutorialStep } from '@/components/Tutorial';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const flowiseSetupSteps: TutorialStep[] = [
  {
    title: "Instalação do Flowise",
    description: "Instale o Flowise localmente para desenvolvimento ou em produção",
    code: `# Instalação local para desenvolvimento
npm install -g flowise
npx flowise start

# Ou usando Docker
docker run -d -p 3000:3000 flowiseai/flowise`,
    tips: [
      "Para desenvolvimento, a instalação local é mais conveniente",
      "Para produção, utilize sempre Docker com persistência de dados",
      "Verifique a versão mínima do Node.js requerida (v18+)"
    ]
  },
  {
    title: "Criando seu primeiro fluxo de conversa",
    description: "Configure os componentes básicos de um fluxo de conversa no Flowise",
    tips: [
      "Sempre comece com um componente de Chat Trigger",
      "Adicione pelo menos um LLM Model como ChatOpenAI ou ChatAnthropic",
      "Use TextSplitter se estiver trabalhando com documentos extensos",
      "Conecte os componentes na ordem correta do fluxo de dados"
    ]
  },
  {
    title: "Configurando um agente com memória",
    description: "Adicione memória ao seu chatbot para lembrar do contexto da conversa",
    tips: [
      "Use componentes de Buffer Memory para conversas curtas",
      "Para conversas longas, considere Zep Memory ou Redis Memory",
      "Configure o número máximo de tokens para evitar custos excessivos",
      "Teste com diferentes tipos de memória para encontrar o ideal"
    ]
  },
  {
    title: "Adicionando conhecimento com documentos",
    description: "Ensine seu bot usando documentos e bases de conhecimento",
    tips: [
      "Use o componente Document Loader para carregar arquivos PDF, DOCX, etc.",
      "Configure corretamente o Text Splitter para chunks adequados",
      "Utilize Vector Stores como Chroma ou Pinecone para armazenar embeddings",
      "Configure o Retrieval QA Chain para consultar a base de conhecimento"
    ]
  },
  {
    title: "Integrando com APIs externas",
    description: "Adicione capacidades externas ao seu bot via API",
    code: `// Exemplo de componente personalizado para API externa
const apiCall = async (inputs) => {
  const { url, method, data } = inputs;
  try {
    const response = await axios({
      method,
      url,
      data
    });
    return { data: response.data };
  } catch (error) {
    return { error: error.message };
  }
};`,
    tips: [
      "Use o componente API Connection para chamadas simples",
      "Para lógica complexa, crie componentes personalizados",
      "Armazene chaves de API de forma segura nas variáveis de ambiente",
      "Trate erros de API adequadamente para evitar quebras no fluxo"
    ]
  },
  {
    title: "Testando e depurando seu bot",
    description: "Aprenda a testar e corrigir problemas em seus fluxos de conversa",
    tips: [
      "Use o chat de teste integrado ao Flowise",
      "Verifique os logs para identificar erros",
      "Teste com diferentes inputs para garantir robustez",
      "Implemente tratamento de erros em componentes críticos",
      "Use variable nodes para depurar valores intermediários"
    ]
  }
];

const botTypes = [
  {
    type: "Atendimento ao Cliente",
    description: "Chatbots para responder dúvidas frequentes e dar suporte inicial",
    examples: [
      "Chatbot para FAQ de uma loja virtual",
      "Assistente de suporte técnico para triagem",
      "Bot de autoatendimento para banco"
    ],
    components: ["ChatOpenAI", "BufferMemory", "PDFLoader", "ChainTool"]
  },
  {
    type: "Agendamento",
    description: "Bots para marcar consultas, reuniões ou serviços",
    examples: [
      "Agendamento de consultas médicas",
      "Reservas em restaurantes",
      "Marcação de serviços de beleza"
    ],
    components: ["ChatOpenAI", "BufferMemory", "GoogleCalendarTool", "JSONOutputParser"]
  },
  {
    type: "Vendas",
    description: "Bots focados em converter leads e realizar vendas",
    examples: [
      "Qualificação de leads para imobiliárias",
      "Vendedor virtual para e-commerce",
      "Bot para reativação de clientes inativos"
    ],
    components: ["ChatOpenAI", "ZepMemory", "PineconeStore", "APIConnection", "CRMTool"]
  },
  {
    type: "Onboarding",
    description: "Assistentes para facilitar a integração de novos clientes ou colaboradores",
    examples: [
      "Onboarding de novos funcionários",
      "Tutorial interativo de software",
      "Integração de novos alunos em curso online"
    ],
    components: ["ChatOpenAI", "BufferMemory", "ChainTool", "WebRetrieval"]
  },
  {
    type: "Educacional",
    description: "Bots para ensinar, treinar e responder dúvidas educacionais",
    examples: [
      "Tutor particular para matemática",
      "Coach virtual para programação",
      "Assistente de estudo para concursos"
    ],
    components: ["ChatAnthropic", "BufferMemory", "PDFLoader", "WebRetrieval", "ChainTool"]
  },
  {
    type: "Análise de Dados",
    description: "Bots que processam, analisam e explicam dados",
    examples: [
      "Analista de relatórios financeiros",
      "Dashboard conversacional",
      "Gerador de insights a partir de planilhas"
    ],
    components: ["ChatOpenAI", "PythonREPL", "CSVLoader", "SQLDatabaseChain", "ChartTool"]
  }
];

const CriacaoBots: React.FC = () => {
  return (
    <PageLayout 
      title="Criação de Bots no Flowise" 
      subtitle="Aprenda a criar bots inteligentes e funcionais usando Flowise"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <Tutorial 
            title="Criando sua primeira aplicação no Flowise" 
            description="Um guia passo a passo para criar bots poderosos usando o Flowise"
            steps={flowiseSetupSteps}
          />
          
          <div className="py-12"></div>
          
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Tipos de Bots e Casos de Uso</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore diferentes tipos de bots e casos de uso que você pode implementar para seus clientes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {botTypes.map((bot, index) => (
              <Card key={index} className="card-gradient">
                <CardHeader>
                  <CardTitle>{bot.type}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">{bot.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-2">Exemplos:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {bot.examples.map((example, i) => (
                        <li key={i}>{example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2">Componentes principais:</h4>
                    <div className="flex flex-wrap gap-2">
                      {bot.components.map((component, i) => (
                        <span key={i} className="px-2 py-1 bg-mayk-purple/10 text-mayk-purple text-xs rounded-md">
                          {component}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CriacaoBots;
