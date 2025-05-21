
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const fundamentals = [
  {
    title: "O que é uma agência de IA e automação",
    content: "Uma agência de IA e automação é uma empresa especializada em criar soluções utilizando inteligência artificial, chatbots e automação para otimizar processos de negócios. Estas agências desenvolvem assistentes virtuais, sistemas de atendimento automatizado, automação de tarefas repetitivas e implementam soluções de IA para diversos setores.",
  },
  {
    title: "Modelo de negócios",
    content: "O modelo de negócios de uma agência de IA geralmente se baseia em receitas recorrentes (SaaS), onde os clientes pagam mensalmente pelo uso da plataforma. Também é comum oferecer serviços de implementação, customização e suporte técnico como fontes adicionais de receita.",
  },
  {
    title: "Principais serviços",
    list: [
      "Desenvolvimento de chatbots para atendimento ao cliente",
      "Automação de processos empresariais",
      "Criação de assistentes virtuais personalizados",
      "Integração de IA com sistemas existentes",
      "Implementação de soluções de análise de dados",
      "Treinamento e consultoria em IA",
      "Manutenção e suporte técnico"
    ]
  },
  {
    title: "Benefícios para os clientes",
    list: [
      "Redução de custos operacionais",
      "Melhoria na eficiência e produtividade",
      "Atendimento ao cliente 24/7",
      "Escalabilidade dos processos",
      "Análise de dados mais precisa e rápida",
      "Automação de tarefas repetitivas"
    ]
  },
  {
    title: "Diferenciais competitivos",
    content: "Para se destacar no mercado, sua agência de IA pode focar em nichos específicos, desenvolver tecnologia proprietária, oferecer integrações exclusivas, ter expertise em setores específicos ou desenvolver um processo de implementação eficiente e escalável.",
  },
  {
    title: "Estrutura básica",
    list: [
      "Equipe técnica: desenvolvedores, especialistas em IA",
      "Equipe comercial: vendas e marketing",
      "Suporte ao cliente",
      "Infraestrutura tecnológica",
      "Processos de implementação e manutenção",
      "Modelos de contratos e documentação"
    ]
  }
];

const Fundamentos: React.FC = () => {
  return (
    <PageLayout 
      title="Fundamentos" 
      subtitle="Aprenda os conceitos básicos para criar e gerir uma agência de IA e automação de sucesso"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold mb-6">Começando sua Agência de IA</h2>
              <p className="text-lg text-muted-foreground">
                Antes de mergulhar nos aspectos técnicos, é importante entender os fundamentos 
                de como funciona uma agência de IA, quais serviços oferecer e como estruturar 
                seu negócio para o sucesso.
              </p>
            </div>
            
            <div className="space-y-8">
              {fundamentals.map((item, index) => (
                <Card key={index} className="card-gradient">
                  <CardHeader>
                    <CardTitle>{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {item.content && <p className="mb-4">{item.content}</p>}
                    
                    {item.list && (
                      <ul className="list-disc pl-5 space-y-2">
                        {item.list.map((listItem, i) => (
                          <li key={i}>{listItem}</li>
                        ))}
                      </ul>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Fundamentos;
