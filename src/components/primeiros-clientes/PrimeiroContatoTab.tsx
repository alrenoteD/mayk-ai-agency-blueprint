
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Phone, Users, AlertCircle } from 'lucide-react';

const PrimeiroContatoTab: React.FC = () => {
  return (
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
  );
};

export default PrimeiroContatoTab;
