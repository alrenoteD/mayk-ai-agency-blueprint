
import React from 'react';
import PageLayout from '@/components/PageLayout';
import SimulatorCard from '@/components/SimulatorCard';
import SimuladorValorIA from '@/components/SimuladorValorIA';
import PlanosServico from '@/components/PlanosServico';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const formatCurrency = (value: number): string => {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
};

const formatPercentage = (value: number): string => {
  return `${value}%`;
};

const Simuladores: React.FC = () => {
  return (
    <PageLayout 
      title="Simuladores e Planos de Serviço" 
      subtitle="Calcule valores, retornos e explore modelos de planos para sua agência de IA"
    >
      <section className="py-12">
        <div className="container mx-auto">
          <Tabs defaultValue="calculadoras" className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mx-auto mb-8">
              <TabsTrigger value="calculadoras">Calculadoras</TabsTrigger>
              <TabsTrigger value="planos">Planos de Serviço</TabsTrigger>
            </TabsList>
            
            <TabsContent value="calculadoras" className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  Simuladores de Negócio
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* First simulator card */}
                  <SimulatorCard
                    title="Simulador de Tráfego e Conversão"
                    description="Calcule o número de leads e clientes baseado no seu investimento em anúncios"
                    inputFields={[
                      {
                        id: "adBudget",
                        label: "Orçamento Mensal de Anúncios",
                        defaultValue: 1000,
                        min: 100,
                        max: 20000,
                        step: 100,
                        formatter: formatCurrency
                      },
                      {
                        id: "cpc",
                        label: "Custo por Clique (CPC)",
                        defaultValue: 2,
                        min: 0.5,
                        max: 10,
                        step: 0.1,
                        formatter: formatCurrency
                      },
                      {
                        id: "conversionRate",
                        label: "Taxa de Conversão Lead",
                        defaultValue: 10,
                        min: 1,
                        max: 30,
                        step: 1,
                        formatter: formatPercentage
                      },
                      {
                        id: "leadToSale",
                        label: "Conversão Lead para Cliente",
                        defaultValue: 20,
                        min: 5,
                        max: 50,
                        step: 1,
                        formatter: formatPercentage
                      }
                    ]}
                    calculateResults={(inputs) => {
                      const clicks = Math.round(inputs.adBudget / inputs.cpc);
                      const leads = Math.round(clicks * (inputs.conversionRate / 100));
                      const clients = Math.round(leads * (inputs.leadToSale / 100));
                      const cpl = inputs.adBudget / leads;
                      const cac = inputs.adBudget / clients;
                      
                      return {
                        "Cliques Estimados": clicks.toLocaleString(),
                        "Leads Gerados": leads.toLocaleString(),
                        "Clientes Convertidos": clients.toLocaleString(),
                        "Custo por Lead": formatCurrency(cpl),
                        "Custo de Aquisição (CAC)": formatCurrency(cac)
                      };
                    }}
                  />
                  
                  {/* Second simulator card */}
                  <SimulatorCard
                    title="Simulador de Lucratividade"
                    description="Calcule a lucratividade do seu negócio de agência de IA"
                    inputFields={[
                      {
                        id: "clientCount",
                        label: "Número de Clientes Mensais",
                        defaultValue: 5,
                        min: 1,
                        max: 50,
                        step: 1,
                        formatter: (value) => `${value} clientes`
                      },
                      {
                        id: "monthlyFee",
                        label: "Mensalidade Média por Cliente",
                        defaultValue: 1200,
                        min: 300,
                        max: 10000,
                        step: 100,
                        formatter: formatCurrency
                      },
                      {
                        id: "setupFee",
                        label: "Taxa de Implementação",
                        defaultValue: 1000,
                        min: 0,
                        max: 5000,
                        step: 100,
                        formatter: formatCurrency
                      },
                      {
                        id: "churnRate",
                        label: "Taxa de Churn Mensal",
                        defaultValue: 5,
                        min: 1,
                        max: 30,
                        step: 1,
                        formatter: formatPercentage
                      },
                      {
                        id: "costs",
                        label: "Custos Operacionais Mensais",
                        defaultValue: 2000,
                        min: 500,
                        max: 20000,
                        step: 100,
                        formatter: formatCurrency
                      }
                    ]}
                    calculateResults={(inputs) => {
                      const recurringRevenue = inputs.clientCount * inputs.monthlyFee;
                      const setupRevenue = (inputs.clientCount * inputs.setupFee) / 12; // Amortizado em 12 meses
                      const totalRevenue = recurringRevenue + setupRevenue;
                      const profit = totalRevenue - inputs.costs;
                      const margin = (profit / totalRevenue) * 100;
                      const newClientsNeeded = Math.ceil(inputs.clientCount * (inputs.churnRate / 100));
                      
                      return {
                        "Faturamento Mensal": formatCurrency(totalRevenue),
                        "Lucro Mensal": formatCurrency(profit),
                        "Margem de Lucro": `${margin.toFixed(1)}%`,
                        "Novos Clientes Necessários/Mês": `${newClientsNeeded} para manter`
                      };
                    }}
                  />
                  
                  {/* Third simulator card */}
                  <SimulatorCard
                    title="Calculadora de Escalabilidade"
                    description="Projete o crescimento da sua agência nos próximos meses"
                    inputFields={[
                      {
                        id: "initialClients",
                        label: "Clientes Atuais",
                        defaultValue: 5,
                        min: 0,
                        max: 50,
                        step: 1,
                        formatter: (value) => `${value} clientes`
                      },
                      {
                        id: "growthRate",
                        label: "Taxa de Crescimento Mensal",
                        defaultValue: 20,
                        min: 1,
                        max: 100,
                        step: 1,
                        formatter: formatPercentage
                      },
                      {
                        id: "avgRevenue",
                        label: "Receita Média por Cliente",
                        defaultValue: 1500,
                        min: 500,
                        max: 10000,
                        step: 100,
                        formatter: formatCurrency
                      },
                      {
                        id: "months",
                        label: "Horizonte de Projeção (meses)",
                        defaultValue: 12,
                        min: 1,
                        max: 36,
                        step: 1,
                        formatter: (value) => `${value} meses`
                      }
                    ]}
                    calculateResults={(inputs) => {
                      const finalClients = Math.round(inputs.initialClients * Math.pow(1 + inputs.growthRate / 100, inputs.months));
                      const currentRevenue = inputs.initialClients * inputs.avgRevenue;
                      const projectedRevenue = finalClients * inputs.avgRevenue;
                      const growthMultiple = finalClients / inputs.initialClients;
                      
                      return {
                        "Clientes Atuais": inputs.initialClients,
                        "Clientes em": `${finalClients} (${inputs.months} meses)`,
                        "Receita Atual": formatCurrency(currentRevenue),
                        "Receita Projetada": formatCurrency(projectedRevenue),
                        "Multiplicador de Crescimento": `${growthMultiple.toFixed(1)}x`
                      };
                    }}
                  />
                  
                  {/* Fourth simulator card */}
                  <SimulatorCard
                    title="Calculadora de ROI de Bot"
                    description="Estime o retorno sobre investimento de um bot para seu cliente"
                    inputFields={[
                      {
                        id: "currentStaff",
                        label: "Qtd. Atual de Atendentes",
                        defaultValue: 3,
                        min: 1,
                        max: 50,
                        step: 1,
                        formatter: (value) => `${value} pessoas`
                      },
                      {
                        id: "staffCost",
                        label: "Custo Mensal por Atendente",
                        defaultValue: 3000,
                        min: 1000,
                        max: 10000,
                        step: 100,
                        formatter: formatCurrency
                      },
                      {
                        id: "automationRate",
                        label: "% de Atendimentos Automatizáveis",
                        defaultValue: 60,
                        min: 10,
                        max: 90,
                        step: 5,
                        formatter: formatPercentage
                      },
                      {
                        id: "botCost",
                        label: "Custo Mensal do Bot",
                        defaultValue: 1200,
                        min: 500,
                        max: 5000,
                        step: 100,
                        formatter: formatCurrency
                      }
                    ]}
                    calculateResults={(inputs) => {
                      const currentMonthlyCost = inputs.currentStaff * inputs.staffCost;
                      const staffReduction = Math.floor(inputs.currentStaff * (inputs.automationRate / 100));
                      const newStaffCount = inputs.currentStaff - staffReduction;
                      const newStaffCost = newStaffCount * inputs.staffCost;
                      const newTotalCost = newStaffCost + inputs.botCost;
                      const monthlySavings = currentMonthlyCost - newTotalCost;
                      const annualSavings = monthlySavings * 12;
                      const roi = (monthlySavings / inputs.botCost) * 100;
                      
                      return {
                        "Custo Atual": formatCurrency(currentMonthlyCost),
                        "Novo Custo Total": formatCurrency(newTotalCost),
                        "Economia Mensal": formatCurrency(monthlySavings),
                        "Economia Anual": formatCurrency(annualSavings),
                        "ROI Mensal": `${roi.toFixed(0)}%`,
                        "Atendentes Necessários": `${newStaffCount} pessoas`
                      };
                    }}
                  />
                </div>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  Simulador de Precificação de Serviços
                </h2>
                <SimuladorValorIA />
              </div>
              
              {/* Benchmarks section */}
              <div>
                <h2 className="text-3xl font-bold text-center mb-8">
                  Benchmarks de Mercado
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* First benchmark card */}
                  <Card className="card-gradient">
                    <CardHeader>
                      <CardTitle>Métricas de Tráfego</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span>CPC Médio Facebook Ads</span>
                          <span className="font-medium">R$ 1,80 - R$ 3,50</span>
                        </li>
                        <li className="flex justify-between">
                          <span>CPC Médio Google Ads</span>
                          <span className="font-medium">R$ 2,50 - R$ 5,00</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Taxa Conversão Landing Page</span>
                          <span className="font-medium">8% - 15%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Taxa Abertura Email</span>
                          <span className="font-medium">15% - 25%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>CTR Médio Anúncios</span>
                          <span className="font-medium">1.5% - 3%</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  {/* Second benchmark card */}
                  <Card className="card-gradient">
                    <CardHeader>
                      <CardTitle>Métricas de Vendas</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span>Taxa Lead para Cliente</span>
                          <span className="font-medium">10% - 30%</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Ticket Médio Inicial</span>
                          <span className="font-medium">R$ 800 - R$ 1.500</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Taxa de Churn</span>
                          <span className="font-medium">5% - 15% mensal</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Ciclo de Vendas</span>
                          <span className="font-medium">7 - 30 dias</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Preço Setup</span>
                          <span className="font-medium">R$ 1.000 - R$ 3.000</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                  
                  {/* Third benchmark card */}
                  <Card className="card-gradient">
                    <CardHeader>
                      <CardTitle>Métricas Operacionais</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3">
                        <li className="flex justify-between">
                          <span>Custo API por Cliente</span>
                          <span className="font-medium">R$ 50 - R$ 200/mês</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Tempo de Setup Bot</span>
                          <span className="font-medium">3 - 10 horas</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Qtd. Bots por Desenvolvedor</span>
                          <span className="font-medium">10 - 30 bots</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Tempo Médio de Suporte</span>
                          <span className="font-medium">1 - 3 horas/cliente/mês</span>
                        </li>
                        <li className="flex justify-between">
                          <span>Custo Servidor VPS</span>
                          <span className="font-medium">R$ 50 - R$ 300/mês</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="planos">
              <PlanosServico />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default Simuladores;
