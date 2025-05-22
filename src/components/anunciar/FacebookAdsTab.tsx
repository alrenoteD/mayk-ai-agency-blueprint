
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Separator } from "@/components/ui/separator";

// Formato para moeda
const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const formatPercentage = (value: number): string => {
  return `${value}%`;
};

const FacebookAdsTab: React.FC = () => {
  // Estado para o simulador de leads
  const [dailyBudget, setDailyBudget] = useState(50);
  const [cpc, setCpc] = useState(2.5);
  const [conversionRate, setConversionRate] = useState(10);
  const [clientRate, setClientRate] = useState(15);
  const [avgTicket, setAvgTicket] = useState(1500);
  
  // Cálculos do simulador
  const dailyClicks = Math.round(dailyBudget / cpc);
  const dailyLeads = Math.round(dailyClicks * (conversionRate / 100));
  const monthlyLeads = dailyLeads * 30;
  const monthlyClients = Math.round(monthlyLeads * (clientRate / 100));
  const monthlyRevenue = monthlyClients * avgTicket;
  const monthlyAdSpend = dailyBudget * 30;
  const roi = ((monthlyRevenue - monthlyAdSpend) / monthlyAdSpend) * 100;

  return (
    <div className="space-y-8">
      {/* Campaign Structure and Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Estrutura de Campanha Ideal</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Campaign sections */}
            <div className="space-y-2">
              <h4 className="font-medium">1. Campanha de Reconhecimento</h4>
              <p className="text-sm text-muted-foreground">
                Objetivo: Tráfego e Expansão de Público
              </p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Conteúdo educativo sobre IA e automação</li>
                <li>Posts que destacam problemas comuns que a IA resolve</li>
                <li>Segmentação ampla dentro de um nicho específico</li>
                <li>Orçamento diário: R$ 15-30</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">2. Campanha de Consideração</h4>
              <p className="text-sm text-muted-foreground">
                Objetivo: Geração de Leads
              </p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Material rico como e-books, webinars ou calculadoras ROI</li>
                <li>Casos de estudo e resultados reais</li>
                <li>Segmentação: remarketing + públicos semelhantes</li>
                <li>Orçamento diário: R$ 20-50</li>
              </ul>
            </div>
            
            <div className="space-y-2">
              <h4 className="font-medium">3. Campanha de Conversão</h4>
              <p className="text-sm text-muted-foreground">
                Objetivo: Agendamentos e Vendas
              </p>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li>Ofertas limitadas para diagnóstico ou projetos piloto</li>
                <li>Testemunhos em vídeo de clientes satisfeitos</li>
                <li>Segmentação: leads quentes e visitantes de página de vendas</li>
                <li>Orçamento diário: R$ 15-30</li>
              </ul>
            </div>
          </CardContent>
        </Card>
        
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Métricas e Otimizações</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Metrics sections */}
            <div className="space-y-2">
              <h4 className="font-medium">Métricas Principais</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">CPC Médio</div>
                  <div className="text-lg font-medium">R$ 1,80 - 3,50</div>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">CTR Ideal</div>
                  <div className="text-lg font-medium">1,5% - 3%</div>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">Taxa Conversão</div>
                  <div className="text-lg font-medium">8% - 15%</div>
                </div>
                <div className="p-3 bg-background/50 rounded-lg">
                  <div className="text-sm text-muted-foreground">CPL Aceitável</div>
                  <div className="text-lg font-medium">R$ 15 - 40</div>
                </div>
              </div>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <h4 className="font-medium">Rotina de Otimização</h4>
              <ul className="list-disc pl-5 text-sm space-y-1">
                <li><strong>Diariamente:</strong> Verificar status de entrega e orçamento</li>
                <li><strong>3x/Semana:</strong> Analisar CTR e taxas de conversão</li>
                <li><strong>Semanalmente:</strong> Revisar segmentação e criativos</li>
                <li><strong>Quinzenalmente:</strong> Teste A/B de criativos</li>
                <li><strong>Mensalmente:</strong> Revisão completa do funil e ROI</li>
              </ul>
            </div>
            
            <div className="p-4 bg-yellow-50 dark:bg-amber-950/30 rounded-lg border border-yellow-200 dark:border-amber-800/50 mt-4">
              <h4 className="text-sm font-medium text-amber-800 dark:text-amber-400">Dica de Especialista</h4>
              <p className="text-xs mt-1 text-amber-700 dark:text-amber-300/90">
                "Não desligue anúncios com menos de 3 dias ou 1000 impressões. Dê tempo ao algoritmo para otimizar a entrega e análise pelo menos 50 cliques antes de tomar decisões."
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      {/* Simulator section */}
      <div className="mt-12">
        <h3 className="text-2xl font-bold text-center mb-8">
          Simulador de Campanhas e Faturamento
        </h3>
        
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Calcule seu ROI de Anúncios</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {/* Sliders for calculator */}
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="dailyBudget">Orçamento Diário</Label>
                    <span className="text-sm text-muted-foreground">
                      {formatCurrency(dailyBudget)}
                    </span>
                  </div>
                  <Slider
                    id="dailyBudget"
                    min={20}
                    max={200}
                    step={5}
                    value={[dailyBudget]}
                    onValueChange={(value) => setDailyBudget(value[0])}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="cpc">Custo por Clique (CPC)</Label>
                    <span className="text-sm text-muted-foreground">
                      {formatCurrency(cpc)}
                    </span>
                  </div>
                  <Slider
                    id="cpc"
                    min={1}
                    max={5}
                    step={0.1}
                    value={[cpc]}
                    onValueChange={(value) => setCpc(value[0])}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="conversionRate">Taxa de Conversão para Lead</Label>
                    <span className="text-sm text-muted-foreground">
                      {formatPercentage(conversionRate)}
                    </span>
                  </div>
                  <Slider
                    id="conversionRate"
                    min={1}
                    max={20}
                    step={1}
                    value={[conversionRate]}
                    onValueChange={(value) => setConversionRate(value[0])}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="clientRate">Lead para Cliente (%)</Label>
                    <span className="text-sm text-muted-foreground">
                      {formatPercentage(clientRate)}
                    </span>
                  </div>
                  <Slider
                    id="clientRate"
                    min={5}
                    max={30}
                    step={1}
                    value={[clientRate]}
                    onValueChange={(value) => setClientRate(value[0])}
                  />
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <Label htmlFor="avgTicket">Ticket Médio</Label>
                    <span className="text-sm text-muted-foreground">
                      {formatCurrency(avgTicket)}
                    </span>
                  </div>
                  <Slider
                    id="avgTicket"
                    min={500}
                    max={3000}
                    step={100}
                    value={[avgTicket]}
                    onValueChange={(value) => setAvgTicket(value[0])}
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span>R$ 500</span>
                    <span>R$ 3.000</span>
                  </div>
                </div>
                
                {/* Manual input section */}
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                  <h4 className="text-sm font-medium mb-3">Inserir Valores Manualmente</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="manualBudget" className="text-xs">Orçamento Diário</Label>
                      <Input 
                        id="manualBudget"
                        type="number" 
                        value={dailyBudget}
                        onChange={(e) => setDailyBudget(Number(e.target.value))}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="manualCpc" className="text-xs">CPC (R$)</Label>
                      <Input 
                        id="manualCpc"
                        type="number" 
                        value={cpc}
                        onChange={(e) => setCpc(Number(e.target.value))}
                        step="0.1"
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Results section */}
              <div>
                <div className="p-6 bg-mayk-purple/10 rounded-lg">
                  <h4 className="text-lg font-medium mb-4">Resultados Estimados Mensais</h4>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Cliques Diários:</span>
                      <span className="font-medium">{dailyClicks}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Leads Diários:</span>
                      <span className="font-medium">{dailyLeads}</span>
                    </div>
                    
                    <Separator className="my-2" />
                    
                    <div className="flex justify-between">
                      <span>Leads Mensais:</span>
                      <span className="font-medium">{monthlyLeads}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Clientes Mensais:</span>
                      <span className="font-medium">{monthlyClients}</span>
                    </div>
                    
                    <div className="flex justify-between">
                      <span>Investimento Mensal:</span>
                      <span className="font-medium">{formatCurrency(monthlyAdSpend)}</span>
                    </div>
                    
                    <Separator className="my-2" />
                    
                    <div className="flex justify-between text-lg">
                      <span>Faturamento Mensal:</span>
                      <span className="font-bold">{formatCurrency(monthlyRevenue)}</span>
                    </div>
                    
                    <div className="flex justify-between text-lg">
                      <span>ROI:</span>
                      <span className={`font-bold ${roi > 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                        {roi.toFixed(0)}%
                      </span>
                    </div>
                  </div>
                  
                  {/* Realistic values section */}
                  <div className="mt-6 p-4 border border-mayk-purple/30 rounded-lg bg-mayk-purple/5">
                    <h5 className="text-sm font-medium mb-2">Valores Realistas por Nível</h5>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="p-2 bg-background/80 rounded">
                        <span className="block font-medium">Iniciante</span>
                        <span className="text-muted-foreground">2-5 clientes/mês</span>
                      </div>
                      <div className="p-2 bg-background/80 rounded">
                        <span className="block font-medium">Intermediário</span>
                        <span className="text-muted-foreground">5-15 clientes/mês</span>
                      </div>
                      <div className="p-2 bg-background/80 rounded">
                        <span className="block font-medium">Avançado</span>
                        <span className="text-muted-foreground">15+ clientes/mês</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FacebookAdsTab;
