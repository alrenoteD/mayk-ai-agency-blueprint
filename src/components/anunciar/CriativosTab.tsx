
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CriativosTab: React.FC = () => {
  return (
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
              <span className="text-sm">Usa poucos textos nas imagens (&lt; 20% da área)</span>
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
  );
};

export default CriativosTab;
