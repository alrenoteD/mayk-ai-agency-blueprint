
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const adStrategies = [
  {
    title: "Definição de Público-Alvo",
    steps: [
      "Identifique nichos específicos (ex: clínicas odontológicas, escritórios de advocacia)",
      "Pesquise as dores e problemas específicos desse nicho",
      "Crie personas detalhadas com demografia, comportamentos e objetivos",
      "Determine onde seu público-alvo consome conteúdo online"
    ],
    tips: [
      "Quanto mais específico o nicho, melhor o resultado inicial",
      "Valide suas hipóteses com entrevistas reais",
      "Refine constantemente com base nos resultados das campanhas"
    ]
  },
  {
    title: "Criação de Campanhas no Facebook Ads",
    steps: [
      "Criar uma conta no Facebook Business Manager",
      "Configurar o Pixel do Facebook para rastreamento de conversões",
      "Estruturar campanhas por objetivos (reconhecimento, consideração, conversão)",
      "Definir orçamentos e cronogramas adequados à sua capacidade de atendimento"
    ],
    tips: [
      "Inicie com orçamentos pequenos (R$30-50/dia) e escale gradualmente",
      "Teste múltiplas campanhas simultaneamente com pequeno orçamento",
      "Monitore métricas como CTR, CPL e ROAS",
      "Otimize campanhas após coletar dados suficientes (3-5 dias)"
    ]
  },
  {
    title: "Criação de Anúncios Efetivos",
    steps: [
      "Foque em um problema específico e sua solução",
      "Destaque benefícios claros e quantificáveis",
      "Use títulos que capturem atenção e criem curiosidade",
      "Inclua chamadas para ação claras e diretas"
    ],
    tips: [
      "Teste diferentes formatos: imagem única, carrossel, vídeo curto",
      "Use depoimentos e resultados reais sempre que possível",
      "Mantenha textos curtos e diretos nos anúncios",
      "Evidencie economia de tempo ou dinheiro ou aumento de resultados"
    ],
    examples: [
      "❌ 'Oferecemos chatbots de IA para empresas'",
      "✅ 'Reduza 70% do custo de atendimento com nosso assistente virtual'"
    ]
  }
];

const leadTemplates = [
  {
    title: "Formulário para Agências de Marketing",
    fields: [
      { label: "Nome", required: true },
      { label: "E-mail corporativo", required: true },
      { label: "Telefone/WhatsApp", required: true },
      { label: "Site da agência", required: false },
      { label: "Número de clientes ativos", required: false },
      { label: "Principal desafio atual", required: true, type: "select" },
      { label: "Como conheceu nossa solução?", required: false, type: "select" }
    ],
    tips: [
      "Pergunte sobre volume de atendimentos para dimensionar o bot",
      "Identifique o CRM ou ferramentas já utilizadas",
      "Questione sobre tentativas anteriores com bots"
    ]
  },
  {
    title: "Formulário para Clínicas e Consultórios",
    fields: [
      { label: "Nome", required: true },
      { label: "E-mail", required: true },
      { label: "Telefone/WhatsApp", required: true },
      { label: "Nome da clínica/consultório", required: true },
      { label: "Especialidade", required: true },
      { label: "Número de profissionais", required: false },
      { label: "Principal desafio no atendimento", required: true, type: "select" },
      { label: "Sistema de agenda utilizado", required: false }
    ],
    tips: [
      "Importante perguntar sobre sistemas já utilizados para integrações",
      "Identifique volume de atendimentos mensais",
      "Verifique se já possui equipe de recepção ou atendimento"
    ]
  },
  {
    title: "Formulário para E-commerce",
    fields: [
      { label: "Nome", required: true },
      { label: "E-mail corporativo", required: true },
      { label: "Telefone/WhatsApp", required: true },
      { label: "Nome da loja", required: true },
      { label: "Plataforma de e-commerce", required: true, type: "select" },
      { label: "Faturamento mensal aproximado", required: false, type: "select" },
      { label: "Volume de atendimentos mensais", required: false },
      { label: "Principal desafio atual", required: true, type: "select" }
    ],
    tips: [
      "Identifique a plataforma de e-commerce para integrações",
      "Pergunte sobre picos de atendimento em campanhas",
      "Questione sobre canais de atendimento atuais"
    ]
  }
];

