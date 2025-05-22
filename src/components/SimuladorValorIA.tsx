
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const SimuladorValorIA: React.FC = () => {
  const [inputs, setInputs] = useState({
    categoriaPlano: 'atendimento',
    modeloAI: 'gpt3.5',
    complexidadeBase: 5,
    dockerSeparado: false,
    vpsDedicada: false,
    integracoesExternas: 0,
    suporteTecnico: 'basico'
  });
  
  const handleInputChange = (field: string, value: string | number | boolean) => {
    setInputs(prev => ({ ...prev, [field]: value }));
  };
  
  // Cálculo do valor base de acordo com a categoria
  const calcularValorBase = () => {
    const basesPorCategoria: Record<string, number> = {
      'atendimento': 700,
      'agendamento': 800,
      'notificacao': 600,
      'insights': 900,
    };
    return basesPorCategoria[inputs.categoriaPlano] || 700;
  };
  
  // Multiplicador pelo modelo de AI usado
  const getMultiplicadorModelo = () => {
    const multiplicadores: Record<string, number> = {
      'gpt3.5': 1.0,
      'gpt4': 1.5,
      'claude': 1.3,
      'llama': 0.8,
      'mistral': 0.9,
      'customizado': 1.8
    };
    return multiplicadores[inputs.modeloAI] || 1;
  };
  
  // Custo adicional por infraestrutura
  const getCustosInfraestrutura = () => {
    let custo = 0;
    if (inputs.dockerSeparado) custo += 150;
    if (inputs.vpsDedicada) custo += 350;
    return custo;
  };
  
  // Custo adicional por integrações externas
  const getCustosIntegracoes = () => {
    return inputs.integracoesExternas * 120;
  };
  
  // Custo do suporte técnico
  const getCustoSuporte = () => {
    const custosPorNivel: Record<string, number> = {
      'basico': 0, // Incluído no preço base
      'intermediario': 250,
      'avancado': 500,
      'premium': 800
    };
    return custosPorNivel[inputs.suporteTecnico] || 0;
  };
  
  // Cálculo do valor final
  const calcularValorFinal = () => {
    const valorBase = calcularValorBase();
    const multiplicadorAI = getMultiplicadorModelo();
    const multiplicadorComplexidade = 1 + ((inputs.complexidadeBase - 1) / 10);
    
    let subtotal = valorBase * multiplicadorAI * multiplicadorComplexidade;
    subtotal += getCustosInfraestrutura();
    subtotal += getCustosIntegracoes();
    subtotal += getCustoSuporte();
    
    // Arredonda para o múltiplo de 50 mais próximo
    return Math.round(subtotal / 50) * 50;
  };
  
  const getValorSetup = () => {
    // Valor de setup é aproximadamente entre 50% a 200% do valor mensal
    // dependendo da complexidade
    const percentualBase = 50; // 50% do valor mensal
    const adicionalPorComplexidade = inputs.complexidadeBase * 15; // +15% por nível
    const percentualTotal = percentualBase + adicionalPorComplexidade;
    
    const valorMensal = calcularValorFinal();
    const valorSetup = (valorMensal * percentualTotal) / 100;
    
    // Arredonda para o múltiplo de 50 mais próximo
    return Math.round(valorSetup / 50) * 50;
  };
  
  // Detalhamento dos valores para explicar a composição do preço
  const getDetalhamentoValores = () => {
    const valorBase = calcularValorBase();
    const multiplicadorAI = getMultiplicadorModelo();
    const multiplicadorComplexidade = 1 + ((inputs.complexidadeBase - 1) / 10);
    const valorComMultiplicadores = Math.round(valorBase * multiplicadorAI * multiplicadorComplexidade);
    
    const custosInfraestrutura = getCustosInfraestrutura();
    const custosIntegracoes = getCustosIntegracoes();
    const custoSuporte = getCustoSuporte();
    
    return [
      { item: 'Valor base da categoria', valor: valorBase },
      { item: 'Valor com multiplicadores (modelo e complexidade)', valor: valorComMultiplicadores },
      { item: 'Adicionais de infraestrutura', valor: custosInfraestrutura },
      { item: 'Integrações externas', valor: custosIntegracoes },
      { item: 'Suporte técnico', valor: custoSuporte },
    ];
  };
  
  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle>Simulador de Precificação de Serviços IA</CardTitle>
        <CardDescription>
          Calcule o valor ideal para seus serviços baseado em recursos, complexidade e requisitos técnicos
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="categoria">Categoria do Serviço</Label>
                <Select
                  value={inputs.categoriaPlano}
                  onValueChange={(value) => handleInputChange('categoriaPlano', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione uma categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="atendimento">Atendimento automatizado</SelectItem>
                    <SelectItem value="agendamento">Agendamento de serviços</SelectItem>
                    <SelectItem value="notificacao">Sistema de notificações</SelectItem>
                    <SelectItem value="insights">Geração de insights</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="modelo">Modelo de IA</Label>
                <Select
                  value={inputs.modeloAI}
                  onValueChange={(value) => handleInputChange('modeloAI', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o modelo de IA" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt3.5">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="gpt4">GPT-4o</SelectItem>
                    <SelectItem value="claude">Claude 3 Haiku</SelectItem>
                    <SelectItem value="llama">Llama 3</SelectItem>
                    <SelectItem value="mistral">Mistral</SelectItem>
                    <SelectItem value="customizado">Modelo Fine-Tuned</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="suporte">Nível de Suporte Técnico</Label>
                <Select
                  value={inputs.suporteTecnico}
                  onValueChange={(value) => handleInputChange('suporteTecnico', value)}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Selecione o nível de suporte" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="basico">Básico (email, 5x8)</SelectItem>
                    <SelectItem value="intermediario">Intermediário (chat, 5x12)</SelectItem>
                    <SelectItem value="avancado">Avançado (telefone, 7x12)</SelectItem>
                    <SelectItem value="premium">Premium (SLA, 24x7)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="complexidade">Complexidade do Projeto (1-10)</Label>
                  <span className="text-sm font-medium">{inputs.complexidadeBase}</span>
                </div>
                <Slider
                  id="complexidade"
                  min={1}
                  max={10}
                  step={1}
                  value={[inputs.complexidadeBase]}
                  onValueChange={([value]) => handleInputChange('complexidadeBase', value)}
                />
              </div>
              
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="integracoes">Número de Integrações Externas</Label>
                  <span className="text-sm font-medium">{inputs.integracoesExternas}</span>
                </div>
                <Slider
                  id="integracoes"
                  min={0}
                  max={10}
                  step={1}
                  value={[inputs.integracoesExternas]}
                  onValueChange={([value]) => handleInputChange('integracoesExternas', value)}
                />
              </div>
              
              <div className="flex items-center justify-between space-x-2 pt-2">
                <Label htmlFor="docker-separado">Container Docker Separado</Label>
                <Switch
                  id="docker-separado"
                  checked={inputs.dockerSeparado}
                  onCheckedChange={(checked) => handleInputChange('dockerSeparado', checked)}
                />
              </div>
              
              <div className="flex items-center justify-between space-x-2">
                <Label htmlFor="vps-dedicada">VPS Dedicada</Label>
                <Switch
                  id="vps-dedicada"
                  checked={inputs.vpsDedicada}
                  onCheckedChange={(checked) => handleInputChange('vpsDedicada', checked)}
                />
              </div>
            </div>
          </div>
          
          <div className="bg-card border rounded-lg p-4 mt-6">
            <h4 className="text-xl font-semibold mb-4">Resultado da Simulação</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 border rounded-lg bg-accent/10">
                <p className="text-sm text-muted-foreground">Mensalidade Recomendada</p>
                <p className="text-3xl font-bold">R$ {calcularValorFinal().toLocaleString('pt-BR')}/mês</p>
              </div>
              
              <div className="p-4 border rounded-lg bg-accent/10">
                <p className="text-sm text-muted-foreground">Setup Recomendado</p>
                <p className="text-3xl font-bold">R$ {getValorSetup().toLocaleString('pt-BR')}</p>
              </div>
            </div>
            
            <div>
              <h5 className="font-medium mb-2">Detalhamento do Valor</h5>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Item</TableHead>
                    <TableHead className="text-right">Valor</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {getDetalhamentoValores().map((item, index) => (
                    <TableRow key={index}>
                      <TableCell>{item.item}</TableCell>
                      <TableCell className="text-right">R$ {item.valor.toLocaleString('pt-BR')}</TableCell>
                    </TableRow>
                  ))}
                  <TableRow>
                    <TableCell className="font-medium">Valor Total Mensal</TableCell>
                    <TableCell className="text-right font-medium">R$ {calcularValorFinal().toLocaleString('pt-BR')}</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimuladorValorIA;
