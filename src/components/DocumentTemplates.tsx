
import React from 'react';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, FileText, FileSpreadsheet, FilePieChart } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Template {
  id: string;
  title: string;
  description: string;
  fileFormat: 'docx' | 'pdf' | 'xlsx' | 'pptx';
  category: 'contrato' | 'proposta' | 'operacao' | 'marketing';
  downloadUrl: string;
}

const templates: Template[] = [
  {
    id: "contrato-prestacao-servicos",
    title: "Contrato de Prestação de Serviços",
    description: "Modelo de contrato para implementação de bots e soluções de IA, com cláusulas de SLA e suporte.",
    fileFormat: "docx",
    category: "contrato",
    downloadUrl: "#contrato-prestacao-servicos"
  },
  {
    id: "proposta-comercial",
    title: "Proposta Comercial",
    description: "Modelo de proposta comercial para venda de soluções de automação com IA.",
    fileFormat: "docx",
    category: "proposta",
    downloadUrl: "#proposta-comercial"
  },
  {
    id: "nda",
    title: "Acordo de Confidencialidade (NDA)",
    description: "Modelo de NDA para proteger informações sensíveis durante negociações.",
    fileFormat: "docx",
    category: "contrato",
    downloadUrl: "#nda"
  },
  {
    id: "plano-implementacao",
    title: "Plano de Implementação",
    description: "Template de cronograma para implementação de projetos de IA.",
    fileFormat: "xlsx",
    category: "operacao",
    downloadUrl: "#plano-implementacao"
  },
  {
    id: "diagnostico-autoatendimento",
    title: "Diagnóstico de Autoatendimento",
    description: "Questionário para avaliar a maturidade do cliente para automação.",
    fileFormat: "docx",
    category: "operacao", 
    downloadUrl: "#diagnostico-autoatendimento"
  },
  {
    id: "checklist-lancamento",
    title: "Checklist de Lançamento",
    description: "Lista de verificação para lançamento de bots em produção.",
    fileFormat: "pdf",
    category: "operacao",
    downloadUrl: "#checklist-lancamento"
  },
  {
    id: "pitch-deck",
    title: "Pitch Deck",
    description: "Apresentação para vender serviços de IA para potenciais clientes.",
    fileFormat: "pptx",
    category: "marketing",
    downloadUrl: "#pitch-deck"
  },
  {
    id: "calculadora-roi",
    title: "Calculadora de ROI",
    description: "Planilha para calcular o retorno sobre investimento em automação.",
    fileFormat: "xlsx",
    category: "proposta",
    downloadUrl: "#calculadora-roi"
  },
  {
    id: "relatorio-desempenho",
    title: "Relatório de Desempenho",
    description: "Modelo de relatório mensal de desempenho para clientes.",
    fileFormat: "pptx",
    category: "operacao",
    downloadUrl: "#relatorio-desempenho"
  },
  {
    id: "pesquisa-satisfacao",
    title: "Pesquisa de Satisfação",
    description: "Questionário para avaliar a satisfação dos clientes com o serviço.",
    fileFormat: "docx",
    category: "operacao",
    downloadUrl: "#pesquisa-satisfacao"
  },
  {
    id: "email-followup",
    title: "Templates de Email de Follow-up",
    description: "Modelos de emails para acompanhamento de leads e clientes.",
    fileFormat: "docx",
    category: "marketing",
    downloadUrl: "#email-followup"
  },
  {
    id: "matriz-escalacao",
    title: "Matriz de Escalação",
    description: "Template para definir níveis de suporte e processos de escalação.",
    fileFormat: "pdf",
    category: "operacao",
    downloadUrl: "#matriz-escalacao"
  }
];

