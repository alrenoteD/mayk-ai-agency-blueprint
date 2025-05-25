
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AutomationTemplate } from '@/types/automation';
import { Copy, Download, Clock, DollarSign, TrendingUp, Package } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

interface TemplateDetailModalProps {
  template: AutomationTemplate | null;
  isOpen: boolean;
  onClose: () => void;
}

const TemplateDetailModal: React.FC<TemplateDetailModalProps> = ({ template, isOpen, onClose }) => {
  const { toast } = useToast();

  if (!template) return null;

  const handleCopyTemplate = (platform: string, content: any) => {
    const jsonString = JSON.stringify(content, null, 2);
    navigator.clipboard.writeText(jsonString);
    toast({
      title: "Template copiado!",
      description: `Template ${platform} copiado para a área de transferência.`,
    });
  };

  const handleCopyAllTemplates = () => {
    const allTemplates = Object.entries(template.templateContent)
      .map(([platform, content]) => {
        return `// ==========================================\n// TEMPLATE ${platform.toUpperCase()}\n// ==========================================\n\n${JSON.stringify(content, null, 2)}`;
      })
      .join('\n\n');
    
    navigator.clipboard.writeText(allTemplates);
    toast({
      title: "Todos os templates copiados!",
      description: "Todos os templates foram copiados para a área de transferência.",
    });
  };

  const handleDownloadTemplate = (platform: string, content: any) => {
    const jsonString = JSON.stringify(content, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.id}-${platform}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download iniciado!",
      description: `Template ${platform} baixado com sucesso.`,
    });
  };

  const handleDownloadAllTemplates = () => {
    const allTemplates = Object.entries(template.templateContent).reduce((acc, [platform, content]) => {
      acc[platform] = content;
      return acc;
    }, {} as Record<string, any>);

    const jsonString = JSON.stringify({
      templateInfo: {
        id: template.id,
        name: template.name,
        description: template.description,
        platforms: Object.keys(template.templateContent),
        downloadedAt: new Date().toISOString()
      },
      templates: allTemplates
    }, null, 2);

    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.id}-complete.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    
    toast({
      title: "Download completo iniciado!",
      description: "Todos os templates foram baixados em um arquivo.",
    });
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Baixa': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Média': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Alta': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const formatCurrency = (amount: number, currency: 'usd' | 'brl') => {
    if (currency === 'usd') {
      return `$${amount.toLocaleString()}`;
    }
    return `R$ ${amount.toLocaleString()}`;
  };

  const availablePlatforms = Object.keys(template.templateContent);
  const hasMultiplePlatforms = availablePlatforms.length > 1;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-2">
              <DialogTitle className="text-2xl font-bold">{template.name}</DialogTitle>
              <p className="text-muted-foreground text-lg">{template.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge className={getDifficultyColor(template.difficulty)}>
                  {template.difficulty}
                </Badge>
                <Badge variant="outline">{template.category}</Badge>
                {template.popular && (
                  <Badge className="bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                    Popular
                  </Badge>
                )}
                {template.trending && (
                  <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                    Trending
                  </Badge>
                )}
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* Métricas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <Clock className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-400">Tempo</span>
              </div>
              <p className="text-lg font-bold text-blue-800 dark:text-blue-300">{template.creationTime}</p>
            </div>
            
            <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <DollarSign className="h-4 w-4 text-purple-600" />
                <span className="text-sm font-medium text-purple-700 dark:text-purple-400">Custo/mês</span>
              </div>
              <p className="text-lg font-bold text-purple-800 dark:text-purple-300">
                {formatCurrency(template.monthlyCost.usd, 'usd')} / {formatCurrency(template.monthlyCost.brl, 'brl')}
              </p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-400">Valor sugerido</span>
              </div>
              <p className="text-lg font-bold text-green-800 dark:text-green-300">
                {formatCurrency(template.suggestedPrice.min.brl, 'brl')} - {formatCurrency(template.suggestedPrice.max.brl, 'brl')}
              </p>
              <p className="text-sm text-green-700 dark:text-green-400">
                {formatCurrency(template.suggestedPrice.min.usd, 'usd')} - {formatCurrency(template.suggestedPrice.max.usd, 'usd')}
              </p>
            </div>
          </div>

          {/* Ferramentas */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Ferramentas utilizadas</h3>
            <div className="flex flex-wrap gap-2">
              {template.tools.map(tool => (
                <Badge key={tool} variant="secondary" className="text-sm">
                  {tool}
                </Badge>
              ))}
            </div>
          </div>

          {/* Recursos */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Principais recursos</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {template.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full"></div>
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Caso de uso */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Caso de uso ideal</h3>
            <p className="text-muted-foreground">{template.useCase}</p>
          </div>

          {/* Ações Globais */}
          {hasMultiplePlatforms && (
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Package className="h-5 w-5 text-purple-600" />
                Ações para todos os templates
              </h3>
              <div className="flex gap-3">
                <Button 
                  onClick={handleCopyAllTemplates}
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  <Copy className="h-4 w-4 mr-2" />
                  Copiar Todos
                </Button>
                <Button 
                  onClick={handleDownloadAllTemplates}
                  variant="outline"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Baixar Todos
                </Button>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Copie ou baixe todos os templates de uma vez, organizados por plataforma.
              </p>
            </div>
          )}

          {/* Templates para Download */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Templates prontos para importação</h3>
            <Tabs defaultValue={availablePlatforms[0]} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                {template.templateContent.n8n && <TabsTrigger value="n8n">n8n</TabsTrigger>}
                {template.templateContent.make && <TabsTrigger value="make">Make</TabsTrigger>}
                {template.templateContent.flowise && <TabsTrigger value="flowise">Flowise</TabsTrigger>}
              </TabsList>
              
              {template.templateContent.n8n && (
                <TabsContent value="n8n" className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-lg">Template n8n - Pronto para importar</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Fluxo completo para n8n com webhook, processamento e integrações. 
                      <strong> Arquivo JSON importável diretamente no n8n.</strong>
                    </p>
                    
                    <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded mb-4">
                      <h5 className="font-medium text-sm mb-2">📋 Como usar:</h5>
                      <ol className="text-xs text-muted-foreground space-y-1">
                        <li>1. Baixe ou copie o template</li>
                        <li>2. Abra o n8n e clique em "Import from JSON"</li>
                        <li>3. Cole ou selecione o arquivo baixado</li>
                        <li>4. Configure suas credenciais (API keys, webhooks)</li>
                        <li>5. Ative o workflow!</li>
                      </ol>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleCopyTemplate('n8n', template.templateContent.n8n)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copiar JSON
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownloadTemplate('n8n', template.templateContent.n8n)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Baixar .json
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              )}
              
              {template.templateContent.make && (
                <TabsContent value="make" className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-lg">Template Make - Pronto para importar</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Cenário completo para Make.com com módulos e conexões configuradas.
                      <strong> Arquivo JSON importável diretamente no Make.</strong>
                    </p>
                    
                    <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded mb-4">
                      <h5 className="font-medium text-sm mb-2">📋 Como usar:</h5>
                      <ol className="text-xs text-muted-foreground space-y-1">
                        <li>1. Baixe o template</li>
                        <li>2. Abra o Make.com e crie um novo cenário</li>
                        <li>3. Clique nos 3 pontos → "Import Blueprint"</li>
                        <li>4. Selecione o arquivo baixado</li>
                        <li>5. Configure suas conexões e ative!</li>
                      </ol>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleCopyTemplate('Make', template.templateContent.make)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copiar JSON
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownloadTemplate('Make', template.templateContent.make)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Baixar .json
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              )}
              
              {template.templateContent.flowise && (
                <TabsContent value="flowise" className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-medium mb-2 text-lg">Template Flowise - Pronto para importar</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Fluxo de chatflow para Flowise com modelos de IA configurados.
                      <strong> Arquivo JSON importável diretamente no Flowise.</strong>
                    </p>
                    
                    <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded mb-4">
                      <h5 className="font-medium text-sm mb-2">📋 Como usar:</h5>
                      <ol className="text-xs text-muted-foreground space-y-1">
                        <li>1. Baixe o template</li>
                        <li>2. Abra o Flowise e vá em "Chatflows"</li>
                        <li>3. Clique em "Add New" → "Import Chatflow"</li>
                        <li>4. Selecione o arquivo baixado</li>
                        <li>5. Configure suas API keys e teste!</li>
                      </ol>
                    </div>

                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleCopyTemplate('Flowise', template.templateContent.flowise)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Copiar JSON
                      </Button>
                      <Button 
                        size="sm" 
                        variant="outline"
                        onClick={() => handleDownloadTemplate('Flowise', template.templateContent.flowise)}
                      >
                        <Download className="h-4 w-4 mr-2" />
                        Baixar .json
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              )}
            </Tabs>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TemplateDetailModal;
