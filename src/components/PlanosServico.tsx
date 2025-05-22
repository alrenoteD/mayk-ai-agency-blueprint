
import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface PlanoServico {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  caracteristicas: string[];
  dificuldade: 'Básico' | 'Intermediário' | 'Avançado';
  categorias: string[];
  tempoImplementacao: string;
  configuracaoTecnica: string[];
}

const planosPorDificuldade: Record<string, PlanoServico[]> = {
  basico: [
    {
      id: "basico-atendimento",
      nome: "Atendente Virtual Básico",
      descricao: "Bot de atendimento simples para FAQ e triagem inicial de clientes",
      preco: 800,
      caracteristicas: [
        "Respostas pré-programadas para FAQ",
        "Integração com WhatsApp",
        "Relatório mensal de uso",
        "Suporte por email"
      ],
      dificuldade: "Básico",
      categorias: ["Atendimento", "FAQ"],
      tempoImplementacao: "1 semana",
      configuracaoTecnica: ["Flowise", "WPPConnect", "Mesma instância VPS"]
    },
    {
      id: "basico-agendamento",
      nome: "Agenda Virtual Simples",
      descricao: "Sistema de agendamento básico para pequenos negócios",
      preco: 700,
      caracteristicas: [
        "Gerenciamento de horários disponíveis",
        "Confirmação automática",
        "Integração com Google Calendar",
        "Lembretes automáticos"
      ],
      dificuldade: "Básico",
      categorias: ["Agendamento"],
      tempoImplementacao: "5 dias",
      configuracaoTecnica: ["Flowise", "WPPConnect", "API Google", "Mesma instância VPS"]
    },
    {
      id: "basico-notificacao",
      nome: "Sistema de Notificações Básico",
      descricao: "Envio programado de notificações e lembretes para clientes",
      preco: 600,
      caracteristicas: [
        "Notificações automáticas",
        "Segmentação básica",
        "Integração com WhatsApp",
        "Relatórios de entrega"
      ],
      dificuldade: "Básico",
      categorias: ["Notificação"],
      tempoImplementacao: "3 dias",
      configuracaoTecnica: ["NodeJS", "WPPConnect", "Mesma instância VPS"]
    }
  ],
  intermediario: [
    {
      id: "inter-atendimento-avancado",
      nome: "Atendente IA Intermediário",
      descricao: "Bot de atendimento personalizado com IA para entendimento contextual",
      preco: 1500,
      caracteristicas: [
        "IA com memória de conversa",
        "Múltiplas integrações (WhatsApp, Telegram)",
        "Transferência para atendente humano",
        "Dashboard de insights",
        "Suporte técnico 5x8"
      ],
      dificuldade: "Intermediário",
      categorias: ["Atendimento", "IA Contextual"],
      tempoImplementacao: "2 semanas",
      configuracaoTecnica: ["Flowise", "OpenAI GPT-3.5", "WPPConnect", "Container Docker separado"]
    },
    {
      id: "inter-insights",
      nome: "Gerador de Insights de Negócios",
      descricao: "Análise de dados do negócio para extração de insights",
      preco: 1700,
      caracteristicas: [
        "Integração com ERPs e CRMs",
        "Relatórios personalizados",
        "Análise de tendências",
        "Recomendações estratégicas",
        "Exportação de dados"
      ],
      dificuldade: "Intermediário",
      categorias: ["Geração de Insights", "Analytics"],
      tempoImplementacao: "3 semanas",
      configuracaoTecnica: ["Python", "API OpenAI", "Container Docker separado", "PostgreSQL"]
    },
    {
      id: "inter-multiagendamento",
      nome: "Sistema de Agendamento Multi-serviço",
      descricao: "Plataforma completa para empresas com múltiplos serviços e profissionais",
      preco: 1300,
      caracteristicas: [
        "Múltiplos calendários",
        "Regras de negócio personalizadas",
        "Pagamentos online",
        "Cancelamentos e reagendamentos",
        "Integrações com WhatsApp e Email"
      ],
      dificuldade: "Intermediário",
      categorias: ["Agendamento", "Gestão de Serviços"],
      tempoImplementacao: "2 semanas",
      configuracaoTecnica: ["NodeJS", "React", "WPPConnect", "MongoDB", "Container Docker separado"]
    }
  ],
  avancado: [
    {
      id: "avancado-omnibots",
      nome: "OmniBot Empresarial",
      descricao: "Solução completa de bots com IA para múltiplos canais e departamentos",
      preco: 3500,
      caracteristicas: [
        "IA avançada com GPT-4",
        "Multi-canal (WhatsApp, Telegram, Discord, Web)",
        "Integração com ERP/CRM",
        "Análise de sentimento",
        "Fluxos de trabalho personalizados",
        "Dashboard administrativo",
        "Suporte técnico 24/7"
      ],
      dificuldade: "Avançado",
      categorias: ["Atendimento", "IA Avançada", "Multi-canal"],
      tempoImplementacao: "1-2 meses",
      configuracaoTecnica: ["Flowise", "OpenAI GPT-4", "Langchain", "Redis", "MongoDB", "VPS Dedicada"]
    },
    {
      id: "avancado-analytics",
      nome: "Analytics IA Avançado",
      descricao: "Plataforma avançada de análise de dados com previsão e recomendações",
      preco: 3800,
      caracteristicas: [
        "Modelos preditivos customizados",
        "ETL automatizado",
        "Visualizações interativas",
        "Alertas inteligentes",
        "Análise de competidores",
        "API para integração com outros sistemas"
      ],
      dificuldade: "Avançado",
      categorias: ["Geração de Insights", "Analytics", "BI"],
      tempoImplementacao: "1-2 meses",
      configuracaoTecnica: ["Python", "TensorFlow", "Langchain", "PostgreSQL", "VPS Dedicada"]
    },
    {
      id: "avancado-omniplataforma",
      nome: "Plataforma Omnichannel Completa",
      descricao: "Solução empresarial completa com atendimento, vendas e marketing integrados",
      preco: 4500,
      caracteristicas: [
        "Gestão de clientes omnichannel",
        "Marketing automatizado",
        "Vendas assistidas por IA",
        "Gestão de reputação online",
        "Analytics avançado",
        "Integração com sistemas legados",
        "White label"
      ],
      dificuldade: "Avançado",
      categorias: ["Atendimento", "Marketing", "Vendas", "BI"],
      tempoImplementacao: "2-3 meses",
      configuracaoTecnica: ["Microserviços", "Kubernetes", "GPT-4", "PostgreSQL", "Redis", "VPS Dedicada"]
    }
  ]
};

