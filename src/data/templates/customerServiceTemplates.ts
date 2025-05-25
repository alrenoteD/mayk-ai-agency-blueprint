
import { AutomationTemplate } from '@/types/automation';

export const customerServiceTemplates: AutomationTemplate[] = [
  {
    id: "whatsapp-attendant-simple",
    name: "Atendente IA Simples para WhatsApp",
    description: "Chatbot básico para respostas automáticas e redirecionamento para humanos",
    purpose: "Atendimento",
    creationTime: "2-3 horas",
    difficulty: "Baixa",
    monthlyCost: { usd: 15, brl: 75 },
    costBreakdown: [
      { item: "WhatsApp Business API", cost: { usd: 10, brl: 50 }, description: "Mensagens enviadas e recebidas" },
      { item: "Hosting (n8n)", cost: { usd: 5, brl: 25 }, description: "Servidor para automação" }
    ],
    suggestedPrice: { min: { usd: 100, brl: 500 }, max: { usd: 300, brl: 1500 } },
    tools: ["n8n", "WhatsApp Business API"],
    category: "Atendimento ao Cliente",
    cloneUrl: "#whatsapp-simple-template",
    features: ["Respostas automáticas", "Horário de funcionamento", "Redirecionamento para humano"],
    useCase: "Pequenas empresas que precisam de atendimento básico 24/7",
    popular: true,
    trending: false,
    templateContent: {
      n8n: {
        "meta": {
          "instanceId": "whatsapp-simple-v1"
        },
        "nodes": [
          {
            "parameters": {
              "httpMethod": "POST",
              "path": "whatsapp-webhook",
              "responseMode": "responseNode",
              "options": {}
            },
            "id": "webhook-node-1",
            "name": "WhatsApp Webhook",
            "type": "n8n-nodes-base.webhook",
            "typeVersion": 1,
            "position": [240, 300]
          },
          {
            "parameters": {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict"
                },
                "conditions": [
                  {
                    "leftValue": "={{ $json.body.messages[0].text.body.toLowerCase() }}",
                    "rightValue": "oi",
                    "operator": {
                      "type": "string",
                      "operation": "contains"
                    }
                  },
                  {
                    "leftValue": "={{ $json.body.messages[0].text.body.toLowerCase() }}",
                    "rightValue": "olá",
                    "operator": {
                      "type": "string",
                      "operation": "contains"
                    }
                  }
                ],
                "combinator": "or"
              }
            },
            "id": "if-greeting",
            "name": "É Cumprimento?",
            "type": "n8n-nodes-base.if",
            "typeVersion": 1,
            "position": [460, 300]
          },
          {
            "parameters": {
              "url": "https://graph.facebook.com/v17.0/{{ $vars.WHATSAPP_PHONE_ID }}/messages",
              "authentication": "genericCredentialType",
              "genericAuthType": "httpHeaderAuth",
              "sendHeaders": true,
              "headerParameters": {
                "parameters": [
                  {
                    "name": "Authorization",
                    "value": "Bearer {{ $vars.WHATSAPP_ACCESS_TOKEN }}"
                  }
                ]
              },
              "sendBody": true,
              "bodyParameters": {
                "parameters": [
                  {
                    "name": "messaging_product",
                    "value": "whatsapp"
                  },
                  {
                    "name": "to",
                    "value": "={{ $json.body.messages[0].from }}"
                  },
                  {
                    "name": "type",
                    "value": "text"
                  },
                  {
                    "name": "text",
                    "value": "{\"body\": \"Olá! 👋 Bem-vindo(a)! Estou aqui para ajudar você.\\n\\nDigite:\\n📞 *1* - Falar com atendente\\n💬 *2* - Dúvidas frequentes\\n📍 *3* - Endereço e horários\\n\\nComo posso ajudar?\"}"
                  }
                ]
              },
              "options": {}
            },
            "id": "send-greeting",
            "name": "Enviar Saudação",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [680, 200]
          },
          {
            "parameters": {
              "conditions": {
                "options": {
                  "caseSensitive": true,
                  "leftValue": "",
                  "typeValidation": "strict"
                },
                "conditions": [
                  {
                    "leftValue": "={{ $json.body.messages[0].text.body }}",
                    "rightValue": "1",
                    "operator": {
                      "type": "string",
                      "operation": "equals"
                    }
                  }
                ],
                "combinator": "or"
              }
            },
            "id": "if-human",
            "name": "Quer Humano?",
            "type": "n8n-nodes-base.if",
            "typeVersion": 1,
            "position": [680, 400]
          },
          {
            "parameters": {
              "url": "https://graph.facebook.com/v17.0/{{ $vars.WHATSAPP_PHONE_ID }}/messages",
              "authentication": "genericCredentialType",
              "genericAuthType": "httpHeaderAuth",
              "sendHeaders": true,
              "headerParameters": {
                "parameters": [
                  {
                    "name": "Authorization",
                    "value": "Bearer {{ $vars.WHATSAPP_ACCESS_TOKEN }}"
                  }
                ]
              },
              "sendBody": true,
              "bodyParameters": {
                "parameters": [
                  {
                    "name": "messaging_product",
                    "value": "whatsapp"
                  },
                  {
                    "name": "to",
                    "value": "={{ $json.body.messages[0].from }}"
                  },
                  {
                    "name": "type",
                    "value": "text"
                  },
                  {
                    "name": "text",
                    "value": "{\"body\": \"Entendi! Vou transferir você para um de nossos atendentes. 👨‍💼\\n\\nUm momento, por favor...\\n\\nEm breve alguém da nossa equipe entrará em contato!\"}"
                  }
                ]
              },
              "options": {}
            },
            "id": "transfer-human",
            "name": "Transferir para Humano",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [900, 320]
          },
          {
            "parameters": {
              "respondWith": "text",
              "responseBody": "OK"
            },
            "id": "response-ok",
            "name": "Response OK",
            "type": "n8n-nodes-base.respondToWebhook",
            "typeVersion": 1,
            "position": [1120, 300]
          }
        ],
        "connections": {
          "WhatsApp Webhook": {
            "main": [
              [
                {
                  "node": "É Cumprimento?",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "É Cumprimento?": {
            "main": [
              [
                {
                  "node": "Enviar Saudação",
                  "type": "main",
                  "index": 0
                }
              ],
              [
                {
                  "node": "Quer Humano?",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Enviar Saudação": {
            "main": [
              [
                {
                  "node": "Response OK",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Quer Humano?": {
            "main": [
              [
                {
                  "node": "Transferir para Humano",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Transferir para Humano": {
            "main": [
              [
                {
                  "node": "Response OK",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          }
        }
      }
    }
  },
  {
    id: "whatsapp-attendant-advanced",
    name: "Atendente IA Avançado para WhatsApp",
    description: "Sistema completo com IA conversacional, histórico e integração CRM",
    purpose: "Atendimento",
    creationTime: "1-2 semanas",
    difficulty: "Alta",
    monthlyCost: { usd: 85, brl: 425 },
    costBreakdown: [
      { item: "WhatsApp Business API", cost: { usd: 25, brl: 125 }, description: "Alto volume de mensagens" },
      { item: "OpenAI API", cost: { usd: 30, brl: 150 }, description: "Processamento de linguagem natural" },
      { item: "Database", cost: { usd: 15, brl: 75 }, description: "Armazenamento de conversas" },
      { item: "Hosting", cost: { usd: 15, brl: 75 }, description: "Infraestrutura robusta" }
    ],
    suggestedPrice: { min: { usd: 500, brl: 2500 }, max: { usd: 1500, brl: 7500 } },
    tools: ["n8n", "Flowise", "WhatsApp Business API", "OpenAI", "PostgreSQL", "Redis"],
    category: "Atendimento ao Cliente",
    cloneUrl: "#whatsapp-advanced-template",
    features: ["IA conversacional", "Histórico completo", "Integração CRM", "Analytics", "Escalação inteligente"],
    useCase: "Empresas médias/grandes com alto volume de atendimento",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "meta": {
          "instanceId": "whatsapp-advanced-v1"
        },
        "nodes": [
          {
            "parameters": {
              "httpMethod": "POST",
              "path": "whatsapp-ai",
              "responseMode": "responseNode"
            },
            "id": "webhook-main",
            "name": "WhatsApp Webhook",
            "type": "n8n-nodes-base.webhook",
            "typeVersion": 1,
            "position": [240, 300]
          },
          {
            "parameters": {
              "operation": "executeQuery",
              "query": "SELECT * FROM conversations WHERE phone_number = '{{ $json.body.messages[0].from }}' ORDER BY created_at DESC LIMIT 10"
            },
            "id": "get-history",
            "name": "Buscar Histórico",
            "type": "n8n-nodes-base.postgres",
            "typeVersion": 2,
            "position": [460, 300]
          },
          {
            "parameters": {
              "url": "http://localhost:3001/api/v1/prediction/{{ $vars.FLOWISE_CHATFLOW_ID }}",
              "sendHeaders": true,
              "headerParameters": {
                "parameters": [
                  {
                    "name": "Authorization",
                    "value": "Bearer {{ $vars.FLOWISE_API_KEY }}"
                  }
                ]
              },
              "sendBody": true,
              "bodyParameters": {
                "parameters": [
                  {
                    "name": "question",
                    "value": "={{ $json.body.messages[0].text.body }}"
                  },
                  {
                    "name": "history",
                    "value": "={{ $node['Buscar Histórico'].json }}"
                  },
                  {
                    "name": "overrideConfig",
                    "value": "{\"sessionId\": \"{{ $json.body.messages[0].from }}\"}"
                  }
                ]
              }
            },
            "id": "flowise-ai",
            "name": "Processar com IA",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [680, 300]
          },
          {
            "parameters": {
              "operation": "executeQuery",
              "query": "INSERT INTO conversations (phone_number, message_in, message_out, created_at) VALUES ('{{ $json.body.messages[0].from }}', '{{ $json.body.messages[0].text.body }}', '{{ $node['Processar com IA'].json.text }}', NOW())"
            },
            "id": "save-conversation",
            "name": "Salvar Conversa",
            "type": "n8n-nodes-base.postgres",
            "typeVersion": 2,
            "position": [900, 300]
          },
          {
            "parameters": {
              "url": "https://graph.facebook.com/v17.0/{{ $vars.WHATSAPP_PHONE_ID }}/messages",
              "authentication": "genericCredentialType",
              "genericAuthType": "httpHeaderAuth",
              "sendHeaders": true,
              "headerParameters": {
                "parameters": [
                  {
                    "name": "Authorization",
                    "value": "Bearer {{ $vars.WHATSAPP_ACCESS_TOKEN }}"
                  }
                ]
              },
              "sendBody": true,
              "bodyParameters": {
                "parameters": [
                  {
                    "name": "messaging_product",
                    "value": "whatsapp"
                  },
                  {
                    "name": "to",
                    "value": "={{ $json.body.messages[0].from }}"
                  },
                  {
                    "name": "type",
                    "value": "text"
                  },
                  {
                    "name": "text",
                    "value": "{\"body\": \"{{ $node['Processar com IA'].json.text }}\"}"
                  }
                ]
              }
            },
            "id": "send-response",
            "name": "Enviar Resposta",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [1120, 300]
          },
          {
            "parameters": {
              "respondWith": "text",
              "responseBody": "OK"
            },
            "id": "response-final",
            "name": "Response Final",
            "type": "n8n-nodes-base.respondToWebhook",
            "typeVersion": 1,
            "position": [1340, 300]
          }
        ],
        "connections": {
          "WhatsApp Webhook": {
            "main": [
              [
                {
                  "node": "Buscar Histórico",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Buscar Histórico": {
            "main": [
              [
                {
                  "node": "Processar com IA",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Processar com IA": {
            "main": [
              [
                {
                  "node": "Salvar Conversa",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Salvar Conversa": {
            "main": [
              [
                {
                  "node": "Enviar Resposta",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Enviar Resposta": {
            "main": [
              [
                {
                  "node": "Response Final",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          }
        }
      },
      flowise: {
        "nodes": [
          {
            "id": "chatOpenAI_0",
            "position": {
              "x": 1028.0137025833138,
              "y": 270.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "chatOpenAI_0",
              "label": "ChatOpenAI",
              "version": 2,
              "name": "chatOpenAI",
              "type": "ChatOpenAI",
              "baseClasses": ["ChatOpenAI", "BaseChatModel", "BaseLanguageModel"],
              "category": "Chat Models",
              "description": "Wrapper around OpenAI large language models that use the Chat endpoint",
              "inputParams": [
                {
                  "label": "Connect Credential",
                  "name": "credential",
                  "type": "credential",
                  "credentialNames": ["openAIApi"]
                },
                {
                  "label": "Model Name",
                  "name": "modelName",
                  "type": "options",
                  "options": [
                    {
                      "label": "gpt-4",
                      "name": "gpt-4"
                    },
                    {
                      "label": "gpt-4-0613",
                      "name": "gpt-4-0613"
                    },
                    {
                      "label": "gpt-4-32k",
                      "name": "gpt-4-32k"
                    },
                    {
                      "label": "gpt-3.5-turbo",
                      "name": "gpt-3.5-turbo"
                    },
                    {
                      "label": "gpt-3.5-turbo-0613",
                      "name": "gpt-3.5-turbo-0613"
                    },
                    {
                      "label": "gpt-3.5-turbo-16k",
                      "name": "gpt-3.5-turbo-16k"
                    }
                  ],
                  "default": "gpt-3.5-turbo",
                  "optional": true
                },
                {
                  "label": "Temperature",
                  "name": "temperature",
                  "type": "number",
                  "step": 0.1,
                  "default": 0.9,
                  "optional": true
                }
              ],
              "inputAnchors": [
                {
                  "label": "Cache",
                  "name": "cache",
                  "type": "BaseCache",
                  "optional": true
                }
              ],
              "inputs": {
                "modelName": "gpt-3.5-turbo",
                "temperature": 0.7,
                "cache": ""
              },
              "outputAnchors": [
                {
                  "id": "chatOpenAI_0-output-chatOpenAI-ChatOpenAI|BaseChatModel|BaseLanguageModel",
                  "name": "chatOpenAI",
                  "label": "ChatOpenAI",
                  "type": "ChatOpenAI"
                }
              ]
            }
          },
          {
            "id": "conversationChain_0",
            "position": {
              "x": 1383.593958333333,
              "y": 270.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "conversationChain_0",
              "label": "Conversation Chain",
              "version": 1,
              "name": "conversationChain",
              "type": "ConversationChain",
              "baseClasses": ["ConversationChain", "LLMChain", "BaseChain"],
              "category": "Chains",
              "description": "Chat models specific conversational chain with memory",
              "inputParams": [
                {
                  "label": "System Message",
                  "name": "systemMessagePrompt",
                  "type": "string",
                  "rows": 4,
                  "description": "If Chat Prompt Template is provided, this will be ignored",
                  "additionalParams": true,
                  "optional": true
                }
              ],
              "inputAnchors": [
                {
                  "label": "Language Model",
                  "name": "model",
                  "type": "BaseLanguageModel"
                },
                {
                  "label": "Memory",
                  "name": "memory",
                  "type": "BaseMemory"
                },
                {
                  "label": "Chat Prompt Template",
                  "name": "chatPromptTemplate",
                  "type": "ChatPromptTemplate",
                  "description": "Override existing prompt with Chat Prompt Template. Human Message must includes {input} variable",
                  "optional": true
                }
              ],
              "inputs": {
                "model": "{{chatOpenAI_0.data.instance}}",
                "memory": "{{bufferWindowMemory_0.data.instance}}",
                "systemMessagePrompt": "Você é um assistente inteligente de atendimento ao cliente. Seu objetivo é ajudar os clientes de forma educada, eficiente e profissional.\n\nRegras importantes:\n1. Sempre seja educado e prestativo\n2. Se não souber uma informação, diga que vai verificar com a equipe\n3. Para questões técnicas complexas, ofereça transferir para um especialista\n4. Mantenha as respostas concisas mas completas\n5. Use emojis moderadamente para tornar a conversa mais amigável\n\nLembre-se do contexto da conversa anterior e forneça respostas personalizadas.",
                "chatPromptTemplate": ""
              },
              "outputAnchors": [
                {
                  "id": "conversationChain_0-output-conversationChain-ConversationChain|LLMChain|BaseChain",
                  "name": "conversationChain",
                  "label": "ConversationChain",
                  "type": "ConversationChain"
                }
              ]
            }
          },
          {
            "id": "bufferWindowMemory_0",
            "position": {
              "x": 1028.0137025833138,
              "y": 453.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "bufferWindowMemory_0",
              "label": "Buffer Window Memory",
              "version": 1,
              "name": "bufferWindowMemory",
              "type": "BufferWindowMemory",
              "baseClasses": ["BufferWindowMemory", "BaseChatMemory", "BaseMemory"],
              "category": "Memory",
              "description": "Uses a window of size k to surface the last k back-and-forth exchanges",
              "inputParams": [
                {
                  "label": "Memory Key",
                  "name": "memoryKey",
                  "type": "string",
                  "default": "chat_history"
                },
                {
                  "label": "Input Key",
                  "name": "inputKey",
                  "type": "string",
                  "default": "input"
                },
                {
                  "label": "Size",
                  "name": "k",
                  "type": "number",
                  "default": "4",
                  "description": "Window of size k to surface the last k back-and-forth exchanges"
                }
              ],
              "inputs": {
                "memoryKey": "chat_history",
                "inputKey": "input",
                "k": "10"
              },
              "outputAnchors": [
                {
                  "id": "bufferWindowMemory_0-output-bufferWindowMemory-BufferWindowMemory|BaseChatMemory|BaseMemory",
                  "name": "bufferWindowMemory",
                  "label": "BufferWindowMemory",
                  "type": "BufferWindowMemory"
                }
              ]
            }
          }
        ],
        "edges": [
          {
            "source": "chatOpenAI_0",
            "sourceHandle": "chatOpenAI_0-output-chatOpenAI-ChatOpenAI|BaseChatModel|BaseLanguageModel",
            "target": "conversationChain_0",
            "targetHandle": "conversationChain_0-input-model-BaseLanguageModel",
            "type": "buttonedge",
            "id": "chatOpenAI_0-chatOpenAI_0-output-chatOpenAI-ChatOpenAI|BaseChatModel|BaseLanguageModel-conversationChain_0-conversationChain_0-input-model-BaseLanguageModel"
          },
          {
            "source": "bufferWindowMemory_0",
            "sourceHandle": "bufferWindowMemory_0-output-bufferWindowMemory-BufferWindowMemory|BaseChatMemory|BaseMemory",
            "target": "conversationChain_0",
            "targetHandle": "conversationChain_0-input-memory-BaseMemory",
            "type": "buttonedge",
            "id": "bufferWindowMemory_0-bufferWindowMemory_0-output-bufferWindowMemory-BufferWindowMemory|BaseChatMemory|BaseMemory-conversationChain_0-conversationChain_0-input-memory-BaseMemory"
          }
        ]
      }
    }
  },
  {
    id: "voice-assistant-basic",
    name: "Assistente de Voz Básico",
    description: "Bot simples para atendimento telefônico com menu de opções",
    purpose: "Atendimento",
    creationTime: "4-6 horas",
    difficulty: "Média",
    monthlyCost: { usd: 35, brl: 175 },
    costBreakdown: [
      { item: "Twilio Voice", cost: { usd: 25, brl: 125 }, description: "Chamadas telefônicas" },
      { item: "Text-to-Speech", cost: { usd: 5, brl: 25 }, description: "Síntese de voz" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Processamento" }
    ],
    suggestedPrice: { min: { usd: 200, brl: 1000 }, max: { usd: 600, brl: 3000 } },
    tools: ["n8n", "Twilio", "Text-to-Speech"],
    category: "Atendimento ao Cliente",
    cloneUrl: "#voice-basic",
    features: ["Menu por voz", "Redirecionamento", "Gravação de chamadas"],
    useCase: "Pequenas empresas com atendimento telefônico",
    popular: false,
    trending: false,
    templateContent: {
      n8n: {
        "meta": {
          "instanceId": "voice-basic-v1"
        },
        "nodes": [
          {
            "parameters": {
              "httpMethod": "POST",
              "path": "voice-webhook",
              "responseMode": "responseNode"
            },
            "id": "voice-webhook",
            "name": "Twilio Voice Webhook",
            "type": "n8n-nodes-base.webhook",
            "typeVersion": 1,
            "position": [240, 300]
          },
          {
            "parameters": {
              "respondWith": "text",
              "responseBody": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Response>\n    <Gather input=\"dtmf\" timeout=\"10\" numDigits=\"1\" action=\"/webhook/voice-menu\">\n        <Say voice=\"alice\" language=\"pt-BR\">\n            Olá! Bem-vindo à nossa empresa.\n            Para falar com vendas, digite 1.\n            Para suporte técnico, digite 2.\n            Para financeiro, digite 3.\n            Para falar com atendente, digite 0.\n        </Say>\n    </Gather>\n    <Say voice=\"alice\" language=\"pt-BR\">\n        Não recebemos sua escolha. Transferindo para atendente.\n    </Say>\n    <Dial>{{ $vars.OPERATOR_PHONE }}</Dial>\n</Response>",
              "options": {
                "responseHeaders": {
                  "entries": [
                    {
                      "name": "Content-Type",
                      "value": "text/xml"
                    }
                  ]
                }
              }
            },
            "id": "voice-menu",
            "name": "Menu Principal",
            "type": "n8n-nodes-base.respondToWebhook",
            "typeVersion": 1,
            "position": [460, 300]
          }
        ],
        "connections": {
          "Twilio Voice Webhook": {
            "main": [
              [
                {
                  "node": "Menu Principal",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          }
        }
      }
    }
  },
  {
    id: "voice-assistant-ai",
    name: "Assistente de Voz IA Conversacional",
    description: "Sistema avançado com IA conversacional e reconhecimento de voz",
    purpose: "Atendimento",
    creationTime: "2-3 semanas",
    difficulty: "Alta",
    monthlyCost: { usd: 120, brl: 600 },
    costBreakdown: [
      { item: "Twilio Voice", cost: { usd: 50, brl: 250 }, description: "Alto volume de chamadas" },
      { item: "OpenAI API", cost: { usd: 35, brl: 175 }, description: "Processamento conversacional" },
      { item: "Speech-to-Text", cost: { usd: 20, brl: 100 }, description: "Reconhecimento de voz" },
      { item: "Text-to-Speech", cost: { usd: 10, brl: 50 }, description: "Síntese natural" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Infraestrutura" }
    ],
    suggestedPrice: { min: { usd: 1000, brl: 5000 }, max: { usd: 4000, brl: 20000 } },
    tools: ["n8n", "Flowise", "Twilio", "OpenAI", "Speech-to-Text", "Text-to-Speech"],
    category: "Atendimento ao Cliente",
    cloneUrl: "#voice-ai",
    features: ["Conversação natural", "Reconhecimento de contexto", "Transferência inteligente", "Analytics de chamadas"],
    useCase: "Call centers e empresas com atendimento complexo",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "meta": {
          "instanceId": "voice-ai-v1"
        },
        "nodes": [
          {
            "parameters": {
              "httpMethod": "POST",
              "path": "voice-ai-webhook",
              "responseMode": "responseNode"
            },
            "id": "voice-ai-webhook",
            "name": "Twilio AI Webhook",
            "type": "n8n-nodes-base.webhook",
            "typeVersion": 1,
            "position": [240, 300]
          },
          {
            "parameters": {
              "url": "https://api.openai.com/v1/audio/transcriptions",
              "authentication": "genericCredentialType",
              "genericAuthType": "httpHeaderAuth",
              "sendHeaders": true,
              "headerParameters": {
                "parameters": [
                  {
                    "name": "Authorization",
                    "value": "Bearer {{ $vars.OPENAI_API_KEY }}"
                  }
                ]
              },
              "sendBody": true,
              "contentType": "multipart-form-data",
              "bodyParameters": {
                "parameters": [
                  {
                    "name": "file",
                    "value": "={{ $json.RecordingUrl }}"
                  },
                  {
                    "name": "model",
                    "value": "whisper-1"
                  },
                  {
                    "name": "language",
                    "value": "pt"
                  }
                ]
              }
            },
            "id": "speech-to-text",
            "name": "Converter Áudio para Texto",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [460, 300]
          },
          {
            "parameters": {
              "url": "http://localhost:3001/api/v1/prediction/{{ $vars.VOICE_FLOWISE_CHATFLOW_ID }}",
              "sendHeaders": true,
              "headerParameters": {
                "parameters": [
                  {
                    "name": "Authorization",
                    "value": "Bearer {{ $vars.FLOWISE_API_KEY }}"
                  }
                ]
              },
              "sendBody": true,
              "bodyParameters": {
                "parameters": [
                  {
                    "name": "question",
                    "value": "={{ $node['Converter Áudio para Texto'].json.text }}"
                  },
                  {
                    "name": "overrideConfig",
                    "value": "{\"sessionId\": \"{{ $json.From }}\"}"
                  }
                ]
              }
            },
            "id": "process-with-ai",
            "name": "Processar com IA",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [680, 300]
          },
          {
            "parameters": {
              "url": "https://api.openai.com/v1/audio/speech",
              "authentication": "genericCredentialType",
              "genericAuthType": "httpHeaderAuth",
              "sendHeaders": true,
              "headerParameters": {
                "parameters": [
                  {
                    "name": "Authorization",
                    "value": "Bearer {{ $vars.OPENAI_API_KEY }}"
                  }
                ]
              },
              "sendBody": true,
              "bodyParameters": {
                "parameters": [
                  {
                    "name": "model",
                    "value": "tts-1"
                  },
                  {
                    "name": "voice",
                    "value": "nova"
                  },
                  {
                    "name": "input",
                    "value": "={{ $node['Processar com IA'].json.text }}"
                  }
                ]
              }
            },
            "id": "text-to-speech",
            "name": "Converter Texto para Áudio",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [900, 300]
          },
          {
            "parameters": {
              "respondWith": "text",
              "responseBody": "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<Response>\n    <Play>{{ $node['Converter Texto para Áudio'].json.audio_url }}</Play>\n    <Record maxLength=\"30\" timeout=\"5\" transcribe=\"true\" action=\"/webhook/voice-ai-webhook\" />\n</Response>",
              "options": {
                "responseHeaders": {
                  "entries": [
                    {
                      "name": "Content-Type",
                      "value": "text/xml"
                    }
                  ]
                }
              }
            },
            "id": "voice-response",
            "name": "Resposta de Voz",
            "type": "n8n-nodes-base.respondToWebhook",
            "typeVersion": 1,
            "position": [1120, 300]
          }
        ],
        "connections": {
          "Twilio AI Webhook": {
            "main": [
              [
                {
                  "node": "Converter Áudio para Texto",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Converter Áudio para Texto": {
            "main": [
              [
                {
                  "node": "Processar com IA",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Processar com IA": {
            "main": [
              [
                {
                  "node": "Converter Texto para Áudio",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Converter Texto para Áudio": {
            "main": [
              [
                {
                  "node": "Resposta de Voz",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          }
        }
      },
      flowise: {
        "nodes": [
          {
            "id": "chatOpenAI_voice",
            "position": {
              "x": 1028.0137025833138,
              "y": 270.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "chatOpenAI_voice",
              "label": "ChatOpenAI Voice",
              "version": 2,
              "name": "chatOpenAI",
              "type": "ChatOpenAI",
              "baseClasses": ["ChatOpenAI", "BaseChatModel", "BaseLanguageModel"],
              "category": "Chat Models",
              "inputs": {
                "modelName": "gpt-4",
                "temperature": 0.8,
                "cache": ""
              },
              "outputAnchors": [
                {
                  "id": "chatOpenAI_voice-output-chatOpenAI-ChatOpenAI|BaseChatModel|BaseLanguageModel",
                  "name": "chatOpenAI",
                  "label": "ChatOpenAI",
                  "type": "ChatOpenAI"
                }
              ]
            }
          },
          {
            "id": "conversationChain_voice",
            "position": {
              "x": 1383.593958333333,
              "y": 270.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "conversationChain_voice",
              "label": "Voice Conversation Chain",
              "version": 1,
              "name": "conversationChain",
              "type": "ConversationChain",
              "baseClasses": ["ConversationChain", "LLMChain", "BaseChain"],
              "category": "Chains",
              "inputs": {
                "model": "{{chatOpenAI_voice.data.instance}}",
                "memory": "{{bufferWindowMemory_voice.data.instance}}",
                "systemMessagePrompt": "Você é um assistente de voz inteligente para atendimento telefônico. Suas respostas devem ser:\n\n1. CONCISAS - máximo 2-3 frases por resposta\n2. CLARAS - linguagem simples e direta\n3. NATURAIS - como uma conversa telefônica real\n4. OBJETIVAS - vá direto ao ponto\n\nRegras importantes:\n- Sempre pergunte se pode ajudar em mais alguma coisa\n- Se não souber algo, transfira para atendente humano\n- Mantenha tom profissional mas amigável\n- Para questões complexas, colete informações básicas e transfira\n\nLembre-se: você está falando por telefone, então seja direto e eficiente.",
                "chatPromptTemplate": ""
              },
              "outputAnchors": [
                {
                  "id": "conversationChain_voice-output-conversationChain-ConversationChain|LLMChain|BaseChain",
                  "name": "conversationChain",
                  "label": "ConversationChain",
                  "type": "ConversationChain"
                }
              ]
            }
          },
          {
            "id": "bufferWindowMemory_voice",
            "position": {
              "x": 1028.0137025833138,
              "y": 453.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "bufferWindowMemory_voice",
              "label": "Voice Memory",
              "version": 1,
              "name": "bufferWindowMemory",
              "type": "BufferWindowMemory",
              "baseClasses": ["BufferWindowMemory", "BaseChatMemory", "BaseMemory"],
              "category": "Memory",
              "inputs": {
                "memoryKey": "chat_history",
                "inputKey": "input",
                "k": "6"
              },
              "outputAnchors": [
                {
                  "id": "bufferWindowMemory_voice-output-bufferWindowMemory-BufferWindowMemory|BaseChatMemory|BaseMemory",
                  "name": "bufferWindowMemory",
                  "label": "BufferWindowMemory",
                  "type": "BufferWindowMemory"
                }
              ]
            }
          }
        ],
        "edges": [
          {
            "source": "chatOpenAI_voice",
            "sourceHandle": "chatOpenAI_voice-output-chatOpenAI-ChatOpenAI|BaseChatModel|BaseLanguageModel",
            "target": "conversationChain_voice",
            "targetHandle": "conversationChain_voice-input-model-BaseLanguageModel",
            "type": "buttonedge",
            "id": "chatOpenAI_voice-conversationChain_voice"
          },
          {
            "source": "bufferWindowMemory_voice",
            "sourceHandle": "bufferWindowMemory_voice-output-bufferWindowMemory-BufferWindowMemory|BaseChatMemory|BaseMemory",
            "target": "conversationChain_voice",
            "targetHandle": "conversationChain_voice-input-memory-BaseMemory",
            "type": "buttonedge",
            "id": "bufferWindowMemory_voice-conversationChain_voice"
          }
        ]
      }
    }
  }
];
