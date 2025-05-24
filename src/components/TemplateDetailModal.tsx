
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AutomationTemplate } from '@/data/automationTemplates';
import { Copy, Download, Eye, Clock, DollarSign, TrendingUp } from 'lucide-react';
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

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Baixa': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Média': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Alta': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

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
              <p className="text-lg font-bold text-purple-800 dark:text-purple-300">${template.monthlyCost}</p>
            </div>
            
            <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
              <div className="flex items-center gap-2 mb-1">
                <TrendingUp className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-700 dark:text-green-400">Valor sugerido</span>
              </div>
              <p className="text-lg font-bold text-green-800 dark:text-green-300">
                R$ {template.suggestedPrice.min.toLocaleString()} - R$ {template.suggestedPrice.max.toLocaleString()}
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

          {/* Templates para Download */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Templates disponíveis</h3>
            <Tabs defaultValue={Object.keys(template.templateContent)[0]} className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                {template.templateContent.n8n && <TabsTrigger value="n8n">n8n</TabsTrigger>}
                {template.templateContent.make && <TabsTrigger value="make">Make</TabsTrigger>}
                {template.templateContent.flowise && <TabsTrigger value="flowise">Flowise</TabsTrigger>}
              </TabsList>
              
              {template.templateContent.n8n && (
                <TabsContent value="n8n" className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Template n8n</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Fluxo completo para n8n com webhook, processamento e integrações.
                    </p>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleCopyTemplate('n8n', template.templateContent.n8n)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600"
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
                        Baixar
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              )}
              
              {template.templateContent.make && (
                <TabsContent value="make" className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Template Make</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Cenário completo para Make.com com módulos e conexões configuradas.
                    </p>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleCopyTemplate('Make', template.templateContent.make)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600"
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
                        Baixar
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              )}
              
              {template.templateContent.flowise && (
                <TabsContent value="flowise" className="space-y-4">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Template Flowise</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Fluxo de chatflow para Flowise com modelos de IA configurados.
                    </p>
                    <div className="flex gap-2">
                      <Button 
                        size="sm" 
                        onClick={() => handleCopyTemplate('Flowise', template.templateContent.flowise)}
                        className="bg-gradient-to-r from-purple-600 to-blue-600"
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
                        Baixar
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
