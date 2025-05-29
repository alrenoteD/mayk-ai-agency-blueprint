
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CheckCircle, Lightbulb } from 'lucide-react';

const PerfilClienteTab: React.FC = () => {
  return (
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
  );
};

export default PerfilClienteTab;
