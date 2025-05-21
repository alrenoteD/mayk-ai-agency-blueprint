
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const SubscribeForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulação de envio
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Inscrição realizada!",
        description: "Obrigado por se inscrever. Enviaremos atualizações e recursos exclusivos.",
      });
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-mayk-purple/20 to-mayk-teal/20">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Receba Atualizações e <span className="gradient-text">Recursos Exclusivos</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Inscreva-se para receber materiais gratuitos, tutoriais e atualizações sobre novas tecnologias e estratégias para sua agência de IA.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input 
              type="email" 
              placeholder="Seu melhor e-mail" 
              className="flex-grow" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-mayk-purple hover:bg-mayk-purple/90"
              disabled={loading}
            >
              {loading ? "Enviando..." : "Inscrever-se"}
            </Button>
          </form>
          
          <p className="text-xs text-muted-foreground mt-4">
            Não enviamos spam. Você pode cancelar a inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SubscribeForm;