const salesPitches = [
  {
    title: "Pitch para Agências de Marketing",
    value: "marketing",
    pitch: `"Entendemos que agências como a sua precisam entregar resultados crescentes para seus clientes, sem aumentar proporcionalmente os custos operacionais.

Nossos assistentes virtuais permitem que você:

1. Ofereça atendimento 24/7 para os clientes dos seus clientes, sem aumentar sua equipe

2. Automatize o atendimento de primeiro nível, permitindo que sua equipe foque nas estratégias

3. Obtenha dados valiosos das interações para refinar campanhas

4. Adicione um novo serviço de alto valor ao seu portfólio com margens de 200-300%

Já ajudamos agências como a [Referência] a aumentar o faturamento em 40% em 3 meses com nossos bots. Quando podemos conversar por 15 minutos para explorar como podemos trazer resultados semelhantes para vocês?"`,
    tips: [
      "Enfatize o diferencial de margem e recorrência do serviço",
      "Apresente como uma forma de fidelizar clientes existentes",
      "Mostre como agências concorrentes já estão adotando a tecnologia"
    ]
  },
  {
    title: "Pitch para Clínicas e Consultórios",
    value: "clinicas",
    pitch: `"Sabemos que clínicas como a sua enfrentam o desafio de equilibrar um atendimento humanizado com a eficiência operacional necessária para crescer.

Nossos assistentes de IA para área de saúde permitem:

1. Reduzir em até 80% o tempo gasto em agendamentos e confirmações de consultas

2. Diminuir drasticamente o número de faltas com lembretes inteligentes

3. Responder as dúvidas mais frequentes dos pacientes 24/7

4. Integração total com seu sistema de agendamento atual

Clínicas como [Referência] conseguiram liberar 20 horas semanais da recepção para atividades de maior valor após implementar nossa solução. Poderíamos conversar brevemente para entender os desafios específicos do seu consultório?"`,
    tips: [
      "Destaque a economia de tempo da equipe",
      "Foque na melhoria da experiência do paciente",
      "Esclareça que o bot não substitui o atendimento humano para questões médicas"
    ]
  },
  {
    title: "Pitch para E-commerces",
    value: "ecommerce",
    pitch: `"E-commerces como o seu enfrentam o desafio de escalar o atendimento ao cliente sem comprometer a qualidade ou explodir os custos operacionais.

Nossa solução de assistente de IA para e-commerce oferece:

1. Redução de 70% nas dúvidas repetitivas sobre produtos, entregas e trocas

2. Aumento de 23% na taxa de conversão com recomendações personalizadas

3. Atendimento instantâneo 24/7, mesmo nos picos de campanhas

4. Integração direta com sua plataforma de e-commerce e sistema de pedidos

Lojas como [Referência] aumentaram seu faturamento em 32% após implementar nosso assistente, simplesmente melhorando a experiência de compra. Podemos marcar 15 minutos para mostrar como funciona na prática?"`,
    tips: [
      "Enfatize o impacto na taxa de conversão",
      "Mostre como o bot ajuda a escalar em períodos promocionais",
      "Destaque a capacidade de cross-sell e up-sell automático"
    ]
  }
];

const Anunciar: React.FC = () => {
  return (
    <PageLayout 
      title="Como Anunciar e Vender" 
      subtitle="Estratégias e técnicas para prospectar clientes e vender serviços de agência de IA"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Estratégias de Marketing</h2>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8 mb-16">
            {adStrategies.map((strategy, index) => (
              <Card key={index} className="card-gradient">
                <CardHeader>
                  <CardTitle>{strategy.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-medium text-sm mb-3">Passos:</h4>
                    <ol className="list-decimal pl-5 space-y-2">
                      {strategy.steps.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-medium text-sm mb-3">Dicas:</h4>
                    <ul className="list-disc pl-5 space-y-2">
                      {strategy.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {strategy.examples && (
                    <div className="p-4 bg-gray-50 dark:bg-gray-800/40 rounded-md">
                      <h4 className="font-medium text-sm mb-3">Exemplos:</h4>
                      {strategy.examples.map((example, i) => (
                        <p key={i} className="mb-2">{example}</p>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Templates de Formulários</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              Modelos de formulários otimizados para captura de leads por segmento
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {leadTemplates.map((template, index) => (
              <Card key={index} className="card-gradient">
                <CardHeader>
                  <CardTitle>{template.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <h4 className="font-medium text-sm mb-3">Campos:</h4>
                    <ul className="space-y-2">
                      {template.fields.map((field, i) => (
                        <li key={i} className="flex items-start">
                          <span className={`mr-2 text-sm ${field.required ? 'text-red-500' : 'text-gray-400'}`}>
                            {field.required ? '*' : ''}
                          </span>
                          <span>
                            {field.label}
                            {field.type && <span className="text-xs text-muted-foreground ml-1">({field.type})</span>}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-medium text-sm mb-2">Dicas de uso:</h4>
                    <ul className="list-disc pl-5 space-y-1 text-sm">
                      {template.tips.map((tip, i) => (
                        <li key={i}>{tip}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Scripts de Vendas</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              Roteiros de vendas testados e otimizados para diferentes segmentos
            </p>
          </div>
          
          <Tabs defaultValue="marketing" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="marketing">Agências</TabsTrigger>
              <TabsTrigger value="clinicas">Clínicas</TabsTrigger>
              <TabsTrigger value="ecommerce">E-commerces</TabsTrigger>
            </TabsList>
            
            {salesPitches.map((pitch) => (
              <TabsContent key={pitch.value} value={pitch.value}>
                <Card>
                  <CardHeader>
                    <CardTitle>{pitch.title}</CardTitle>
                    <CardDescription>Script de vendas otimizado para este segmento</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="bg-gray-50 dark:bg-gray-800/40 p-4 rounded-md mb-6 whitespace-pre-wrap">
                      {pitch.pitch}
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-sm mb-3">Dicas para aplicação:</h4>
                      <ul className="list-disc pl-5 space-y-2">
                        {pitch.tips.map((tip, i) => (
                          <li key={i}>{tip}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default Anunciar;
