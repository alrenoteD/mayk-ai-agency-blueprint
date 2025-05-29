
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Target, 
  Search, 
  MessageCircle, 
  TrendingUp, 
  CheckCircle, 
  Users,
  Mail,
  Phone,
  Calendar,
  Lightbulb,
  FileText,
  DollarSign,
  Eye,
  Heart,
  Star,
  Zap,
  BarChart3,
  Filter
} from 'lucide-react';

const GeracaoLeads: React.FC = () => {
  return (
    <PageLayout 
      title="Geração e Conversão de Leads" 
      subtitle="Guia completo do lead frio ao cliente pagante - métodos, ferramentas e automações"
    >
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Search className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Prospecção</h3>
              <p className="text-sm text-muted-foreground">Encontrar leads qualificados</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <Heart className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Nutrição</h3>
              <p className="text-sm text-muted-foreground">Educar e criar relacionamento</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-full">
                  <Filter className="h-8 w-8 text-orange-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Qualificação</h3>
              <p className="text-sm text-muted-foreground">Identificar oportunidades reais</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <DollarSign className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Conversão</h3>
              <p className="text-sm text-muted-foreground">Transformar em cliente</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Fluxo Visual */}
      <section className="section-padding">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Fluxo Completo de Conversão</h2>
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 p-8 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mb-2">1</div>
                <h3 className="font-semibold">Lead Frio</h3>
                <p className="text-sm text-muted-foreground">Contato descoberto</p>
              </div>
              <div className="hidden md:block text-2xl text-gray-400">→</div>
              
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mb-2">2</div>
                <h3 className="font-semibold">Lead Morno</h3>
                <p className="text-sm text-muted-foreground">Demonstrou interesse</p>
              </div>
              <div className="hidden md:block text-2xl text-gray-400">→</div>
              
              <div className="text-center">
                <div className="bg-orange-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mb-2">3</div>
                <h3 className="font-semibold">Lead Quente</h3>
                <p className="text-sm text-muted-foreground">Pronto para comprar</p>
              </div>
              <div className="hidden md:block text-2xl text-gray-400">→</div>
              
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mb-2">4</div>
                <h3 className="font-semibold">Cliente</h3>
                <p className="text-sm text-muted-foreground">Convertido e pagante</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs principais */}
      <section className="section-padding">
        <div className="container mx-auto">
          <Tabs defaultValue="prospeccao" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="prospeccao">Prospecção</TabsTrigger>
              <TabsTrigger value="nutricao">Nutrição</TabsTrigger>
              <TabsTrigger value="qualificacao">Qualificação</TabsTrigger>
              <TabsTrigger value="proposta">Proposta</TabsTrigger>
              <TabsTrigger value="automacao">Automação</TabsTrigger>
            </TabsList>

            <TabsContent value="prospeccao" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Search className="h-5 w-5 text-blue-600" />
                    Prospecção e Geração de Leads
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">🆓 Ferramentas Gratuitas</h3>
                      <div className="space-y-3">
                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">Google Maps + Google My Business</h4>
                          <p className="text-sm text-muted-foreground mb-2">Busque por "clínicas", "salões", "escritórios" na sua região</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Copie nome, telefone e endereço</li>
                            <li>• Verifique horários de funcionamento</li>
                            <li>• Analise as avaliações (problemas = oportunidades)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">LinkedIn Sales Navigator (Teste Grátis)</h4>
                          <p className="text-sm text-muted-foreground mb-2">30 dias gratuitos para encontrar decisores</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Filtros: cargo, setor, tamanho da empresa</li>
                            <li>• Salve listas de prospects</li>
                            <li>• Veja conexões em comum</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">Instagram + Facebook</h4>
                          <p className="text-sm text-muted-foreground mb-2">Busque hashtags do seu nicho</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• #clinicaestetica #salaobeleza #advocacia</li>
                            <li>• Analise perfis comerciais</li>
                            <li>• Verifique contatos nos stories/destaques</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">💰 Ferramentas Pagas (ROI Alto)</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">Apollo.io</h4>
                          <p className="text-sm text-muted-foreground mb-2">US$ 49/mês - Banco de dados empresarial</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• 250M+ contatos verificados</li>
                            <li>• Emails e telefones dos decisores</li>
                            <li>• Integração com CRM</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">ZoomInfo</h4>
                          <p className="text-sm text-muted-foreground mb-2">US$ 79/mês - Dados empresariais premium</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Informações financeiras das empresas</li>
                            <li>• Tecnologias que usam</li>
                            <li>• Gatilhos de vendas (mudanças na empresa)</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">Hunter.io</h4>
                          <p className="text-sm text-muted-foreground mb-2">US$ 34/mês - Busca emails corporativos</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Encontra emails de qualquer site</li>
                            <li>• Verifica se emails existem</li>
                            <li>• API para automação</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Target className="h-5 w-5 text-yellow-600" />
                      Métodos de Prospecção Ativa
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2">🚶 Prospecção Física</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Visite centros comerciais</li>
                          <li>• Condomínios empresariais</li>
                          <li>• Ruas com comércio do nicho</li>
                          <li>• Deixe cartão e agende retorno</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">📱 Prospecção Digital</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• WhatsApp Business</li>
                          <li>• LinkedIn InMail</li>
                          <li>• Instagram Direct</li>
                          <li>• Email marketing direcionado</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2">🔗 Prospecção por Indicação</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Programa de indicações</li>
                          <li>• Parcerias com fornecedores</li>
                          <li>• Network em eventos</li>
                          <li>• Referências de clientes atuais</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📊 Template de Lista de Leads</h3>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <div className="grid grid-cols-8 gap-2 text-xs font-medium mb-2">
                        <div>Empresa</div>
                        <div>Contato</div>
                        <div>Cargo</div>
                        <div>Telefone</div>
                        <div>Email</div>
                        <div>Segmento</div>
                        <div>Score</div>
                        <div>Status</div>
                      </div>
                      <div className="grid grid-cols-8 gap-2 text-xs text-muted-foreground">
                        <div>Clínica Dr. Silva</div>
                        <div>João Silva</div>
                        <div>Sócio</div>
                        <div>(11) 99999-9999</div>
                        <div>joao@clinica.com</div>
                        <div>Medicina</div>
                        <div>8/10</div>
                        <div>🔥 Quente</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="nutricao" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-green-600" />
                    Nutrição e Educação de Leads
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-green-50 dark:bg-green-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Estratégia de Conteúdo por Estágio</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-blue-600">Topo de Funil (Consciência)</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• "5 sinais que sua empresa precisa de automação"</li>
                          <li>• "Como calcular ROI de IA"</li>
                          <li>• "Tendências de atendimento 2024"</li>
                          <li>• Videos educativos curtos</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-orange-600">Meio de Funil (Consideração)</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• "IA vs Funcionário: análise de custos"</li>
                          <li>• Cases detalhados do seu segmento</li>
                          <li>• Comparativo de soluções</li>
                          <li>• Demos e webinars</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-purple-600">Fundo de Funil (Decisão)</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Proposta personalizada</li>
                          <li>• Teste grátis por 7 dias</li>
                          <li>• Depoimentos de clientes</li>
                          <li>• Garantias e suporte</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">📱 Canais de Nutrição</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">WhatsApp Business</h4>
                          <p className="text-sm text-muted-foreground mb-2">Canal principal para relacionamento</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Listas de broadcast segmentadas</li>
                            <li>• Status com dicas rápidas</li>
                            <li>• Respostas rápidas personalizadas</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">Email Marketing</h4>
                          <p className="text-sm text-muted-foreground mb-2">Sequência de emails educativos</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Mailchimp: grátis até 2.000 contatos</li>
                            <li>• RD Station: completo mas pago</li>
                            <li>• ConvertKit: foco em automação</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">LinkedIn</h4>
                          <p className="text-sm text-muted-foreground mb-2">Relacionamento B2B profissional</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Posts educativos regulares</li>
                            <li>• Comentários em posts de prospects</li>
                            <li>• Mensagens diretas personalizadas</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">⏰ Cronograma de Nutrição</h3>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-1">1</div>
                          <div>
                            <h4 className="font-medium">Dia 1 - Primeiro Contato</h4>
                            <p className="text-sm text-muted-foreground">Agradecimento + material educativo</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-1">3</div>
                          <div>
                            <h4 className="font-medium">Dia 3 - Valor</h4>
                            <p className="text-sm text-muted-foreground">Case de sucesso similar</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-1">7</div>
                          <div>
                            <h4 className="font-medium">Dia 7 - Educação</h4>
                            <p className="text-sm text-muted-foreground">Conteúdo sobre ROI e benefícios</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-1">14</div>
                          <div>
                            <h4 className="font-medium">Dia 14 - Demonstração</h4>
                            <p className="text-sm text-muted-foreground">Convite para demo personalizada</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <div className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mt-1">21</div>
                          <div>
                            <h4 className="font-medium">Dia 21 - Proposta</h4>
                            <p className="text-sm text-muted-foreground">Oferta personalizada</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📝 Templates de Mensagens</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-medium mb-2">Template: Primeiro Contato Pós-Interesse</h4>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded border text-sm">
                          "Oi [Nome], obrigado pelo interesse em automação para [segmento]! 
                          <br/><br/>
                          Para você entender melhor como funciona, preparei um material sobre como outras [clínicas/salões] estão economizando até 20h/semana com IA.
                          <br/><br/>
                          Pode dar uma olhada quando tiver um tempinho: [link]
                          <br/><br/>
                          Qualquer dúvida, é só chamar! 😊"
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-2">Template: Reativação de Lead Frio</h4>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded border text-sm">
                          "Oi [Nome], lembra que conversamos sobre automação há umas semanas?
                          <br/><br/>
                          Acabei de implementar um sistema muito interessante numa [clínica/salão] aqui perto. Os resultados foram impressionantes: 60% menos ligações e 30% mais agendamentos.
                          <br/><br/>
                          Quer que eu mostre como ficou? São só 10 minutos."
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="qualificacao" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Filter className="h-5 w-5 text-orange-600" />
                    Qualificação de Leads
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-orange-50 dark:bg-orange-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Sistema de Scoring (BANT)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">Critérios de Qualificação:</h4>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm"><strong>Budget (Orçamento):</strong> Tem verba para investir?</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm"><strong>Authority (Autoridade):</strong> Quem decide a compra?</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm"><strong>Need (Necessidade):</strong> Tem dor real a resolver?</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-600" />
                            <span className="text-sm"><strong>Timeline (Prazo):</strong> Quando quer implementar?</span>
                          </div>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">Sistema de Pontuação:</h4>
                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span>Orçamento definido (R$ 2.000+/mês)</span>
                            <Badge variant="secondary">+3 pontos</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Decisor direto ou influenciador</span>
                            <Badge variant="secondary">+3 pontos</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Problema urgente (+50 msg/dia)</span>
                            <Badge variant="secondary">+2 pontos</Badge>
                          </div>
                          <div className="flex justify-between">
                            <span>Prazo definido (próximos 3 meses)</span>
                            <Badge variant="secondary">+2 pontos</Badge>
                          </div>
                          <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded">
                            <strong>Classificação:</strong><br/>
                            8-10 pontos: 🔥 Lead Quente<br/>
                            5-7 pontos: 🌡️ Lead Morno<br/>
                            0-4 pontos: ❄️ Lead Frio
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">❓ Perguntas de Qualificação</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded">
                          <h4 className="font-medium text-blue-800 dark:text-blue-200">Orçamento:</h4>
                          <ul className="text-sm text-blue-700 dark:text-blue-300 space-y-1">
                            <li>• "Qual o orçamento mensal para automação?"</li>
                            <li>• "Quanto gastam hoje com funcionários que cuidam disso?"</li>
                            <li>• "Já investiram em tecnologia antes?"</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded">
                          <h4 className="font-medium text-green-800 dark:text-green-200">Autoridade:</h4>
                          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• "Quem mais participa dessa decisão?"</li>
                            <li>• "Como funciona o processo de aprovação?"</li>
                            <li>• "Você pode aprovar ou precisa consultar alguém?"</li>
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded">
                          <h4 className="font-medium text-orange-800 dark:text-orange-200">Necessidade:</h4>
                          <ul className="text-sm text-orange-700 dark:text-orange-300 space-y-1">
                            <li>• "Qual o maior problema hoje no atendimento?"</li>
                            <li>• "Quantas horas por dia gastam com isso?"</li>
                            <li>• "Já perderam clientes por demora?"</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">⚠️ Sinais de Alerta</h3>
                      <div className="space-y-3">
                        <div className="bg-red-50 dark:bg-red-950/30 p-3 rounded">
                          <h4 className="font-medium text-red-800 dark:text-red-200">🚩 Red Flags:</h4>
                          <ul className="text-sm text-red-700 dark:text-red-300 space-y-1">
                            <li>• "Não temos orçamento agora"</li>
                            <li>• "Vou conversar com meu sócio"</li>
                            <li>• "Estamos só pesquisando"</li>
                            <li>• "Não tem pressa"</li>
                          </ul>
                        </div>
                        
                        <div className="bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded">
                          <h4 className="font-medium text-yellow-800 dark:text-yellow-200">⚡ Como Reverter:</h4>
                          <ul className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
                            <li>• Calcule ROI na hora</li>
                            <li>• Ofereça teste grátis</li>
                            <li>• Crie urgência (oferta limitada)</li>
                            <li>• Mostre cases do segmento</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded">
                          <h4 className="font-medium text-green-800 dark:text-green-200">✅ Green Flags:</h4>
                          <ul className="text-sm text-green-700 dark:text-green-300 space-y-1">
                            <li>• "Quando podemos começar?"</li>
                            <li>• "Qual o investimento?"</li>
                            <li>• "Como funciona o suporte?"</li>
                            <li>• "Posso ver funcionando?"</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="proposta" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-purple-600" />
                    Proposta Comercial e Atendimento Consultivo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">📋 Estrutura da Proposta Perfeita</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-medium mb-3">1. Diagnóstico da Situação Atual</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Volume de atendimentos/dia</li>
                          <li>• Tempo gasto com tarefas repetitivas</li>
                          <li>• Custo atual (funcionários + tempo)</li>
                          <li>• Principais dores identificadas</li>
                        </ul>
                        
                        <h4 className="font-medium mb-3 mt-4">2. Solução Proposta</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Descrição técnica simples</li>
                          <li>• Funcionalidades incluídas</li>
                          <li>• Integração com sistemas atuais</li>
                          <li>• Cronograma de implementação</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-medium mb-3">3. ROI e Benefícios</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Economia mensal calculada</li>
                          <li>• Tempo de retorno do investimento</li>
                          <li>• Benefícios intangíveis</li>
                          <li>• Comparativo antes x depois</li>
                        </ul>
                        
                        <h4 className="font-medium mb-3 mt-4">4. Investimento e Condições</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Valor setup + mensalidade</li>
                          <li>• Formas de pagamento</li>
                          <li>• Garantias oferecidas</li>
                          <li>• Suporte incluído</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-green-50 dark:from-blue-950/30 dark:to-green-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">💡 Template de Cálculo de ROI</h3>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                      <h4 className="font-medium mb-3">Exemplo: Clínica Dr. Silva</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <h5 className="font-medium text-red-600">Situação Atual:</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• 2 funcionários, 4h/dia em agendamentos</li>
                            <li>• 8h/dia x R$ 15/hora = R$ 120/dia</li>
                            <li>• 22 dias úteis = R$ 2.640/mês</li>
                            <li>• + Erros, retrabalho, stress</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-green-600">Com Automação:</h5>
                          <ul className="space-y-1 text-muted-foreground">
                            <li>• 70% dos agendamentos automáticos</li>
                            <li>• Economia: R$ 1.848/mês</li>
                            <li>• Investimento: R$ 1.500 setup + R$ 800/mês</li>
                            <li>• <strong>ROI: Paga em 45 dias</strong></li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">🎯 Técnicas de Fechamento</h3>
                      <div className="space-y-3">
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded">
                          <h4 className="font-medium">Fechamento Assumido</h4>
                          <p className="text-sm text-muted-foreground">"Perfeito! Quando podemos começar a implementação? Semana que vem ou preferem na outra?"</p>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded">
                          <h4 className="font-medium">Fechamento de Escassez</h4>
                          <p className="text-sm text-muted-foreground">"Estou com a agenda limitada este mês. Se confirmarmos hoje, consigo começar na próxima semana."</p>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded">
                          <h4 className="font-medium">Fechamento Consultivo</h4>
                          <p className="text-sm text-muted-foreground">"Baseado no que conversamos, a automação resolve 80% dos seus problemas. Faz sentido para vocês?"</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">📄 Checklist da Proposta</h3>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Logo e dados da empresa</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Diagnóstico personalizado</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Solução detalhada</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">ROI calculado</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Cronograma claro</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Investimento transparente</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Próximos passos</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-600" />
                          <span className="text-sm">Prazo de validade da proposta</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="automacao" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-blue-600" />
                    Automação do Processo de Vendas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🤖 O que Pode ser Automatizado</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <h4 className="font-medium mb-2 text-green-600">✅ Totalmente Automatizável</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Captura de leads (formulários)</li>
                          <li>• Primeira resposta automática</li>
                          <li>• Sequência de nurturing</li>
                          <li>• Agendamento de reuniões</li>
                          <li>• Follow-up pós-proposta</li>
                          <li>• Relatórios de vendas</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-orange-600">🔄 Semi-Automatizável</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Qualificação de leads</li>
                          <li>• Criação de propostas</li>
                          <li>• Objeções simples</li>
                          <li>• Agendamento de demos</li>
                          <li>• Cobrança de pendências</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-medium mb-2 text-red-600">❌ Sempre Manual</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>• Descoberta de dores complexas</li>
                          <li>• Apresentação personalizada</li>
                          <li>• Negociação de preços</li>
                          <li>• Fechamento final</li>
                          <li>• Relacionamento pós-venda</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-4">🛠️ Ferramentas de Automação</h3>
                      <div className="space-y-3">
                        <div className="bg-green-50 dark:bg-green-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">CRM Gratuito</h4>
                          <p className="text-sm text-muted-foreground mb-2">HubSpot CRM - Completo e gratuito</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Até 1.000.000 contatos</li>
                            <li>• Pipeline de vendas visual</li>
                            <li>• Automações básicas</li>
                            <li>• Relatórios detalhados</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 dark:bg-blue-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">WhatsApp Automation</h4>
                          <p className="text-sm text-muted-foreground mb-2">Z-API ou Evolution API</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Mensagens automáticas</li>
                            <li>• Listas de broadcast</li>
                            <li>• Integração com CRM</li>
                            <li>• Chatbots simples</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 dark:bg-purple-950/30 p-4 rounded-lg">
                          <h4 className="font-medium">Automação Avançada</h4>
                          <p className="text-sm text-muted-foreground mb-2">Make.com ou Zapier</p>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Conecta diferentes ferramentas</li>
                            <li>• Fluxos complexos</li>
                            <li>• Triggers personalizados</li>
                            <li>• Relatórios automáticos</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-4">📊 KPIs para Acompanhar</h3>
                      <div className="space-y-3">
                        <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                          <h4 className="font-medium mb-2">Métricas de Prospecção</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>Leads gerados/semana:</div>
                            <div className="font-medium">50+</div>
                            <div>Taxa de resposta:</div>
                            <div className="font-medium">15-25%</div>
                            <div>Custo por lead:</div>
                            <div className="font-medium">R$ 5-15</div>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                          <h4 className="font-medium mb-2">Métricas de Conversão</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>Lead → Demo:</div>
                            <div className="font-medium">30-40%</div>
                            <div>Demo → Proposta:</div>
                            <div className="font-medium">60-70%</div>
                            <div>Proposta → Cliente:</div>
                            <div className="font-medium">25-35%</div>
                          </div>
                        </div>
                        
                        <div className="bg-white dark:bg-gray-800 p-4 rounded border">
                          <h4 className="font-medium mb-2">Métricas Financeiras</h4>
                          <div className="grid grid-cols-2 gap-2 text-sm">
                            <div>Ticket médio:</div>
                            <div className="font-medium">R$ 3.000</div>
                            <div>CAC (Custo de Aquisição):</div>
                            <div className="font-medium">R$ 300</div>
                            <div>LTV (Lifetime Value):</div>
                            <div className="font-medium">R$ 18.000</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-4">🎯 Fluxo de Automação Completo</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                        <div className="flex-1">
                          <h4 className="font-medium">Lead entra no funil</h4>
                          <p className="text-sm text-muted-foreground">Via formulário, WhatsApp ou LinkedIn → CRM</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                        <div className="flex-1">
                          <h4 className="font-medium">Resposta automática</h4>
                          <p className="text-sm text-muted-foreground">Agradecimento + material educativo em 2 minutos</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                        <div className="flex-1">
                          <h4 className="font-medium">Sequência de nutrição</h4>
                          <p className="text-sm text-muted-foreground">7 mensagens em 21 dias (automático)</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-purple-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">4</div>
                        <div className="flex-1">
                          <h4 className="font-medium">Qualificação automática</h4>
                          <p className="text-sm text-muted-foreground">Formulário de qualificação ou chatbot</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">5</div>
                        <div className="flex-1">
                          <h4 className="font-medium">Agendamento automático</h4>
                          <p className="text-sm text-muted-foreground">Calendly integrado para demos qualificadas</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3">
                        <div className="bg-gray-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">6</div>
                        <div className="flex-1">
                          <h4 className="font-medium">Follow-up inteligente</h4>
                          <p className="text-sm text-muted-foreground">Lembretes automáticos baseados na interação</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Considerações Estratégicas */}
      <section className="section-padding bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Considerações Estratégicas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-blue-600" />
                  Metas Realistas para Iniciantes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Primeiro Mês:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 100 leads prospecção ativa</li>
                      <li>• 15-20 respostas positivas</li>
                      <li>• 5-8 demos agendadas</li>
                      <li>• 1-2 primeiros clientes</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Terceiro Mês:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 200 leads/mês (50% automático)</li>
                      <li>• 40-50 respostas positivas</li>
                      <li>• 15-20 demos/mês</li>
                      <li>• 5-8 novos clientes/mês</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium">Sexto Mês:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• 500 leads/mês (70% automático)</li>
                      <li>• 100+ respostas positivas</li>
                      <li>• 30-40 demos/mês</li>
                      <li>• 10-15 novos clientes/mês</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-600" />
                  Dicas de Ouro para o Sucesso
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-yellow-50 dark:bg-yellow-950/30 p-3 rounded">
                    <h4 className="font-medium">🎯 Foque em Nicho</h4>
                    <p className="text-sm text-muted-foreground">É melhor ser expert em clínicas que generalista em tudo.</p>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-950/30 p-3 rounded">
                    <h4 className="font-medium">📊 Meça Tudo</h4>
                    <p className="text-sm text-muted-foreground">Só o que é medido pode ser melhorado. Use planilhas ou CRM.</p>
                  </div>
                  
                  <div className="bg-green-50 dark:bg-green-950/30 p-3 rounded">
                    <h4 className="font-medium">🔄 Melhoria Contínua</h4>
                    <p className="text-sm text-muted-foreground">Teste diferentes abordagens e otimize constantemente.</p>
                  </div>
                  
                  <div className="bg-purple-50 dark:bg-purple-950/30 p-3 rounded">
                    <h4 className="font-medium">👥 Network é Fundamental</h4>
                    <p className="text-sm text-muted-foreground">Participe de eventos do seu nicho e faça parcerias.</p>
                  </div>
                  
                  <div className="bg-orange-50 dark:bg-orange-950/30 p-3 rounded">
                    <h4 className="font-medium">⚡ Velocidade Vence</h4>
                    <p className="text-sm text-muted-foreground">Responda leads em até 5 minutos. Primeiro a responder ganha.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Transformar Leads em Clientes?</h2>
          <p className="text-xl mb-8 opacity-90">
            Implemente esse sistema passo a passo e veja seus resultados multiplicarem.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              <FileText className="h-5 w-5 mr-2" />
              Baixar Planilha de Controle
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600">
              Ver Templates de Automação
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default GeracaoLeads;
