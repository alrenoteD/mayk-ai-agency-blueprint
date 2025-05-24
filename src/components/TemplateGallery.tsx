import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { automationTemplates, toolsOptions, categoriesOptions, difficultyOptions, purposeOptions, AutomationTemplate } from '@/data/automationTemplates';
import { Clock, DollarSign, TrendingUp, Copy, Star, Filter, Eye, Flame, Zap } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";
import TemplateDetailModal from './TemplateDetailModal';

const TemplateGallery: React.FC = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedPurpose, setSelectedPurpose] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<AutomationTemplate | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredTemplates = useMemo(() => {
    return automationTemplates.filter(template => {
      const matchesSearch = template.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          template.description.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesTools = selectedTools.length === 0 || 
                          selectedTools.some(tool => template.tools.includes(tool));
      
      const matchesCategory = selectedCategory === 'all' || template.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === 'all' || template.difficulty === selectedDifficulty;
      const matchesPurpose = selectedPurpose === 'all' || template.purpose === selectedPurpose;
      
      const matchesPrice = priceRange === 'all' || 
        (priceRange === 'low' && template.suggestedPrice.max <= 1500) ||
        (priceRange === 'medium' && template.suggestedPrice.min >= 1000 && template.suggestedPrice.max <= 4000) ||
        (priceRange === 'high' && template.suggestedPrice.min >= 3000);

      return matchesSearch && matchesTools && matchesCategory && matchesDifficulty && matchesPurpose && matchesPrice;
    });
  }, [searchQuery, selectedTools, selectedCategory, selectedDifficulty, selectedPurpose, priceRange]);

  // Separar templates em categorias para exibição
  const popularTemplates = filteredTemplates.filter(t => t.popular);
  const trendingTemplates = filteredTemplates.filter(t => t.trending);
  const regularTemplates = filteredTemplates.filter(t => !t.popular && !t.trending);

  const handleToolToggle = (tool: string) => {
    setSelectedTools(prev => 
      prev.includes(tool) 
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };

  const handleCopyTemplate = (template: AutomationTemplate) => {
    const availablePlatforms = Object.keys(template.templateContent);
    const templateUrl = `https://templates.deylithdev.com/${template.id}`;
    navigator.clipboard.writeText(templateUrl);
    toast({
      title: "Template copiado!",
      description: `Link do template "${template.name}" copiado para a área de transferência.`,
    });
  };

  const handleViewTemplate = (template: AutomationTemplate) => {
    setSelectedTemplate(template);
    setIsModalOpen(true);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Baixa': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Média': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Alta': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedTools([]);
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSelectedPurpose('all');
    setPriceRange('all');
  };

  const TemplateCard = ({ template }: { template: AutomationTemplate }) => (
    <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 hover:scale-[1.02]">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start mb-2">
          <div className="flex gap-2">
            <Badge className={getDifficultyColor(template.difficulty)}>
              {template.difficulty}
            </Badge>
            {template.popular && (
              <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                <Star className="h-3 w-3 mr-1" />
                Popular
              </Badge>
            )}
            {template.trending && (
              <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
                <Flame className="h-3 w-3 mr-1" />
                Trending
              </Badge>
            )}
          </div>
          <Badge variant="outline" className="text-xs">
            {template.category}
          </Badge>
        </div>
        <CardTitle className="text-lg mb-2 group-hover:text-purple-600 transition-colors">
          {template.name}
        </CardTitle>
        <p className="text-sm text-muted-foreground line-clamp-2">{template.description}</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Tools */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Ferramentas:</p>
          <div className="flex flex-wrap gap-1">
            {template.tools.slice(0, 3).map(tool => (
              <Badge key={tool} variant="secondary" className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-300">
                {tool}
              </Badge>
            ))}
            {template.tools.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{template.tools.length - 3}
              </Badge>
            )}
          </div>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-1">
            <Clock className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs">{template.creationTime}</span>
          </div>
          <div className="flex items-center gap-1">
            <DollarSign className="h-3 w-3 text-muted-foreground" />
            <span className="text-xs">${template.monthlyCost}/mês</span>
          </div>
        </div>

        {/* Price Range */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30 p-3 rounded-md">
          <div className="flex items-center gap-1 mb-1">
            <TrendingUp className="h-3 w-3 text-green-600" />
            <span className="text-xs font-medium text-green-700 dark:text-green-400">Valor sugerido:</span>
          </div>
          <p className="text-sm font-bold text-green-800 dark:text-green-300">
            R$ {template.suggestedPrice.min.toLocaleString()} - R$ {template.suggestedPrice.max.toLocaleString()}
          </p>
        </div>

        {/* Features */}
        <div>
          <p className="text-xs font-medium text-muted-foreground mb-1">Principais recursos:</p>
          <ul className="text-xs text-muted-foreground space-y-0.5">
            {template.features.slice(0, 2).map((feature, index) => (
              <li key={index} className="flex items-center gap-1">
                <Zap className="h-2 w-2 text-purple-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <Button 
            onClick={() => handleViewTemplate(template)}
            variant="outline"
            size="sm"
            className="flex-1"
          >
            <Eye className="h-4 w-4 mr-2" />
            Visualizar
          </Button>
          <Button 
            onClick={() => handleCopyTemplate(template)}
            className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
            size="sm"
          >
            <Copy className="h-4 w-4 mr-2" />
            Copiar
          </Button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-4xl font-bold">
          <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Galeria de Templates de Automação
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
          Templates prontos de automações e agentes IA para gerar vendas com n8n, Make, Flowise e mais.
          Copie um fluxo de sucesso em 2 cliques.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-2 bg-purple-50 dark:bg-purple-950/30 px-3 py-1 rounded-full">
            <Copy className="h-4 w-4 text-purple-600" />
            Automatize sem reinventar do zero
          </span>
          <span className="flex items-center gap-2 bg-blue-50 dark:bg-blue-950/30 px-3 py-1 rounded-full">
            <TrendingUp className="h-4 w-4 text-blue-600" />
            Crie micro-SaaS com IA
          </span>
          <span className="flex items-center gap-2 bg-green-50 dark:bg-green-950/30 px-3 py-1 rounded-full">
            <Zap className="h-4 w-4 text-green-600" />
            Templates importáveis
          </span>
        </div>
      </div>

      {/* Search and Filter Toggle */}
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex-1 relative">
          <Input
            placeholder="Buscar templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10"
          />
          <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        </div>
        <Button
          variant="outline"
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center gap-2"
        >
          <Filter className="h-4 w-4" />
          Filtros
          {(selectedTools.length > 0 || selectedCategory !== 'all' || selectedDifficulty !== 'all' || selectedPurpose !== 'all' || priceRange !== 'all') && (
            <Badge variant="secondary" className="ml-2">
              {selectedTools.length + (selectedCategory !== 'all' ? 1 : 0) + (selectedDifficulty !== 'all' ? 1 : 0) + (selectedPurpose !== 'all' ? 1 : 0) + (priceRange !== 'all' ? 1 : 0)}
            </Badge>
          )}
        </Button>
      </div>

      {/* Filters */}
      {showFilters && (
        <Card className="p-6 bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-950/30">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Ferramentas</label>
              <div className="flex flex-wrap gap-2">
                {toolsOptions.map(tool => (
                  <Button
                    key={tool}
                    variant={selectedTools.includes(tool) ? "default" : "outline"}
                    size="sm"
                    onClick={() => handleToolToggle(tool)}
                    className={selectedTools.includes(tool) ? "bg-gradient-to-r from-purple-600 to-blue-600" : ""}
                  >
                    {tool}
                  </Button>
                ))}
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium mb-2 block">Categoria</label>
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as categorias" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as categorias</SelectItem>
                  {categoriesOptions.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Dificuldade</label>
              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as dificuldades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as dificuldades</SelectItem>
                  {difficultyOptions.map(difficulty => (
                    <SelectItem key={difficulty} value={difficulty}>{difficulty}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Finalidade</label>
              <Select value={selectedPurpose} onValueChange={setSelectedPurpose}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as finalidades" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as finalidades</SelectItem>
                  {purposeOptions.map(purpose => (
                    <SelectItem key={purpose} value={purpose}>{purpose}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block">Faixa de Preço</label>
              <Select value={priceRange} onValueChange={setPriceRange}>
                <SelectTrigger>
                  <SelectValue placeholder="Todas as faixas" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas as faixas</SelectItem>
                  <SelectItem value="low">Até R$ 1.500</SelectItem>
                  <SelectItem value="medium">R$ 1.000 - R$ 4.000</SelectItem>
                  <SelectItem value="high">Acima de R$ 3.000</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="flex items-end">
              <Button variant="outline" onClick={clearAllFilters} className="w-full">
                Limpar Filtros
              </Button>
            </div>
          </div>
        </Card>
      )}

      {/* Results Count */}
      <div className="text-sm text-muted-foreground flex items-center gap-2">
        <Badge variant="outline">{filteredTemplates.length}</Badge>
        templates encontrados de {automationTemplates.length} disponíveis
      </div>

      {/* Popular Templates */}
      {popularTemplates.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-purple-600" />
            <h3 className="text-2xl font-bold">Templates Populares</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      )}

      {/* Trending Templates */}
      {trendingTemplates.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Flame className="h-5 w-5 text-orange-600" />
            <h3 className="text-2xl font-bold">Em Alta</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trendingTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      )}

      {/* Regular Templates */}
      {regularTemplates.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">Todos os Templates</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularTemplates.map((template) => (
              <TemplateCard key={template.id} template={template} />
            ))}
          </div>
        </div>
      )}

      {/* No Results */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">Nenhum template encontrado para os filtros selecionados.</p>
          <Button variant="outline" onClick={clearAllFilters}>
            Limpar todos os filtros
          </Button>
        </div>
      )}

      {/* Template Detail Modal */}
      <TemplateDetailModal 
        template={selectedTemplate}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default TemplateGallery;
