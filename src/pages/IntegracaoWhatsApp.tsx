
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import Tutorial, { TutorialStep } from '@/components/Tutorial';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const zapierSteps: TutorialStep[] = [
  {
    title: "Configuração inicial do Z-API",
    description: "Crie uma conta e configure seu primeiro dispositivo no Z-API",
    tips: [
      "Acesse z-api.io e crie uma conta",
      "Selecione 'Adicionar instância' no painel",
      "Escolha um nome descritivo para seu dispositivo",
      "Escaneie o QR Code com seu WhatsApp para vincular"
    ]
  },
  {
    title: "Obtenha suas chaves de API",
    description: "Encontre sua instância ID e token para usar na integração",
    tips: [
      "Acesse as configurações da sua instância",
      "Copie o Instance ID e Token",
      "Guarde essas informações em local seguro",
      "Não compartilhe suas credenciais"
    ]
  },
  {
    title: "Configure webhooks para receber mensagens",
    description: "Configure o webhook para receber mensagens do WhatsApp no Flowise",
    code: `// URL do Webhook no Z-API
https://api.z-api.io/instances/SUA-INSTANCIA/token/SEU-TOKEN/webhooks

// Configure para receber em seu servidor
{
  "url": "https://seuservidor.com/webhook/whatsapp",
  "events": ["message-received", "message-status"]
}`,
    tips: [
      "Escolha com cuidado quais eventos deseja receber",
      "Implemente o tratamento de webhooks em seu servidor",
      "Sempre responda status 200 para o webhook rapidamente",
      "Processe as mensagens de forma assíncrona após responder"
    ]
  },
  {
    title: "Envie mensagens a partir do Flowise",
    description: "Integre o envio de mensagens do Flowise para o WhatsApp",
    code: `// Requisição para enviar mensagem de texto
POST https://api.z-api.io/instances/SUA-INSTANCIA/token/SEU-TOKEN/send-text

{
  "phone": "5511999999999",
  "message": "Olá, esta é uma mensagem do seu bot!"
}`,
    tips: [
      "Sempre formate o número no padrão internacional (5511999999999)",
      "Evite enviar muitas mensagens em sequência",
      "Implemente um sistema de fila para mensagens em massa",
      "Considere os limites de mensagens do WhatsApp Business"
    ]
  },
  {
    title: "Integre o Flowise com webhooks",
    description: "Configure seu fluxo no Flowise para processar mensagens do WhatsApp",
    tips: [
      "Use o componente Webhook Trigger no Flowise",
      "Configure o processamento do JSON recebido do Z-API",
      "Extraia o número do remetente e conteúdo da mensagem",
      "Conecte a saída ao seu fluxo de conversa"
    ]
  }
];

