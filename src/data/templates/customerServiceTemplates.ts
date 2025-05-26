
import { AutomationTemplate } from '@/types/automation';

export const customerServiceTemplates: AutomationTemplate[] = [
  {
    id: 'cs-001',
    name: 'Assistente IA com Agendamento Inteligente',
    description: 'Agente IA que processa texto, áudio e imagem via WhatsApp com integração ao Google Calendar para agendamentos automáticos.',
    category: 'Atendimento ao Cliente',
    difficulty: 'Baixa',
    purpose: 'Produtividade',
    creationTime: '4-6 horas',
    monthlyCost: {
      usd: 25,
      brl: 125
    },
    suggestedPrice: {
      min: { usd: 300, brl: 1500 },
      max: { usd: 800, brl: 4000 }
    },
    tools: ['n8n', 'OpenAI', 'Google Calendar', 'WhatsApp Business'],
    features: [
      'Processamento de voz, texto e imagem',
      'Agendamento automático via Google Calendar',
      'Memória de conversação',
      'Pesquisa na Wikipedia',
      'Webhook para WhatsApp',
      'Transcrição de áudio'
    ],
    useCase: 'Ideal para clínicas, consultórios, salões de beleza e qualquer negócio que precise automatizar agendamentos via WhatsApp.',
    popular: true,
    trending: false,
    costBreakdown: [
      { item: 'OpenAI API', description: 'GPT-4o-mini para processamento', cost: { usd: 15, brl: 75 } },
      { item: 'Google Calendar API', description: 'Grátis até 1M requisições', cost: { usd: 0, brl: 0 } },
      { item: 'WhatsApp Business', description: 'API via provedor', cost: { usd: 10, brl: 50 } }
    ],
    templateContent: {
      n8n: {
        "name": "Assistente IA com Agendamento Inteligente",
        "nodes": [
          {
            "parameters": {
              "promptType": "define",
              "text": "={{ $json.mensagem }}",
              "options": {
                "systemMessage": "=# Visão Geral\nVocê é um assistente de calendário inteligente. Suas responsabilidades incluem criar, obter e excluir eventos no calendário do usuário.\n\n**Ferramentas de Gerenciamento de Calendário**\n- Use \"Criar Evento com Participante\" quando um evento incluir um participante.\n- Use \"Criar Evento\" para eventos individuais.\n- Use \"Obter Eventos\" para buscar horários do calendário quando solicitado.\n- Use \"Excluir Evento\" para excluir um evento. Você deve usar \"Obter Eventos\" primeiro para obter o ID do evento a ser excluído.\n- Use \"Atualizar Evento\" para atualizar um evento. Você deve usar \"Obter Eventos\" primeiro para obter o ID do evento a ser atualizado.\n\n## Notas Finais\n- Aqui está a data/hora atual: {{ $now }} \n- Se a duração de um evento não for especificada, assuma que será de uma hora.\n- Sempre confirme os agendamentos com horário específico\n- Seja educado e profissional em todas as interações"
              }
            },
            "type": "@n8n/n8n-nodes-langchain.agent",
            "typeVersion": 1.7,
            "position": [220, 0],
            "id": "b428dc64-22dc-4908-92d4-768365a22050",
            "name": "AI Agent"
          },
          {
            "parameters": {
              "model": {
                "__rl": true,
                "mode": "list",
                "value": "gpt-4o-mini"
              },
              "options": {}
            },
            "type": "@n8n/n8n-nodes-langchain.lmChatOpenAi",
            "typeVersion": 1.2,
            "position": [40, 200],
            "id": "2882e6bd-5a33-4a7a-9f96-b7727d71334a",
            "name": "OpenAI Chat Model",
            "credentials": {
              "openAiApi": {
                "id": "SEU_OPENAI_CREDENTIAL_ID",
                "name": "OpenAI API Credential"
              }
            }
          },
          {
            "parameters": {},
            "type": "@n8n/n8n-nodes-langchain.toolWikipedia",
            "typeVersion": 1,
            "position": [300, 200],
            "id": "75e9c105-5d31-42e3-8b8e-353813354c14",
            "name": "Wikipedia"
          },
          {
            "parameters": {
              "sessionIdType": "customKey",
              "sessionKey": "={{ $json.telefone }}",
              "contextWindowLength": 20
            },
            "type": "@n8n/n8n-nodes-langchain.memoryBufferWindow",
            "typeVersion": 1.3,
            "position": [160, 200],
            "id": "4eff6d0c-d661-4baf-be48-547a325a91ee",
            "name": "Window Buffer Memory"
          },
          {
            "parameters": {
              "operation": "getAll",
              "calendar": {
                "__rl": true,
                "value": "SEU_EMAIL@gmail.com",
                "mode": "list",
                "cachedResultName": "Calendário Principal"
              },
              "timeMin": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('After', `o dia sucessor à data que o usuário está solicitando`, 'string') }}",
              "timeMax": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Before', `o dia anterior à data que o usuário está solicitando`, 'string') }}",
              "options": {}
            },
            "type": "n8n-nodes-base.googleCalendarTool",
            "typeVersion": 1.3,
            "position": [420, 200],
            "id": "21a73df3-5bd3-4ea1-81b3-3000efc98099",
            "name": "Obter Eventos",
            "credentials": {
              "googleCalendarOAuth2Api": {
                "id": "SEU_GOOGLE_CREDENTIAL_ID",
                "name": "Google Calendar Credential"
              }
            }
          },
          {
            "parameters": {
              "calendar": {
                "__rl": true,
                "value": "SEU_EMAIL@gmail.com",
                "mode": "list",
                "cachedResultName": "Calendário Principal"
              },
              "start": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Start', `Início do Evento`, 'string') }}",
              "end": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('End', `Final do Evento`, 'string') }}",
              "additionalFields": {
                "attendees": [],
                "summary": "={{ /*n8n-auto-generated-fromAI-override*/ $fromAI('Summary', `Título do Evento`, 'string') }}"
              }
            },
            "type": "n8n-nodes-base.googleCalendarTool",
            "typeVersion": 1.3,
            "position": [540, 200],
            "id": "bdd248cf-9fac-429e-969c-7499500002a8",
            "name": "Criar Evento",
            "credentials": {
              "googleCalendarOAuth2Api": {
                "id": "SEU_GOOGLE_CREDENTIAL_ID",
                "name": "Google Calendar Credential"
              }
            }
          },
          {
            "parameters": {
              "httpMethod": "POST",
              "path": "agendamento-webhook",
              "options": {}
            },
            "type": "n8n-nodes-base.webhook",
            "typeVersion": 2,
            "position": [-1580, 20],
            "id": "937a3ede-132b-4a4b-b0d3-784fc9f2ecbf",
            "name": "Webhook",
            "webhookId": "WEBHOOK_ID_UNICO"
          },
          {
            "parameters": {
              "assignments": {
                "assignments": [
                  {
                    "id": "2fcb9a45-dece-4ad7-8f44-86af08cdd0b2",
                    "name": "telefone",
                    "value": "={{ $json.body.data.key.remoteJid }}",
                    "type": "string"
                  }
                ]
              },
              "options": {}
            },
            "type": "n8n-nodes-base.set",
            "typeVersion": 3.4,
            "position": [-1380, 20],
            "id": "bd538949-fa14-48ec-8cd1-294396f74c9d",
            "name": "Edit Fields"
          },
          {
            "parameters": {
              "method": "POST",
              "url": "=SUA_URL_WHATSAPP_API",
              "sendHeaders": true,
              "headerParameters": {
                "parameters": [
                  {
                    "name": "apikey",
                    "value": "SUA_API_KEY_WHATSAPP"
                  }
                ]
              },
              "sendBody": true,
              "specifyBody": "json",
              "jsonBody": "={\n    \"number\": \"{{ $('Webhook').item.json[\"body\"][\"data\"][\"key\"][\"remoteJid\"] }}\",\n    \"text\": \"{{ $json.output.replace(/\\n/g, \"\\\\n\").replace(/['\"]/g, '') }}\"\n}",
              "options": {}
            },
            "id": "d8fc4a63-ff5b-4d1e-b20c-424b5c5c08fc",
            "name": "Responde texto",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4.2,
            "position": [660, 0]
          }
        ],
        "pinData": {},
        "connections": {
          "OpenAI Chat Model": {
            "ai_languageModel": [
              [
                {
                  "node": "AI Agent",
                  "type": "ai_languageModel",
                  "index": 0
                }
              ]
            ]
          },
          "Wikipedia": {
            "ai_tool": [
              [
                {
                  "node": "AI Agent",
                  "type": "ai_tool",
                  "index": 0
                }
              ]
            ]
          },
          "Window Buffer Memory": {
            "ai_memory": [
              [
                {
                  "node": "AI Agent",
                  "type": "ai_memory",
                  "index": 0
                }
              ]
            ]
          },
          "Obter Eventos": {
            "ai_tool": [
              [
                {
                  "node": "AI Agent",
                  "type": "ai_tool",
                  "index": 0
                }
              ]
            ]
          },
          "Criar Evento": {
            "ai_tool": [
              [
                {
                  "node": "AI Agent",
                  "type": "ai_tool",
                  "index": 0
                }
              ]
            ]
          }
        },
        "active": false,
        "settings": {
          "executionOrder": "v1"
        }
      }
    }
  },
  {
    id: 'cs-002',
    name: 'Bot de FAQ Inteligente',
    description: 'Sistema de perguntas e respostas automatizado com base de conhecimento personalizada.',
    category: 'Atendimento ao Cliente',
    difficulty: 'Baixa',
    purpose: 'Produtividade',
    creationTime: '2-3 horas',
    monthlyCost: {
      usd: 15,
      brl: 75
    },
    suggestedPrice: {
      min: { usd: 200, brl: 1000 },
      max: { usd: 500, brl: 2500 }
    },
    tools: ['Flowise', 'OpenAI', 'Pinecone'],
    features: [
      'Base de conhecimento personalizada',
      'Respostas contextuais',
      'Integração com documentos',
      'Aprendizado contínuo'
    ],
    useCase: 'Perfeito para empresas que recebem muitas perguntas repetitivas e querem automatizar o suporte.',
    popular: false,
    trending: true,
    costBreakdown: [
      { item: 'OpenAI API', description: 'Embeddings e chat completion', cost: { usd: 10, brl: 50 } },
      { item: 'Pinecone', description: 'Vector database grátis até 1M vectores', cost: { usd: 0, brl: 0 } },
      { item: 'Hospedagem', description: 'VPS básica', cost: { usd: 5, brl: 25 } }
    ],
    templateContent: {
      flowise: {
        "nodes": [
          {
            "width": 300,
            "height": 525,
            "id": "chatOpenAI_0",
            "position": {
              "x": 1138.5716496440538,
              "y": 264.6602792100345
            },
            "type": "customNode",
            "data": {
              "id": "chatOpenAI_0",
              "label": "ChatOpenAI",
              "version": 6,
              "name": "chatOpenAI",
              "type": "ChatOpenAI",
              "baseClasses": [
                "ChatOpenAI",
                "BaseChatModel",
                "LLM",
                "BaseLangChain",
                "Runnable"
              ],
              "category": "Chat Models",
              "description": "Wrapper around OpenAI large language models that use the Chat endpoint",
              "inputParams": [
                {
                  "label": "Connect Credential",
                  "name": "credential",
                  "type": "credential",
                  "credentialNames": [
                    "openAIApi"
                  ],
                  "id": "chatOpenAI_0-input-credential-credential"
                },
                {
                  "label": "Model Name",
                  "name": "modelName",
                  "type": "asyncOptions",
                  "loadMethod": "listModels",
                  "default": "gpt-3.5-turbo",
                  "id": "chatOpenAI_0-input-modelName-asyncOptions"
                },
                {
                  "label": "Temperature",
                  "name": "temperature",
                  "type": "number",
                  "step": 0.1,
                  "default": 0.9,
                  "optional": true,
                  "id": "chatOpenAI_0-input-temperature-number"
                }
              ],
              "inputAnchors": [
                {
                  "label": "Cache",
                  "name": "cache",
                  "type": "BaseCache",
                  "optional": true,
                  "id": "chatOpenAI_0-input-cache-BaseCache"
                }
              ],
              "inputs": {
                "cache": "",
                "modelName": "gpt-4o-mini",
                "temperature": 0.3,
                "credential": "credential"
              },
              "outputAnchors": [
                {
                  "id": "chatOpenAI_0-output-chatOpenAI-ChatOpenAI",
                  "name": "chatOpenAI",
                  "label": "ChatOpenAI",
                  "description": "Wrapper around OpenAI large language models that use the Chat endpoint",
                  "type": "ChatOpenAI"
                }
              ],
              "outputs": {},
              "selected": false
            },
            "selected": false,
            "positionAbsolute": {
              "x": 1138.5716496440538,
              "y": 264.6602792100345
            },
            "dragging": false
          },
          {
            "width": 300,
            "height": 575,
            "id": "conversationalRetrievalQAChain_0",
            "position": {
              "x": 1533.4786073303865,
              "y": 206.19076063981777
            },
            "type": "customNode",
            "data": {
              "id": "conversationalRetrievalQAChain_0",
              "label": "Conversational Retrieval QA Chain",
              "version": 3,
              "name": "conversationalRetrievalQAChain",
              "type": "ConversationalRetrievalQAChain",
              "baseClasses": [
                "ConversationalRetrievalQAChain",
                "BaseChain",
                "Runnable"
              ],
              "category": "Chains",
              "description": "Document QA - built on RetrievalQAChain to provide a chat history component",
              "inputParams": [
                {
                  "label": "System Message",
                  "name": "systemMessagePrompt",
                  "type": "string",
                  "rows": 4,
                  "additionalParams": true,
                  "optional": true,
                  "default": "I want you to act as a document that I am having a conversation with. Your name is \"AI Assistant\", and you will answer questions based on the context provided. If the answer is not included in the context, you should say \"I don't have information about that in my knowledge base.\"",
                  "placeholder": "I want you to act as a document that I am having a conversation with. Your name is \"AI Assistant\", and you will answer questions based on the context provided. If the answer is not included in the context, you should say \"I don't have information about that in my knowledge base.\"",
                  "id": "conversationalRetrievalQAChain_0-input-systemMessagePrompt-string"
                }
              ],
              "inputAnchors": [
                {
                  "label": "Chat Model",
                  "name": "model",
                  "type": "BaseChatModel",
                  "id": "conversationalRetrievalQAChain_0-input-model-BaseChatModel"
                },
                {
                  "label": "Vector Store Retriever",
                  "name": "vectorStoreRetriever",
                  "type": "BaseRetriever",
                  "id": "conversationalRetrievalQAChain_0-input-vectorStoreRetriever-BaseRetriever"
                }
              ],
              "inputs": {
                "model": "{{chatOpenAI_0.data.instance}}",
                "vectorStoreRetriever": "{{pineconeExistingIndex_0.data.instance}}",
                "systemMessagePrompt": "Você é um assistente de FAQ inteligente. Responda às perguntas baseado apenas no contexto fornecido. Se não souber a resposta, diga que não possui essa informação em sua base de conhecimento. Seja sempre educado e profissional."
              },
              "outputAnchors": [
                {
                  "id": "conversationalRetrievalQAChain_0-output-conversationalRetrievalQAChain-ConversationalRetrievalQAChain",
                  "name": "conversationalRetrievalQAChain",
                  "label": "ConversationalRetrievalQAChain",
                  "description": "Document QA - built on RetrievalQAChain to provide a chat history component",
                  "type": "ConversationalRetrievalQAChain"
                }
              ],
              "outputs": {},
              "selected": false
            },
            "selected": false,
            "positionAbsolute": {
              "x": 1533.4786073303865,
              "y": 206.19076063981777
            },
            "dragging": false
          },
          {
            "width": 300,
            "height": 507,
            "id": "pineconeExistingIndex_0",
            "position": {
              "x": 742.8616430513494,
              "y": 317.7276295755073
            },
            "type": "customNode",
            "data": {
              "id": "pineconeExistingIndex_0",
              "label": "Pinecone Load Existing Index",
              "version": 1,
              "name": "pineconeExistingIndex",
              "type": "Pinecone",
              "baseClasses": [
                "Pinecone",
                "VectorStore",
                "BaseRetriever"
              ],
              "category": "Vector Stores",
              "description": "Load existing index from Pinecone (i.e: Document has been upserted)",
              "inputParams": [
                {
                  "label": "Connect Credential",
                  "name": "credential",
                  "type": "credential",
                  "credentialNames": [
                    "pineconeApi"
                  ],
                  "id": "pineconeExistingIndex_0-input-credential-credential"
                },
                {
                  "label": "Pinecone Index",
                  "name": "pineconeIndex",
                  "type": "string",
                  "placeholder": "my-index",
                  "id": "pineconeExistingIndex_0-input-pineconeIndex-string"
                },
                {
                  "label": "Pinecone Namespace",
                  "name": "pineconeNamespace",
                  "type": "string",
                  "placeholder": "my-namespace",
                  "additionalParams": true,
                  "optional": true,
                  "id": "pineconeExistingIndex_0-input-pineconeNamespace-string"
                },
                {
                  "label": "Top K",
                  "name": "topK",
                  "description": "Number of top results to fetch. Default to 4",
                  "placeholder": "4",
                  "type": "number",
                  "additionalParams": true,
                  "optional": true,
                  "id": "pineconeExistingIndex_0-input-topK-number"
                }
              ],
              "inputAnchors": [
                {
                  "label": "Embeddings",
                  "name": "embeddings",
                  "type": "Embeddings",
                  "id": "pineconeExistingIndex_0-input-embeddings-Embeddings"
                }
              ],
              "inputs": {
                "embeddings": "{{openAIEmbeddings_0.data.instance}}",
                "pineconeIndex": "faq-knowledge-base",
                "pineconeNamespace": "",
                "topK": "4",
                "credential": "credential"
              },
              "outputAnchors": [
                {
                  "id": "pineconeExistingIndex_0-output-retriever-Pinecone",
                  "name": "retriever",
                  "label": "Pinecone Retriever",
                  "description": "Load existing index from Pinecone (i.e: Document has been upserted)",
                  "type": "Pinecone"
                }
              ],
              "outputs": {},
              "selected": false
            },
            "selected": false,
            "positionAbsolute": {
              "x": 742.8616430513494,
              "y": 317.7276295755073
            },
            "dragging": false
          },
          {
            "width": 300,
            "height": 407,
            "id": "openAIEmbeddings_0",
            "position": {
              "x": 346.8853103447526,
              "y": 367.5086071350857
            },
            "type": "customNode",
            "data": {
              "id": "openAIEmbeddings_0",
              "label": "OpenAI Embeddings",
              "version": 4,
              "name": "openAIEmbeddings",
              "type": "OpenAIEmbeddings",
              "baseClasses": [
                "OpenAIEmbeddings",
                "Embeddings"
              ],
              "category": "Embeddings",
              "description": "OpenAI API to generate embeddings for a given text",
              "inputParams": [
                {
                  "label": "Connect Credential",
                  "name": "credential",
                  "type": "credential",
                  "credentialNames": [
                    "openAIApi"
                  ],
                  "id": "openAIEmbeddings_0-input-credential-credential"
                },
                {
                  "label": "Model Name",
                  "name": "modelName",
                  "type": "asyncOptions",
                  "loadMethod": "listModels",
                  "default": "text-embedding-ada-002",
                  "id": "openAIEmbeddings_0-input-modelName-asyncOptions"
                }
              ],
              "inputAnchors": [],
              "inputs": {
                "modelName": "text-embedding-ada-002",
                "credential": "credential"
              },
              "outputAnchors": [
                {
                  "id": "openAIEmbeddings_0-output-openAIEmbeddings-OpenAIEmbeddings",
                  "name": "openAIEmbeddings",
                  "label": "OpenAIEmbeddings",
                  "description": "OpenAI API to generate embeddings for a given text",
                  "type": "OpenAIEmbeddings"
                }
              ],
              "outputs": {},
              "selected": false
            },
            "selected": false,
            "positionAbsolute": {
              "x": 346.8853103447526,
              "y": 367.5086071350857
            },
            "dragging": false
          }
        ],
        "edges": [
          {
            "source": "chatOpenAI_0",
            "sourceHandle": "chatOpenAI_0-output-chatOpenAI-ChatOpenAI",
            "target": "conversationalRetrievalQAChain_0",
            "targetHandle": "conversationalRetrievalQAChain_0-input-model-BaseChatModel",
            "type": "buttonedge",
            "id": "chatOpenAI_0-chatOpenAI_0-output-chatOpenAI-ChatOpenAI-conversationalRetrievalQAChain_0-conversationalRetrievalQAChain_0-input-model-BaseChatModel"
          },
          {
            "source": "pineconeExistingIndex_0",
            "sourceHandle": "pineconeExistingIndex_0-output-retriever-Pinecone",
            "target": "conversationalRetrievalQAChain_0",
            "targetHandle": "conversationalRetrievalQAChain_0-input-vectorStoreRetriever-BaseRetriever",
            "type": "buttonedge",
            "id": "pineconeExistingIndex_0-pineconeExistingIndex_0-output-retriever-Pinecone-conversationalRetrievalQAChain_0-conversationalRetrievalQAChain_0-input-vectorStoreRetriever-BaseRetriever"
          },
          {
            "source": "openAIEmbeddings_0",
            "sourceHandle": "openAIEmbeddings_0-output-openAIEmbeddings-OpenAIEmbeddings",
            "target": "pineconeExistingIndex_0",
            "targetHandle": "pineconeExistingIndex_0-input-embeddings-Embeddings",
            "type": "buttonedge",
            "id": "openAIEmbeddings_0-openAIEmbeddings_0-output-openAIEmbeddings-OpenAIEmbeddings-pineconeExistingIndex_0-pineconeExistingIndex_0-input-embeddings-Embeddings"
          }
        ]
      }
    }
  }
];
