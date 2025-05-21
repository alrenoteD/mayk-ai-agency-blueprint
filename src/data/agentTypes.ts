
export interface AgentType {
  id: string;
  type: string;
  description: string;
  examples: string[];
  components: string[];
  flowiseInstructions?: string;
  makeInstructions?: string;
  n8nInstructions?: string;
  zaiaInstructions?: string;
  industries?: string[];
  complexity: 'básico' | 'intermediário' | 'avançado';
  setupTime?: string;
  maintenanceLevel?: 'baixo' | 'médio' | 'alto';
}

export const agentTypes: AgentType[] = [
  {
    id: 'atendimento',
    type: "Atendimento ao Cliente",
    description: "Chatbots para responder dúvidas frequentes e dar suporte inicial",
    examples: [
      "Chatbot para FAQ de uma loja virtual",
      "Assistente de suporte técnico para triagem",
      "Bot de autoatendimento para banco"
    ],
    components: ["ChatOpenAI", "BufferMemory", "PDFLoader", "ChainTool"],
    flowiseInstructions: `1. Inicie com um Chat Trigger
2. Adicione um componente de LLM (ChatOpenAI ou outro)
3. Conecte a um Vector Store com sua base de conhecimento
4. Use BufferMemory para manter o contexto da conversa
5. Adicione ChainTool para manipular redirecionamentos`,
    industries: ['E-commerce', 'SaaS', 'Bancos', 'Telecomunicações'],
    complexity: 'básico',
    setupTime: '3-5 horas',
    maintenanceLevel: 'baixo'
  },
  {
    id: 'agendamento',
    type: "Agendamento",
    description: "Bots para marcar consultas, reuniões ou serviços",
    examples: [
      "Agendamento de consultas médicas",
      "Reservas em restaurantes",
      "Marcação de serviços de beleza"
    ],
    components: ["ChatOpenAI", "BufferMemory", "GoogleCalendarTool", "JSONOutputParser"],
    flowiseInstructions: `1. Comece com um Chat Trigger
2. Conecte a um LLM como ChatOpenAI 
3. Adicione um DateParser para validar datas
4. Configure um OutputParser para estruturar as respostas
5. Use um componente de API Connection para integrar com calendários
6. Configure análise de disponibilidade com código personalizado`,
    n8nInstructions: `1. Use um trigger de Webhook para receber dados do Flowise
2. Crie um nó HTTP Request para verificar disponibilidade
3. Implemente um nó Function para formatar os dados
4. Use o nó Google Calendar para criar eventos
5. Retorne confirmação via Webhook Response`,
    industries: ['Saúde', 'Beleza', 'Gastronomia', 'Serviços Profissionais'],
    complexity: 'intermediário',
    setupTime: '5-8 horas',
    maintenanceLevel: 'médio'
  },
  {
    id: 'vendas',
    type: "Vendas",
    description: "Bots focados em converter leads e realizar vendas",
    examples: [
      "Qualificação de leads para imobiliárias",
      "Vendedor virtual para e-commerce",
      "Bot para reativação de clientes inativos"
    ],
    components: ["ChatOpenAI", "ZepMemory", "PineconeStore", "APIConnection", "CRMTool"],
    flowiseInstructions: `1. Configure um Chat Trigger com opções iniciais
2. Use um LLM avançado como GPT-4 ou Claude
3. Integre ZepMemory para histórico de conversas de longo prazo
4. Adicione um Vector Store com produtos/serviços
5. Configure ferramentas para consultar preços e disponibilidade
6. Implemente integrações com CRM via API Connection`,
    makeInstructions: `1. Configure um webhook para receber dados do cliente
2. Use um módulo HTTP para buscar histórico no CRM
3. Implemente lógica de scoring de leads
4. Crie fluxos para envio automático de propostas
5. Configure integração com sistemas de pagamento`,
    industries: ['Imobiliário', 'E-commerce', 'SaaS', 'Seguros'],
    complexity: 'avançado',
    setupTime: '10-20 horas',
    maintenanceLevel: 'alto'
  },
  {
    id: 'onboarding',
    type: "Onboarding",
    description: "Assistentes para facilitar a integração de novos clientes ou colaboradores",
    examples: [
      "Onboarding de novos funcionários",
      "Tutorial interativo de software",
      "Integração de novos alunos em curso online"
    ],
    components: ["ChatOpenAI", "BufferMemory", "ChainTool", "WebRetrieval"],
    flowiseInstructions: `1. Configure um Chat Trigger com menu inicial
2. Utilize um LLM como ChatOpenAI
3. Adicione WebRetrieval para buscar informações da documentação
4. Use BufferMemory para manter contexto da conversa
5. Implemente ChainTool para navegar entre diferentes seções do tutorial`,
    industries: ['RH', 'EdTech', 'SaaS', 'Empresas de Grande Porte'],
    complexity: 'intermediário',
    setupTime: '4-8 horas',
    maintenanceLevel: 'médio'
  },
  {
    id: 'educacional',
    type: "Educacional",
    description: "Bots para ensinar, treinar e responder dúvidas educacionais",
    examples: [
      "Tutor particular para matemática",
      "Coach virtual para programação",
      "Assistente de estudo para concursos"
    ],
    components: ["ChatAnthropic", "BufferMemory", "PDFLoader", "WebRetrieval", "ChainTool"],
    flowiseInstructions: `1. Inicie com Chat Trigger
2. Utilize LLM avançado como Claude/GPT-4 para respostas precisas
3. Configure PDFLoader para materiais didáticos
4. Adicione WebRetrieval para buscar conteúdo online
5. Implemente ferramentas para explicar com exemplos`,
    zaiaInstructions: `1. Crie um agente com persona de professor
2. Integre materiais didáticos na Knowledge Base
3. Configure ferramentas matemáticas ou de código
4. Adicione templates para diferentes formatos de explicação
5. Implemente feedback interativo para respostas do aluno`,
    industries: ['Educação', 'E-learning', 'Preparatórios', 'Escolas'],
    complexity: 'intermediário',
    setupTime: '6-10 horas',
    maintenanceLevel: 'médio'
  },
  {
    id: 'analise-dados',
    type: "Análise de Dados",
    description: "Bots que processam, analisam e explicam dados",
    examples: [
      "Analista de relatórios financeiros",
      "Dashboard conversacional",
      "Gerador de insights a partir de planilhas"
    ],
    components: ["ChatOpenAI", "PythonREPL", "CSVLoader", "SQLDatabaseChain", "ChartTool"],
    flowiseInstructions: `1. Configure Chat Trigger para receber consultas
2. Adicione CSVLoader ou SQLDatabaseChain para conectar dados
3. Utilize PythonREPL para processamento avançado
4. Implemente ChartTool para visualizações
5. Configure OutputParser para formatar resultados estruturados`,
    n8nInstructions: `1. Configure trigger para receber consultas de dados
2. Use nós SQL ou Spreadsheet para buscar dados
3. Implemente transformação com Function nodes
4. Gere gráficos e visualizações com API externa
5. Retorne resultados formatados via webhook`,
    industries: ['Finanças', 'Business Intelligence', 'Marketing', 'Consultoria'],
    complexity: 'avançado',
    setupTime: '10-15 horas',
    maintenanceLevel: 'alto'
  },
  {
    id: 'formularios',
    type: "Formulários Interativos",
    description: "Bots que coletam informações de forma conversacional",
    examples: [
      "Formulário de cadastro para leads",
      "Pesquisa de satisfação interativa",
      "Coleta de dados para cotação"
    ],
    components: ["ChatOpenAI", "StructuredOutputParser", "ValidationTool", "APIConnection"],
    flowiseInstructions: `1. Configure Chat Trigger com introdução
2. Defina um StructuredOutputParser com os campos necessários
3. Adicione ValidationTool para verificar dados informados
4. Implemente APIConnection para salvar os dados coletados
5. Configure feedback de confirmação para o usuário`,
    industries: ['Marketing', 'Seguros', 'Serviços', 'Pesquisa'],
    complexity: 'básico',
    setupTime: '2-4 horas',
    maintenanceLevel: 'baixo'
  },
  {
    id: 'triagem',
    type: "Triagem e Direcionamento",
    description: "Bots para classificar e direcionar conversas para os setores corretos",
    examples: [
      "Triagem para atendimento médico",
      "Direcionamento de suporte técnico",
      "Classificação de solicitações por departamento"
    ],
    components: ["ChatOpenAI", "ClassificationTool", "RouterChain", "APIConnection"],
    flowiseInstructions: `1. Configure Chat Trigger para recepção inicial
2. Adicione LLM com prompt específico para classificação
3. Implemente ClassificationTool para identificar categorias
4. Configure RouterChain para direcionar para fluxos específicos
5. Adicione APIConnection para notificar equipes humanas`,
    industries: ['Saúde', 'Suporte Técnico', 'Atendimento ao Cliente', 'Serviços Públicos'],
    complexity: 'intermediário',
    setupTime: '4-8 horas',
    maintenanceLevel: 'médio'
  }
];
