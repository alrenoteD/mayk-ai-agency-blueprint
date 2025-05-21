
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const setupSteps = [
  {
    title: "Configurar o Flowise",
    description: "Aprenda a instalar e configurar o Flowise para criar fluxos de conversação inteligentes.",
    content: "O Flowise é uma ferramenta de código aberto que permite criar fluxos de trabalho de IA com uma interface visual drag-and-drop. Para configurar:",
    steps: [
      "Faça o download e instale o Node.js (versão 18 ou superior)",
      "Instale o Flowise com npm: npm install -g flowise",
      "Inicie o Flowise: npx flowise start",
      "Acesse a interface no navegador: http://localhost:3000"
    ]
  },
  {
    title: "Criar Agentes de IA",
    description: "Desenvolva agentes de IA especializados para diferentes setores e casos de uso.",
    content: "Crie agentes especializados para cada setor ou serviço que sua agência atenderá:",
    steps: [
      "Defina o propósito e capacidades de cada agente",
      "Configure o conhecimento base e prompts específicos para a área",
      "Implemente tratamento de erros e fallbacks",
      "Teste exaustivamente com diferentes cenários de conversa"
    ]
  },
  {
    title: "Integração com WhatsApp",
    description: "Como conectar seus bots ao WhatsApp Business API através de diferentes provedores.",
    content: "Para integrar com WhatsApp, você pode usar diferentes provedores:",
    steps: [
      "Z-API: Solução brasileira com interface simplificada",
      "Twilio: Solução global robusta com ampla documentação",
      "API Oficial: Processo de verificação mais longo, mas sem intermediários",
      "360dialog e Ultramsg: Alternativas com diferentes modelos de preço"
    ]
  }
];

const SectionSetup: React.FC = () => {
  return (
    <section id="setup" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="gradient-text">Configuração</span> Inicial
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Siga estes passos para configurar a infraestrutura técnica da sua agência de IA e começar a criar bots inteligentes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {setupSteps.map((step, index) => (
            <Card key={index} className="card-gradient">
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">{step.content}</p>
                <ul className="list-disc pl-5 space-y-2 text-sm">
                  {step.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SectionSetup;
