
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { 
  Home, 
  BookOpen, 
  Server, 
  Bot, 
  MessageSquare, 
  Settings, 
  TrendingUp, 
  Calculator, 
  Rocket,
  Users,
  FileText,
  Palette,
  Target,
  Handshake,
  GraduationCap
} from 'lucide-react';

const menuItems = [
  {
    title: "Início",
    items: [
      { title: "Home", icon: Home, href: "/" },
      { title: "Gallery", icon: Palette, href: "/templates" },
    ]
  },
  {
    title: "Fundamentos",
    items: [
      { title: "Conceitos Básicos", icon: BookOpen, href: "/fundamentos" },
      { title: "Ambiente de Trabalho", icon: Settings, href: "/ambiente" },
      { title: "Hospedagem & VPS", icon: Server, href: "/hospedagem" },
    ]
  },
  {
    title: "Desenvolvimento",
    items: [
      { title: "Criação de Bots", icon: Bot, href: "/criacao-bots" },
      { title: "Integração WhatsApp", icon: MessageSquare, href: "/integracao-whatsapp" },
      { title: "Categorias de Agentes", icon: Users, href: "/categorias-agentes" },
    ]
  },
  {
    title: "Negócios & Vendas",
    items: [
      { title: "Primeiros Clientes", icon: Handshake, href: "/primeiros-clientes" },
      { title: "Marketing & Anúncios", icon: Target, href: "/anunciar" },
      { title: "Simuladores", icon: Calculator, href: "/simuladores" },
      { title: "Escalar Agência", icon: TrendingUp, href: "/escalar" },
    ]
  },
  {
    title: "Recursos",
    items: [
      { title: "Materiais Exclusivos", icon: FileText, href: "/recursos" },
      { title: "Guias Avançados", icon: GraduationCap, href: "/guias-avancados" },
    ]
  }
];

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
            <Rocket className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold text-lg">Mayk AI Guide</span>
        </Link>
      </SidebarHeader>
      
      <SidebarContent>
        {menuItems.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton 
                      asChild 
                      isActive={location.pathname === item.href}
                    >
                      <Link to={item.href} className="flex items-center gap-2">
                        <item.icon className="h-4 w-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      
      <SidebarFooter className="p-4">
        <div className="text-xs text-muted-foreground text-center">
          <p>Mayk AI Guide v2.0</p>
          <p>Guia completo para agências de IA</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
