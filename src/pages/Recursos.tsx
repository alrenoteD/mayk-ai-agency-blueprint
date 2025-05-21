
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { documentTemplates, DocumentTemplate } from "@/data/documentTemplates";
import { toast } from "@/components/ui/use-toast";
import { Download, Search, Tag, FileText, FileImage, FileJson, Table, FileSlides } from "lucide-react";

const Recursos: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  // Filtrar templates com base na busca e categoria selecionada
  const filteredTemplates = documentTemplates.filter(template => {
    const matchesSearch = 
      template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      template.description.toLowerCase().includes(searchTerm.toLowerCase());
      
    const matchesCategory = activeCategory === 'todos' || template.category === activeCategory;
    
    return matchesSearch && matchesCategory;
  });

  const handleDownload = (template: DocumentTemplate) => {
    // Em uma aplicação real, aqui faríamos o download do arquivo
    toast({
      title: "Download iniciado",
      description: `${template.title} será baixado em instantes.`,
    });
  };

  // Função para obter o ícone baseado no formato do arquivo
  const getFormatIcon = (format: string) => {
    switch (format) {
      case 'DOCX':
        return <FileText className="h-4 w-4" />;
      case 'PDF':
        return <FileText className="h-4 w-4" />;
      case 'JSON':
        return <FileJson className="h-4 w-4" />;
      case 'XLSX':
        return <Table className="h-4 w-4" />;
      case 'PPTX':
        return <FileSlides className="h-4 w-4" />;
      case 'TXT':
        return <FileText className="h-4 w-4" />;
      default:
        return <FileText className="h-4 w-4" />;
    }
  };

  // Agrupar documentos por categoria para exibição
  const groupedByCategory: Record<string, DocumentTemplate[]> = {
    contrato: documentTemplates.filter(t => t.category === 'contrato'),
    proposta: documentTemplates.filter(t => t.category === 'proposta'),
    roteiro: documentTemplates.filter(t => t.category === 'roteiro'),
    termos: documentTemplates.filter(t => t.category === 'termos'),
    bot: documentTemplates.filter(t => t.category === 'bot'),
    apresentacao: documentTemplates.filter(t => t.category === 'apresentacao'),
  };

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

  return (
    <PageLayout 
      title="Recursos e Materiais" 
      subtitle="Acesse templates, documentos, tutoriais e links úteis para sua agência de IA"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-6">Templates e Documentos</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-8">
              Baixe modelos prontos para usar em sua agência, economizando tempo e garantindo qualidade
            </p>

            {/* Barra de pesquisa */}
            <div className="flex items-center gap-4 max-w-md mx-auto mb-8">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar templates..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-9"
                />
              </div>
            </div>
          </div>
          
          <Tabs defaultValue="todos" className="w-full mb-16">
            <TabsList className="grid grid-cols-7 mb-8">
              <TabsTrigger value="todos" onClick={() => setActiveCategory('todos')}>Todos</TabsTrigger>
              <TabsTrigger value="contrato" onClick={() => setActiveCategory('contrato')}>Contratos</TabsTrigger>
              <TabsTrigger value="proposta" onClick={() => setActiveCategory('proposta')}>Propostas</TabsTrigger>
              <TabsTrigger value="roteiro" onClick={() => setActiveCategory('roteiro')}>Roteiros</TabsTrigger>
              <TabsTrigger value="termos" onClick={() => setActiveCategory('termos')}>Termos</TabsTrigger>
              <TabsTrigger value="bot" onClick={() => setActiveCategory('bot')}>Bots</TabsTrigger>
              <TabsTrigger value="apresentacao" onClick={() => setActiveCategory('apresentacao')}>Apresentações</TabsTrigger>
            </TabsList>
            
            {/* Vista "Todos" - Ordenados por popularidade */}
            <TabsContent value="todos">
              {/* Templates em destaque */}
              <div className="mb-8">
                <h3 className="text-xl font-medium mb-4">Templates em Destaque</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {documentTemplates
                    .filter(template => template.popular)
                    .map((template) => (
                      <Card key={template.id} className="card-gradient hover:shadow-md transition-all">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <CardTitle className="text-lg flex items-center gap-2">
                                {getFormatIcon(template.format)}
                                {template.title}
                              </CardTitle>
                              <Badge variant="outline" className="mt-2">
                                {template.format}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4 text-sm text-muted-foreground">{template.description}</p>
                          <Button 
                            variant="outline" 
                            className="w-full" 
                            onClick={() => handleDownload(template)}
                          >
                            <Download className="h-4 w-4 mr-2" /> Baixar Template
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              {/* Todos os templates agrupados por categoria */}
              {Object.entries(groupedByCategory).map(([category, templates]) => (
                templates.length > 0 && (
                  <div key={category} className="mb-8">
                    <h3 className="text-xl font-medium mb-4 capitalize">
                      {category === 'contrato' ? 'Contratos' : 
                       category === 'proposta' ? 'Propostas' : 
                       category === 'roteiro' ? 'Roteiros' : 
                       category === 'termos' ? 'Termos e Políticas' : 
                       category === 'bot' ? 'Templates de Bots' : 
                       category === 'apresentacao' ? 'Apresentações' : 
                       category}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {templates
                        .filter(template => !template.popular || (searchTerm && template.popular))
                        .map((template) => (
                          <Card key={template.id} className="card-gradient hover:shadow-md transition-all">
                            <CardHeader className="pb-2">
                              <div className="flex justify-between items-start">
                                <div className="flex-1">
                                  <CardTitle className="text-lg flex items-center gap-2">
                                    {getFormatIcon(template.format)}
                                    {template.title}
                                  </CardTitle>
                                  <Badge variant="outline" className="mt-2">
                                    {template.format}
                                  </Badge>
                                </div>
                              </div>
                            </CardHeader>
                            <CardContent>
                              <p className="mb-4 text-sm text-muted-foreground">{template.description}</p>
                              <Button 
                                variant="outline" 
                                className="w-full" 
                                onClick={() => handleDownload(template)}
                              >
                                <Download className="h-4 w-4 mr-2" /> Baixar Template
                              </Button>
                            </CardContent>
                          </Card>
                        ))}
                    </div>
                  </div>
                )
              ))}

              {/* Mensagem quando nenhum resultado for encontrado */}
              {filteredTemplates.length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 mx-auto text-muted-foreground opacity-50" />
                  <h3 className="mt-4 text-xl font-medium">Nenhum template encontrado</h3>
                  <p className="text-muted-foreground mt-2">
                    Tente termos diferentes ou remova os filtros
                  </p>
                </div>
              )}
            </TabsContent>
            
            {/* Abas para categorias específicas */}
            {['contrato', 'proposta', 'roteiro', 'termos', 'bot', 'apresentacao'].map((category) => (
              <TabsContent key={category} value={category}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {documentTemplates
                    .filter(template => template.category === category && 
                      (searchTerm === '' || template.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                       template.description.toLowerCase().includes(searchTerm.toLowerCase())))
                    .map((template) => (
                      <Card key={template.id} className="card-gradient hover:shadow-md transition-all">
                        <CardHeader className="pb-2">
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <CardTitle className="text-lg flex items-center gap-2">
                                {getFormatIcon(template.format)}
                                {template.title}
                              </CardTitle>
                              <Badge variant="outline" className="mt-2">
                                {template.format}
                              </Badge>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4 text-sm text-muted-foreground">{template.description}</p>
                          <Button 
                            variant="outline" 
                            className="w-full" 
                            onClick={() => handleDownload(template)}
                          >
                            <Download className="h-4 w-4 mr-2" /> Baixar Template
                          </Button>
                        </CardContent>
                      </Card>
                    ))}
                </div>

                {/* Mensagem quando nenhum resultado for encontrado na categoria */}
                {documentTemplates.filter(template => template.category === category && 
                  (searchTerm === '' || template.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                   template.description.toLowerCase().includes(searchTerm.toLowerCase()))).length === 0 && (
                  <div className="text-center py-12">
                    <Search className="h-12 w-12 mx-auto text-muted-foreground opacity-50" />
                    <h3 className="mt-4 text-xl font-medium">Nenhum template encontrado</h3>
                    <p className="text-muted-foreground mt-2">
                      Tente termos diferentes ou remova os filtros
                    </p>
                  </div>
                )}
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