const planosPorFinalidade: Record<string, PlanoServico[]> = {
  atendimento: [
    ...planosPorDificuldade.basico.filter(p => p.categorias.includes('Atendimento')),
    ...planosPorDificuldade.intermediario.filter(p => p.categorias.includes('Atendimento')),
    ...planosPorDificuldade.avancado.filter(p => p.categorias.includes('Atendimento'))
  ],
  agendamento: [
    ...planosPorDificuldade.basico.filter(p => p.categorias.includes('Agendamento')),
    ...planosPorDificuldade.intermediario.filter(p => p.categorias.includes('Agendamento')),
    ...planosPorDificuldade.avancado.filter(p => p.categorias.includes('Agendamento'))
  ],
  notificacao: [
    ...planosPorDificuldade.basico.filter(p => p.categorias.includes('Notificação')),
    ...planosPorDificuldade.intermediario.filter(p => p.categorias.includes('Notificação')),
    ...planosPorDificuldade.avancado.filter(p => p.categorias.includes('Notificação'))
  ],
  insights: [
    ...planosPorDificuldade.basico.filter(p => p.categorias.includes('Geração de Insights')),
    ...planosPorDificuldade.intermediario.filter(p => p.categorias.includes('Geração de Insights')),
    ...planosPorDificuldade.avancado.filter(p => p.categorias.includes('Geração de Insights'))
  ]
};

