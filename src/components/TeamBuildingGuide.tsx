
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

const TeamBuildingGuide: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold mb-6 text-center">
        <span className="gradient-text">Montando sua Equipe</span> para Escalar
      </h2>
      
      <Tabs defaultValue="estrutura" className="w-full">
        <TabsList className="grid grid-cols-1 sm:grid-cols-4 mb-8">
          <TabsTrigger value="estrutura">Estrutura Ideal</TabsTrigger>
          <TabsTrigger value="automacao">O que Automatizar</TabsTrigger>
          <TabsTrigger value="eficiencia">Eficiência Operacional</TabsTrigger>
          <TabsTrigger value="expansao">Serviços para Expansão</TabsTrigger>
        </TabsList>
        
        <TabsContent value="estrutura">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Estrutura de Equipe Ideal</CardTitle>
              <CardDescription>Evolução da equipe conforme o crescimento da agência</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <Badge variant="outline" className="mr-2 bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                      Fase 1
                    </Badge>
                    Agência Iniciante (1-3 pessoas)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-medium">Estrutura Básica</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Fundador/Estrategista (você) - Vendas e estratégia</li>
                        <li>Desenvolvedor de Bots (pode ser terceirizado inicialmente)</li>
                        <li>Suporte básico (pode ser você mesmo com ajuda de automação)</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Ferramentas Essenciais</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>CRM simplificado (Pipedrive ou similar)</li>
                        <li>Plataforma de desenvolvimento (Flowise, Botpress)</li>
                        <li>Sistema de tickets para suporte</li>
                        <li>Ferramentas de comunicação básicas</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <Badge variant="outline" className="mr-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                      Fase 2
                    </Badge>
                    Agência em Crescimento (4-10 pessoas)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-medium">Estrutura Expandida</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>CEO/Fundador - Estratégia e parcerias</li>
                        <li>Gerente de Vendas + 1-2 Vendedores</li>
                        <li>Lead Técnico + 1-2 Desenvolvedores</li>
                        <li>Especialista em Marketing</li>
                        <li>Customer Success (1-2 pessoas)</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Distribuição de Responsabilidades</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Vendas: Prospecção e fechamento</li>
                        <li>Técnico: Desenvolvimento e manutenção</li>
                        <li>Marketing: Geração de leads e marca</li>
                        <li>Customer Success: Onboarding e retenção</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-bold flex items-center">
                    <Badge variant="outline" className="mr-2 bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                      Fase 3
                    </Badge>
                    Agência Estabelecida (11-30+ pessoas)
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <h4 className="font-medium">Estrutura Departamental</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Diretoria (CEO, CTO, COO, CMO)</li>
                        <li>Vendas (Gerente + Equipe + SDRs)</li>
                        <li>Desenvolvimento (Líder + Squads específicas)</li>
                        <li>Marketing (Gerente + Especialistas)</li>
                        <li>Customer Success (Gerente + Consultores)</li>
                        <li>Produtos (Product Manager)</li>
                        <li>Administrativo/Financeiro</li>
                      </ul>
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-medium">Especialização por Verticais</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Squad Saúde: Bots para clínicas e hospitais</li>
                        <li>Squad Varejo: Soluções para comércio</li>
                        <li>Squad Imobiliário: Automação para corretores</li>
                        <li>Squad Enterprise: Soluções corporativas</li>
                        <li>Squad de Produto: Soluções proprietárias</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="automacao">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Estratégia de Automação</CardTitle>
              <CardDescription>O que automatizar vs. o que manter humano</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-green-600 dark:text-green-400 mb-4">O Que Automatizar</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Atendimento ao Cliente</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>FAQs e dúvidas frequentes</li>
                            <li>Triagem inicial de tickets</li>
                            <li>Atualizações de status</li>
                            <li>Coleta inicial de informações</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Vendas</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Qualificação de leads</li>
                            <li>Agendamento de demonstrações</li>
                            <li>Follow-up inicial</li>
                            <li>Envio de materiais padronizados</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Operações</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Monitoramento de bots em produção</li>
                            <li>Relatórios de desempenho</li>
                            <li>Onboarding básico de clientes</li>
                            <li>Alertas de falhas e problemas</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Administrativo</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Faturamento e cobrança recorrente</li>
                            <li>Documentação e contratos padrão</li>
                            <li>Agendamentos internos</li>
                            <li>Relatórios financeiros básicos</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-4">O Que Manter Humano</h3>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium">Relacionamento com Clientes</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Reuniões estratégicas</li>
                            <li>Resolução de problemas complexos</li>
                            <li>Negociações de contratos</li>
                            <li>Escalação de situações críticas</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Desenvolvimento Estratégico</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Design de soluções personalizadas</li>
                            <li>Treinamento de modelos específicos</li>
                            <li>Consultoria de inteligência artificial</li>
                            <li>Arquitetura de sistemas complexos</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Vendas Consultivas</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Vendas de alto valor</li>
                            <li>Análise de necessidades</li>
                            <li>Apresentação de soluções complexas</li>
                            <li>Negociações avançadas</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium">Criatividade e Inovação</h4>
                          <ul className="list-disc pl-5 space-y-1">
                            <li>Desenvolvimento de novos produtos</li>
                            <li>Estratégias de crescimento</li>
                            <li>Parcerias estratégicas</li>
                            <li>Criação de conteúdo único e autoridade</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-6">
                  <h3 className="text-lg font-medium mb-3 text-amber-800 dark:text-amber-400">
                    Framework de Decisão: Automatizar ou Manter Humano?
                  </h3>
                  
                  <div className="space-y-3">
                    <p className="text-sm">Faça estas perguntas antes de decidir automatizar um processo:</p>
                    <ol className="list-decimal pl-6 space-y-2 text-sm">
                      <li><strong>É repetitivo e padronizado?</strong> Tarefas que seguem padrões claros são ideais para automação.</li>
                      <li><strong>Requer empatia e julgamento humano complexo?</strong> Se sim, mantenha humano.</li>
                      <li><strong>Impacta diretamente a experiência premium do cliente?</strong> Para clientes de alto valor, contato humano pode ser diferencial.</li>
                      <li><strong>Envolve decisões estratégicas?</strong> Mantenha humano para decisões de alto impacto.</li>
                      <li><strong>Qual o ROI da automação?</strong> Compare custo de desenvolvimento vs. economia em 12 meses.</li>
                    </ol>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="eficiencia">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Eficiência Operacional</CardTitle>
              <CardDescription>Processos e sistemas para escalar com qualidade</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold border-b pb-2">Processos Documentados</h3>
                    
                    <div>
                      <h4 className="font-medium text-sm">Playbooks e SOPs</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Processo de desenvolvimento de bots</li>
                        <li>Onboarding de novos clientes</li>
                        <li>Escalação de problemas técnicos</li>
                        <li>Script de vendas e demonstração</li>
                        <li>Treinamento de novos colaboradores</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm">Gestão do Conhecimento</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Wiki centralizado e acessível</li>
                        <li>Biblioteca de prompts e templates</li>
                        <li>Documentação técnica padronizada</li>
                        <li>Histórico de casos de sucesso</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold border-b pb-2">Sistemas Integrados</h3>
                    
                    <div>
                      <h4 className="font-medium text-sm">Stack Tecnológico</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>CRM integrado à plataforma de bots</li>
                        <li>Sistema de gestão de projetos</li>
                        <li>Plataforma de monitoramento de bots</li>
                        <li>Dashboards de performance</li>
                        <li>Sistema de cobrança recorrente</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm">Automações Internas</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Bot para suporte interno</li>
                        <li>Bot para onboarding de desenvolvedores</li>
                        <li>Automação de relatórios gerenciais</li>
                        <li>Integração com webhooks e APIs</li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-bold border-b pb-2">Métricas e KPIs</h3>
                    
                    <div>
                      <h4 className="font-medium text-sm">Indicadores Chave</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>MRR (Receita Recorrente Mensal)</li>
                        <li>CAC (Custo de Aquisição de Cliente)</li>
                        <li>LTV (Valor Vitalício do Cliente)</li>
                        <li>Taxa de churn e retenção</li>
                        <li>NPS (Net Promoter Score)</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm">Dashboards Gerenciais</h4>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>Dashboard de vendas e pipeline</li>
                        <li>Dashboard de performance técnica</li>
                        <li>Dashboard de satisfação do cliente</li>
                        <li>Dashboard financeiro</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg">
                  <h3 className="text-lg font-medium mb-4 text-blue-800 dark:text-blue-400">
                    Ciclo de Melhoria Contínua
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div className="bg-white dark:bg-gray-800 rounded p-4 text-center">
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">1</div>
                      <h4 className="font-medium mb-2">Medir</h4>
                      <p className="text-xs">Coleta sistemática de dados de desempenho e feedback</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded p-4 text-center">
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">2</div>
                      <h4 className="font-medium mb-2">Analisar</h4>
                      <p className="text-xs">Identificação de padrões, gargalos e oportunidades</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded p-4 text-center">
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">3</div>
                      <h4 className="font-medium mb-2">Implementar</h4>
                      <p className="text-xs">Aplicação de melhorias em processos e sistemas</p>
                    </div>
                    
                    <div className="bg-white dark:bg-gray-800 rounded p-4 text-center">
                      <div className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
                      <h4 className="font-medium mb-2">Padronizar</h4>
                      <p className="text-xs">Documentação e institucionalização das melhores práticas</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold">Ferramentas Recomendadas</h3>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Gestão de Projetos</span>
                        <span className="text-sm">ClickUp, Asana, Jira</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">CRM</span>
                        <span className="text-sm">Pipedrive, HubSpot, Close</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Suporte</span>
                        <span className="text-sm">Zendesk, Intercom, Freshdesk</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Gestão do Conhecimento</span>
                        <span className="text-sm">Notion, Confluence, GitBook</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="font-medium">Monitoramento</span>
                        <span className="text-sm">Datadog, New Relic, Grafana</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold">Checklist de Eficiência</h3>
                    
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Todos os processos principais estão documentados
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Sistemas de diferentes áreas estão integrados
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Dashboards para KPIs principais implementados
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Processo de onboarding de clientes padronizado
                      </li>
                      <li className="flex items-center">
                        <svg className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        Reuniões regulares de análise de dados e melhoria
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="expansao">
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Serviços para Expansão</CardTitle>
              <CardDescription>Diversificando sua oferta para crescer</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Card className="bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-950/30 dark:to-indigo-950/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <svg className="h-5 w-5 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
                        </svg>
                        Consultoria Avançada de IA
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">Expanda para serviços de consultoria estratégica em IA, ajudando empresas a planejar sua transformação digital completa.</p>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-2">Serviços Potenciais:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Diagnósticos de automação</li>
                          <li>Workshops executivos de IA</li>
                          <li>Roadmaps de transformação digital</li>
                          <li>Treinamento de equipes</li>
                          <li>Auditorias de processos</li>
                        </ul>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        <strong>Ticket médio:</strong> R$15.000 - R$50.000
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-950/30 dark:to-cyan-950/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <svg className="h-5 w-5 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                        Plataforma SaaS Personalizada
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">Desenvolva uma plataforma proprietária que permita a clientes criarem e gerenciarem seus próprios bots com mínima intervenção técnica.</p>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-2">Características:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>Interface drag-and-drop</li>
                          <li>Modelos pré-construídos por nicho</li>
                          <li>Integração nativa com múltiplos canais</li>
                          <li>Analytics avançado</li>
                          <li>Marketplace de extensões</li>
                        </ul>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        <strong>Modelo:</strong> Assinatura mensal com tiers
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/30 dark:to-emerald-950/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <svg className="h-5 w-5 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                        </svg>
                        Soluções Verticais Específicas
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">Crie produtos altamente especializados para nichos específicos, com conhecimento de domínio profundo integrado.</p>
                      
                      <div>
                        <h4 className="font-medium text-sm mb-2">Exemplos:</h4>
                        <ul className="list-disc pl-5 space-y-1 text-sm">
                          <li>ClínicaBot: Gestão completa de pacientes</li>
                          <li>CondoAI: Automação para condomínios</li>
                          <li>AgroAssistant: IA para produtores rurais</li>
                          <li>EduBot: Plataforma para instituições de ensino</li>
                          <li>LegalAI: Assistente para escritórios de advocacia</li>
                        </ul>
                      </div>
                      
                      <div className="text-xs text-muted-foreground">
                        <strong>Vantagem:</strong> Menor CAC, maior LTV, autoridade no setor
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/30 dark:to-orange-950/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <svg className="h-5 w-5 text-amber-600 dark:text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Serviços Complementares
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">Adicione serviços que complementam e aumentam o valor da sua oferta principal de automação com IA.</p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Marketing Digital</h4>
                          <ul className="list-disc pl-5 space-y-1 text-xs">
                            <li>Gestão de campanhas para captar leads para bots</li>
                            <li>Landing pages otimizadas</li>
                            <li>Estratégia de conteúdo especializado</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-2">Design UX/UI</h4>
                          <ul className="list-disc pl-5 space-y-1 text-xs">
                            <li>Design de fluxos conversacionais</li>
                            <li>Personalização de interfaces</li>
                            <li>Testes de usabilidade</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 mt-2">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Integração de Sistemas</h4>
                          <ul className="list-disc pl-5 space-y-1 text-xs">
                            <li>Conexão com ERPs e CRMs existentes</li>
                            <li>Middleware personalizado</li>
                            <li>APIs customizadas</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-2">Treinamento e Capacitação</h4>
                          <ul className="list-disc pl-5 space-y-1 text-xs">
                            <li>Cursos para equipes dos clientes</li>
                            <li>Certificação de operadores</li>
                            <li>Documentação personalizada</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <svg className="h-5 w-5 text-rose-600 dark:text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Expansão Internacional
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-sm">Estratégias para expandir além do mercado brasileiro, aproveitando sua expertise em IA.</p>
                      
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-medium text-sm mb-2">Mercados Prioritários</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>América Latina (Espanhol) - Baixa barreira de entrada</li>
                            <li>Portugal - Mesma língua, porta para Europa</li>
                            <li>EUA (mercado hispânico) - Alto poder aquisitivo</li>
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-sm mb-2">Estratégias de Entrada</h4>
                          <ul className="list-disc pl-5 space-y-1 text-sm">
                            <li>Parcerias com agências locais</li>
                            <li>Modelo de representantes/revendas</li>
                            <li>Adaptação de produtos para cultura local</li>
                            <li>Participação em aceleradoras internacionais</li>
                          </ul>
                        </div>
                        
                        <div className="text-xs text-muted-foreground">
                          <strong>Consideração:</strong> Invista em multilinguismo nos seus modelos de IA e adapte para normas locais (GDPR na Europa, etc.)
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                <div className="p-6 bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-lg">
                  <h3 className="text-lg font-medium mb-4 text-indigo-800 dark:text-indigo-300">
                    Roteiro de Expansão Recomendado
                  </h3>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4 items-start">
                      <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full h-8 w-8 flex items-center justify-center text-indigo-800 dark:text-indigo-200 font-bold shrink-0">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium">Consolidação da Base Atual</h4>
                        <p className="text-sm mt-1">Estabilize seus serviços principais. Atinja excelência operacional e alta satisfação de clientes antes de expandir.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full h-8 w-8 flex items-center justify-center text-indigo-800 dark:text-indigo-200 font-bold shrink-0">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium">Extensão Horizontal</h4>
                        <p className="text-sm mt-1">Adicione serviços complementares (marketing, UX, integração) para seus clientes atuais. Aumente o ticket médio sem mudar de público.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full h-8 w-8 flex items-center justify-center text-indigo-800 dark:text-indigo-200 font-bold shrink-0">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium">Especialização Vertical</h4>
                        <p className="text-sm mt-1">Desenvolva soluções específicas para os setores onde já tem mais clientes. Torne-se autoridade nesse nicho.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full h-8 w-8 flex items-center justify-center text-indigo-800 dark:text-indigo-200 font-bold shrink-0">
                        4
                      </div>
                      <div>
                        <h4 className="font-medium">Produtização</h4>
                        <p className="text-sm mt-1">Transforme seus serviços mais bem-sucedidos em produtos escaláveis. Desenvolva uma plataforma SaaS com menor necessidade de customização.</p>
                      </div>
                    </div>
                    
                    <div className="flex gap-4 items-start">
                      <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full h-8 w-8 flex items-center justify-center text-indigo-800 dark:text-indigo-200 font-bold shrink-0">
                        5
                      </div>
                      <div>
                        <h4 className="font-medium">Expansão Geográfica</h4>
                        <p className="text-sm mt-1">Com produtos testados e processos bem definidos, expanda para novos mercados, começando pelos culturalmente mais próximos.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamBuildingGuide;
