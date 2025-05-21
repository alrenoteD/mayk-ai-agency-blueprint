
export interface DocumentTemplate {
  id: string;
  title: string;
  description: string;
  category: 'contrato' | 'proposta' | 'roteiro' | 'termos' | 'bot' | 'apresentacao';
  format: 'DOCX' | 'PDF' | 'JSON' | 'XLSX' | 'PPTX' | 'TXT';
  filename: string;
  popular?: boolean;
}

export const documentTemplates: DocumentTemplate[] = [
  {
    id: 'contrato-servicos-ia',
    title: 'Contrato de Prestação de Serviços de IA',
    description: 'Modelo completo de contrato para serviços de desenvolvimento de chatbots e automações com IA',
    category: 'contrato',
    format: 'DOCX',
    filename: 'contrato-servicos-ia.docx',
    popular: true
  },
  {
    id: 'contrato-manutencao',
    title: 'Contrato de Manutenção Mensal',
    description: 'Modelo para serviços recorrentes de manutenção e suporte para soluções de IA',
    category: 'contrato',
    format: 'DOCX',
    filename: 'contrato-manutencao.docx'
  },
  {
    id: 'termo-uso-bot',
    title: 'Termo de Uso para Chatbots',
    description: 'Termo de uso para usuários finais de chatbots e assistentes virtuais',
    category: 'termos',
    format: 'DOCX',
    filename: 'termo-uso-bot.docx'
  },
  {
    id: 'politica-privacidade',
    title: 'Política de Privacidade',
    description: 'Modelo de política de privacidade com cláusulas específicas para IA e processamento de dados',
    category: 'termos',
    format: 'DOCX',
    filename: 'politica-privacidade.docx'
  },
  {
    id: 'proposta-comercial',
    title: 'Proposta Comercial - Standard',
    description: 'Template profissional de proposta comercial para projetos de automação com IA',
    category: 'proposta',
    format: 'PPTX',
    filename: 'proposta-comercial.pptx',
    popular: true
  },
  {
    id: 'proposta-comercial-premium',
    title: 'Proposta Comercial - Premium',
    description: 'Versão premium do template de proposta comercial com mais recursos visuais',
    category: 'proposta',
    format: 'PPTX',
    filename: 'proposta-comercial-premium.pptx'
  },
  {
    id: 'apresentacao-agencia',
    title: 'Apresentação da Agência',
    description: 'Modelo de apresentação institucional da sua agência de automação com IA',
    category: 'apresentacao',
    format: 'PPTX',
    filename: 'apresentacao-agencia.pptx'
  },
  {
    id: 'roteiro-vendas',
    title: 'Roteiro de Vendas - Simples',
    description: 'Roteiro para conduzir uma reunião de vendas eficiente com potenciais clientes',
    category: 'roteiro',
    format: 'PDF',
    filename: 'roteiro-vendas.pdf'
  },
  {
    id: 'roteiro-vendas-avancado',
    title: 'Roteiro de Vendas - Avançado',
    description: 'Roteiro avançado com script completo e objeções frequentes',
    category: 'roteiro',
    format: 'PDF',
    filename: 'roteiro-vendas-avancado.pdf'
  },
  {
    id: 'checklist-cliente',
    title: 'Checklist de Entrevista com Cliente',
    description: 'Formulário para levantamento completo de requisitos com o cliente',
    category: 'roteiro',
    format: 'PDF',
    filename: 'checklist-cliente.pdf'
  },
  {
    id: 'bot-atendimento',
    title: 'Bot de Atendimento ao Cliente',
    description: 'Fluxo completo para bot de atendimento com FAQ e redirecionamento',
    category: 'bot',
    format: 'JSON',
    filename: 'bot-atendimento.json',
    popular: true
  },
  {
    id: 'bot-agendamento',
    title: 'Bot de Agendamento',
    description: 'Fluxo para agendamento de consultas/serviços com validação de data',
    category: 'bot',
    format: 'JSON',
    filename: 'bot-agendamento.json'
  },
  {
    id: 'bot-ecommerce',
    title: 'Bot para E-commerce',
    description: 'Fluxo de vendas para lojas online com catálogo e pagamento',
    category: 'bot',
    format: 'JSON',
    filename: 'bot-ecommerce.json'
  },
  {
    id: 'bot-clinica',
    title: 'Bot para Clínicas',
    description: 'Fluxo especializado para clínicas médicas e odontológicas',
    category: 'bot',
    format: 'JSON',
    filename: 'bot-clinica.json'
  },
  {
    id: 'planilha-precificacao',
    title: 'Planilha de Precificação',
    description: 'Calculadora completa para definir preços de serviços de automação com IA',
    category: 'proposta',
    format: 'XLSX',
    filename: 'planilha-precificacao.xlsx',
    popular: true
  },
  {
    id: 'planilha-projetos',
    title: 'Gestão de Projetos',
    description: 'Planilha avançada para gestão de múltiplos projetos de automação com IA',
    category: 'proposta',
    format: 'XLSX',
    filename: 'planilha-projetos.xlsx'
  },
];