const twilioSteps: TutorialStep[] = [
  {
    title: "Configure sua conta Twilio",
    description: "Crie e configure uma conta na plataforma Twilio",
    tips: [
      "Acesse twilio.com e crie uma conta",
      "Siga o processo de verificação da conta",
      "Adquira um número de telefone Twilio",
      "Solicite acesso à API do WhatsApp Business"
    ]
  },
  {
    title: "Configure o WhatsApp Sandbox",
    description: "Use o sandbox durante o desenvolvimento e testes",
    tips: [
      "No console Twilio, navegue até WhatsApp Sandbox",
      "Use o sandbox para testes enquanto aguarda aprovação",
      "Adicione destinatários de teste usando o código fornecido",
      "Entenda as limitações do ambiente sandbox"
    ]
  },
  {
    title: "Obtenha suas credenciais",
    description: "Encontre suas credenciais para uso na integração",
    tips: [
      "Localize o Account SID e Auth Token no dashboard",
      "Mantenha essas credenciais seguras",
      "Use variáveis de ambiente para armazenar as credenciais",
      "Evite hardcoded de credenciais no código"
    ]
  },
  {
    title: "Configure webhooks para mensagens recebidas",
    description: "Configure endpoints para receber mensagens do WhatsApp",
    code: `// Exemplo de recebimento de mensagem Twilio em Express.js
app.post('/webhook/twilio', express.urlencoded({ extended: true }), (req, res) => {
  const from = req.body.From; // Formato: whatsapp:+5511999999999
  const body = req.body.Body;  // Conteúdo da mensagem
  
  // Processe a mensagem
  console.log(\`Mensagem de \${from}: \${body}\`);
  
  // Responda ao Twilio
  res.status(200).send();
});`,
    tips: [
      "Configure o webhook URL no console do Twilio",
      "Verifique se seu servidor é acessível publicamente",
      "Use HTTPS para maior segurança",
      "Considere usar validação de assinatura do Twilio"
    ]
  },
  {
    title: "Envie mensagens via API Twilio",
    description: "Integre o envio de mensagens do seu bot para o WhatsApp",
    code: `// Usando Node.js com biblioteca Twilio
const accountSid = 'SEU_ACCOUNT_SID';
const authToken = 'SEU_AUTH_TOKEN';
const client = require('twilio')(accountSid, authToken);

client.messages.create({
   body: 'Olá do seu assistente virtual!',
   from: 'whatsapp:+14155238886',
   to: 'whatsapp:+5511999999999'
})
.then(message => console.log(message.sid));`,
    tips: [
      "Note o prefixo 'whatsapp:' antes dos números",
      "Teste primeiro no sandbox antes de ir para produção",
      "Tenha em mente os custos e limites de mensagens",
      "Implemente retry e tratamento de erros"
    ]
  }
];

const IntegracaoWhatsApp: React.FC = () => {
  const [activeProvider, setActiveProvider] = useState("zapi");

  return (
    <PageLayout 
      title="Integração com WhatsApp" 
      subtitle="Aprenda a conectar seus bots ao WhatsApp usando diferentes provedores"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Integrando Bots com WhatsApp</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              A integração com WhatsApp permite que seus bots alcancem bilhões de usuários. 
              Aprenda como conectar o Flowise com diferentes provedores de API do WhatsApp.
            </p>
          </div>
          
          <Tabs defaultValue="zapi" className="w-full" onValueChange={setActiveProvider}>
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="zapi">Z-API</TabsTrigger>
              <TabsTrigger value="twilio">Twilio</TabsTrigger>
              <TabsTrigger value="360dialog">360dialog</TabsTrigger>
              <TabsTrigger value="ultramsg">UltraMsg</TabsTrigger>
              <TabsTrigger value="oficial">API Oficial</TabsTrigger>
            </TabsList>
            
            <TabsContent value="zapi">
              <Tutorial 
                title="Integração com Z-API" 
                description="Guia passo a passo para integrar seus bots com WhatsApp usando Z-API"
                steps={zapierSteps}
              />
            </TabsContent>
            
            <TabsContent value="twilio">
              <Tutorial 
                title="Integração com Twilio" 
                description="Guia passo a passo para integrar seus bots com WhatsApp usando Twilio"
                steps={twilioSteps}
              />
            </TabsContent>
            
            <TabsContent value="360dialog">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">Integração com 360dialog</h3>
                <p className="text-muted-foreground">
                  Tutorial detalhado em desenvolvimento. Volte em breve para mais informações.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="ultramsg">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">Integração com UltraMsg</h3>
                <p className="text-muted-foreground">
                  Tutorial detalhado em desenvolvimento. Volte em breve para mais informações.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="oficial">
              <div className="text-center py-16">
                <h3 className="text-2xl font-semibold mb-4">Integração com API Oficial do WhatsApp Business</h3>
                <p className="text-muted-foreground">
                  Tutorial detalhado em desenvolvimento. Volte em breve para mais informações.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </PageLayout>
  );
};

export default IntegracaoWhatsApp;
