
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Loader2, Copy, CheckCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useQuery } from '@tanstack/react-query';

type CopyType = 'problema-agitacao-solucao' | 'testemunho' | 'resultado-especifico';
type CopyIndustry = 'geral' | 'cabeleireiro' | 'odontologia' | 'imobiliaria' | 'ecommerce' | 'clinica';
type CopyPurpose = 'atendimento' | 'agendamento' | 'automacao' | 'vendas';

interface GeneratorFormData {
  type: CopyType;
  industry: CopyIndustry;
  purpose: CopyPurpose;
  customPrompt: string;
}

// Mock API call to simulate AI generation
// In a real implementation, this would call an actual AI service
const generateCopy = async (formData: GeneratorFormData): Promise<string> => {
  // Simulate API call delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  const templates = {
    'problema-agitacao-solucao': {
      geral: {
        atendimento: `
# Problema
Sua equipe perde 3 horas por dia respondendo as mesmas perguntas de clientes no WhatsApp?

# Agitação
Enquanto isso, vendas são perdidas, clientes ficam irritados com a demora e você paga salários para tarefas repetitivas que poderiam ser automatizadas.

# Solução
Apresentamos o Assistente Virtual para WhatsApp que responde dúvidas 24/7, gera leads e permite que sua equipe foque no que realmente importa: fechar vendas.

# Call to Action
👉 Agende uma demonstração gratuita e veja como economizar mais de R$2.500/mês em custos operacionais.`,
        agendamento: `
# Problema
Cansado de perder tempo organizando sua agenda e lidando com remarcações de última hora?

# Agitação
A cada hora que você perde com gerenciamento de agenda, são R$200 que deixam de entrar no seu caixa. Sem contar os clientes que desistem por não conseguirem horários convenientes.

# Solução
Nosso Bot de Agendamento automatiza todo o processo, permite que clientes agendem 24h/dia diretamente pelo WhatsApp, e envia lembretes automáticos para reduzir faltas em 70%.

# Call to Action
🗓️ Experimente gratuitamente por 7 dias e veja sua agenda sempre cheia, sem esforço.`
      },
      cabeleireiro: {
        atendimento: `
# Problema
Seu salão perde clientes porque não consegue responder mensagens enquanto atende outros clientes?

# Agitação
Cada mensagem não respondida pode significar um cliente que vai para o concorrente. E pior: clientes insatisfeitos compartilham sua frustração com pelo menos 9 pessoas.

# Solução
Nosso Assistente Virtual para Salões responde perguntas sobre serviços, preços e disponibilidade instantaneamente pelo WhatsApp, mesmo quando você está com as mãos ocupadas.

# Call to Action
💇‍♀️ Agende uma demonstração e veja como aumentar sua clientela em até 30% em apenas 2 meses.`,
        agendamento: `
# Problema
Seu salão sofre com horários vazios ou está perdendo clientes por falta de disponibilidade na agenda?

# Agitação
Cada horário vazio representa dinheiro jogado fora, enquanto clientes insatisfeitos com a dificuldade de agendamento procuram outros salões. A rotatividade de clientes custa 5x mais que manter os atuais.

# Solução
Nosso Sistema de Agendamento Inteligente para Salões otimiza sua agenda, permite que clientes marquem pelo WhatsApp 24h/dia e envia lembretes que reduzem faltas em até 60%.

# Call to Action
✂️ Implemente em 48h e veja sua agenda sempre cheia, sem esforço.`
      },
      odontologia: {
        atendimento: `
# Problema
Sua clínica odontológica está perdendo pacientes para concorrentes que respondem mais rápido?

# Agitação
73% dos pacientes escolhem o dentista que responde primeiro. Enquanto sua secretária está ocupada, chamadas são perdidas e mensagens ficam sem resposta por horas.

# Solução
Nosso Assistente Virtual para Clínicas Odontológicas responde dúvidas frequentes, faz triagem inicial e marca consultas 24h por dia, garantindo que nenhum potencial paciente fique sem atendimento.

# Call to Action
🦷 Agende uma demonstração gratuita e veja como aumentar suas conversões em até 40%.`
      }
    },
    'testemunho': {
      odontologia: {
        atendimento: `
"Nossa clínica reduziu as faltas em 78% desde que implementamos o sistema de lembretes automatizados da Deylith. Os pacientes adoram a facilidade de confirmar ou remarcar pelo WhatsApp com apenas um clique, e nossa equipe economiza cerca de 3 horas por dia que antes eram gastas fazendo ligações de confirmação."

Dra. Isabela Mendes
Diretora Clínica - Odontomed Specialists
São Paulo, SP

A Odontomed atende mais de 500 pacientes por mês e implementou nossa solução há apenas 3 meses, já registrando um aumento de 23% na taxa de ocupação de horários.`
      },
      cabeleireiro: {
        agendamento: `
"Desde que implementei o bot de agendamento da Deylith.dev, meu salão está sempre cheio e nunca mais perdi tempo organizando agenda. Meus clientes adoram poder marcar horários pelo WhatsApp a qualquer hora, e os lembretes automáticos reduziram as faltas em mais de 50%. Foi o melhor investimento que fiz para o meu negócio em anos!"

Ricardo Oliveira
Proprietário - Studio R Hair Design
Rio de Janeiro, RJ

O Studio R aumentou seu faturamento em 35% nos primeiros 60 dias de uso da nossa plataforma, sem precisar contratar mais funcionários.`
      }
    },
    'resultado-especifico': {
      imobiliaria: {
        automacao: `
[PARA IMOBILIÁRIAS] Como triplicamos o número de visitas agendadas usando automação via WhatsApp

Nossa solução de qualificação automática de leads para imobiliárias já processou mais de 12.000 atendimentos em 30 imobiliárias parceiras no último trimestre.

O bot identifica o perfil do comprador, filtra imóveis compatíveis e já agenda visitas, tudo sem intervenção humana.

🏠 Aumente suas vendas em até 43% - Implantação em apenas 7 dias. Fale agora com um especialista!`
      },
      ecommerce: {
        vendas: `
[PARA E-COMMERCES] Como reduzimos o abandono de carrinho em 62% com IA no WhatsApp

Nossa solução de recuperação de carrinhos já resgatou mais de R$780.000 em vendas para 25 e-commerces parceiros apenas este mês.

Além de enviar lembretes personalizados, nosso bot responde dúvidas sobre produtos e oferece cupons de desconto específicos.

🛒 Pare de perder vendas por abandono de carrinho. Implantação em 48h e pagamento apenas pelo resultado!`
      },
      clinica: {
        agendamento: `
[PARA CLÍNICAS] Como reduzimos em 70% as faltas de pacientes usando IA no WhatsApp

Nossa solução de confirmação automatizada já evitou mais de 450 faltas em 20 clínicas parceiras no último mês.

Além de enviar lembretes personalizados, nosso bot gerencia remarcações sem intervenção humana.

🩺 Elimine horários ociosos e aumente seu faturamento. Fale com um especialista hoje!`
      }
    }
  };
  
  // Try to get template from our predefined options
  let result = '';
  try {
    result = templates[formData.type][formData.industry][formData.purpose];
  } catch (e) {
    // If combination doesn't exist, generate based on custom prompt
    result = `## Copy para ${formData.industry} - ${formData.purpose}

${formData.customPrompt}

(Este é um exemplo de copy gerado para demonstração. Em uma implementação real, um modelo de IA criaria conteúdo personalizado para esta combinação específica.)`;
  }
  
  return result;
};

