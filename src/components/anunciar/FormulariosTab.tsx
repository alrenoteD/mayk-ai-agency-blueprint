
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const FormulariosTab: React.FC = () => {
  return (
    <div className="space-y-8">
      <Card className="card-gradient">
        <CardHeader>
          <CardTitle>Estrutura de Formulários de Alta Conversão</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-lg font-medium">Princípios Fundamentais</h4>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium text-mayk-purple">1</span>
                  </div>
                  <div>
                    <h5 className="font-medium">Mantenha o Mínimo Necessário</h5>
                    <p className="text-sm text-muted-foreground">
                      Cada campo adicional reduz taxa de conversão em aproximadamente 8%. Priorize apenas os dados essenciais no primeiro contato.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium text-mayk-purple">2</span>
                  </div>
                  <div>
                    <h5 className="font-medium">Contextualize os Campos</h5>
                    <p className="text-sm text-muted-foreground">
                      Explique por que cada informação é necessária. Ex: "Seu telefone (para enviarmos o diagnóstico gratuito por WhatsApp)".
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium text-mayk-purple">3</span>
                  </div>
                  <div>
                    <h5 className="font-medium">Crie Etapas Progressivas</h5>
                    <p className="text-sm text-muted-foreground">
                      Divida formulários longos em etapas. Após a primeira submissão com dados básicos, solicite informações adicionais.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="h-6 w-6 rounded-full bg-mayk-purple/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-sm font-medium text-mayk-purple">4</span>
                  </div>
                  <div>
                    <h5 className="font-medium">CTA Atrativo e Específico</h5>
                    <p className="text-sm text-muted-foreground">
                      Evite "Enviar" ou "Cadastrar". Use botões como "Receber Diagnóstico Gratuito" ou "Ver Demonstração".
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-4">Exemplo de Formulário Otimizado</h4>
              
              <div className="border border-border p-4 rounded-lg bg-card/50">
                <div className="mb-4 text-center">
                  <h3 className="text-lg font-bold text-mayk-purple">
                    Descubra o Potencial da IA na Sua Empresa
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Diagnóstico gratuito + demonstração personalizada
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Seu nome</label>
                    <input 
                      id="name" 
                      type="text" 
                      placeholder="Nome completo" 
                      className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-mayk-purple focus:border-mayk-purple dark:bg-gray-700" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 dark:text-gray-300">WhatsApp para contato</label>
                    <input 
                      id="whatsapp" 
                      type="tel" 
                      placeholder="(00) 00000-0000" 
                      className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-mayk-purple focus:border-mayk-purple dark:bg-gray-700" 
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Enviaremos um link para agendar sua sessão gratuita
                    </p>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Nome da empresa</label>
                    <input 
                      id="company" 
                      type="text" 
                      placeholder="Sua empresa" 
                      className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-mayk-purple focus:border-mayk-purple dark:bg-gray-700" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="segment" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Segmento da empresa</label>
                    <select 
                      id="segment" 
                      className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-mayk-purple focus:border-mayk-purple dark:bg-gray-700 bg-background"
                    >
                      <option value="">Selecione o segmento</option>
                      <option value="ecommerce">E-commerce</option>
                      <option value="clinic">Clínica ou Consultório</option>
                      <option value="service">Prestação de Serviços</option>
                      <option value="retail">Comércio Local</option>
                      <option value="other">Outro</option>
                    </select>
                  </div>
                  
                  <button className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-mayk-purple hover:bg-mayk-purple/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-mayk-purple">
                    GARANTIR MEU DIAGNÓSTICO GRATUITO
                  </button>
                  
                  <p className="text-xs text-center text-muted-foreground">
                    Seus dados estão seguros. Não fazemos spam.
                    <br />
                    Diagnóstico limitado a 5 empresas por semana.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Perguntas Estratégicas para Qualificação</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Use estas perguntas no segundo passo do formulário ou durante o follow-up inicial:
            </p>
            <ul className="space-y-3">
              <li className="p-3 bg-background/50 rounded-lg">
                <h4 className="font-medium">Para entender o tamanho da operação:</h4>
                <p className="text-sm mt-1">
                  "Quantos atendimentos/vendas sua empresa realiza por dia?"
                </p>
              </li>
              <li className="p-3 bg-background/50 rounded-lg">
                <h4 className="font-medium">Para identificar dores específicas:</h4>
                <p className="text-sm mt-1">
                  "Qual é o maior desafio atual no seu atendimento ao cliente?"
                </p>
              </li>
              <li className="p-3 bg-background/50 rounded-lg">
                <h4 className="font-medium">Para avaliar experiência técnica:</h4>
                <p className="text-sm mt-1">
                  "Você já utiliza alguma ferramenta de automação no seu negócio?"
                </p>
              </li>
              <li className="p-3 bg-background/50 rounded-lg">
                <h4 className="font-medium">Para determinar prazo:</h4>
                <p className="text-sm mt-1">
                  "Quando você pretende implementar uma solução de automação?"
                </p>
              </li>
              <li className="p-3 bg-background/50 rounded-lg">
                <h4 className="font-medium">Para qualificar budget:</h4>
                <p className="text-sm mt-1">
                  "Qual investimento mensal você considera para uma solução que [benefício específico]?"
                </p>
              </li>
            </ul>
          </CardContent>
        </Card>
        
        <Card className="card-gradient">
          <CardHeader>
            <CardTitle>Otimização e Testes A/B</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              Elementos para testar continuamente para aumentar taxa de conversão:
            </p>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">1. Headline do Formulário</h4>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-2 bg-background/80 rounded-lg">
                    <span className="block font-medium text-red-500 dark:text-red-400">❌ Fraco</span>
                    <p>"Cadastre-se aqui"</p>
                  </div>
                  <div className="p-2 bg-background/80 rounded-lg">
                    <span className="block font-medium text-green-500 dark:text-green-400">✓ Forte</span>
                    <p>"Receba um diagnóstico gratuito de automação"</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">2. Cor e Formato do CTA</h4>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-10 rounded-lg bg-gray-300 dark:bg-gray-700 flex items-center justify-center text-sm">
                    Enviar
                  </div>
                  <div className="h-10 rounded-lg bg-mayk-purple text-white flex items-center justify-center text-sm font-medium">
                    GARANTIR MEU DIAGNÓSTICO →
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-2">3. Elementos de Escassez/Urgência</h4>
                <div className="p-3 bg-background/80 rounded-lg">
                  <p className="text-sm mb-2">Teste adicionar:</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Contador regressivo</li>
                    <li>Limites de disponibilidade ("Restam 3 vagas")</li>
                    <li>Programação de aumento de preço</li>
                    <li>Bônus por tempo limitado</li>
                  </ul>
                </div>
              </div>
              
              <div className="p-3 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 rounded-lg">
                <h4 className="font-medium text-amber-800 dark:text-amber-500 mb-1">Dica de Especialista</h4>
                <p className="text-xs text-amber-700 dark:text-amber-400">
                  Implemente o Facebook Pixel corretamente para poder remarketing com pessoas que iniciaram mas não completaram os formulários. Elas são 3-5x mais propensas a converter em uma segunda abordagem.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default FormulariosTab;
