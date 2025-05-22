
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OfertasTab: React.FC = () => {
  return (
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
  );
};

export default OfertasTab;