export const PlanosServico: React.FC = () => {
  const [categorizacao, setCategorizacao] = useState<'dificuldade' | 'finalidade'>('dificuldade');
  
  const getCorPorDificuldade = (dificuldade: string) => {
    switch(dificuldade) {
      case 'Básico': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Intermediário': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300';
      case 'Avançado': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300';
    }
  };
  
  const renderPlanoCard = (plano: PlanoServico) => {
    return (
      <Card key={plano.id} className="h-full flex flex-col">
        <CardHeader>
          <div className="flex justify-between items-start">
            <Badge variant="outline" className={getCorPorDificuldade(plano.dificuldade)}>
              {plano.dificuldade}
            </Badge>
            <span className="font-semibold text-xl">{`R$ ${plano.preco}/mês`}</span>
          </div>
          <CardTitle className="text-xl mt-2">{plano.nome}</CardTitle>
          <CardDescription>{plano.descricao}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="text-sm font-medium mb-2">Características:</div>
          <ul className="list-disc pl-5 space-y-1 text-sm">
            {plano.caracteristicas.map((caracteristica, idx) => (
              <li key={idx}>{caracteristica}</li>
            ))}
          </ul>
          
          <div className="mt-4">
            <div className="text-sm font-medium mb-1">Categorias:</div>
            <div className="flex flex-wrap gap-1">
              {plano.categorias.map((categoria, idx) => (
                <Badge key={idx} variant="secondary" className="text-xs">{categoria}</Badge>
              ))}
            </div>
          </div>
          
          <div className="mt-4">
            <div className="text-sm font-medium mb-1">Configuração técnica:</div>
            <div className="flex flex-wrap gap-1">
              {plano.configuracaoTecnica.map((tech, idx) => (
                <Badge key={idx} variant="outline" className="text-xs">{tech}</Badge>
              ))}
            </div>
          </div>
          
          <div className="mt-4 flex justify-between text-sm">
            <span>Implementação em: <span className="font-medium">{plano.tempoImplementacao}</span></span>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Solicitar orçamento</Button>
        </CardFooter>
      </Card>
    );
  };
  
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <Tabs defaultValue="dificuldade" onValueChange={(value) => setCategorizacao(value as 'dificuldade' | 'finalidade')}>
          <TabsList className="grid w-full max-w-md grid-cols-2">
            <TabsTrigger value="dificuldade">Por Dificuldade</TabsTrigger>
            <TabsTrigger value="finalidade">Por Finalidade</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      {categorizacao === 'dificuldade' ? (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">Planos Básicos</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planosPorDificuldade.basico.map(renderPlanoCard)}
            </div>
          </section>
          
          <section>
            <h3 className="text-2xl font-bold mb-4">Planos Intermediários</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planosPorDificuldade.intermediario.map(renderPlanoCard)}
            </div>
          </section>
          
          <section>
            <h3 className="text-2xl font-bold mb-4">Planos Avançados</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planosPorDificuldade.avancado.map(renderPlanoCard)}
            </div>
          </section>
        </div>
      ) : (
        <div className="space-y-8">
          <section>
            <h3 className="text-2xl font-bold mb-4">Atendimento</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planosPorFinalidade.atendimento.map(renderPlanoCard)}
            </div>
          </section>
          
          <section>
            <h3 className="text-2xl font-bold mb-4">Agendamento</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planosPorFinalidade.agendamento.map(renderPlanoCard)}
            </div>
          </section>
          
          <section>
            <h3 className="text-2xl font-bold mb-4">Notificações</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planosPorFinalidade.notificacao.map(renderPlanoCard)}
            </div>
          </section>
          
          <section>
            <h3 className="text-2xl font-bold mb-4">Geração de Insights</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {planosPorFinalidade.insights.map(renderPlanoCard)}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default PlanosServico;
