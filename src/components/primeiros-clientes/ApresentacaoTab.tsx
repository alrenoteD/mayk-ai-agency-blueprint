import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Presentation, TrendingUp, Star, FileText } from 'lucide-react';

const ApresentacaoTab: React.FC = () => {
  return (
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
  );
};

export default ApresentacaoTab;