// Simulate file download
const simulateDownload = (template: Template) => {
  // In a real implementation, this would be a proper file download
  // For now, we'll just create a blob with some sample text
  const content = `Este é um exemplo do conteúdo do arquivo "${template.title}".\n\n` +
                 `Este seria o arquivo ${template.fileFormat.toUpperCase()} com todas as informações necessárias para ${template.description}.\n\n` +
                 `Desenvolvido por Deylith.dev Hub\n` +
                 `© ${new Date().getFullYear()} Deylith.dev Hub - Todos os direitos reservados`;
                 
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = `${template.id}.${template.fileFormat}`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

const getFileIcon = (format: string) => {
  switch (format) {
    case 'xlsx':
      return <FileSpreadsheet className="h-5 w-5" />;
    case 'pptx':
      return <FilePieChart className="h-5 w-5" />;
    default:
      return <FileText className="h-5 w-5" />;
  }
};

const getFormatColor = (format: string) => {
  switch (format) {
    case 'docx':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
    case 'pdf':
      return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
    case 'xlsx':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
    case 'pptx':
      return 'bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'contrato':
      return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
    case 'proposta':
      return 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-300';
    case 'operacao':
      return 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300';
    case 'marketing':
      return 'bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-300';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
  }
};

const DocumentTemplates: React.FC = () => {
  const { toast } = useToast();
  const [activeCategory, setActiveCategory] = React.useState<string>('all');
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  
  const filteredTemplates = templates.filter(template => {
    const matchesCategory = activeCategory === 'all' || template.category === activeCategory;
    const matchesSearch = template.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                        template.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const handleDownload = (template: Template) => {
    simulateDownload(template);
    toast({
      description: `${template.title} baixado com sucesso!`,
      duration: 3000
    });
  };
  
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex flex-wrap gap-2">
          <Button 
            variant={activeCategory === 'all' ? "default" : "outline"} 
            size="sm" 
            onClick={() => setActiveCategory('all')}
          >
            Todos
          </Button>
          <Button 
            variant={activeCategory === 'contrato' ? "default" : "outline"} 
            size="sm"
            onClick={() => setActiveCategory('contrato')}
          >
            Contratos
          </Button>
          <Button 
            variant={activeCategory === 'proposta' ? "default" : "outline"} 
            size="sm"
            onClick={() => setActiveCategory('proposta')}
          >
            Propostas
          </Button>
          <Button 
            variant={activeCategory === 'operacao' ? "default" : "outline"} 
            size="sm"
            onClick={() => setActiveCategory('operacao')}
          >
            Operação
          </Button>
          <Button 
            variant={activeCategory === 'marketing' ? "default" : "outline"} 
            size="sm"
            onClick={() => setActiveCategory('marketing')}
          >
            Marketing
          </Button>
        </div>
        
        <div className="relative w-full sm:w-auto">
          <input
            type="text"
            placeholder="Pesquisar templates..."
            className="px-3 py-2 border rounded-md w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button 
              className="absolute right-2 top-2.5 text-gray-500 hover:text-gray-700"
              onClick={() => setSearchQuery('')}
            >
              ✕
            </button>
          )}
        </div>
      </div>
      
      {filteredTemplates.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground">Nenhum template encontrado para sua busca.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredTemplates.map((template) => (
            <Card key={template.id} className="hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <Badge variant="outline" className={getFormatColor(template.fileFormat)}>
                    {template.fileFormat.toUpperCase()}
                  </Badge>
                  <Badge variant="outline" className={getCategoryColor(template.category)}>
                    {template.category.charAt(0).toUpperCase() + template.category.slice(1)}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-2 flex items-center gap-2">
                  {getFileIcon(template.fileFormat)}
                  {template.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{template.description}</p>
              </CardContent>
              <CardFooter>
                <Button 
                  onClick={() => handleDownload(template)} 
                  variant="default" 
                  className="w-full"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Baixar template
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}
      
      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 rounded-md">
        <h4 className="text-sm font-medium text-blue-800 dark:text-blue-400 mb-2">Todos os templates são totalmente personalizáveis</h4>
        <p className="text-xs text-blue-700 dark:text-blue-500">
          Estes são modelos de referência que você pode adaptar para sua marca e necessidades específicas. Sinta-se à vontade para modificar, adicionar ou remover qualquer seção para melhor atender ao seu negócio.
        </p>
      </div>
    </div>
  );
};

export default DocumentTemplates;
