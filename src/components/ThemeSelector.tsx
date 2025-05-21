
import React, { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { Sun, Moon, Laptop, Palette } from "lucide-react";
import { useTheme } from "next-themes";

interface ThemeOption {
  id: string;
  name: string;
  icon?: React.ReactNode;
  className?: string;
}

const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Efeito para prevenir problemas de hidratação
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const baseThemes: ThemeOption[] = [
    { id: "light", name: "Claro", icon: <Sun className="h-4 w-4" /> },
    { id: "dark", name: "Escuro", icon: <Moon className="h-4 w-4" /> },
    { id: "system", name: "Sistema", icon: <Laptop className="h-4 w-4" /> },
  ];

  const customThemes: ThemeOption[] = [
    { id: "hacker", name: "Hacker", className: "text-green-500" },
    { id: "purple", name: "Roxo", className: "text-purple-500" },
    { id: "bee", name: "Abelha", className: "text-yellow-500" },
    { id: "ocean", name: "Oceano", className: "text-blue-500" },
  ];

  const allThemes = [...baseThemes, ...customThemes];

  const currentTheme = allThemes.find(t => t.id === theme) || baseThemes[0];

  const handleThemeChange = (themeId: string) => {
    setTheme(themeId);
    document.documentElement.className = "";
    document.documentElement.classList.add(`theme-${themeId}`);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          {currentTheme.icon || <Palette className="h-4 w-4" />}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <h4 className="px-2 py-1.5 text-xs font-semibold">Temas</h4>
        {allThemes.map((item) => (
          <DropdownMenuItem
            key={item.id}
            onClick={() => handleThemeChange(item.id)}
            className={`flex items-center gap-2 ${item.className || ''}`}
          >
            {item.icon || <Palette className="h-4 w-4" />}
            <span>{item.name}</span>
            {theme === item.id && (
              <span className="ml-auto text-xs">✓</span>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ThemeSelector;
