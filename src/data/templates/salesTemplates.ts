
import { AutomationTemplate } from '@/types/automation';

export const salesTemplates: AutomationTemplate[] = [
  {
    id: "lead-qualifier-basic",
    name: "Qualificador de Leads Básico",
    description: "Sistema simples para captura e qualificação inicial de leads",
    purpose: "Vendas",
    creationTime: "2-3 horas",
    difficulty: "Baixa",
    monthlyCost: { usd: 12, brl: 60 },
    costBreakdown: [
      { item: "Webhooks/Forms", cost: { usd: 0, brl: 0 }, description: "Captura de dados" },
      { item: "Email Marketing", cost: { usd: 7, brl: 35 }, description: "Envio automatizado" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Processamento" }
    ],
    suggestedPrice: { min: { usd: 60, brl: 300 }, max: { usd: 200, brl: 1000 } },
    tools: ["n8n", "Email", "Webhook"],
    category: "Vendas",
    cloneUrl: "#lead-qualifier-basic",
    features: ["Formulários automáticos", "Pontuação simples", "Email follow-up"],
    useCase: "Pequenas empresas e freelancers",
    popular: false,
    trending: false,
    templateContent: {
      n8n: {
        "meta": {
          "instanceId": "lead-qualifier-basic-v1"
        },
        "nodes": [
          {
            "parameters": {
              "httpMethod": "POST",
              "path": "lead-capture",
              "responseMode": "responseNode"
            },
            "id": "lead-webhook",
            "name": "Captura de Lead",
            "type": "n8n-nodes-base.webhook",
            "typeVersion": 1,
            "position": [240, 300]
          },
          {
            "parameters": {
              "values": {
                "number": [
                  {
                    "name": "score",
                    "value": "={{ \n  let score = 0;\n  \n  // Pontuação por empresa\n  if ($json.company && $json.company.length > 0) score += 20;\n  \n  // Pontuação por cargo\n  const managementTitles = ['gerente', 'diretor', 'ceo', 'cto', 'manager', 'supervisor'];\n  if ($json.job_title && managementTitles.some(title => $json.job_title.toLowerCase().includes(title))) {\n    score += 30;\n  } else if ($json.job_title && $json.job_title.length > 0) {\n    score += 15;\n  }\n  \n  // Pontuação por budget\n  if ($json.budget) {\n    const budget = parseInt($json.budget);\n    if (budget >= 10000) score += 40;\n    else if (budget >= 5000) score += 25;\n    else if (budget >= 1000) score += 15;\n  }\n  \n  // Pontuação por urgência\n  if ($json.urgency === 'high') score += 25;\n  else if ($json.urgency === 'medium') score += 15;\n  \n  // Pontuação por fonte\n  if ($json.source === 'website') score += 10;\n  else if ($json.source === 'referral') score += 20;\n  \n  return score;\n}}"
                  }
                ],
                "string": [
                  {
                    "name": "classification",
                    "value": "={{ $json.score >= 70 ? 'hot' : $json.score >= 40 ? 'warm' : 'cold' }}"
                  }
                ]
              },
              "options": {}
            },
            "id": "calculate-score",
            "name": "Calcular Score",
            "type": "n8n-nodes-base.set",
            "typeVersion": 2,
            "position": [460, 300]
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
                    "leftValue": "={{ $json.classification }}",
                    "rightValue": "hot",
                    "operator": {
                      "type": "string",
                      "operation": "equals"
                    }
                  }
                ],
                "combinator": "and"
              }
            },
            "id": "is-hot-lead",
            "name": "É Lead Quente?",
            "type": "n8n-nodes-base.if",
            "typeVersion": 1,
            "position": [680, 300]
          },
          {
            "parameters": {
              "fromEmail": "vendas@suaempresa.com",
              "toEmail": "={{ $json.email }}",
              "subject": "🔥 Obrigado pelo seu interesse! Vamos conversar?",
              "text": "Olá {{ $json.name }},\n\nObrigado pelo seu interesse em nossos serviços!\n\nPelo que analisamos do seu perfil, você parece ser um cliente ideal para nossas soluções. Gostaria de agendar uma conversa rápida de 15 minutos para entender melhor suas necessidades?\n\nAgende aqui: https://calendly.com/sua-empresa/15min\n\nAtenciosamente,\nEquipe de Vendas"
            },
            "id": "email-hot-lead",
            "name": "Email Lead Quente",
            "type": "n8n-nodes-base.emailSend",
            "typeVersion": 2,
            "position": [900, 200]
          },
          {
            "parameters": {
              "fromEmail": "marketing@suaempresa.com",
              "toEmail": "={{ $json.email }}",
              "subject": "Obrigado pelo interesse! Conheça nossos materiais",
              "text": "Olá {{ $json.name }},\n\nObrigado por se interessar pelos nossos serviços!\n\nPreparei alguns materiais que podem te ajudar:\n\n📋 [E-book Gratuito] Como Otimizar Seus Processos\n🎥 [Webinar] Tendências do Setor 2024\n📊 [Planilha] Calculadora de ROI\n\nEm breve nossa equipe entrará em contato.\n\nAtenciosamente,\nEquipe Marketing"
            },
            "id": "email-nurture",
            "name": "Email Nutrição",
            "type": "n8n-nodes-base.emailSend",
            "typeVersion": 2,
            "position": [900, 400]
          },
          {
            "parameters": {
              "url": "https://hooks.slack.com/services/YOUR/SLACK/WEBHOOK",
              "sendBody": true,
              "bodyParameters": {
                "parameters": [
                  {
                    "name": "text",
                    "value": "🔥 LEAD QUENTE CAPTURADO!\n\n👤 Nome: {{ $json.name }}\n🏢 Empresa: {{ $json.company }}\n📧 Email: {{ $json.email }}\n📊 Score: {{ $json.score }}\n🎯 Classificação: {{ $json.classification }}\n\n💰 Budget: {{ $json.budget }}\n⚡ Urgência: {{ $json.urgency }}\n\nAção: Email automático enviado!"
                  }
                ]
              }
            },
            "id": "notify-slack",
            "name": "Notificar Slack",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [1120, 200]
          },
          {
            "parameters": {
              "respondWith": "json",
              "responseBody": "{\n  \"success\": true,\n  \"message\": \"Lead capturado com sucesso!\",\n  \"score\": {{ $json.score }},\n  \"classification\": \"{{ $json.classification }}\"\n}"
            },
            "id": "response-success",
            "name": "Resposta Sucesso",
            "type": "n8n-nodes-base.respondToWebhook",
            "typeVersion": 1,
            "position": [1340, 300]
          }
        ],
        "connections": {
          "Captura de Lead": {
            "main": [
              [
                {
                  "node": "Calcular Score",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Calcular Score": {
            "main": [
              [
                {
                  "node": "É Lead Quente?",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "É Lead Quente?": {
            "main": [
              [
                {
                  "node": "Email Lead Quente",
                  "type": "main",
                  "index": 0
                }
              ],
              [
                {
                  "node": "Email Nutrição",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Email Lead Quente": {
            "main": [
              [
                {
                  "node": "Notificar Slack",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Email Nutrição": {
            "main": [
              [
                {
                  "node": "Resposta Sucesso",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Notificar Slack": {
            "main": [
              [
                {
                  "node": "Resposta Sucesso",
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
    id: "lead-qualifier-ai",
    name: "Qualificador de Leads IA Avançado",
    description: "Sistema inteligente com scoring automático e conversação natural",
    purpose: "Vendas",
    creationTime: "1-2 semanas",
    difficulty: "Alta",
    monthlyCost: { usd: 65, brl: 325 },
    costBreakdown: [
      { item: "OpenAI API", cost: { usd: 25, brl: 125 }, description: "Análise inteligente de leads" },
      { item: "WhatsApp/Chat", cost: { usd: 20, brl: 100 }, description: "Conversação automática" },
      { item: "CRM Integration", cost: { usd: 10, brl: 50 }, description: "HubSpot/Pipedrive" },
      { item: "Database", cost: { usd: 5, brl: 25 }, description: "Armazenamento" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Infraestrutura" }
    ],
    suggestedPrice: { min: { usd: 600, brl: 3000 }, max: { usd: 2000, brl: 10000 } },
    tools: ["n8n", "Flowise", "OpenAI", "HubSpot", "WhatsApp", "Make"],
    category: "Vendas",
    cloneUrl: "#lead-qualifier-ai",
    features: ["Scoring inteligente", "Conversação natural", "Integração CRM", "Analytics avançados"],
    useCase: "Agências e empresas B2B com processo de vendas complexo",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "meta": {
          "instanceId": "lead-qualifier-ai-v1"
        },
        "nodes": [
          {
            "parameters": {
              "httpMethod": "POST",
              "path": "ai-lead-capture",
              "responseMode": "responseNode"
            },
            "id": "ai-lead-webhook",
            "name": "AI Lead Webhook",
            "type": "n8n-nodes-base.webhook",
            "typeVersion": 1,
            "position": [240, 300]
          },
          {
            "parameters": {
              "url": "http://localhost:3001/api/v1/prediction/{{ $vars.LEAD_QUALIFIER_CHATFLOW_ID }}",
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
                    "value": "Analise este lead e forneça um score de 0-100 e classificação (hot/warm/cold). Dados: Nome: {{ $json.name }}, Empresa: {{ $json.company }}, Cargo: {{ $json.job_title }}, Email: {{ $json.email }}, Telefone: {{ $json.phone }}, Budget: {{ $json.budget }}, Urgência: {{ $json.urgency }}, Fonte: {{ $json.source }}, Mensagem: {{ $json.message }}"
                  },
                  {
                    "name": "overrideConfig",
                    "value": "{\"sessionId\": \"lead-{{ $json.email }}\"}"
                  }
                ]
              }
            },
            "id": "ai-analysis",
            "name": "Análise IA",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [460, 300]
          },
          {
            "parameters": {
              "jsCode": "const aiResponse = $input.all()[0].json.text;\n\n// Extrair score usando regex\nconst scoreMatch = aiResponse.match(/score[:\\s]*([0-9]+)/i);\nconst score = scoreMatch ? parseInt(scoreMatch[1]) : 0;\n\n// Extrair classificação\nlet classification = 'cold';\nif (aiResponse.toLowerCase().includes('hot')) classification = 'hot';\nelse if (aiResponse.toLowerCase().includes('warm')) classification = 'warm';\n\n// Extrair insights\nconst insights = aiResponse.replace(/score[:\\s]*[0-9]+/gi, '').replace(/classification[:\\s]*\\w+/gi, '').trim();\n\nreturn {\n  ...items[0].json,\n  ai_score: score,\n  ai_classification: classification,\n  ai_insights: insights,\n  ai_response: aiResponse\n};"
            },
            "id": "parse-ai-response",
            "name": "Processar Resposta IA",
            "type": "n8n-nodes-base.code",
            "typeVersion": 2,
            "position": [680, 300]
          },
          {
            "parameters": {
              "url": "https://api.hubapi.com/crm/v3/objects/contacts",
              "authentication": "genericCredentialType",
              "genericAuthType": "httpHeaderAuth",
              "sendHeaders": true,
              "headerParameters": {
                "parameters": [
                  {
                    "name": "Authorization",
                    "value": "Bearer {{ $vars.HUBSPOT_ACCESS_TOKEN }}"
                  }
                ]
              },
              "sendBody": true,
              "bodyParameters": {
                "parameters": [
                  {
                    "name": "properties",
                    "value": "{\n  \"email\": \"{{ $json.email }}\",\n  \"firstname\": \"{{ $json.name.split(' ')[0] }}\",\n  \"lastname\": \"{{ $json.name.split(' ').slice(1).join(' ') }}\",\n  \"company\": \"{{ $json.company }}\",\n  \"jobtitle\": \"{{ $json.job_title }}\",\n  \"phone\": \"{{ $json.phone }}\",\n  \"hs_lead_status\": \"{{ $json.ai_classification.toUpperCase() }}\",\n  \"hs_analytics_source\": \"{{ $json.source }}\",\n  \"ai_score\": \"{{ $json.ai_score }}\",\n  \"ai_insights\": \"{{ $json.ai_insights }}\"\n}"
                  }
                ]
              }
            },
            "id": "create-hubspot-contact",
            "name": "Criar Contato HubSpot",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [900, 300]
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
                    "leftValue": "={{ $json.ai_score }}",
                    "rightValue": 70,
                    "operator": {
                      "type": "number",
                      "operation": "gte"
                    }
                  }
                ],
                "combinator": "and"
              }
            },
            "id": "is-high-score",
            "name": "Score Alto?",
            "type": "n8n-nodes-base.if",
            "typeVersion": 1,
            "position": [1120, 300]
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
                    "value": "{{ $json.phone.replace(/[^0-9]/g, '') }}"
                  },
                  {
                    "name": "type",
                    "value": "text"
                  },
                  {
                    "name": "text",
                    "value": "{\"body\": \"🔥 Olá {{ $json.name }}!\\n\\nObrigado pelo seu interesse! Pela análise do seu perfil, você se encaixa perfeitamente no que oferecemos.\\n\\n🎯 Nossa IA identificou que você tem alto potencial para nossos serviços.\\n\\n📞 Que tal agendar uma conversa de 15 minutos ainda hoje?\\n\\nClique aqui: https://calendly.com/sua-empresa/conversa-urgente\\n\\nAtenciosamente,\\nEquipe de Vendas\"}"
                  }
                ]
              }
            },
            "id": "whatsapp-hot-lead",
            "name": "WhatsApp Lead Quente",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [1340, 200]
          },
          {
            "parameters": {
              "fromEmail": "vendas@suaempresa.com",
              "toEmail": "={{ $json.email }}",
              "subject": "Obrigado pelo interesse! Seus próximos passos",
              "text": "Olá {{ $json.name }},\n\nObrigado pelo seu interesse!\n\n🤖 Nossa IA analisou seu perfil e identificou:\n{{ $json.ai_insights }}\n\n📊 Score de compatibilidade: {{ $json.ai_score }}/100\n\nVamos continuar nossa conversa? Em breve um especialista entrará em contato.\n\nEnquanto isso, confira nossos casos de sucesso: https://suaempresa.com/casos\n\nAtenciosamente,\nEquipe de Vendas"
            },
            "id": "email-follow-up",
            "name": "Email Follow-up",
            "type": "n8n-nodes-base.emailSend",
            "typeVersion": 2,
            "position": [1340, 400]
          },
          {
            "parameters": {
              "respondWith": "json",
              "responseBody": "{\n  \"success\": true,\n  \"message\": \"Lead processado com IA!\",\n  \"ai_score\": {{ $json.ai_score }},\n  \"classification\": \"{{ $json.ai_classification }}\",\n  \"insights\": \"{{ $json.ai_insights }}\"\n}"
            },
            "id": "ai-response-final",
            "name": "Resposta Final",
            "type": "n8n-nodes-base.respondToWebhook",
            "typeVersion": 1,
            "position": [1560, 300]
          }
        ],
        "connections": {
          "AI Lead Webhook": {
            "main": [
              [
                {
                  "node": "Análise IA",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Análise IA": {
            "main": [
              [
                {
                  "node": "Processar Resposta IA",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Processar Resposta IA": {
            "main": [
              [
                {
                  "node": "Criar Contato HubSpot",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Criar Contato HubSpot": {
            "main": [
              [
                {
                  "node": "Score Alto?",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Score Alto?": {
            "main": [
              [
                {
                  "node": "WhatsApp Lead Quente",
                  "type": "main",
                  "index": 0
                }
              ],
              [
                {
                  "node": "Email Follow-up",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "WhatsApp Lead Quente": {
            "main": [
              [
                {
                  "node": "Resposta Final",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Email Follow-up": {
            "main": [
              [
                {
                  "node": "Resposta Final",
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
            "id": "chatOpenAI_lead",
            "position": {
              "x": 1028.0137025833138,
              "y": 270.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "chatOpenAI_lead",
              "label": "Lead Qualifier AI",
              "version": 2,
              "name": "chatOpenAI",
              "type": "ChatOpenAI",
              "baseClasses": ["ChatOpenAI", "BaseChatModel", "BaseLanguageModel"],
              "category": "Chat Models",
              "inputs": {
                "modelName": "gpt-4",
                "temperature": 0.3,
                "cache": ""
              },
              "outputAnchors": [
                {
                  "id": "chatOpenAI_lead-output-chatOpenAI-ChatOpenAI|BaseChatModel|BaseLanguageModel",
                  "name": "chatOpenAI",
                  "label": "ChatOpenAI",
                  "type": "ChatOpenAI"
                }
              ]
            }
          },
          {
            "id": "promptTemplate_lead",
            "position": {
              "x": 578.0137025833138,
              "y": 270.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "promptTemplate_lead",
              "label": "Lead Analysis Prompt",
              "version": 1,
              "name": "promptTemplate",
              "type": "PromptTemplate",
              "baseClasses": ["PromptTemplate", "BaseStringPromptTemplate", "BasePromptTemplate"],
              "category": "Prompts",
              "inputs": {
                "template": "Você é um especialista em qualificação de leads B2B. Analise os dados fornecidos e determine:\n\n1. SCORE (0-100): Baseado nos critérios:\n   - Empresa conhecida/tamanho (+20 pontos)\n   - Cargo de decisão (+30 pontos)\n   - Budget adequado (+25 pontos)\n   - Urgência alta (+15 pontos)\n   - Fonte qualificada (+10 pontos)\n\n2. CLASSIFICAÇÃO:\n   - HOT (70-100): Lead muito qualificado, deve ser contatado imediatamente\n   - WARM (40-69): Lead com potencial, precisa de nutrição\n   - COLD (0-39): Lead pouco qualificado, nutrição de longo prazo\n\n3. INSIGHTS: Principais pontos fortes e fracos do lead\n\nDADOS DO LEAD:\n{question}\n\nResposta no formato:\nSCORE: [número]\nCLASSIFICAÇÃO: [hot/warm/cold]\nINSIGHTS: [análise detalhada do lead, pontos fortes, fracos, recomendações de abordagem]",
                "inputVariables": ["question"]
              },
              "outputAnchors": [
                {
                  "id": "promptTemplate_lead-output-promptTemplate-PromptTemplate|BaseStringPromptTemplate|BasePromptTemplate",
                  "name": "promptTemplate",
                  "label": "PromptTemplate",
                  "type": "PromptTemplate"
                }
              ]
            }
          },
          {
            "id": "llmChain_lead",
            "position": {
              "x": 1383.593958333333,
              "y": 270.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "llmChain_lead",
              "label": "Lead Qualification Chain",
              "version": 3,
              "name": "llmChain",
              "type": "LLMChain",
              "baseClasses": ["LLMChain", "BaseChain"],
              "category": "Chains",
              "inputs": {
                "model": "{{chatOpenAI_lead.data.instance}}",
                "prompt": "{{promptTemplate_lead.data.instance}}"
              },
              "outputAnchors": [
                {
                  "id": "llmChain_lead-output-llmChain-LLMChain|BaseChain",
                  "name": "llmChain",
                  "label": "LLMChain",
                  "type": "LLMChain"
                }
              ]
            }
          }
        ],
        "edges": [
          {
            "source": "promptTemplate_lead",
            "sourceHandle": "promptTemplate_lead-output-promptTemplate-PromptTemplate|BaseStringPromptTemplate|BasePromptTemplate",
            "target": "llmChain_lead",
            "targetHandle": "llmChain_lead-input-prompt-BasePromptTemplate",
            "type": "buttonedge",
            "id": "promptTemplate_lead-llmChain_lead"
          },
          {
            "source": "chatOpenAI_lead",
            "sourceHandle": "chatOpenAI_lead-output-chatOpenAI-ChatOpenAI|BaseChatModel|BaseLanguageModel",
            "target": "llmChain_lead",
            "targetHandle": "llmChain_lead-input-model-BaseLanguageModel",
            "type": "buttonedge",
            "id": "chatOpenAI_lead-llmChain_lead"
          }
        ]
      }
    }
  }
];
