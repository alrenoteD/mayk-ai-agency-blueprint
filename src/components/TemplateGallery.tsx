
import React, { useState, useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { automationTemplates, toolsOptions, categoriesOptions, difficultyOptions, purposeOptions, AutomationTemplate } from '@/data/automationTemplates';
import { Clock, DollarSign, TrendingUp, Copy, Star, Filter } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const TemplateGallery: React.FC = () => {
  const { toast } = useToast();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedPurpose, setSelectedPurpose] = useState('all');
  const [priceRange, setPriceRange] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

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

  const handleToolToggle = (tool: string) => {
    setSelectedTools(prev => 
      prev.includes(tool) 
        ? prev.filter(t => t !== tool)
        : [...prev, tool]
    );
  };

  const handleCloneTemplate = (template: AutomationTemplate) => {
    // Simulate copying template URL to clipboard
    navigator.clipboard.writeText(`https://templates.deylithdev.com/${template.id}`);
    toast({
      title: "Template copiado!",
      description: `Link do template "${template.name}" copiado para a área de transferência.`,
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

  const clearAllFilters = () => {
    setSearchQuery('');
    setSelectedTools([]);
    setSelectedCategory('all');
    setSelectedDifficulty('all');
    setSelectedPurpose('all');
    setPriceRange('all');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold gradient-text">Galeria de Templates de Automação</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Templates prontos de automações e agentes IA para gerar vendas com n8n, Make, Flowise e mais.
          Copie um fluxo de sucesso em 2 cliques.
        </p>
        <div className="flex flex-wrap justify-center gap-2 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Copy className="h-4 w-4" />
            Automatize sem reinventar do zero
          </span>
          <span className="flex items-center gap-1">
            <TrendingUp className="h-4 w-4" />
            Crie micro-SaaS com IA
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
            className="w-full"
          />
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
        <Card className="p-6">
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
      <div className="text-sm text-muted-foreground">
        Mostrando {filteredTemplates.length} de {automationTemplates.length} templates
      </div>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <Card key={template.id} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start mb-2">
                <Badge variant="outline" className={getDifficultyColor(template.difficulty)}>
                  {template.difficulty}
                </Badge>
                <Badge variant="outline">
                  {template.category}
                </Badge>
              </div>
              <CardTitle className="text-lg mb-2">{template.name}</CardTitle>
              <p className="text-sm text-muted-foreground">{template.description}</p>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {/* Tools */}
              <div>
                <p className="text-xs font-medium text-muted-foreground mb-1">Ferramentas:</p>
                <div className="flex flex-wrap gap-1">
                  {template.tools.slice(0, 3).map(tool => (
                    <Badge key={tool} variant="secondary" className="text-xs">
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
              <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded-md">
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
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <Button 
                onClick={() => handleCloneTemplate(template)}
                className="w-full"
                size="sm"
              >
                <Copy className="h-4 w-4 mr-2" />
                Copiar Template
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredTemplates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-lg text-muted-foreground mb-4">Nenhum template encontrado para os filtros selecionados.</p>
          <Button variant="outline" onClick={clearAllFilters}>
            Limpar todos os filtros
          </Button>
        </div>
      )}
    </div>
  );
};

export default TemplateGallery;
