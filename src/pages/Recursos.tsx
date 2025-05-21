
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

const downloadTemplates = [
  {
    title: "Contrato de Prestação de Serviços",
    description: "Modelo de contrato para serviços de chatbot e automação com IA",
    format: "DOCX",
    category: "legal"
  },
  {
    title: "Proposta Comercial",
    description: "Template de proposta comercial para apresentar a clientes",
    format: "PPTX",
    category: "comercial"
  },
  {
    title: "Termo de Uso e Política de Privacidade",
    description: "Documentos legais para proteger sua agência e clientes",
    format: "DOCX",
    category: "legal"
  },
  {
    title: "Checklist de Implementação",
    description: "Lista de verificação para implementação de novos projetos",
    format: "PDF",
    category: "operacional"
  },
  {
    title: "Roteiro de Entrevista com Cliente",
    description: "Guia para levantar requisitos e entender necessidades",
    format: "PDF",
    category: "comercial"
  },
  {
    title: "SLA (Acordo de Nível de Serviço)",
    description: "Modelo de SLA para definir garantias e suporte",
    format: "DOCX",
    category: "legal"
  },
  {
    title: "Planilha de Precificação",
    description: "Calculadora para determinar preços de serviços",
    format: "XLSX",
    category: "comercial"
  },
  {
    title: "Fluxograma de Bot para Clínica",
    description: "Modelo de fluxo para bots de clínicas médicas e odontológicas",
    format: "JSON",
    category: "tecnico"
  },
  {
    title: "Fluxograma de Bot para E-commerce",
    description: "Modelo de fluxo para bots de lojas virtuais",
    format: "JSON",
    category: "tecnico"
  },
  {
    title: "Prompts Otimizados para Bots",
    description: "Biblioteca de prompts prontos para diferentes casos de uso",
    format: "TXT",
    category: "tecnico"
  },
  {
    title: "Planilha de Acompanhamento de Projetos",
    description: "Template para gestão de projetos de IA",
    format: "XLSX",
    category: "operacional"
  },
  {
    title: "Checklist de Segurança",
    description: "Lista de verificação de segurança para implementações",
    format: "PDF",
    category: "operacional"
  }
];

const communityLinks = [
  {
    name: "Grupo Telegram Mayk IA",
    url: "#",
    description: "Comunidade para tirar dúvidas e compartilhar conhecimento",
    members: "1.500+ membros"
  },
  {
    name: "Discord Flowise",
    url: "https://discord.gg/flowise",
    description: "Comunidade oficial dos desenvolvedores do Flowise",
    members: "5.000+ membros"
  },
  {
    name: "Fórum Z-API",
    url: "https://forum.z-api.io/",
    description: "Fórum oficial da Z-API para suporte e dúvidas",
    members: "3.000+ usuários"
  },
  {
    name: "GitHub LangChain",
    url: "https://github.com/langchain-ai/langchain",
    description: "Repositório oficial do LangChain para desenvolvimento avançado",
    members: "70.000+ stars"
  }
];

const referenceLinks = [
  {
    name: "Documentação Flowise",
    url: "https://docs.flowiseai.com/",
    description: "Documentação oficial do Flowise AI"
  },
  {
    name: "Documentação Z-API",
    url: "https://developer.z-api.io/",
    description: "Documentação da API do Z-API para WhatsApp"
  },
  {
    name: "Documentação Twilio",
    url: "https://www.twilio.com/docs/whatsapp",
    description: "Guia para API de WhatsApp do Twilio"
  },
  {
    name: "Plataforma OpenAI",
    url: "https://platform.openai.com/docs",
    description: "Documentação das APIs da OpenAI"
  },
  {
    name: "Documentação OpenRouter",
    url: "https://openrouter.ai/docs",
    description: "Guia para uso da API do OpenRouter"
  },
  {
    name: "Documentação LangChain",
    url: "https://js.langchain.com/docs/",
    description: "Documentação do LangChain para JavaScript"
  },
  {
    name: "WhatsApp Business API",
    url: "https://developers.facebook.com/docs/whatsapp",
    description: "Documentação oficial da API do WhatsApp Business"
  },
  {
    name: "Documentação N8N",
    url: "https://docs.n8n.io/",
    description: "Guia completo da ferramenta de automação N8N"
  }
];

