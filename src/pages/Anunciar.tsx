
import React from 'react';
import PageLayout from '@/components/PageLayout';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FacebookAdsTab from '@/components/anunciar/FacebookAdsTab';
import OfertasTab from '@/components/anunciar/OfertasTab';
import CriativosTab from '@/components/anunciar/CriativosTab';
import FormulariosTab from '@/components/anunciar/FormulariosTab';
import CopyGeneratorTab from '@/components/anunciar/CopyGeneratorTab';

const Anunciar: React.FC = () => {
  return (
    <PageLayout 
      title="Anunciando e Vendendo Serviços de IA" 
      subtitle="Estratégias de marketing e vendas para atrair e converter clientes para sua agência"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <Tabs defaultValue="facebook" className="w-full">
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="facebook">Facebook Ads</TabsTrigger>
              <TabsTrigger value="ofertas">Ofertas Irresistíveis</TabsTrigger>
              <TabsTrigger value="criativos">Modelos de Criativos</TabsTrigger>
              <TabsTrigger value="formularios">Formulários de Alta Conversão</TabsTrigger>
              <TabsTrigger value="copygenerator">Gerador de Copy</TabsTrigger>
            </TabsList>
            
            <TabsContent value="facebook">
              <FacebookAdsTab />
            </TabsContent>
            
            <TabsContent value="ofertas">
              <OfertasTab />
            </TabsContent>
            
            <TabsContent value="criativos">
              <CriativosTab />
            </TabsContent>
            
            <TabsContent value="formularios">
              <FormulariosTab />
            </TabsContent>
            
            <TabsContent value="copygenerator">
              <CopyGeneratorTab />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default Anunciar;