const CopyGeneratorTab: React.FC = () => {
  const [formData, setFormData] = useState<GeneratorFormData>({
    type: 'problema-agitacao-solucao',
    industry: 'geral',
    purpose: 'atendimento',
    customPrompt: ''
  });
  
  const [showCopy, setShowCopy] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast();
  
  const { data, isLoading, refetch } = useQuery({
    queryKey: ['generateCopy', formData],
    queryFn: () => generateCopy(formData),
    enabled: false
  });
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCopy(false);
    refetch().then(() => {
      setShowCopy(true);
    });
  };
  
  const handleInputChange = (field: keyof GeneratorFormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  const copyToClipboard = () => {
    if (data) {
      navigator.clipboard.writeText(data);
      setIsCopied(true);
      toast({
        description: "Texto copiado para a área de transferência!",
        duration: 3000
      });
      
      setTimeout(() => {
        setIsCopied(false);
      }, 3000);
    }
  };
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Gerador de Copy com IA</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="copyType">Tipo de Copy</Label>
              <Select 
                value={formData.type} 
                onValueChange={(value) => handleInputChange('type', value as CopyType)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione o tipo de copy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="problema-agitacao-solucao">Problema-Agitação-Solução</SelectItem>
                  <SelectItem value="testemunho">Testemunho</SelectItem>
                  <SelectItem value="resultado-especifico">Resultado Específico</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="industry">Indústria/Nicho</Label>
              <Select 
                value={formData.industry} 
                onValueChange={(value) => handleInputChange('industry', value as CopyIndustry)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a indústria" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="geral">Geral</SelectItem>
                  <SelectItem value="cabeleireiro">Cabeleireiro</SelectItem>
                  <SelectItem value="odontologia">Odontologia</SelectItem>
                  <SelectItem value="imobiliaria">Imobiliária</SelectItem>
                  <SelectItem value="ecommerce">E-commerce</SelectItem>
                  <SelectItem value="clinica">Clínica Médica</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="purpose">Finalidade</Label>
              <Select 
                value={formData.purpose} 
                onValueChange={(value) => handleInputChange('purpose', value as CopyPurpose)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Selecione a finalidade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="atendimento">Atendimento</SelectItem>
                  <SelectItem value="agendamento">Agendamento</SelectItem>
                  <SelectItem value="automacao">Automação</SelectItem>
                  <SelectItem value="vendas">Vendas</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="customPrompt">Detalhes Adicionais (opcional)</Label>
              <Textarea 
                id="customPrompt"
                placeholder="Insira detalhes específicos para personalizar seu copy..."
                value={formData.customPrompt}
                onChange={(e) => handleInputChange('customPrompt', e.target.value)}
                className="min-h-[100px]"
              />
            </div>
            
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Gerando copy...
                </>
              ) : "Gerar Copy"}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle className="flex justify-between items-center">
            <span>Copy Gerado</span>
            {showCopy && data && (
              <Button variant="outline" size="sm" onClick={copyToClipboard} className="flex gap-2 items-center">
                {isCopied ? (
                  <>
                    <CheckCircle className="h-4 w-4" />
                    Copiado
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copiar
                  </>
                )}
              </Button>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex flex-col items-center justify-center h-80 text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary mb-4" />
              <p className="text-muted-foreground">Gerando o melhor copy para sua necessidade...</p>
            </div>
          ) : showCopy && data ? (
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <div className="bg-background/50 border rounded-lg p-4 whitespace-pre-line">
                {data}
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-80 text-center">
              <p className="text-muted-foreground">Preencha o formulário e clique em "Gerar Copy" para criar seu texto de vendas personalizado.</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CopyGeneratorTab;
