import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle } from 'lucide-react';

const ObjecoesTab: React.FC = () => {
  return (
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
  );
};

export default ObjecoesTab;
