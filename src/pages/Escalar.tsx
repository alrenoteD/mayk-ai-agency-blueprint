
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Info } from "lucide-react";

interface ScaleStage {
  title: string;
  revenue: string;
  clients: string;
  tools: {
    category: string;
    items: string[];
  }[];
  nextSteps: string[];
}

interface ToolTransition {
  category: string;
  basicTool: string;
  intermediateTool: string;
  advancedTool: string;
  whenToUpgrade: string;
}

const Escalar: React.FC = () => {
  const [showClientInfo, setShowClientInfo] = useState(false);

  const scaleStages: ScaleStage[] = [
    {
      title: "Iniciante",
      revenue: "R$3.000 - R$10.000/mês",
      clients: "1-5 clientes",
      tools: [
        {
          category: "IA e Automação",
          items: ["Flowise (local/VPS básica)", "Z-API para WhatsApp", "OpenRouter (crédito inicial)"]
        },
        {
          category: "Infraestrutura",
          items: ["VPS básica (2GB RAM)", "Domínio com email profissional", "Cloudflare (gratuito)"]
        },
        {
          category: "Marketing",
          items: ["Site simples", "Perfil Instagram", "Facebook Ads (orçamento baixo)"]
        }
      ],
      nextSteps: [
        "Documente seus processos",
        "Crie templates reutilizáveis para bots",
        "Colete depoimentos dos primeiros clientes",
        "Defina nichos específicos para especialização"
      ]
    },
    {
      title: "Em Crescimento",
      revenue: "R$10.000 - R$30.000/mês",
      clients: "5-15 clientes",
      tools: [
        {
          category: "IA e Automação",
          items: ["Flowise (VPS dedicada)", "Twilio ou 360dialog", "APIs de IA diversificadas", "Serviço de fallback"]
        },
        {
          category: "Infraestrutura",
          items: ["VPS robusta (8GB+ RAM)", "CDN otimizado", "Backup automatizado", "Monitoramento 24/7"]
        },
        {
          category: "Marketing e Vendas",
          items: ["CRM completo", "Funil de vendas estruturado", "Conteúdo especializado", "Webinars e demonstrações"]
        }
      ],
      nextSteps: [
        "Contrate assistentes para tarefas repetitivas",
        "Desenvolva uma biblioteca de componentes reutilizáveis",
        "Implemente SLAs e suporte estruturado",
        "Explore parcerias estratégicas"
      ]
    },
    {
      title: "Escala",
      revenue: "R$30.000+/mês",
      clients: "15+ clientes",
      tools: [
        {
          category: "IA e Automação",
          items: ["API oficial do WhatsApp Business", "Cluster de servidores", "IA especializada por vertical", "CI/CD para desenvolvimento rápido"]
        },
        {
          category: "Infraestrutura",
          items: ["Infraestrutura em nuvem escalável", "Load balancers", "Monitoramento avançado", "Equipe DevOps"]
        },
        {
          category: "Operações",
          items: ["Equipe especializada por função", "Processos documentados", "Treinamento contínuo", "Software proprietário"]
        }
      ],
      nextSteps: [
        "Desenvolva produtos próprios além de serviços",
        "Considere financiamento para expansão",
        "Estabeleça núcleos de inovação internos",
        "Expanda para novos mercados geográficos"
      ]
    }
  ];

  const toolTransitions: ToolTransition[] = [
    {
      category: "Criação de Fluxos",
      basicTool: "Flowise em VPS pequena",
      intermediateTool: "Flowise em VPS dedicada",
      advancedTool: "Langchain / framework próprio",
      whenToUpgrade: "Quando tiver mais de 10 bots ativos ou precisar de customizações profundas"
    },
    {
      category: "Integração WhatsApp",
      basicTool: "Z-API (plano básico)",
      intermediateTool: "Z-API (plano empresarial) / Twilio",
      advancedTool: "WhatsApp Business API",
      whenToUpgrade: "Quando ultrapassar 1.000 mensagens/dia ou precisar de múltiplas linhas"
    },
    {
      category: "APIs de IA",
      basicTool: "OpenRouter",
      intermediateTool: "OpenAI / Claude com fallback",
      advancedTool: "Mix de provedores com caching",
      whenToUpgrade: "Quando o custo de API ultrapassar R$500/mês"
    },
    {
      category: "Automação",
      basicTool: "Webhooks simples",
      intermediateTool: "N8N / Make",
      advancedTool: "Microserviços próprios",
      whenToUpgrade: "Quando tiver mais de 5 integrações complexas ou alto volume"
    },
    {
      category: "Banco de Dados",
      basicTool: "Arquivos JSON / Chroma",
      intermediateTool: "MongoDB / Supabase",
      advancedTool: "Postgres com vector search / Pinecone",
      whenToUpgrade: "Quando tiver mais de 20 bases de conhecimento ou muitas consultas simultâneas"
    },
    {
      category: "Hospedagem",
      basicTool: "VPS simples (Contabo/Hetzner)",
      intermediateTool: "VPS otimizada com redundância",
      advancedTool: "Kubernetes / Serviços gerenciados",
      whenToUpgrade: "Quando ultrapassar 80% de uso de CPU/RAM ou precisar de uptime garantido"
    }
  ];

  return (
    <PageLayout 
      title="Quando e Como Escalar" 
      subtitle="Guia para crescer sua agência de IA e saber quando migrar para soluções mais avançadas"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-12">
            <Alert className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 mb-8">
              <Info className="h-4 w-4 text-amber-800 dark:text-amber-400" />
              <AlertTitle className="text-amber-800 dark:text-amber-400">Nota sobre os estágios de crescimento</AlertTitle>
              <AlertDescription className="text-amber-700 dark:text-amber-300">
                Os valores apresentados consideram clientes ativos recorrentes, não apenas gerados no mês.
                O faturamento representa receitas mensais contínuas (não projetos pontuais).
                <button 
                  onClick={() => setShowClientInfo(!showClientInfo)} 
                  className="text-mayk-purple underline ml-2"
                >
                  {showClientInfo ? "Ocultar detalhes" : "Ver mais detalhes"}
                </button>
              </AlertDescription>
              
              {showClientInfo && (
                <div className="mt-4 pl-4 border-l-2 border-amber-300 dark:border-amber-700">
                  <p className="text-sm text-amber-700 dark:text-amber-300 mb-2">
                    <strong>Modelo de Negócio:</strong> O modelo recomendado para agências de IA combina:
                  </p>
                  <ul className="list-disc pl-5 text-sm text-amber-700 dark:text-amber-300 space-y-1 mb-2">
                    <li><strong>Taxa de setup inicial:</strong> Para cobrir custos de implementação (R$1.000-3.000)</li>
                    <li><strong>Mensalidade recorrente:</strong> Para manutenção, hospedagem e suporte (R$500-2.000/mês)</li>
                  </ul>
                  <p className="text-sm text-amber-700 dark:text-amber-300">
                    A escalabilidade deste negócio está em aumentar o número de clientes recorrentes,
                    tornando seus processos mais eficientes para atender mais clientes com a mesma equipe.
                  </p>
                </div>
              )}
            </Alert>

            <h2 className="text-3xl font-bold text-center mb-8">
              Estágios de Crescimento
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {scaleStages.map((stage, index) => (
                <div key={index} className="flex flex-col">
                  <Card className="card-gradient flex-grow">
                    <CardHeader className="border-b border-border pb-4">
                      <CardTitle className="text-xl text-center">
                        <span className={index === 0 ? "text-blue-500" : index === 1 ? "text-purple-500" : "text-teal-500"}>
                          {stage.title}
                        </span>
                      </CardTitle>
                      <CardDescription className="text-center">
                        {stage.revenue} • {stage.clients}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      {stage.tools.map((toolCategory, idx) => (
                        <div key={idx} className="mb-6">
                          <h4 className="font-medium text-sm mb-2">{toolCategory.category}</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            {toolCategory.items.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      ))}
                      <div>
                        <h4 className="font-medium text-sm mb-2">Próximos Passos</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          {stage.nextSteps.map((step, i) => (
                            <li key={i}>{step}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                  {index < scaleStages.length - 1 && (
                    <div className="hidden md:flex justify-center my-4">
                      <div className="w-8 h-8 rounded-full bg-mayk-purple/20 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-mayk-purple">
                          <path d="M5 12h14"></path>
                          <path d="m12 5 7 7-7 7"></path>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-8">
              Limites Técnicos e Quando Atualizar
            </h2>
            
            <Tabs defaultValue="por-ferramenta" className="w-full">
              <TabsList className="grid grid-cols-2 mb-8">
                <TabsTrigger value="por-ferramenta">Por Ferramenta</TabsTrigger>
                <TabsTrigger value="por-volume">Por Volume</TabsTrigger>
              </TabsList>
              
              <TabsContent value="por-ferramenta">
                <Card>
                  <CardHeader>
                    <CardTitle>Quando Substituir Cada Ferramenta</CardTitle>
                    <CardDescription>
                      Use esta tabela para planejar suas migrações técnicas à medida que sua agência cresce
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[180px]">Categoria</TableHead>
                          <TableHead>Solução Inicial</TableHead>
                          <TableHead>Nível Intermediário</TableHead>
                          <TableHead>Nível Avançado</TableHead>
                          <TableHead className="w-[250px]">Quando Atualizar</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {toolTransitions.map((tool, i) => (
                          <TableRow key={i}>
                            <TableCell className="font-medium">{tool.category}</TableCell>
                            <TableCell>{tool.basicTool}</TableCell>
                            <TableCell>{tool.intermediateTool}</TableCell>
                            <TableCell>{tool.advancedTool}</TableCell>
                            <TableCell className="text-sm">{tool.whenToUpgrade}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="por-volume">
                <Card>
                  <CardHeader>
                    <CardTitle>Limites de Volume por Solução</CardTitle>
                    <CardDescription>
                      Análise dos limites de escala por volume de uso
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-lg font-medium mb-4">Flowise</h3>
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Card className="bg-green-50 dark:bg-green-900/20">
                              <CardHeader className="pb-2">
                                <CardTitle className="text-base">Servidor Básico (2GB RAM)</CardTitle>
                                <CardDescription>Até 5 bots ativos</CardDescription>
                              </CardHeader>
                              <CardContent className="text-sm">
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Até 300 interações por dia</li>
                                  <li>Fluxos simples (5-10 nós)</li>
                                  <li>Sem RAG complexo</li>
                                  <li>Tempo de resposta: 2-5s</li>
                                </ul>
                              </CardContent>
                            </Card>
                            
                            <Card className="bg-yellow-50 dark:bg-yellow-900/20">
                              <CardHeader className="pb-2">
                                <CardTitle className="text-base">Servidor Médio (4-8GB RAM)</CardTitle>
                                <CardDescription>5-15 bots ativos</CardDescription>
                              </CardHeader>
                              <CardContent className="text-sm">
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Até 1.000 interações por dia</li>
                                  <li>Fluxos médios (até 20 nós)</li>
                                  <li>RAG básico (menos de 10 docs)</li>
                                  <li>Tempo de resposta: 1-3s</li>
                                </ul>
                              </CardContent>
                            </Card>
                            
                            <Card className="bg-red-50 dark:bg-red-900/20">
                              <CardHeader className="pb-2">
                                <CardTitle className="text-base">Servidor Grande (16GB+ RAM)</CardTitle>
                                <CardDescription>Mais de 15 bots</CardDescription>
                              </CardHeader>
                              <CardContent className="text-sm">
                                <ul className="list-disc pl-5 space-y-1">
                                  <li>Considerar múltiplos servidores</li>
                                  <li>Ou migrar para Langchain</li>
                                  <li>RAG com bases grandes</li>
                                  <li>Cargas variáveis</li>
                                </ul>
                              </CardContent>
                            </Card>
                          </div>
                          
                          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800/50">
                            <h4 className="font-medium text-blue-800 dark:text-blue-400 mb-2">Dica de Performance</h4>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              Uma prática recomendada ao escalar é separar os bots com maior uso em instâncias dedicadas,
                              em vez de tentar manter todos em uma única instância grande. Isso isola problemas e 
                              facilita a manutenção.
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h3 className="text-lg font-medium mb-4">Integrações com WhatsApp</h3>
                        <div className="space-y-4">
                          <Table>
                            <TableHeader>
                              <TableRow>
                                <TableHead>API</TableHead>
                                <TableHead>Limite de Mensagens</TableHead>
                                <TableHead>Custo</TableHead>
                                <TableHead>Confiabilidade</TableHead>
                                <TableHead>Melhor Para</TableHead>
                              </TableRow>
                            </TableHeader>
                            <TableBody>
                              <TableRow>
                                <TableCell className="font-medium">Z-API (Base)</TableCell>
                                <TableCell>~1.000/dia</TableCell>
                                <TableCell>R$100-200/mês</TableCell>
                                <TableCell>Média</TableCell>
                                <TableCell>Iniciantes</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Z-API (Business)</TableCell>
                                <TableCell>~5.000/dia</TableCell>
                                <TableCell>R$250-450/mês</TableCell>
                                <TableCell>Boa</TableCell>
                                <TableCell>Pequena/média escala</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">Twilio</TableCell>
                                <TableCell>~10.000/dia</TableCell>
                                <TableCell>$0.005/msg + mensalidade</TableCell>
                                <TableCell>Muito boa</TableCell>
                                <TableCell>Média escala</TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell className="font-medium">WA Business API</TableCell>
                                <TableCell>Ilimitado</TableCell>
                                <TableCell>Variável por uso</TableCell>
                                <TableCell>Excelente</TableCell>
                                <TableCell>Grande escala/Enterprise</TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                          
                          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800/50">
                            <h4 className="font-medium text-blue-800 dark:text-blue-400 mb-2">Conexões Múltiplas</h4>
                            <p className="text-sm text-blue-700 dark:text-blue-300">
                              Ao chegar em um nível intermediário, considere implementar um middleware próprio que possa
                              alternar entre diferentes provedores de API WhatsApp em caso de falha de um deles,
                              garantindo redundância para seus clientes mais importantes.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-gray-50 dark:bg-gray-800/50 border-t">
                    <p className="text-sm text-muted-foreground">
                      Os limites exatos podem variar dependendo da complexidade dos fluxos, latência de API e outros fatores.
                      Sempre monitore o desempenho real antes de tomar decisões de escala.
                    </p>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-center mb-8">
              Fluxo de Transição Técnica
            </h2>
            
            <div className="max-w-4xl mx-auto p-6 bg-mayk-purple/5 border border-mayk-purple/20 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <div className="h-12 w-12 rounded-full bg-mayk-purple/20 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mayk-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">Fase 1: Validação</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Tools:</strong> Flowise + Z-API Básico</li>
                    <li><strong>Stack:</strong> VPS simples e chaves API gratuitas/baratas</li>
                    <li><strong>Foco:</strong> Provar viabilidade do modelo de negócio</li>
                    <li><strong>Meta:</strong> 5 clientes pagantes e processos documentados</li>
                  </ul>
                </div>
                
                <div>
                  <div className="h-12 w-12 rounded-full bg-mayk-purple/20 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mayk-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">Fase 2: Otimização</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Tools:</strong> Flowise otimizado + Z-API Business/Twilio</li>
                    <li><strong>Stack:</strong> VPS dedicada, monitoramento, backups</li>
                    <li><strong>Foco:</strong> Processos, automação, biblioteca de componentes</li>
                    <li><strong>Meta:</strong> 15 clientes com custo operacional otimizado</li>
                  </ul>
                </div>
                
                <div>
                  <div className="h-12 w-12 rounded-full bg-mayk-purple/20 flex items-center justify-center mb-4 mx-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-mayk-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-center mb-3">Fase 3: Escala</h3>
                  <ul className="list-disc pl-5 space-y-2 text-sm">
                    <li><strong>Tools:</strong> Combinação Flowise + Langchain ou solução própria</li>
                    <li><strong>Stack:</strong> Arquitetura distribuída, múltiplos servidores</li>
                    <li><strong>Foco:</strong> Escalabilidade, redundância, personalização profunda</li>
                    <li><strong>Meta:</strong> 30+ clientes com equipe especializada</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="h-1 bg-gray-200 dark:bg-gray-700 rounded flex-1 mt-4 col-span-3"></div>
              </div>
              
              <div className="mt-8 text-center">
                <h4 className="font-medium mb-2">Recomendação Final</h4>
                <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                  Espere até ter <strong>pelo menos 10 clientes ativos</strong> antes de fazer grandes investimentos em 
                  infraestrutura ou migrações complexas. O foco inicial deve ser em conseguir clientes e refinar os processos, 
                  não na otimização prematura da stack técnica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Escalar;
