
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { MessageCircle, X, Send, Bot, Settings, Key } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface Message {
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ModelOption {
  id: string;
  name: string;
  description: string;
}

const models: ModelOption[] = [
  { id: 'claude-3-haiku-20240307', name: 'Claude Haiku', description: 'Rápido e eficiente' },
  { id: 'gpt-3.5-turbo', name: 'GPT-3.5 Turbo', description: 'Equilibrado e versátil' },
  { id: 'llama-3-8b-chat', name: 'Llama 3 (8B)', description: 'Leve e aberto' },
  { id: 'gemini-pro', name: 'Gemini Pro', description: 'Boa qualidade' },
];

const ChatbotWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiKey, setApiKey] = useState('');
  const [showSettings, setShowSettings] = useState(false);
  const [selectedModel, setSelectedModel] = useState(models[0].id);
  const [hasSetKey, setHasSetKey] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();

  // Carregar API key do localStorage na inicialização
  useEffect(() => {
    const savedKey = localStorage.getItem('openrouter_api_key');
    if (savedKey) {
      setHasSetKey(true);
    }
  }, []);

  // Adicionar mensagem de boas-vindas quando o chat é aberto pela primeira vez
  useEffect(() => {
    if (isOpen && messages.length === 0) {
      setMessages([
        {
          role: 'assistant',
          content: 'Olá! Sou o assistente da Mayk IA. Posso ajudar com informações sobre criação de bots, integração com WhatsApp, modelos de negócio de agência de IA e muito mais. Como posso te ajudar hoje?',
          timestamp: new Date()
        }
      ]);
    }
  }, [isOpen, messages.length]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const saveApiKey = () => {
    if (apiKey.trim()) {
      localStorage.setItem('openrouter_api_key', apiKey);
      setHasSetKey(true);
      setApiKey(''); // Limpa o campo após salvar
      toast({
        title: "Chave API salva",
        description: "Sua chave foi armazenada com segurança no navegador",
      });
      setShowSettings(false);
    } else {
      toast({
        title: "Erro",
        description: "Por favor, insira uma chave API válida",
        variant: "destructive"
      });
    }
  };

  const resetApiKey = () => {
    localStorage.removeItem('openrouter_api_key');
    setHasSetKey(false);
    toast({
      title: "Chave API removida",
      description: "Você precisará inserir uma nova chave para usar o assistente",
    });
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const storedKey = localStorage.getItem('openrouter_api_key');
      
      if (!storedKey) {
        throw new Error("API key não configurada");
      }
      
      const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${storedKey}`,
          'HTTP-Referer': window.location.href,
          'X-Title': 'Mayk IA Assistant'
        },
        body: JSON.stringify({
          model: selectedModel,
          messages: [
            {
              role: "system",
              content: `Você é um assistente especializado em Flowise, criação de bots, WhatsApp API e agências de automação com IA.
              
              Conhecimentos que você possui:
              1. Como criar bots no Flowise (fluxos, componentes, integrações)
              2. Integração com WhatsApp via Z-API, Twilio e WA Cloud API
              3. Modelos de negócio para agências de IA e automação
              4. Ferramentas como N8N, Make, Langchain e outras
              5. Precificação e estratégias de venda
              6. Escala de negócios de automação
              
              Ao explicar como criar bots, forneça orientações claras sobre os componentes do Flowise necessários. 
              Se o usuário pedir um tipo específico de bot, explique os componentes necessários e dê exemplos de uso.
              
              Seu tom deve ser amigável, profissional e informativo. Limite suas respostas a no máximo 250 palavras.`
            },
            ...messages.map(msg => ({ role: msg.role, content: msg.content })),
            { role: "user", content: input }
          ],
          temperature: 0.7,
          max_tokens: 1000
        })
      });
      
      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.error.message || "Erro na API");
      }
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: data.choices[0].message.content,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Erro ao enviar mensagem:", error);
      
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: error instanceof Error 
          ? `Erro: ${error.message}. Por favor, verifique sua chave API nas configurações.` 
          : "Ocorreu um erro desconhecido ao processar sua mensagem. Por favor, tente novamente mais tarde.",
        timestamp: new Date()
      }]);
      
      toast({
        title: "Erro na comunicação",
        description: "Não foi possível obter resposta do assistente",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!isLoading && hasSetKey) {
        handleSend();
      }
    }
  };

  return (
    <>
      {/* Botão flutuante do chatbot */}
      <div className="fixed bottom-5 right-5 z-50">
        <Button 
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-lg bg-mayk-purple hover:bg-mayk-purple/90"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>

      {/* Janela do chat */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md md:max-w-lg max-h-[80vh] p-0 overflow-hidden flex flex-col">
          <DialogHeader className="p-4 border-b flex-shrink-0">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Bot className="h-5 w-5 text-mayk-purple" />
                <DialogTitle>Assistente Mayk IA</DialogTitle>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => setShowSettings(!showSettings)}
                  className="h-8 w-8"
                >
                  <Settings className="h-4 w-4" />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Painel de configurações */}
            {showSettings && (
              <div className="mt-4 pt-4 border-t">
                <h4 className="text-sm font-medium mb-2">Configurações do Chat</h4>
                
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1 block">Modelo</label>
                    <select
                      value={selectedModel}
                      onChange={(e) => setSelectedModel(e.target.value)}
                      className="w-full p-2 rounded-md border bg-background"
                    >
                      {models.map((model) => (
                        <option key={model.id} value={model.id}>
                          {model.name} - {model.description}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium mb-1 block">Chave API OpenRouter</label>
                    <div className="flex gap-2 items-center">
                      {hasSetKey ? (
                        <>
                          <Input 
                            type="password" 
                            value="••••••••••••••••••••" 
                            disabled 
                            className="flex-grow"
                          />
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={resetApiKey}
                          >
                            Redefinir
                          </Button>
                        </>
                      ) : (
                        <>
                          <Input
                            type="password"
                            value={apiKey}
                            onChange={(e) => setApiKey(e.target.value)}
                            placeholder="sk_or-xxxxxxxxxxxx"
                            className="flex-grow"
                          />
                          <Button 
                            variant="outline"
                            size="sm"
                            onClick={saveApiKey}
                          >
                            Salvar
                          </Button>
                        </>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1">
                      Obtenha sua chave em <a href="https://openrouter.ai/keys" target="_blank" rel="noreferrer" className="underline">openrouter.ai/keys</a>
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogHeader>

          {/* Área de mensagens */}
          <div className="flex-grow overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div 
                key={index} 
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                    message.role === 'user' 
                      ? 'bg-mayk-purple text-white' 
                      : 'bg-muted'
                  }`}
                >
                  {message.content.split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i < message.content.split('\n').length - 1 && <br />}
                    </React.Fragment>
                  ))}
                  <div className="text-xs opacity-70 text-right mt-1">
                    {new Intl.DateTimeFormat('pt-BR', {
                      hour: '2-digit',
                      minute: '2-digit'
                    }).format(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="max-w-[85%] rounded-2xl px-4 py-2 bg-muted">
                  <div className="flex space-x-2">
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-150"></div>
                    <div className="h-2 w-2 rounded-full bg-muted-foreground animate-pulse delay-300"></div>
                  </div>
                </div>
              </div>
            )}
            {/* Elemento de referência para auto-scroll */}
            <div ref={messagesEndRef} />
          </div>

          {/* Área de input */}
          <div className="p-4 border-t flex-shrink-0">
            {!hasSetKey ? (
              <div className="text-center p-2">
                <Key className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                <p className="text-sm text-muted-foreground">
                  Configure sua chave API nas configurações para usar o assistente
                </p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2"
                  onClick={() => setShowSettings(true)}
                >
                  Configurar
                </Button>
              </div>
            ) : (
              <div className="flex items-end gap-2">
                <Textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Digite sua mensagem..."
                  className="min-h-[60px] max-h-[120px] resize-none"
                  disabled={isLoading}
                />
                <Button 
                  onClick={handleSend} 
                  disabled={isLoading || !input.trim()}
                  className="h-10 w-10 rounded-full p-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ChatbotWidget;
