
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SectionSetup from '@/components/SectionSetup';
import SectionIntegrations from '@/components/SectionIntegrations';
import SectionScale from '@/components/SectionScale';
import SectionMarketing from '@/components/SectionMarketing';
import SectionInfrastructure from '@/components/SectionInfrastructure';
import SubscribeForm from '@/components/SubscribeForm';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <div className="py-8 bg-gradient-to-r from-mayk-purple/10 to-mayk-teal/10">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Explore o Guia Completo</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Descubra todos os recursos e materiais disponíveis para criar e escalar sua agência de IA.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center" asChild>
                <Link to="/fundamentos">
                  <span className="text-lg mb-1">Fundamentos</span>
                  <span className="text-xs text-muted-foreground">Conceitos básicos</span>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center" asChild>
                <Link to="/ambiente">
                  <span className="text-lg mb-1">Ambiente</span>
                  <span className="text-xs text-muted-foreground">Ferramentas e setup</span>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center" asChild>
                <Link to="/hospedagem">
                  <span className="text-lg mb-1">Hospedagem</span>
                  <span className="text-xs text-muted-foreground">Configuração VPS</span>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center" asChild>
                <Link to="/criacao-bots">
                  <span className="text-lg mb-1">Criação de Bots</span>
                  <span className="text-xs text-muted-foreground">Flowise e LLMs</span>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center" asChild>
                <Link to="/integracao-whatsapp">
                  <span className="text-lg mb-1">WhatsApp</span>
                  <span className="text-xs text-muted-foreground">Integrações APIs</span>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center" asChild>
                <Link to="/categorias-agentes">
                  <span className="text-lg mb-1">Agentes</span>
                  <span className="text-xs text-muted-foreground">Tipos de bots</span>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center" asChild>
                <Link to="/anunciar">
                  <span className="text-lg mb-1">Marketing</span>
                  <span className="text-xs text-muted-foreground">Vendas e anúncios</span>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center" asChild>
                <Link to="/simuladores">
                  <span className="text-lg mb-1">Simuladores</span>
                  <span className="text-xs text-muted-foreground">Calcule ganhos</span>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center" asChild>
                <Link to="/escalar">
                  <span className="text-lg mb-1">Escalar</span>
                  <span className="text-xs text-muted-foreground">Crescer a agência</span>
                </Link>
              </Button>
              
              <Button variant="outline" className="h-auto py-4 flex flex-col items-center" asChild>
                <Link to="/recursos">
                  <span className="text-lg mb-1">Recursos</span>
                  <span className="text-xs text-muted-foreground">Templates e mais</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        <SectionSetup />
        <SectionIntegrations />
        <SectionScale />
        <SectionMarketing />
        <SectionInfrastructure />
        <SubscribeForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
