import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Handshake, DollarSign, Calendar } from 'lucide-react';

const FechamentoTab: React.FC = () => {
  return (
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
  );
};

export default FechamentoTab;
