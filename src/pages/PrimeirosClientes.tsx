
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Target, 
  MessageCircle, 
  TrendingUp, 
  CheckCircle, 
  AlertCircle,
  Lightbulb,
  FileText,
  Presentation,
  Phone,
  Calendar,
  Handshake,
  Star,
  DollarSign
} from 'lucide-react';

const PrimeirosClientes: React.FC = () => {
  return (
    <PageLayout 
      title="Como Conseguir Seus Primeiros Clientes" 
      subtitle="Guia completo para converter leads em clientes pagantes e construir relacionamentos B2B duradouros"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Identificar o Cliente Ideal</h3>
              <p className="text-sm text-muted-foreground">Encontre empresas que realmente precisam de IA</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Presentation className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Apresentar Valor</h3>
              <p className="text-sm text-muted-foreground">Mostre resultados concretos e ROI claro</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Handshake className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Fechar o Negócio</h3>
              <p className="text-sm text-muted-foreground">Técnicas para converter propostas em contratos</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Tabs principais */}
      <section className="section-padding">
        <div className="container mx-auto">
          <Tabs defaultValue="perfil-cliente" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="perfil-cliente">Perfil do Cliente</TabsTrigger>
              <TabsTrigger value="primeiro-contato">Primeiro Contato</TabsTrigger>
              <TabsTrigger value="apresentacao">Apresentação</TabsTrigger>
              <TabsTrigger value="objecoes">Objeções</TabsTrigger>
              <TabsTrigger value="fechamento">Fechamento</TabsTrigger>
            </TabsList>

            <TabsContent value="perfil-cliente" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Identificando o Cliente Ideal para Assistentes IA
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-green-600">✅ Clientes Ideais</h3>
                      <div className="space-y-3">
                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Clínicas e Consultórios</h4>
                          <p className="text-sm text-muted-foreground">Recebem muitas ligações para agendamento, têm fluxo previsível e valorizam automação.</p>
                          <Badge variant="secondary" className="mt-2">Ticket: R$ 2.000-5.000/mês</Badge>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Salões de Beleza e Estética</h4>
                          <p className="text-sm text-muted-foreground">Alto volume de agendamentos via WhatsApp, clientes que remarcar constantemente.</p>
                          <Badge variant="secondary" className="mt-2">Ticket: R$ 1.500-3.000/mês</Badge>
                        </div>

                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Escritórios de Advocacia</h4>
                          <p className="text-sm text-muted-foreground">Muitas consultas repetitivas, necessidade de FAQ automático.</p>
                          <Badge variant="secondary" className="mt-2">Ticket: R$ 3.000-8.000/mês</Badge>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-3 text-red-600">❌ Evitar Inicialmente</h3>
                      <div className="space-y-3">
                        <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Empresas Muito Pequenas</h4>
                          <p className="text-sm text-muted-foreground">Menos de 5 funcionários, baixo volume de atendimento.</p>
                        </div>
                        
                        <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Setores Muito Regulamentados</h4>
                          <p className="text-sm text-muted-foreground">Bancos, seguradoras (exigem certificações complexas).</p>
                        </div>

                        <div className="bg-red-50 dark:bg-red-950/30 p-4 rounded-lg">
                          <h4 className="font-medium mb-2">Empresas "Tradicionais" Demais</h4>
                          <p className="text-sm text-muted-foreground">Resistentes à tecnologia, processos muito burocráticos.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                      <Lightbulb className="h-5 w-5 text-blue-600" />
                      Sinais de que a Empresa Precisa de IA
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Recebem +50 mensagens/dia no WhatsApp</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Funcionários reclamam de tarefas repetitivas</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Perdem clientes por demora no atendimento</span>
                        </li>
                      </ul>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Querem crescer mas não conseguem contratar</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Já usam outras tecnologias (apps, sistemas)</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Donos jovens ou abertos à inovação</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="primeiro-contato" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                    O Primeiro Contato Perfeito
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Template de Mensagem Inicial (WhatsApp/Email)</h3>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border-l-4 border-green-500">
                      <p className="text-sm leading-relaxed">
                        "Olá [Nome], meu nome é [Seu Nome] e sou especialista em automação com IA para [segmento].<br/><br/>
                        
                        Percebi que vocês devem receber muitas mensagens de agendamento no WhatsApp. Será que posso mostrar como outras [clínicas/salões/escritórios] estão economizando 15h/semana automatizando isso?<br/><br/>
                        
                        É um sistema que agenda, confirma e até responde as principais dúvidas dos clientes - funciona 24h e custa menos que meio salário.<br/><br/>
                        
                        Posso mostrar em 10 minutos como funciona?"
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Phone className="h-4 w-4 text-blue-600" />
                          Abordagem por Telefone
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium">1. Quebra-gelo (10s)</h4>
                            <p className="text-sm text-muted-foreground">"Olá, falo com [Nome]? Sou [Seu Nome], especialista em automação para [segmento]."</p>
                          </div>
                          <div>
                            <h4 className="font-medium">2. Gancho de interesse (20s)</h4>
                            <p className="text-sm text-muted-foreground">"Ajudo empresas como a sua a economizar até 15h/semana automatizando agendamentos. Você gostaria de saber como?"</p>
                          </div>
                          <div>
                            <h4 className="font-medium">3. Agendamento (10s)</h4>
                            <p className="text-sm text-muted-foreground">"Posso mostrar em 10 minutos. Que tal amanhã às 14h ou prefere sexta de manhã?"</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Users className="h-4 w-4 text-purple-600" />
                          Abordagem Presencial
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium">1. Apresentação</h4>
                            <p className="text-sm text-muted-foreground">"Trabalho com automação para [segmento] e estava passando aqui perto."</p>
                          </div>
                          <div>
                            <h4 className="font-medium">2. Observação inteligente</h4>
                            <p className="text-sm text-muted-foreground">"Percebi que vocês devem ter bastante movimento. Como fazem para gerenciar todos os agendamentos?"</p>
                          </div>
                          <div>
                            <h4 className="font-medium">3. Proposta de valor</h4>
                            <p className="text-sm text-muted-foreground">"Mostro outras empresas automatizando isso. Posso deixar meu cartão e marcar 10 minutos?"</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-lg">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="h-5 w-5 text-yellow-600 mt-0.5" />
                      <div>
                        <h4 className="font-medium text-yellow-800 dark:text-yellow-200">Dicas Importantes</h4>
                        <ul className="text-sm text-yellow-700 dark:text-yellow-300 mt-2 space-y-1">
                          <li>• Sempre mencione o segmento específico da empresa</li>
                          <li>• Use dados concretos (15h/semana, 24h, etc.)</li>
                          <li>• Foque no problema, não na tecnologia</li>
                          <li>• Peça pouco tempo (10-15 minutos máximo)</li>
                          <li>• Dê opções de horário para facilitar o "sim"</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="apresentacao" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Presentation className="h-5 w-5 text-purple-600" />
                    Apresentação que Convence
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Estrutura da Apresentação (15 minutos)</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-medium">Diagnóstico (3 min)</h4>
                          <p className="text-sm text-muted-foreground">"Quantas mensagens vocês recebem por dia? Como está organizado hoje? Quais os maiores problemas?"</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-medium">Demonstração Prática (5 min)</h4>
                          <p className="text-sm text-muted-foreground">Mostrar o bot funcionando em tempo real, simulando um agendamento completo.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-medium">Cases de Sucesso (4 min)</h4>
                          <p className="text-sm text-muted-foreground">Mostrar resultados de clientes similares com números concretos.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</div>
                        <div>
                          <h4 className="font-medium">Proposta e Investimento (3 min)</h4>
                          <p className="text-sm text-muted-foreground">Apresentar o valor e comparar com custo de funcionário.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <TrendingUp className="h-4 w-4 text-green-600" />
                          Dados que Impressionam
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded">
                            <h4 className="font-medium text-green-800 dark:text-green-200">📈 Economia de Tempo</h4>
                            <p className="text-sm text-green-700 dark:text-green-300">"15h/semana = 60h/mês = R$ 3.000 em salário"</p>
                          </div>
                          
                          <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded">
                            <h4 className="font-medium text-green-800 dark:text-green-200">📞 Redução de Ligações</h4>
                            <p className="text-sm text-green-700 dark:text-green-300">"80% das ligações são para agendamento ou informações básicas"</p>
                          </div>
                          
                          <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded">
                            <h4 className="font-medium text-green-800 dark:text-green-200">⏰ Disponibilidade</h4>
                            <p className="text-sm text-green-700 dark:text-green-300">"Funciona 24h, fins de semana e feriados"</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Star className="h-4 w-4 text-yellow-600" />
                          Case de Sucesso Template
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div>
                            <h4 className="font-medium">Clínica Dr. Silva</h4>
                            <p className="text-sm text-muted-foreground">3 funcionários, 150 pacientes/semana</p>
                          </div>
                          
                          <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded">
                            <h5 className="text-sm font-medium">Antes:</h5>
                            <ul className="text-xs text-muted-foreground">
                              <li>• 3h/dia só atendendo telefone</li>
                              <li>• Muitos agendamentos perdidos</li>
                              <li>• Retrabalho constante</li>
                            </ul>
                          </div>
                          
                          <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded">
                            <h5 className="text-sm font-medium">Depois:</h5>
                            <ul className="text-xs text-muted-foreground">
                              <li>• 70% dos agendamentos automáticos</li>
                              <li>• 15h/semana liberadas para pacientes</li>
                              <li>• 30% mais agendamentos</li>
                            </ul>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <FileText className="h-5 w-5 text-blue-600" />
                      Materiais de Apoio Essenciais
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium">1. Vídeo Demo (2 min)</h4>
                        <p className="text-sm text-muted-foreground">Bot fazendo agendamento completo</p>
                      </div>
                      <div>
                        <h4 className="font-medium">2. One-page com ROI</h4>
                        <p className="text-sm text-muted-foreground">Cálculo de economia personalizado</p>
                      </div>
                      <div>
                        <h4 className="font-medium">3. Cases documentados</h4>
                        <p className="text-sm text-muted-foreground">Print screens de resultados reais</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="objecoes" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-orange-600" />
                    Lidando com Objeções
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-950/30 p-4 rounded-r-lg">
                      <h4 className="font-medium text-red-800 dark:text-red-200">💰 "Está caro / Não tenho dinheiro"</h4>
                      <div className="mt-2 text-sm text-red-700 dark:text-red-300">
                        <p><strong>Resposta:</strong> "Entendo, vamos fazer uma conta rápida: quantas horas por semana vocês gastam com agendamentos? Se são 15h x R$ 20/hora = R$ 1.200/semana = R$ 4.800/mês. O sistema custa R$ 2.500 e economiza isso. É um investimento que se paga em 2 semanas."</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-950/30 p-4 rounded-r-lg">
                      <h4 className="font-medium text-yellow-800 dark:text-yellow-200">🤖 "Clientes não gostam de robô"</h4>
                      <div className="mt-2 text-sm text-yellow-700 dark:text-yellow-300">
                        <p><strong>Resposta:</strong> "Na verdade, 89% dos clientes preferem resolver coisas simples rapidamente do que esperar na linha. O bot cuida do básico e quando é algo complexo, transfere para vocês. Seus clientes vão amar agendar às 22h ou domingo."</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/30 p-4 rounded-r-lg">
                      <h4 className="font-medium text-blue-800 dark:text-blue-200">⏱️ "Não tenho tempo para implementar"</h4>
                      <div className="mt-2 text-sm text-blue-700 dark:text-blue-300">
                        <p><strong>Resposta:</strong> "Por isso mesmo que faz sentido! Eu configuro tudo, treino sua equipe e em 1 semana está funcionando. Você só precisa de 30 minutos para me passar as informações básicas. O resto é comigo."</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-500 bg-purple-50 dark:bg-purple-950/30 p-4 rounded-r-lg">
                      <h4 className="font-medium text-purple-800 dark:text-purple-200">🎯 "Vou pensar / Preciso conversar com sócio"</h4>
                      <div className="mt-2 text-sm text-purple-700 dark:text-purple-300">
                        <p><strong>Resposta:</strong> "Perfeito! Para facilitar sua decisão, que tal eu deixar o sistema funcionando por 7 dias grátis? Assim vocês veem os resultados antes de decidir. Quando podemos nos reunir com seu sócio para mostrar?"</p>
                      </div>
                    </div>

                    <div className="border-l-4 border-green-500 bg-green-50 dark:bg-green-950/30 p-4 rounded-r-lg">
                      <h4 className="font-medium text-green-800 dark:text-green-200">🔧 "E se quebrar / dar problema?"</h4>
                      <div className="mt-2 text-sm text-green-700 dark:text-green-300">
                        <p><strong>Resposta:</strong> "Ótima pergunta! Por isso ofereço 3 meses de suporte total incluso e garantia de funcionamento. Se algo der errado, eu resolvo em no máximo 4 horas. Pode testar à vontade."</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Técnica SPIN para Descobrir a Verdadeira Objeção</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">Perguntas Situação:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• "Como funciona hoje o agendamento?"</li>
                          <li>• "Quantas pessoas cuidam disso?"</li>
                          <li>• "Qual horário tem mais movimento?"</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">Perguntas Problema:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• "Já perderam clientes por não atender?"</li>
                          <li>• "O que mais incomoda no processo atual?"</li>
                          <li>• "Quanto tempo isso toma por dia?"</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="fechamento" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Handshake className="h-5 w-5 text-green-600" />
                    Fechamento e Próximos Passos
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Estratégias de Fechamento</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium text-green-800 dark:text-green-200">1. Fechamento Assumido</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">"Perfeito! Vamos começar então. Quando é melhor para configurar: esta semana ou a próxima?"</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-green-800 dark:text-green-200">2. Fechamento de Escolha</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">"Prefere começar com o pacote básico de agendamento ou já quer incluir o FAQ também?"</p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-green-800 dark:text-green-200">3. Fechamento de Urgência</h4>
                        <p className="text-sm text-green-700 dark:text-green-300">"Estou com uma agenda especial este mês. Se fecharmos hoje, consigo entregar na próxima semana e você já economiza essas horas todas."</p>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <DollarSign className="h-4 w-4 text-blue-600" />
                          Estrutura de Preços
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded">
                            <h4 className="font-medium">Pacote Básico</h4>
                            <p className="text-sm text-muted-foreground">Agendamento simples</p>
                            <p className="font-bold text-blue-600">R$ 1.500 setup + R$ 500/mês</p>
                          </div>
                          
                          <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded">
                            <h4 className="font-medium">Pacote Completo</h4>
                            <p className="text-sm text-muted-foreground">Agendamento + FAQ + Confirmação</p>
                            <p className="font-bold text-blue-600">R$ 2.500 setup + R$ 800/mês</p>
                          </div>
                          
                          <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded">
                            <h4 className="font-medium">Pacote Premium</h4>
                            <p className="text-sm text-muted-foreground">Tudo + Remarketing + Relatórios</p>
                            <p className="font-bold text-blue-600">R$ 4.000 setup + R$ 1.200/mês</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-purple-600" />
                          Cronograma de Implementação
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</div>
                            <div>
                              <h4 className="font-medium">Semana 1</h4>
                              <p className="text-sm text-muted-foreground">Configuração e personalização</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</div>
                            <div>
                              <h4 className="font-medium">Semana 2</h4>
                              <p className="text-sm text-muted-foreground">Testes e treinamento da equipe</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</div>
                            <div>
                              <h4 className="font-medium">Semana 3</h4>
                              <p className="text-sm text-muted-foreground">Go-live e acompanhamento</p>
                            </div>
                          </div>
                          
                          <div className="flex items-center gap-3">
                            <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">✓</div>
                            <div>
                              <h4 className="font-medium">Resultado</h4>
                              <p className="text-sm text-muted-foreground">Sistema funcionando 100%</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/30 dark:to-orange-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">⚠️ Sinais de que o Cliente Vai Fechar</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-medium text-green-600">Sinais Positivos:</h4>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>✅ Pergunta sobre prazos específicos</li>
                          <li>✅ Quer mostrar para sócios/equipe</li>
                          <li>✅ Pergunta sobre suporte e garantia</li>
                          <li>✅ Fala sobre implementação</li>
                          <li>✅ Pede referências de outros clientes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium text-red-600">Sinais de Resistência:</h4>
                        <ul className="text-sm space-y-1 mt-2">
                          <li>❌ Evita falar sobre orçamento</li>
                          <li>❌ Quer "pensar" sem prazo</li>
                          <li>❌ Não faz perguntas técnicas</li>
                          <li>❌ Compara só com preço</li>
                          <li>❌ Não demonstra urgência</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">Contrato e Próximos Passos</h3>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium">Documentos Necessários:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Contrato de prestação de serviços</li>
                          <li>• Cronograma de implementação</li>
                          <li>• Dados de acesso (WhatsApp Business, etc.)</li>
                          <li>• Briefing detalhado do negócio</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium">Primeira Reunião Técnica:</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Mapear fluxo atual de atendimento</li>
                          <li>• Definir horários de funcionamento</li>
                          <li>• Configurar integrações necessárias</li>
                          <li>• Estabelecer métricas de sucesso</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Conquistar Seus Primeiros Clientes?</h2>
          <p className="text-xl mb-8 opacity-90">
            Use esse guia como base e adapte para seu estilo e mercado local.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              <FileText className="h-5 w-5 mr-2" />
              Baixar Templates de Apresentação
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Ver Simuladores de ROI
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrimeirosClientes;
