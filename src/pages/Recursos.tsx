
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import DocumentTemplates from '@/components/DocumentTemplates';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileSliders, Book, Code, Database, Globe } from "lucide-react";

const Recursos: React.FC = () => {
  return (
    <PageLayout 
      title="Recursos e Materiais" 
      subtitle="Templates, documentos e recursos para ajudar na sua jornada"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <Tabs defaultValue="templates" className="w-full">
            <TabsList className="grid grid-cols-1 sm:grid-cols-3 mb-8">
              <TabsTrigger value="templates">Templates e Documentos</TabsTrigger>
              <TabsTrigger value="ferramentas">Ferramentas Recomendadas</TabsTrigger>
              <TabsTrigger value="links">Links Úteis</TabsTrigger>
            </TabsList>
            
            <TabsContent value="templates" className="mt-6">
              <DocumentTemplates />
            </TabsContent>
            
            <TabsContent value="ferramentas" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <FileSliders className="h-5 w-5 text-purple-500" />
                      Desenvolvimento de Bots
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://flowise.ai/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Flowise</span>
                          <span className="text-sm text-muted-foreground">Visual LLM Builder</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://botpress.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Botpress</span>
                          <span className="text-sm text-muted-foreground">Bot Development Platform</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://langchain.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Langchain</span>
                          <span className="text-sm text-muted-foreground">LLM Application Framework</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/wppconnect-team/wppconnect" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">WPPConnect</span>
                          <span className="text-sm text-muted-foreground">WhatsApp Integration</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://n8n.io/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">n8n</span>
                          <span className="text-sm text-muted-foreground">Workflow Automation</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Book className="h-5 w-5 text-blue-500" />
                      Conhecimento e Conteúdo
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://openai.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">OpenAI</span>
                          <span className="text-sm text-muted-foreground">API e Modelos</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://notion.ai/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Notion AI</span>
                          <span className="text-sm text-muted-foreground">Documentação Inteligente</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://chat.openai.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">ChatGPT</span>
                          <span className="text-sm text-muted-foreground">Brainstorming e Assistência</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.perplexity.ai/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Perplexity AI</span>
                          <span className="text-sm text-muted-foreground">Pesquisa Avançada</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://huggingface.co/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">HuggingFace</span>
                          <span className="text-sm text-muted-foreground">Modelos e Datasets</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-green-500" />
                      Infraestrutura e Hospedagem
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">DigitalOcean</span>
                          <span className="text-sm text-muted-foreground">VPS Hospedagem</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Docker</span>
                          <span className="text-sm text-muted-foreground">Containerização</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">GitHub</span>
                          <span className="text-sm text-muted-foreground">Versionamento de Código</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://render.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Render</span>
                          <span className="text-sm text-muted-foreground">Deploy Simplificado</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">MongoDB</span>
                          <span className="text-sm text-muted-foreground">Banco de Dados NoSQL</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2">
                      <Globe className="h-5 w-5 text-amber-500" />
                      Marketing e Vendas
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://www.mailchimp.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Mailchimp</span>
                          <span className="text-sm text-muted-foreground">Email Marketing</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.pipedrive.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Pipedrive</span>
                          <span className="text-sm text-muted-foreground">CRM Simplificado</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Canva</span>
                          <span className="text-sm text-muted-foreground">Design de Materiais</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.hotjar.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Hotjar</span>
                          <span className="text-sm text-muted-foreground">Analytics de Comportamento</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.getresponse.com/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">GetResponse</span>
                          <span className="text-sm text-muted-foreground">Automação de Marketing</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="links" className="mt-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Comunidades e Fóruns</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://discord.gg/openai" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Discord OpenAI</span>
                          <span className="text-sm text-muted-foreground">Comunidade de desenvolvedores</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://github.com/wppconnect-team/wppconnect/discussions" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">WPPConnect Discussions</span>
                          <span className="text-sm text-muted-foreground">Fórum de integração WhatsApp</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://discord.gg/flowise" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Discord Flowise</span>
                          <span className="text-sm text-muted-foreground">Comunidade Flowise</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.reddit.com/r/MachineLearning/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">r/MachineLearning</span>
                          <span className="text-sm text-muted-foreground">Subreddit sobre IA/ML</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Tutoriais e Documentação</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li>
                        <a href="https://platform.openai.com/docs/introduction" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Documentação OpenAI</span>
                          <span className="text-sm text-muted-foreground">Guia oficial da API</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://docs.flowise.ai/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Documentação Flowise</span>
                          <span className="text-sm text-muted-foreground">Guia de uso do Flowise</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://js.langchain.com/docs/" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">LangChain JS Docs</span>
                          <span className="text-sm text-muted-foreground">Documentação do LangChain</span>
                        </a>
                      </li>
                      <li>
                        <a href="https://www.youtube.com/playlist?list=PLqZXAkvF1bPNQER9mLmDbntNfSpzdDIU9" target="_blank" rel="noopener noreferrer"
                          className="flex justify-between hover:text-primary">
                          <span className="font-medium">Tutorial Flowise</span>
                          <span className="text-sm text-muted-foreground">Vídeos passo a passo</span>
                        </a>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default Recursos;
