
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from "@/components/ui/sonner";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";

// Pages
import Index from './pages/Index';
import Templates from './pages/Templates';
import Fundamentos from './pages/Fundamentos';
import Ambiente from './pages/Ambiente';
import Hospedagem from './pages/Hospedagem';
import CriacaoBots from './pages/CriacaoBots';
import IntegracaoWhatsApp from './pages/IntegracaoWhatsApp';
import CategoriasAgentes from './pages/CategoriasAgentes';
import PrimeirosClientes from './pages/PrimeirosClientes';
import GeracaoLeads from './pages/GeracaoLeads';
import Anunciar from './pages/Anunciar';
import Simuladores from './pages/Simuladores';
import Escalar from './pages/Escalar';
import Recursos from './pages/Recursos';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <SidebarProvider>
        <div className="min-h-screen flex w-full">
          <AppSidebar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/fundamentos" element={<Fundamentos />} />
              <Route path="/ambiente" element={<Ambiente />} />
              <Route path="/hospedagem" element={<Hospedagem />} />
              <Route path="/criacao-bots" element={<CriacaoBots />} />
              <Route path="/integracao-whatsapp" element={<IntegracaoWhatsApp />} />
              <Route path="/categorias-agentes" element={<CategoriasAgentes />} />
              <Route path="/primeiros-clientes" element={<PrimeirosClientes />} />
              <Route path="/geracao-leads" element={<GeracaoLeads />} />
              <Route path="/anunciar" element={<Anunciar />} />
              <Route path="/simuladores" element={<Simuladores />} />
              <Route path="/escalar" element={<Escalar />} />
              <Route path="/recursos" element={<Recursos />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
        <Toaster />
      </SidebarProvider>
    </Router>
  );
}

export default App;
