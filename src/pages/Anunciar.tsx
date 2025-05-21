import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Formato para moeda
const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const formatPercentage = (value: number): string => {
  return `${value}%`;
};

const Anunciar: React.FC = () => {
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
    <PageLayout 
      title="Anunciando e Vendendo Serviços de IA" 
      subtitle="Estratégias de marketing e vendas para atrair e converter clientes para sua agência"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <Tabs defaultValue="facebook" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="facebook">Facebook Ads</TabsTrigger>
              <TabsTrigger value="ofertas">Ofertas Irresistíveis</TabsTrigger>
              <TabsTrigger value="criativos">Modelos de Criativos</TabsTrigger>
              <TabsTrigger value="formularios">Formulários de Alta Conversão</TabsTrigger>
            </TabsList>
            
            {/* Facebook Ads tab content */}
            <TabsContent value="facebook" className="space-y-8">
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
            </TabsContent>
            
            {/* Ofertas tab content */}
            <TabsContent value="ofertas">
              <div className="space-y-8">
                <Card className="card-gradient">
                  <CardHeader>
                    <CardTitle>Estrutura de Oferta Irresistível</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-medium">Elementos da Oferta</h3>
                          <ul className="mt-2 space-y-2">
                            <li className="flex gap-2">
                              <span className="text-mayk-purple font-bold">1.</span>
                              <div>
                                <span className="font-medium">Problema Específico</span>
                                <p className="text-sm text-muted-foreground">Identifique um problema doloroso específico do nicho</p>
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-mayk-purple font-bold">2.</span>
                              <div>
                                <span className="font-medium">Solução Única</span>
                                <p className="text-sm text-muted-foreground">Explique como seu bot resolve o problema de forma única</p>
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-mayk-purple font-bold">3.</span>
                              <div>
                                <span className="font-medium">Resultados Quantificáveis</span>
                                <p className="text-sm text-muted-foreground">Prometa resultados mensuráveis (tempo, dinheiro, eficiência)</p>
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-mayk-purple font-bold">4.</span>
                              <div>
                                <span className="font-medium">Prazo Claro</span>
                                <p className="text-sm text-muted-foreground">Estabeleça quando o cliente verá os primeiros resultados</p>
                              </div>
                            </li>
                            <li className="flex gap-2">
                              <span className="text-mayk-purple font-bold">5.</span>
                              <div>
                                <span className="font-medium">Garantias</span>
                                <p className="text-sm text-muted-foreground">Ofereça garantias que eliminem o risco da decisão</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="p-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-lg">
                          <h4 className="font-medium text-amber-800 dark:text-amber-500 mb-2">
                            Atenção ao Posicionamento de Preço
                          </h4>
                          <p className="text-sm text-amber-700 dark:text-amber-400">
                            Evite competir por preço. Foque em valor - quanto seu cliente economiza ou ganha com a solução. Calcule o ROI para justificar o investimento.
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-5 border border-mayk-purple/20 rounded-lg bg-mayk-purple/5">
                        <h3 className="text-lg font-medium mb-4">Exemplo de Oferta Estruturada</h3>
                        
                        <div className="space-y-4">
                          <div>
                            <h4 className="text-base font-medium text-mayk-purple">Oferta: Atendente Virtual para Clínicas</h4>
                            <p className="text-sm mt-1">
                              "Apresentamos o <strong>Atendente Virtual especializado para Clínicas</strong> que elimina as faltas de pacientes e automatiza 80% dos seus agendamentos."
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium">🎯 Problema</h4>
                            <p className="text-xs text-muted-foreground">
                              "Clínicas perdem até R$ 5.000/mês com faltas e remarcações de última hora, além de sobrecarregar recepcionistas com atendimento telefônico."
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium">💡 Solução</h4>
                            <p className="text-xs text-muted-foreground">
                              "Bot de WhatsApp integrado à agenda médica com IA para atender 24/7, confirmar consultas, enviar lembretes e remarcar automaticamente."
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium">📈 Resultados</h4>
                            <ul className="text-xs text-muted-foreground list-disc pl-5 space-y-1">
                              <li>Redução de 70% nas faltas em apenas 30 dias</li>
                              <li>Economia de 20 horas semanais da equipe de recepção</li>
                              <li>Aumento médio de R$ 3.800 na receita mensal</li>
                            </ul>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium">⚡ Execução</h4>
                            <p className="text-xs text-muted-foreground">
                              "Implementação em 10 dias com zero interrupção nos atendimentos atuais. Treinamento completo da equipe incluído."
                            </p>
                          </div>
                          
                          <div>
                            <h4 className="text-sm font-medium">🛡️ Garantias</h4>
                            <p className="text-xs text-muted-foreground">
                              "Garantia de redução mínima de 50% nas faltas ou devolução integral do investimento nos primeiros 60 dias."
                            </p>
                          </div>
                          
                          <div className="pt-4 border-t">
                            <h4 className="text-sm font-medium">Estrutura de Investimento</h4>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                              <div className="p-2 bg-background/80 rounded text-xs">
                                <span className="font-medium">Setup Inicial</span>
                                <div className="text-mayk-purple font-bold mt-1">R$ 1.997,00</div>
                              </div>
                              <div className="p-2 bg-background/80 rounded text-xs">
                                <span className="font-medium">Mensalidade</span>
                                <div className="text-mayk-purple font-bold mt-1">R$ 697,00/mês</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="card-gradient">
                    <CardHeader>
                      <CardTitle>Bônus e Incentivos</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-mayk-purple">1</span>
                          </div>
                          <div>
                            <span className="font-medium">Análise de Concorrentes</span>
                            <p className="text-xs text-muted-foreground">Relatório comparativo de atendimento entre o cliente e 3 concorrentes</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-mayk-purple">2</span>
                          </div>
                          <div>
                            <span className="font-medium">Templates de Mensagens</span>
                            <p className="text-xs text-muted-foreground">Pacote de 30 templates de mensagens otimizadas para conversão</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-mayk-purple">3</span>
                          </div>
                          <div>
                            <span className="font-medium">Integração Adicional</span>
                            <p className="text-xs text-muted-foreground">Uma integração adicional com sistema já utilizado pelo cliente</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-gradient">
                    <CardHeader>
                      <CardTitle>Escassez e Urgência</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-mayk-purple">1</span>
                          </div>
                          <div>
                            <span className="font-medium">Limite de Vagas</span>
                            <p className="text-xs text-muted-foreground">Restrinja novas implementações a 3-5 por mês para qualidade</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-mayk-purple">2</span>
                          </div>
                          <div>
                            <span className="font-medium">Desconto por Decisão Rápida</span>
                            <p className="text-xs text-muted-foreground">10-20% de desconto para decisão em até 48h após apresentação</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-mayk-purple">3</span>
                          </div>
                          <div>
                            <span className="font-medium">Aumento Programado</span>
                            <p className="text-xs text-muted-foreground">Comunique aumento de preços em 30 dias para estimular decisão</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-gradient">
                    <CardHeader>
                      <CardTitle>Redução de Objeções</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-mayk-purple">1</span>
                          </div>
                          <div>
                            <span className="font-medium">"É caro demais"</span>
                            <p className="text-xs text-muted-foreground">Compare com custo de funcionário + cálculo de ROI detalhado</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-mayk-purple">2</span>
                          </div>
                          <div>
                            <span className="font-medium">"Precisamos pensar"</span>
                            <p className="text-xs text-muted-foreground">Ofereça teste gratuito de 7 dias ou demonstração com dados reais</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-sm font-medium text-mayk-purple">3</span>
                          </div>
                          <div>
                            <span className="font-medium">"E se não funcionar?"</span>
                            <p className="text-xs text-muted-foreground">Garantia de resultado ou devolução do investimento</p>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Criativos tab content */}
            <TabsContent value="criativos">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Card className="card-gradient">
                    <CardHeader>
                      <CardTitle>Formatos de Imagem Eficientes</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-medium">1. Antes e Depois</h4>
                        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <div className="text-center p-4">
                            <div className="flex justify-center gap-4">
                              <div className="text-center">
                                <div className="p-4 bg-red-100 dark:bg-red-900/30 rounded-lg mb-2">Antes</div>
                                <ul className="text-xs text-left space-y-1">
                                  <li>❌ 3 atendentes sobrecarregados</li>
                                  <li>❌ 4h de espera para resposta</li>
                                  <li>❌ 40% de abandono</li>
                                  <li>❌ R$8.500/mês em folha</li>
                                </ul>
                              </div>
                              <div className="text-center">
                                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded-lg mb-2">Depois</div>
                                <ul className="text-xs text-left space-y-1">
                                  <li>✅ 1 atendente + bot IA</li>
                                  <li>✅ Resposta em segundos</li>
                                  <li>✅ 95% de satisfação</li>
                                  <li>✅ Economia de R$5.700/mês</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium">2. Resultados Numéricos</h4>
                        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <div className="text-center p-4 w-full">
                            <h3 className="text-lg font-bold mb-4">Bot de Agendamento para Clínicas</h3>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="p-3 bg-mayk-purple/10 rounded-lg">
                                <div className="text-2xl font-bold text-mayk-purple">-72%</div>
                                <div className="text-xs mt-1">Faltas de Pacientes</div>
                              </div>
                              <div className="p-3 bg-mayk-purple/10 rounded-lg">
                                <div className="text-2xl font-bold text-mayk-purple">+35%</div>
                                <div className="text-xs mt-1">Novos Agendamentos</div>
                              </div>
                              <div className="p-3 bg-mayk-purple/10 rounded-lg">
                                <div className="text-2xl font-bold text-mayk-purple">R$4.800</div>
                                <div className="text-xs mt-1">Economia Mensal</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <h4 className="font-medium">3. Demonstração Visual do Bot</h4>
                        <div className="aspect-video bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center">
                          <div className="flex justify-center gap-4 p-4 w-full">
                            <div className="w-1/3 bg-white dark:bg-gray-900 rounded-lg p-3 shadow-sm">
                              <div className="text-xs text-center mb-2 font-medium">WhatsApp do Cliente</div>
                              <div className="space-y-2">
                                <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs text-left">
                                  Olá! Como posso ajudar hoje?
                                </div>
                                <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-xs text-right">
                                  Quero agendar uma consulta
                                </div>
                                <div className="bg-gray-200 dark:bg-gray-800 p-2 rounded-lg text-xs text-left">
                                  Claro! Para qual especialidade?
                                </div>
                              </div>
                            </div>
                            <div className="w-1/3 flex flex-col justify-center">
                              <div className="text-center">
                                <svg className="w-8 h-8 mx-auto text-mayk-purple" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                  <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                                <p className="text-xs mt-2">Integrado com sistemas</p>
                              </div>
                            </div>
                            <div className="w-1/3 bg-white dark:bg-gray-900 rounded-lg p-3 shadow-sm">
                              <div className="text-xs text-center mb-2 font-medium">Painel da Clínica</div>
                              <div className="bg-blue-50 dark:bg-blue-900/30 p-2 rounded-lg text-xs">
                                <div className="font-medium">Novo Agendamento</div>
                                <div className="mt-1 space-y-1">
                                  <div className="flex justify-between">
                                    <span>Paciente:</span>
                                    <span>Maria S.</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Data:</span>
                                    <span>15/06 - 14:30</span>
                                  </div>
                                  <div className="flex justify-between">
                                    <span>Especialidade:</span>
                                    <span>Dermatologia</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-gradient">
                    <CardHeader>
                      <CardTitle>Modelos de Copy para Anúncios</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        <h4 className="font-medium">1. Copy Problema-Agitação-Solução</h4>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <div className="space-y-4">
                            <div>
                              <h5 className="text-sm text-mayk-purple font-medium">Problema</h5>
                              <p className="text-sm mt-1">
                                Sua equipe perde 3 horas por dia respondendo as mesmas perguntas de clientes no WhatsApp?
                              </p>
                            </div>
                            <div>
                              <h5 className="text-sm text-mayk-purple font-medium">Agitação</h5>
                              <p className="text-sm mt-1">
                                Enquanto isso, vendas são perdidas, clientes ficam irritados com a demora e você paga salários para tarefas repetitivas que poderiam ser automatizadas.
                              </p>
                            </div>
                            <div>
                              <h5 className="text-sm text-mayk-purple font-medium">Solução</h5>
                              <p className="text-sm mt-1">
                                Apresentamos o Assistente Virtual para WhatsApp que responde dúvidas 24/7, gera leads e permite que sua equipe foque no que realmente importa: fechar vendas.
                              </p>
                            </div>
                            <div>
                              <h5 className="text-sm text-mayk-purple font-medium">Call to Action</h5>
                              <p className="text-sm mt-1">
                                👉 Agende uma demonstração gratuita e veja como economizar mais de R$2.500/mês em custos operacionais.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium">2. Copy Resultado Específico</h4>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <p className="text-sm font-medium mb-3">
                            [PARA CLÍNICAS] Como reduzimos em 70% as faltas de pacientes usando IA no WhatsApp
                          </p>
                          <p className="text-sm mb-2">
                            Nossa solução de confirmação automatizada já evitou mais de 450 faltas em 20 clínicas parceiras no último mês.
                          </p>
                          <p className="text-sm mb-2">
                            Além de enviar lembretes personalizados, nosso bot gerencia remarcações sem intervenção humana.
                          </p>
                          <p className="text-sm font-medium">
                            🩺 Elimine horários ociosos e aumente seu faturamento. Fale com um especialista hoje!
                          </p>
                        </div>
                      </div>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium">3. Copy Testemunho</h4>
                        <div className="p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
                          <div className="flex gap-3 mb-3">
                            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                              <span className="text-lg font-bold">C</span>
                            </div>
                            <div>
                              <p className="font-medium">Carlos Mendes</p>
                              <p className="text-xs text-muted-foreground">Gerente Comercial, LojasTech</p>
                            </div>
                          </div>
                          <p className="text-sm italic mb-2">
                            "Em apenas 3 semanas com o bot de atendimento, conseguimos aumentar nossas vendas online em 32% e reduzir nosso tempo de resposta de 4 horas para 30 segundos."
                          </p>
                          <p className="text-sm">
                            A LojasTech é apenas um dos 37 e-commerces que transformaram seu atendimento com nossa plataforma de IA.
                          </p>
                          <p className="text-sm font-medium mt-2">
                            🛒 Descubra como levar seu e-commerce para outro nível! Clique e agende uma demonstração.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="p-6 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-amber-800 dark:text-amber-500">
                    Checklist para Criativos de Alta Conversão
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <ul className="space-y-2 text-amber-800 dark:text-amber-400">
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Menciona um problema específico do nicho</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Inclui números específicos e resultados</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Apresenta um diferencial claro da solução</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Contém uma prova social ou testemunho</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Usa poucos textos nas imagens (< 20% da área)</span>
                      </li>
                    </ul>
                    
                    <ul className="space-y-2 text-amber-800 dark:text-amber-400">
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Tem um CTA (call-to-action) claro e direto</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Contém elementos de urgência ou escassez</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Usa cores que contrastam com o feed do Facebook</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">Tem primeira linha que prende atenção (hook)</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Formularios tab content */}
            <TabsContent value="formularios">
              <div className="space-y-8">
                <Card className="card-gradient">
                  <CardHeader>
                    <CardTitle>Estrutura de Formulários de Alta Conversão</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <h4 className="text-lg font-medium">Princípios Fundamentais</h4>
                        
                        <div className="space-y-3">
                          <div className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm font-medium text-mayk-purple">1</span>
                            </div>
                            <div>
                              <h5 className="font-medium">Mantenha o Mínimo Necessário</h5>
                              <p className="text-sm text-muted-foreground">
                                Cada campo adicional reduz taxa de conversão em aproximadamente 8%. Priorize apenas os dados essenciais no primeiro contato.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm font-medium text-mayk-purple">2</span>
                            </div>
                            <div>
                              <h5 className="font-medium">Contextualize os Campos</h5>
                              <p className="text-sm text-muted-foreground">
                                Explique por que cada informação é necessária. Ex: "Seu telefone (para enviarmos o diagnóstico gratuito por WhatsApp)".
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm font-medium text-mayk-purple">3</span>
                            </div>
                            <div>
                              <h5 className="font-medium">Crie Etapas Progressivas</h5>
                              <p className="text-sm text-muted-foreground">
                                Divida formulários longos em etapas. Após a primeira submissão com dados básicos, solicite informações adicionais.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-3">
                            <div className="h-6 w-6 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-sm font-medium text-mayk-purple">4</span>
                            </div>
                            <div>
                              <h5 className="font-medium">CTA Atrativo e Específico</h5>
                              <p className="text-sm text-muted-foreground">
                                Evite "Enviar" ou "Cadastrar". Use botões como "Receber Diagnóstico Gratuito" ou "Ver Demonstração".
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-medium mb-4">Exemplo de Formulário Otimizado</h4>
                        
                        <div className="border border-border p-4 rounded-lg bg-card/50">
                          <div className="mb-4 text-center">
                            <h3 className="text-lg font-bold text-mayk-purple">
                              Descubra o Potencial da IA na Sua Empresa
                            </h3>
                            <p className="text-sm text-muted-foreground mt-1">
                              Diagnóstico gratuito + demonstração personalizada
                            </p>
                          </div>
                          
                          <div className="space-y-4">
                            <div>
                              <Label htmlFor="name">Seu nome</Label>
                              <Input id="name" placeholder="Nome completo" className="mt-1" />
                            </div>
                            
                            <div>
                              <Label htmlFor="whatsapp">WhatsApp para contato</Label>
                              <Input id="whatsapp" placeholder="(00) 00000-0000" className="mt-1" />
                              <p className="text-xs text-muted-foreground mt-1">
                                Enviaremos um link para agendar sua sessão gratuita
                              </p>
                            </div>
                            
                            <div>
                              <Label htmlFor="company">Nome da empresa</Label>
                              <Input id="company" placeholder="Sua empresa" className="mt-1" />
                            </div>
                            
                            <div>
                              <Label htmlFor="segment">Segmento da empresa</Label>
                              <select id="segment" className="w-full mt-1 p-2 rounded-md border bg-background">
                                <option value="">Selecione o segmento</option>
                                <option value="ecommerce">E-commerce</option>
                                <option value="clinic">Clínica ou Consultório</option>
                                <option value="service">Prestação de Serviços</option>
                                <option value="retail">Comércio Local</option>
                                <option value="other">Outro</option>
                              </select>
                            </div>
                            
                            <Button className="w-full">
                              GARANTIR MEU DIAGNÓSTICO GRATUITO
                            </Button>
                            
                            <p className="text-xs text-center text-muted-foreground">
                              Seus dados estão seguros. Não fazemos spam.
                              <br />
                              Diagnóstico limitado a 5 empresas por semana.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="card-gradient">
                    <CardHeader>
                      <CardTitle>Perguntas Estratégicas para Qualificação</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Use estas perguntas no segundo passo do formulário ou durante o follow-up inicial:
                      </p>
                      <ul className="space-y-3">
                        <li className="p-3 bg-background/50 rounded-lg">
                          <h4 className="font-medium">Para entender o tamanho da operação:</h4>
                          <p className="text-sm mt-1">
                            "Quantos atendimentos/vendas sua empresa realiza por dia?"
                          </p>
                        </li>
                        <li className="p-3 bg-background/50 rounded-lg">
                          <h4 className="font-medium">Para identificar dores específicas:</h4>
                          <p className="text-sm mt-1">
                            "Qual é o maior desafio atual no seu atendimento ao cliente?"
                          </p>
                        </li>
                        <li className="p-3 bg-background/50 rounded-lg">
                          <h4 className="font-medium">Para avaliar experiência técnica:</h4>
                          <p className="text-sm mt-1">
                            "Você já utiliza alguma ferramenta de automação no seu negócio?"
                          </p>
                        </li>
                        <li className="p-3 bg-background/50 rounded-lg">
                          <h4 className="font-medium">Para determinar prazo:</h4>
                          <p className="text-sm mt-1">
                            "Quando você pretende implementar uma solução de automação?"
                          </p>
                        </li>
                        <li className="p-3 bg-background/50 rounded-lg">
                          <h4 className="font-medium">Para qualificar budget:</h4>
                          <p className="text-sm mt-1">
                            "Qual investimento mensal você considera para uma solução que [benefício específico]?"
                          </p>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  <Card className="card-gradient">
                    <CardHeader>
                      <CardTitle>Otimização e Testes A/B</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-4">
                        Elementos para testar continuamente para aumentar taxa de conversão:
                      </p>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-medium mb-2">1. Headline do Formulário</h4>
                          <div className="grid grid-cols-2 gap-3 text-sm">
                            <div className="p-2 bg-background/80 rounded-lg">
                              <span className="block font-medium text-red-500 dark:text-red-400">❌ Fraco</span>
                              <p>"Cadastre-se aqui"</p>
                            </div>
                            <div className="p-2 bg-background/80 rounded-lg">
                              <span className="block font-medium text-green-500 dark:text-green-400">✓ Forte</span>
                              <p>"Receba um diagnóstico gratuito de automação"</p>
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">2. Cor e Formato do CTA</h4>
                          <div className="grid grid-cols-2 gap-3">
                            <div className="h-10 rounded-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm">
                              Enviar
                            </div>
                            <div className="h-10 rounded-lg bg-mayk-purple text-white flex items-center justify-center text-sm font-medium">
                              GARANTIR MEU DIAGNÓSTICO →
                            </div>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium mb-2">3. Elementos de Escassez/Urgência</h4>
                          <div className="p-3 bg-background/80 rounded-lg">
                            <p className="text-sm mb-2">Teste adicionar:</p>
                            <ul className="list-disc pl-5 text-sm space-y-1">
                              <li>Contador regressivo</li>
                              <li>Limites de disponibilidade ("Restam 3 vagas")</li>
                              <li>Programação de aumento de preço</li>
                              <li>Bônus por tempo limitado</li>
                            </ul>
                          </div>
                        </div>
                        
                        <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-lg">
                          <h4 className="font-medium text-amber-800 dark:text-amber-500 mb-1">Dica de Especialista</h4>
                          <p className="text-xs text-amber-700 dark:text-amber-400">
                            Implemente o Facebook Pixel corretamente para poder remarketing com pessoas que iniciaram mas não completaram os formulários. Elas são 3-5x mais propensas a converter em uma segunda abordagem.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default Anunciar;
