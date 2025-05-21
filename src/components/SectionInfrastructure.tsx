
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const SectionInfrastructure: React.FC = () => {
  return (
    <section id="infrastructure" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="mb-4">
            <span className="gradient-text">Infraestrutura</span> Técnica
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Escolha e configure a infraestrutura ideal para sua agência de IA, desde servidores até webhooks.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="card-gradient h-full">
              <CardHeader>
                <CardTitle>Hospedagem em VPS</CardTitle>
                <CardDescription>Guia para escolher e configurar servidores para suas soluções de IA</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>Escolhendo o Provedor VPS</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        {['Digital Ocean', 'Contabo', 'Hostinger'].map((provider) => (
                          <Card key={provider} className="border border-mayk-purple/20">
                            <CardHeader className="p-4">
                              <CardTitle className="text-base">{provider}</CardTitle>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                      <p className="text-sm mb-4">
                        Escolha provedores com boa presença no Brasil ou América Latina para reduzir latência. 
                        Para iniciantes, recomendamos um VPS com no mínimo 2GB RAM, 1 vCPU e 50GB SSD.
                        À medida que escalar, aumente para 8GB+ RAM e múltiplas vCPUs.
                      </p>
                      <p className="text-sm">
                        Considere a localização do servidor próxima ao seu público-alvo 
                        e verifique políticas de backup e suporte técnico.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Configuração Inicial</AccordionTrigger>
                    <AccordionContent>
                      <ol className="list-decimal pl-5 space-y-2 text-sm">
                        <li>Instale Ubuntu Server 22.04 LTS (estável e bem suportado)</li>
                        <li>Configure um usuário não-root com privilégios sudo</li>
                        <li>Atualize o sistema: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-xs">sudo apt update && sudo apt upgrade</code></li>
                        <li>Instale Docker e Docker Compose para containerização</li>
                        <li>Configure firewall (UFW) permitindo apenas portas necessárias</li>
                        <li>Configure SSH com chaves e desabilite login por senha</li>
                        <li>Instale Fail2ban para proteção contra ataques brute force</li>
                      </ol>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>Implantação do Flowise</AccordionTrigger>
                    <AccordionContent>
                      <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md mb-4 overflow-x-auto">
                        <pre className="text-xs whitespace-pre">
{`# Clone o repositório
git clone https://github.com/FlowiseAI/Flowise.git

# Entre no diretório
cd Flowise

# Usando Docker (recomendado)
docker-compose up -d

# Ou instalação via NPM
npm install -g flowise
npx flowise start

# Para manter executando após sair do terminal
npm install -g pm2
pm2 start "npx flowise start"`}
                        </pre>
                      </div>
                      <p className="text-sm">
                        Recomendamos usar Docker para facilitar atualizações e garantir isolamento.
                        Configure um proxy reverso como Nginx para gerenciar o tráfego e adicionar SSL.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Monitoramento e Manutenção</AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <Card className="border border-mayk-teal/20">
                          <CardHeader className="p-4">
                            <CardTitle className="text-base">Ferramentas de Monitoramento</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <ul className="list-disc pl-5 text-xs space-y-1">
                              <li>Netdata (monitoramento em tempo real)</li>
                              <li>Prometheus + Grafana</li>
                              <li>UptimeRobot (monitoramento externo)</li>
                            </ul>
                          </CardContent>
                        </Card>
                        <Card className="border border-mayk-teal/20">
                          <CardHeader className="p-4">
                            <CardTitle className="text-base">Rotinas de Manutenção</CardTitle>
                          </CardHeader>
                          <CardContent className="p-4 pt-0">
                            <ul className="list-disc pl-5 text-xs space-y-1">
                              <li>Backups diários automatizados</li>
                              <li>Atualizações de segurança programadas</li>
                              <li>Rotação de logs e limpeza de cache</li>
                            </ul>
                          </CardContent>
                        </Card>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </div>
          
          <Card className="card-gradient">
            <CardHeader>
              <CardTitle>Webhooks e Integrações</CardTitle>
              <CardDescription>Conectando suas soluções com APIs externas</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-sm mb-2">Webhooks Essenciais</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Webhook de entrada do WhatsApp para seu bot</li>
                    <li>Webhook de saída para CRM (ex: criação de leads)</li>
                    <li>Webhooks de notificação para equipe (Slack/Discord)</li>
                    <li>Integrações com plataformas de pagamento</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-sm mb-2">Dicas de Segurança</h4>
                  <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Use autenticação via tokens JWT</li>
                    <li>Implemente verificação de assinatura</li>
                    <li>Limite taxa de requisições (rate limiting)</li>
                    <li>Valide entradas e sanitize dados</li>
                  </ul>
                </div>
                
                <div className="p-4 bg-gradient-to-r from-mayk-purple/10 to-mayk-teal/10 rounded-lg mt-6">
                  <h4 className="font-medium text-sm mb-2">Arquitetura Recomendada</h4>
                  <p className="text-xs mb-4">
                    Separe seu sistema em microserviços isolados:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-xs">
                    <li>API Gateway para gerenciar tráfego</li>
                    <li>Serviço de IA para processamento de linguagem</li>
                    <li>Serviço de mensageria para WhatsApp</li>
                    <li>Banco de dados para histórico e contexto</li>
                    <li>Sistema de cache para respostas rápidas</li>
                  </ul>
                </div>
                
                <div className="text-center mt-8">
                  <Button variant="outline" className="w-full">
                    Ver Templates de Configuração
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SectionInfrastructure;
