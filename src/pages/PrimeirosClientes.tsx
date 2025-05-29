
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from "@/components/ui/button";
import { FileText } from 'lucide-react';
import HeroSection from '@/components/primeiros-clientes/HeroSection';
import MainTabs from '@/components/primeiros-clientes/MainTabs';

const PrimeirosClientes: React.FC = () => {
  return (
    <PageLayout 
      title="Como Conseguir Seus Primeiros Clientes" 
      subtitle="Guia completo para converter leads em clientes pagantes e construir relacionamentos B2B duradouros"
    >
      <HeroSection />
      <MainTabs />

      {/* CTA Final */}
      <section className="section-padding bg-gradient-to-r from-green-600 to-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para Conquistar Seus Primeiros Clientes?</h2>
          <p className="text-xl mb-8 opacity-90">
            Use esse guia como base e adapte para seu estilo e mercado local.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" variant="secondary">
              <FileText className="h-5 w-5 mr-2" />
              Baixar Templates de Apresentação
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-green-600">
              Ver Simuladores de ROI
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default PrimeirosClientes;