const videoTutorials = [
  {
    title: "Instalando o Flowise em uma VPS",
    description: "Tutorial passo a passo para configurar o Flowise em um servidor Linux",
    duration: "22 minutos",
    category: "infraestrutura"
  },
  {
    title: "Criando seu primeiro bot no Flowise",
    description: "Guia básico para criar bots conversacionais com o Flowise",
    duration: "18 minutos",
    category: "tecnico"
  },
  {
    title: "Integração do Z-API com Flowise",
    description: "Como conectar seu bot do Flowise ao WhatsApp usando Z-API",
    duration: "15 minutos",
    category: "tecnico"
  },
  {
    title: "Configurando webhook no N8N",
    description: "Aprenda a criar integrações avançadas usando N8N como middleware",
    duration: "20 minutos",
    category: "tecnico"
  },
  {
    title: "Como vender serviços de IA para pequenas empresas",
    description: "Estratégias de vendas eficientes para conquistar clientes",
    duration: "25 minutos",
    category: "comercial"
  },
  {
    title: "Apresentação de proposta para clientes",
    description: "Como estruturar e apresentar propostas comerciais vencedoras",
    duration: "17 minutos",
    category: "comercial"
  }
];

const Recursos: React.FC = () => {
  return (
    <PageLayout 
      title="Recursos e Materiais" 
      subtitle="Acesse templates, documentos, tutoriais e links úteis para sua agência de IA"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Templates e Documentos</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Baixe modelos prontos para usar em sua agência, economizando tempo e garantindo qualidade
            </p>
          </div>
          
          <Tabs defaultValue="todos" className="w-full mb-16">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="todos">Todos</TabsTrigger>
              <TabsTrigger value="legal">Documentos Legais</TabsTrigger>
              <TabsTrigger value="comercial">Comercial</TabsTrigger>
              <TabsTrigger value="operacional">Operacional</TabsTrigger>
              <TabsTrigger value="tecnico">Técnico</TabsTrigger>
            </TabsList>
            
            <TabsContent value="todos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {downloadTemplates.map((template, index) => (
                  <Card key={index} className="card-gradient">
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{template.title}</CardTitle>
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-md">
                          {template.format}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="mb-4 text-sm text-muted-foreground">{template.description}</p>
                      <Button variant="outline" className="w-full">
                        Baixar Template
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {['legal', 'comercial', 'operacional', 'tecnico'].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {downloadTemplates
                    .filter(template => template.category === category)
                    .map((template, index) => (
                      <Card key={index} className="card-gradient">
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">{template.title}</CardTitle>
                            <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-md">
                              {template.format}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4 text-sm text-muted-foreground">{template.description}</p>
                          <Button variant="outline" className="w-full">
                            Baixar Template
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Tutoriais em Vídeo</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Aprenda com tutoriais práticos que mostram passo a passo como implementar soluções
            </p>
          </div>
          
          <Tabs defaultValue="todos-videos" className="w-full mb-16">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="todos-videos">Todos</TabsTrigger>
              <TabsTrigger value="infraestrutura">Infraestrutura</TabsTrigger>
              <TabsTrigger value="tecnico-video">Técnico</TabsTrigger>
              <TabsTrigger value="comercial-video">Comercial</TabsTrigger>
            </TabsList>
            
            <TabsContent value="todos-videos">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoTutorials.map((video, index) => (
                  <Card key={index} className="card-gradient">
                    <div className="aspect-video bg-gray-800 relative rounded-t-lg overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Button variant="ghost" size="icon" className="h-16 w-16 rounded-full bg-mayk-purple/90 text-white hover:bg-mayk-purple">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </Button>
                      </div>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{video.title}</CardTitle>
                        <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-md">
                          {video.duration}
                        </span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{video.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {['infraestrutura', 'tecnico-video', 'comercial-video'].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videoTutorials
                    .filter(video => video.category === category.replace('-video', ''))
                    .map((video, index) => (
                      <Card key={index} className="card-gradient">
                        <div className="aspect-video bg-gray-800 relative rounded-t-lg overflow-hidden">
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Button variant="ghost" size="icon" className="h-16 w-16 rounded-full bg-mayk-purple/90 text-white hover:bg-mayk-purple">
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                <polygon points="5 3 19 12 5 21 5 3"></polygon>
                              </svg>
                            </Button>
                          </div>
                        </div>
                        <CardHeader>
                          <div className="flex justify-between items-center">
                            <CardTitle className="text-lg">{video.title}</CardTitle>
                            <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-md">
                              {video.duration}
                            </span>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{video.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Comunidades</h2>
              <div className="space-y-4">
                {communityLinks.map((community, index) => (
                  <Card key={index} className="card-gradient">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{community.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{community.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs text-muted-foreground">{community.members}</span>
                        <Button variant="outline" size="sm" className="text-sm" asChild>
                          <a href={community.url} target="_blank" rel="noopener noreferrer">
                            Acessar
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Documentação de Referência</h2>
              <div className="space-y-4">
                {referenceLinks.map((reference, index) => (
                  <Card key={index} className="card-gradient">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-lg">{reference.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-2">{reference.description}</p>
                      <Button variant="outline" size="sm" className="text-sm" asChild>
                        <a href={reference.url} target="_blank" rel="noopener noreferrer">
                          Acessar Documentação
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Recursos;
