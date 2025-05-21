
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const navigationLinks = [
  {
    title: "Fundamentos",
    href: "/fundamentos",
    description: "Aprenda os fundamentos para começar sua agência de IA"
  },
  {
    title: "Ambiente",
    href: "/ambiente",
    description: "Conheça as ferramentas e ambiente necessário"
  },
  {
    title: "Hospedagem",
    href: "/hospedagem",
    description: "Aprenda a hospedar suas ferramentas em VPS"
  },
  {
    title: "Criação de Bots",
    href: "/criacao-bots",
    description: "Construa bots inteligentes com Flowise"
  },
  {
    title: "WhatsApp",
    href: "/integracao-whatsapp",
    description: "Integre seus bots com WhatsApp"
  },
  {
    title: "Categorias",
    href: "/categorias-agentes",
    description: "Explore diferentes categorias de agentes"
  },
  {
    title: "Anunciar",
    href: "/anunciar",
    description: "Aprenda a anunciar e vender seus serviços"
  },
  {
    title: "Simuladores",
    href: "/simuladores",
    description: "Calcule ganhos e escalabilidade"
  },
  {
    title: "Escalar",
    href: "/escalar",
    description: "Saiba quando e como escalar sua agência"
  },
  {
    title: "Recursos",
    href: "/recursos",
    description: "Acesse recursos e materiais exclusivos"
  },
];

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export function Navigation() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Início</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <Link
                    to="/"
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-mayk-purple/50 to-mayk-teal/50 p-6 no-underline outline-none focus:shadow-md"
                  >
                    <div className="mt-4 mb-2 text-lg font-medium">
                      Mayk AI Guide
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                      Guia completo para criar e escalar sua agência de IA
                    </p>
                  </Link>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Home">
                Página inicial
              </ListItem>
              <ListItem href="/fundamentos" title="Fundamentos">
                Comece aqui sua jornada
              </ListItem>
              <ListItem href="/recursos" title="Recursos">
                Materiais e templates exclusivos
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Aprendizado</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {navigationLinks.slice(0, 6).map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Negócios</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
              {navigationLinks.slice(6).map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default Navigation;
