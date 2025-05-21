
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const marketingContent = {
  facebook: {
    title: "Facebook Ads",
    content: (
      <>
        <h4 className="text-xl font-medium mb-4">Estratégia para Facebook Ads</h4>
        
        <div className="mb-6">
          <h5 className="font-medium mb-2">Preparação</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Crie uma página do Facebook profissional para sua agência</li>
            <li>Configure o Gerenciador de Negócios e o Pixel do Facebook no seu site</li>
            <li>Defina públicos-alvo específicos (donos de negócios, setores específicos)</li>
            <li>Prepare material visual de qualidade demonstrando os bots em ação</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h5 className="font-medium mb-2">Estrutura de Campanha</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Campanha de Conscientização: Educação sobre os benefícios da IA</li>
            <li>Campanha de Consideração: Demonstrações, webinars gratuitos</li>
            <li>Campanha de Conversão: Ofertas para diagnósticos ou projetos piloto</li>
            <li>Funil completo com remarketings específicos para cada etapa</li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-medium mb-2">Orçamento e Métricas</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Inicie com R$30-50/dia, ajustando conforme resultados</li>
            <li>Monitore CPC, CTR e taxa de conversão</li>
            <li>Calcule o CAC (Custo de Aquisição de Cliente) para ajustar ROI</li>
            <li>Teste diferentes criativos e copys (mínimo 3-5 variações)</li>
          </ul>
        </div>
      </>
    )
  },
  leads: {
    title: "Geração de Leads",
    content: (
      <>
        <h4 className="text-xl font-medium mb-4">Estratégias de Geração de Leads</h4>
        
        <div className="mb-6">
          <h5 className="font-medium mb-2">Conteúdo Magnético</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Crie e-books sobre "Transformação Digital com IA"</li>
            <li>Desenvolva calculadoras de ROI para automações</li>
            <li>Promova webinars demonstrando casos de uso específicos</li>
            <li>Produza vídeos comparando "antes e depois" da implementação</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h5 className="font-medium mb-2">Estratégias de Coleta</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Landing pages otimizadas por setor (ex: IA para imobiliárias, clínicas)</li>
            <li>Chatbot na página inicial oferecendo diagnóstico gratuito</li>
            <li>Popups inteligentes baseados em tempo na página ou comportamento</li>
            <li>Ofereça teste gratuito limitado do seu bot para demonstração</li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-medium mb-2">Nutrição de Leads</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Sequência de emails educativos sobre IA e automação</li>
            <li>Retargeting segmentado com estudos de caso do setor do lead</li>
            <li>Newsletter com novidades sobre IA e WhatsApp Business</li>
            <li>Convites para demonstrações exclusivas ou webinars avançados</li>
          </ul>
        </div>
      </>
    )
  },
  forms: {
    title: "Formulários",
    content: (
      <>
        <h4 className="text-xl font-medium mb-4">Formulários Eficientes</h4>
        
        <div className="mb-6">
          <h5 className="font-medium mb-2">Estrutura Recomendada</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Mantenha formulários curtos (máximo 5-7 campos na primeira interação)</li>
            <li>Divida em etapas se precisar coletar mais informações</li>
            <li>Campos essenciais: Nome, Email, WhatsApp, Setor, Desafio principal</li>
            <li>Use drop-downs para setores e tamanhos de empresa (facilita segmentação)</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h5 className="font-medium mb-2">Campos Estratégicos</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>"Qual seu maior desafio com atendimento ao cliente?"</li>
            <li>"Quantos atendimentos sua empresa realiza por dia?"</li>
            <li>"Você já utiliza alguma solução de automação?"</li>
            <li>"Qual resultado você espera alcançar com IA?"</li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-medium mb-2">Boas Práticas</h5>
          <ul className="list-disc pl-5 space-y-2">
            <li>Inclua validação em tempo real para evitar dados incorretos</li>
            <li>Ofereça incentivo claro para preenchimento (material exclusivo, diagnóstico)</li>
            <li>Teste versões A/B regularmente para otimizar conversões</li>
            <li>Garanta integração direta com seu CRM para follow-up rápido</li>
          </ul>
        </div>
        
        <div className="mt-6 p-4 bg-amber-50 dark:bg-amber-950/30 rounded-lg border border-amber-200 dark:border-amber-800">
          <h5 className="font-medium mb-2 text-amber-800 dark:text-amber-300">Exemplo de Formulário Diagnóstico</h5>
          <p className="text-sm mb-2">Nome da Empresa: _______</p>
          <p className="text-sm mb-2">Nome do Responsável: _______</p>
          <p className="text-sm mb-2">E-mail: _______</p>
          <p className="text-sm mb-2">WhatsApp: _______</p>
          <p className="text-sm mb-2">Setor: [Dropdown]</p>
          <p className="text-sm mb-2">Volume mensal de atendimentos: [Dropdown]</p>
          <p className="text-sm">Principal desafio: [Dropdown]</p>
        </div>
      </>
    )
  }
};

const SectionMarketing: React.FC = () => {
  return (
    <section id="marketing" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="gradient-text">Marketing</span> e Aquisição
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estratégias eficazes para atrair clientes e vender serviços de automação com IA.
          </p>
        </div>
        
        <Tabs defaultValue="facebook" className="w-full">
          <TabsList className="grid grid-cols-3 mb-8">
            <TabsTrigger value="facebook">Facebook Ads</TabsTrigger>
            <TabsTrigger value="leads">Geração de Leads</TabsTrigger>
            <TabsTrigger value="forms">Formulários</TabsTrigger>
          </TabsList>
          
          {Object.entries(marketingContent).map(([key, category]) => (
            <TabsContent key={key} value={key} className="mt-0">
              <Card className="card-gradient">
                <CardHeader>
                  <CardTitle>{category.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  {category.content}
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default SectionMarketing;
