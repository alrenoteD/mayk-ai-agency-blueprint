
import React from 'react';
import { Card } from "@/components/ui/card";
import { Target, Presentation, Handshake } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950/30 dark:to-blue-950/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="text-center p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-full">
                <Target className="h-8 w-8 text-green-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Identificar o Cliente Ideal</h3>
            <p className="text-sm text-muted-foreground">Encontre empresas que realmente precisam de IA</p>
          </Card>

          <Card className="text-center p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-full">
                <Presentation className="h-8 w-8 text-blue-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Apresentar Valor</h3>
            <p className="text-sm text-muted-foreground">Mostre resultados concretos e ROI claro</p>
          </Card>

          <Card className="text-center p-6">
            <div className="flex justify-center mb-4">
              <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full">
                <Handshake className="h-8 w-8 text-purple-600" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-2">Fechar o Negócio</h3>
            <p className="text-sm text-muted-foreground">Técnicas para converter propostas em contratos</p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
