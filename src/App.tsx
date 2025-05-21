
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Fundamentos from "./pages/Fundamentos";
import Ambiente from "./pages/Ambiente";
import Hospedagem from "./pages/Hospedagem";
import CriacaoBots from "./pages/CriacaoBots";
import IntegracaoWhatsApp from "./pages/IntegracaoWhatsApp";
import CategoriasAgentes from "./pages/CategoriasAgentes";
import Anunciar from "./pages/Anunciar";
import Simuladores from "./pages/Simuladores";
import Escalar from "./pages/Escalar";
import Recursos from "./pages/Recursos";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/fundamentos" element={<Fundamentos />} />
          <Route path="/ambiente" element={<Ambiente />} />
          <Route path="/hospedagem" element={<Hospedagem />} />
          <Route path="/criacao-bots" element={<CriacaoBots />} />
          <Route path="/integracao-whatsapp" element={<IntegracaoWhatsApp />} />
          <Route path="/categorias-agentes" element={<CategoriasAgentes />} />
          <Route path="/anunciar" element={<Anunciar />} />
          <Route path="/simuladores" element={<Simuladores />} />
          <Route path="/escalar" element={<Escalar />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
