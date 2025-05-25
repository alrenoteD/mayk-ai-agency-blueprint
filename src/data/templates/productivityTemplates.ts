
import { AutomationTemplate } from '@/types/automation';

export const productivityTemplates: AutomationTemplate[] = [
  {
    id: "appointment-scheduler-basic",
    name: "Agendador Básico",
    description: "Sistema simples de agendamento com Google Calendar",
    purpose: "Agendamento",
    creationTime: "3-4 horas",
    difficulty: "Baixa",
    monthlyCost: { usd: 8, brl: 40 },
    costBreakdown: [
      { item: "Google Calendar API", cost: { usd: 0, brl: 0 }, description: "Gratuito para uso básico" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Servidor básico" },
      { item: "SMS/Email", cost: { usd: 3, brl: 15 }, description: "Notificações" }
    ],
    suggestedPrice: { min: { usd: 80, brl: 400 }, max: { usd: 250, brl: 1250 } },
    tools: ["n8n", "Google Calendar", "Email"],
    category: "Produtividade",
    cloneUrl: "#scheduler-basic-template",
    features: ["Agendamento simples", "Confirmação por email", "Lembretes"],
    useCase: "Profissionais autônomos e pequenos consultórios",
    popular: false,
    trending: false,
    templateContent: {
      n8n: {
        "meta": {
          "instanceId": "scheduler-basic-v1"
        },
        "nodes": [
          {
            "parameters": {
              "httpMethod": "POST",
              "path": "schedule-appointment",
              "responseMode": "responseNode"
            },
            "id": "appointment-webhook",
            "name": "Agendamento Webhook",
            "type": "n8n-nodes-base.webhook",
            "typeVersion": 1,
            "position": [240, 300]
          },
          {
            "parameters": {
              "operation": "create",
              "calendarId": "primary",
              "start": "={{ $json.date }}T{{ $json.time }}:00",
              "end": "={{ \n  const startTime = new Date($json.date + 'T' + $json.time + ':00');\n  const endTime = new Date(startTime.getTime() + (60 * 60 * 1000)); // +1 hora\n  return endTime.toISOString();\n}}",
              "summary": "Consulta - {{ $json.client_name }}",
              "description": "Cliente: {{ $json.client_name }}\\nTelefone: {{ $json.phone }}\\nEmail: {{ $json.email }}\\nServiço: {{ $json.service }}\\nObservações: {{ $json.notes }}",
              "attendees": "{{ $json.email }}",
              "sendNotifications": true
            },
            "id": "create-calendar-event",
            "name": "Criar Evento Calendar",
            "type": "n8n-nodes-base.googleCalendar",
            "typeVersion": 1,
            "position": [460, 300]
          },
          {
            "parameters": {
              "fromEmail": "agendamentos@suaempresa.com",
              "toEmail": "={{ $json.email }}",
              "subject": "✅ Agendamento Confirmado - {{ $json.date }} às {{ $json.time }}",
              "text": "Olá {{ $json.client_name }},\n\nSeu agendamento foi confirmado com sucesso!\n\n📅 Data: {{ $json.date }}\n⏰ Horário: {{ $json.time }}\n🎯 Serviço: {{ $json.service }}\n\n📍 Local: [Seu endereço aqui]\n📞 Telefone: [Seu telefone]\n\n⚠️ IMPORTANTE:\n- Chegue 10 minutos antes\n- Traga documento com foto\n- Em caso de cancelamento, avise com 24h de antecedência\n\n🗓️ Adicione este evento ao seu calendário clicando no link abaixo:\n{{ $node['Criar Evento Calendar'].json.htmlLink }}\n\nQualquer dúvida, entre em contato!\n\nAtenciosamente,\nEquipe [Sua Empresa]"
            },
            "id": "send-confirmation-email",
            "name": "Email Confirmação",
            "type": "n8n-nodes-base.emailSend",
            "typeVersion": 2,
            "position": [680, 300]
          },
          {
            "parameters": {
              "operation": "create",
              "calendarId": "primary",
              "start": "={{ \n  const appointmentTime = new Date($json.date + 'T' + $json.time + ':00');\n  const reminderTime = new Date(appointmentTime.getTime() - (24 * 60 * 60 * 1000)); // -24 horas\n  return reminderTime.toISOString();\n}}",
              "end": "={{ \n  const appointmentTime = new Date($json.date + 'T' + $json.time + ':00');\n  const reminderTime = new Date(appointmentTime.getTime() - (24 * 60 * 60 * 1000)); // -24 horas\n  const endTime = new Date(reminderTime.getTime() + (15 * 60 * 1000)); // +15 min\n  return endTime.toISOString();\n}}",
              "summary": "🔔 Lembrete: Consulta amanhã - {{ $json.client_name }}",
              "description": "Lembrete: Você tem uma consulta marcada para amanhã\\n\\nCliente: {{ $json.client_name }}\\nHorário: {{ $json.time }}\\nServiço: {{ $json.service }}"
            },
            "id": "create-reminder",
            "name": "Criar Lembrete 24h",
            "type": "n8n-nodes-base.googleCalendar",
            "typeVersion": 1,
            "position": [900, 300]
          },
          {
            "parameters": {
              "respondWith": "json",
              "responseBody": "{\n  \"success\": true,\n  \"message\": \"Agendamento realizado com sucesso!\",\n  \"appointment\": {\n    \"client\": \"{{ $json.client_name }}\",\n    \"date\": \"{{ $json.date }}\",\n    \"time\": \"{{ $json.time }}\",\n    \"service\": \"{{ $json.service }}\",\n    \"calendar_link\": \"{{ $node['Criar Evento Calendar'].json.htmlLink }}\"\n  }\n}"
            },
            "id": "response-success",
            "name": "Resposta Sucesso",
            "type": "n8n-nodes-base.respondToWebhook",
            "typeVersion": 1,
            "position": [1120, 300]
          }
        ],
        "connections": {
          "Agendamento Webhook": {
            "main": [
              [
                {
                  "node": "Criar Evento Calendar",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Criar Evento Calendar": {
            "main": [
              [
                {
                  "node": "Email Confirmação",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Email Confirmação": {
            "main": [
              [
                {
                  "node": "Criar Lembrete 24h",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Criar Lembrete 24h": {
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
    id: "appointment-scheduler-ai",
    name: "Agendador IA Inteligente",
    description: "Sistema avançado com IA para otimização de horários e reagendamentos automáticos",
    purpose: "Agendamento",
    creationTime: "1-2 semanas",
    difficulty: "Alta",
    monthlyCost: { usd: 45, brl: 225 },
    costBreakdown: [
      { item: "OpenAI API", cost: { usd: 20, brl: 100 }, description: "Processamento inteligente" },
      { item: "WhatsApp/SMS", cost: { usd: 15, brl: 75 }, description: "Comunicação multi-canal" },
      { item: "Database", cost: { usd: 5, brl: 25 }, description: "Dados de clientes" },
      { item: "Hosting", cost: { usd: 5, brl: 25 }, description: "Infraestrutura" }
    ],
    suggestedPrice: { min: { usd: 400, brl: 2000 }, max: { usd: 1200, brl: 6000 } },
    tools: ["n8n", "Flowise", "Google Calendar", "OpenAI", "WhatsApp", "Twilio"],
    category: "Produtividade",
    cloneUrl: "#scheduler-ai-template",
    features: ["IA para otimização", "Reagendamento automático", "Multi-canal", "Analytics preditivos"],
    useCase: "Clínicas, salões e empresas com agenda complexa",
    popular: true,
    trending: true,
    templateContent: {
      n8n: {
        "meta": {
          "instanceId": "scheduler-ai-v1"
        },
        "nodes": [
          {
            "parameters": {
              "httpMethod": "POST",
              "path": "ai-scheduling",
              "responseMode": "responseNode"
            },
            "id": "ai-scheduler-webhook",
            "name": "AI Scheduler Webhook",
            "type": "n8n-nodes-base.webhook",
            "typeVersion": 1,
            "position": [240, 300]
          },
          {
            "parameters": {
              "operation": "list",
              "calendarId": "primary",
              "timeMin": "={{ new Date().toISOString() }}",
              "timeMax": "={{ new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString() }}"
            },
            "id": "get-calendar-availability",
            "name": "Verificar Disponibilidade",
            "type": "n8n-nodes-base.googleCalendar",
            "typeVersion": 1,
            "position": [460, 300]
          },
          {
            "parameters": {
              "url": "http://localhost:3001/api/v1/prediction/{{ $vars.SCHEDULER_AI_CHATFLOW_ID }}",
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
                    "value": "Analise a solicitação de agendamento e a agenda atual, então sugira os 3 melhores horários disponíveis. Solicitação: {{ $json.message }}. Agenda atual: {{ $node['Verificar Disponibilidade'].json }}. Data preferida: {{ $json.preferred_date }}, Horário preferido: {{ $json.preferred_time }}, Tipo de serviço: {{ $json.service_type }} (duração: {{ $json.service_duration || '60' }} minutos)"
                  },
                  {
                    "name": "overrideConfig",
                    "value": "{\"sessionId\": \"scheduler-{{ $json.phone }}\"}"
                  }
                ]
              }
            },
            "id": "ai-suggest-times",
            "name": "IA Sugerir Horários",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [680, 300]
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
                    "value": "interactive"
                  },
                  {
                    "name": "interactive",
                    "value": "{\n  \"type\": \"button\",\n  \"body\": {\n    \"text\": \"🤖 Olá {{ $json.client_name }}! Analisei sua solicitação de agendamento.\\n\\n{{ $node['IA Sugerir Horários'].json.text }}\\n\\nQual horário prefere?\"\n  },\n  \"action\": {\n    \"buttons\": [\n      {\n        \"type\": \"reply\",\n        \"reply\": {\n          \"id\": \"option_1\",\n          \"title\": \"Opção 1\"\n        }\n      },\n      {\n        \"type\": \"reply\",\n        \"reply\": {\n          \"id\": \"option_2\",\n          \"title\": \"Opção 2\"\n        }\n      },\n      {\n        \"type\": \"reply\",\n        \"reply\": {\n          \"id\": \"option_3\",\n          \"title\": \"Opção 3\"\n        }\n      }\n    ]\n  }\n}"
                  }
                ]
              }
            },
            "id": "send-whatsapp-options",
            "name": "Enviar Opções WhatsApp",
            "type": "n8n-nodes-base.httpRequest",
            "typeVersion": 4,
            "position": [900, 300]
          },
          {
            "parameters": {
              "operation": "executeQuery",
              "query": "INSERT INTO appointment_requests (client_name, phone, email, service_type, preferred_date, preferred_time, ai_suggestions, status, created_at) VALUES ('{{ $json.client_name }}', '{{ $json.phone }}', '{{ $json.email }}', '{{ $json.service_type }}', '{{ $json.preferred_date }}', '{{ $json.preferred_time }}', '{{ $node['IA Sugerir Horários'].json.text }}', 'pending_confirmation', NOW())"
            },
            "id": "save-appointment-request",
            "name": "Salvar Solicitação",
            "type": "n8n-nodes-base.postgres",
            "typeVersion": 2,
            "position": [1120, 300]
          },
          {
            "parameters": {
              "respondWith": "json",
              "responseBody": "{\n  \"success\": true,\n  \"message\": \"Solicitação de agendamento processada!\",\n  \"suggestions\": \"{{ $node['IA Sugerir Horários'].json.text }}\",\n  \"status\": \"pending_confirmation\"\n}"
            },
            "id": "response-ai-success",
            "name": "Resposta AI Success",
            "type": "n8n-nodes-base.respondToWebhook",
            "typeVersion": 1,
            "position": [1340, 300]
          }
        ],
        "connections": {
          "AI Scheduler Webhook": {
            "main": [
              [
                {
                  "node": "Verificar Disponibilidade",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Verificar Disponibilidade": {
            "main": [
              [
                {
                  "node": "IA Sugerir Horários",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "IA Sugerir Horários": {
            "main": [
              [
                {
                  "node": "Enviar Opções WhatsApp",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Enviar Opções WhatsApp": {
            "main": [
              [
                {
                  "node": "Salvar Solicitação",
                  "type": "main",
                  "index": 0
                }
              ]
            ]
          },
          "Salvar Solicitação": {
            "main": [
              [
                {
                  "node": "Resposta AI Success",
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
            "id": "chatOpenAI_scheduler",
            "position": {
              "x": 1028.0137025833138,
              "y": 270.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "chatOpenAI_scheduler",
              "label": "Scheduler AI",
              "version": 2,
              "name": "chatOpenAI",
              "type": "ChatOpenAI",
              "baseClasses": ["ChatOpenAI", "BaseChatModel", "BaseLanguageModel"],
              "category": "Chat Models",
              "inputs": {
                "modelName": "gpt-3.5-turbo",
                "temperature": 0.3,
                "cache": ""
              },
              "outputAnchors": [
                {
                  "id": "chatOpenAI_scheduler-output-chatOpenAI-ChatOpenAI|BaseChatModel|BaseLanguageModel",
                  "name": "chatOpenAI",
                  "label": "ChatOpenAI",
                  "type": "ChatOpenAI"
                }
              ]
            }
          },
          {
            "id": "promptTemplate_scheduler",
            "position": {
              "x": 578.0137025833138,
              "y": 270.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "promptTemplate_scheduler",
              "label": "Scheduler Prompt",
              "version": 1,
              "name": "promptTemplate",
              "type": "PromptTemplate",
              "baseClasses": ["PromptTemplate", "BaseStringPromptTemplate", "BasePromptTemplate"],
              "category": "Prompts",
              "inputs": {
                "template": "Você é um assistente inteligente de agendamentos. Sua tarefa é analisar a agenda atual e sugerir os 3 melhores horários para o cliente.\n\nCRITÉRIOS DE OTIMIZAÇÃO:\n1. Respeitar preferências do cliente quando possível\n2. Evitar horários muito próximos (mín. 15min entre consultas)\n3. Considerar horário comercial (8h-18h)\n4. Priorizar horários com menor fragmentação da agenda\n5. Considerar duração do serviço solicitado\n\nSOLICITAÇÃO DO CLIENTE:\n{question}\n\nResposta no formato:\n🗓️ **OPÇÕES DISPONÍVEIS:**\n\n**Opção 1:** [Data] às [Hora] - [Justificativa]\n**Opção 2:** [Data] às [Hora] - [Justificativa] \n**Opção 3:** [Data] às [Hora] - [Justificativa]\n\n💡 **Recomendação:** [Qual opção é melhor e por quê]\n\nSeja específico com datas e horários, e sempre explique por que cada opção é boa para o cliente.",
                "inputVariables": ["question"]
              },
              "outputAnchors": [
                {
                  "id": "promptTemplate_scheduler-output-promptTemplate-PromptTemplate|BaseStringPromptTemplate|BasePromptTemplate",
                  "name": "promptTemplate",
                  "label": "PromptTemplate",
                  "type": "PromptTemplate"
                }
              ]
            }
          },
          {
            "id": "llmChain_scheduler",
            "position": {
              "x": 1383.593958333333,
              "y": 270.6834948096192
            },
            "type": "customNode",
            "data": {
              "id": "llmChain_scheduler",
              "label": "Scheduler Chain",
              "version": 3,
              "name": "llmChain",
              "type": "LLMChain",
              "baseClasses": ["LLMChain", "BaseChain"],
              "category": "Chains",
              "inputs": {
                "model": "{{chatOpenAI_scheduler.data.instance}}",
                "prompt": "{{promptTemplate_scheduler.data.instance}}"
              },
              "outputAnchors": [
                {
                  "id": "llmChain_scheduler-output-llmChain-LLMChain|BaseChain",
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
            "source": "promptTemplate_scheduler",
            "sourceHandle": "promptTemplate_scheduler-output-promptTemplate-PromptTemplate|BaseStringPromptTemplate|BasePromptTemplate",
            "target": "llmChain_scheduler",
            "targetHandle": "llmChain_scheduler-input-prompt-BasePromptTemplate",
            "type": "buttonedge",
            "id": "promptTemplate_scheduler-llmChain_scheduler"
          },
          {
            "source": "chatOpenAI_scheduler",
            "sourceHandle": "chatOpenAI_scheduler-output-chatOpenAI-ChatOpenAI|BaseChatModel|BaseLanguageModel",
            "target": "llmChain_scheduler",
            "targetHandle": "llmChain_scheduler-input-model-BaseLanguageModel",
            "type": "buttonedge",
            "id": "chatOpenAI_scheduler-llmChain_scheduler"
          }
        ]
      }
    }
  }
];
