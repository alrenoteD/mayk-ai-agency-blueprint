
import React from 'react';
import { SidebarTrigger } from "@/components/ui/sidebar";
import TemplateGallery from '@/components/TemplateGallery';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Zap, Download, Rocket, Clock } from 'lucide-react';

const Templates: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Header with Sidebar Trigger */}
      <header className="border-b bg-white dark:bg-gray-900 sticky top-0 z-40">
        <div className="flex items-center gap-4 p-4">
          <SidebarTrigger />
          <div>
            <h1 className="text-2xl font-bold">Gallery - Agentes IA Pré-definidos</h1>
            <p className="text-muted-foreground">Templates prontos para n8n, Make, Flowise e suas combinações</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-950/30 dark:to-blue-950/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                  <Zap className="h-8 w-8 text-purple-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Copie um fluxo de sucesso</h3>
              <p className="text-sm text-muted-foreground">Templates testados e aprovados em 2 cliques</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Automatize sem reinventar</h3>
              <p className="text-sm text-muted-foreground">Não comece do zero, use o que já funciona</p>
            </Card>

            <Card className="text-center p-6">
              <div className="flex justify-center mb-4">
                <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                  <Rocket className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-lg font-semibold mb-2">Crie micro-SaaS com IA</h3>
              <p className="text-sm text-muted-foreground">Transforme templates em produtos escaláveis</p>
            </Card>
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold">Mais de 50 templates de alto valor comercial</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Cada template inclui documentação completa, estimativas de tempo, custos operacionais e valores sugeridos de venda.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <Download className="h-5 w-5 mr-2" />
                Ver Galeria de Templates
              </Button>
              <Button variant="outline" size="lg">
                Documentação Completa
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding border-b">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-purple-600 mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Templates Disponíveis</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-2">10</div>
              <div className="text-sm text-muted-foreground">Ferramentas Integradas</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600 mb-2">R$ 500 - 15k</div>
              <div className="text-sm text-muted-foreground">Faixa de Valores</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600 mb-2">2h - 3sem</div>
              <div className="text-sm text-muted-foreground">Tempo de Implementação</div>
            </div>
          </div>
        </div>
      </section>

      {/* Template Gallery */}
      <section className="section-padding">
        <div className="container mx-auto">
          <TemplateGallery />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para começar?</h2>
          <p className="text-xl mb-8 opacity-90">
            Escolha um template e comece a gerar valor para seus clientes hoje mesmo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              <Download className="h-5 w-5 mr-2" />
              Baixar Template Gratuito
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-purple-600">
              Falar com Especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Templates;
