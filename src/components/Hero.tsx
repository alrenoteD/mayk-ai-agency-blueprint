
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          <div className="flex-1 text-center md:text-left">
            <h1 className="mb-4 font-bold">
              Crie sua <span className="gradient-text">Agência de IA</span> do zero ao sucesso
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-6 md:mb-8 max-w-xl mx-auto md:mx-0">
              Guia completo para montar e escalar sua agência de automação com IA, integrações WhatsApp, estratégias de marketing e infraestrutura técnica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button size="lg" className="bg-mayk-purple hover:bg-mayk-purple/90">
                Começar Agora
              </Button>
              <Button size="lg" variant="outline">
                Ver Demonstração
              </Button>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="w-full h-80 md:h-96 relative animate-float">
              <div className="absolute inset-0 bg-gradient-to-br from-mayk-purple/20 to-mayk-teal/20 rounded-2xl">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-mayk-purple/30 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 right-10 w-32 h-32 bg-mayk-teal/30 rounded-full blur-3xl"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="p-6 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 w-4/5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-mayk-purple to-mayk-teal flex items-center justify-center">
                      <span className="text-white font-bold text-xs">AI</span>
                    </div>
                    <div>
                      <h4 className="font-medium text-sm">Mayk AI Assistant</h4>
                      <p className="text-xs text-muted-foreground">Online</p>
                    </div>
                  </div>
                  <div className="bg-gray-100 dark:bg-gray-700 p-3 rounded-lg mb-2">
                    <p className="text-xs">Como posso ajudar com seu negócio de automação?</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="h-2 w-2 rounded-full bg-mayk-purple animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-mayk-teal animate-pulse delay-100"></div>
                    <div className="h-2 w-2 rounded-full bg-mayk-blue animate-pulse delay-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
