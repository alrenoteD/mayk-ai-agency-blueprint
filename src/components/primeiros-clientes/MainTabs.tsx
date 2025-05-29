
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PerfilClienteTab from './PerfilClienteTab';
import PrimeiroContatoTab from './PrimeiroContatoTab';
import ApresentacaoTab from './ApresentacaoTab';
import ObjecoesTab from './ObjecoesTab';
import FechamentoTab from './FechamentoTab';

const MainTabs: React.FC = () => {
  return (
    <section className="section-padding">
      <div className="container mx-auto">
        <Tabs defaultValue="perfil-cliente" className="w-full">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="perfil-cliente">Perfil do Cliente</TabsTrigger>
            <TabsTrigger value="primeiro-contato">Primeiro Contato</TabsTrigger>
            <TabsTrigger value="apresentacao">Apresentação</TabsTrigger>
            <TabsTrigger value="objecoes">Objeções</TabsTrigger>
            <TabsTrigger value="fechamento">Fechamento</TabsTrigger>
          </TabsList>

          <TabsContent value="perfil-cliente" className="space-y-6">
            <PerfilClienteTab />
          </TabsContent>

          <TabsContent value="primeiro-contato" className="space-y-6">
            <PrimeiroContatoTab />
          </TabsContent>

          <TabsContent value="apresentacao" className="space-y-6">
            <ApresentacaoTab />
          </TabsContent>

          <TabsContent value="objecoes" className="space-y-6">
            <ObjecoesTab />
          </TabsContent>

          <TabsContent value="fechamento" className="space-y-6">
            <FechamentoTab />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MainTabs;
