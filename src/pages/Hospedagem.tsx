
import React from 'react';
import PageLayout from '@/components/PageLayout';
import Tutorial, { TutorialStep } from '@/components/Tutorial';
import Comparison from '@/components/Comparison';

const vpsSetupSteps: TutorialStep[] = [
  {
    title: "Escolha um provedor de VPS",
    description: "Selecione um provedor confiável como DigitalOcean, Hetzner, ou Vultr",
    tips: [
      "Para começar, um servidor com 2GB de RAM é suficiente",
      "Priorize localização no Brasil ou América do Sul para menor latência",
      "Verifique se o provedor oferece backups automáticos"
    ]
  },
  {
    title: "Configure seu servidor",
    description: "Acesse o servidor via SSH e configure o ambiente básico",
    code: `# Atualize o sistema
sudo apt update && sudo apt upgrade -y

# Instale o Docker e Docker Compose
sudo apt install -y docker.io docker-compose

# Inicie e habilite o Docker
sudo systemctl start docker
sudo systemctl enable docker

# Crie um usuário para não usar o root
sudo adduser maykuser
sudo usermod -aG docker maykuser`,
    tips: [
      "Use chaves SSH em vez de senhas para mais segurança",
      "Configure um firewall básico com ufw",
      "Mantenha seu sistema atualizado regularmente"
    ]
  },
  {
    title: "Instale o Flowise usando Docker",
    description: "Configure o Flowise usando Docker Compose para facilitar a manutenção",
    code: `# Crie um diretório para o Flowise
mkdir -p ~/flowise
cd ~/flowise

# Crie um arquivo docker-compose.yml
nano docker-compose.yml

# Cole o seguinte conteúdo:
version: '3'
services:
  flowise:
    image: flowiseai/flowise:latest
    restart: always
    ports:
      - "3000:3000"
    volumes:
      - ~/.flowise:/root/.flowise
    environment:
      - PORT=3000
      - FLOWISE_USERNAME=seuusuario
      - FLOWISE_PASSWORD=suasenha123
      - DEBUG=true`,
    tips: [
      "Sempre defina um usuário e senha para o Flowise",
      "Use volumes para persistir os dados mesmo após reinicialização",
      "Mude a porta padrão 3000 se necessário para evitar conflitos"
    ]
  },
  {
    title: "Configure HTTPS com Nginx e Certbot",
    description: "Proteja seu Flowise com HTTPS usando Nginx como proxy reverso",
    code: `# Instale o Nginx e Certbot
sudo apt install -y nginx certbot python3-certbot-nginx

# Configure o Nginx
sudo nano /etc/nginx/sites-available/flowise

# Cole a configuração:
server {
    listen 80;
    server_name flowise.seudominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

# Ative o site e obtenha certificado SSL
sudo ln -s /etc/nginx/sites-available/flowise /etc/nginx/sites-enabled/
sudo certbot --nginx -d flowise.seudominio.com`,
    tips: [
      "Lembre-se de configurar os registros DNS apontando para o IP do seu servidor",
      "Renove os certificados SSL automaticamente com um cronjob",
      "Configure limites de taxa para evitar abusos"
    ]
  },
  {
    title: "Configure monitoramento e backups",
    description: "Implemente monitoramento básico e backups automáticos",
    code: `# Script simples de backup para o Flowise
#!/bin/bash
DATE=$(date +%Y-%m-%d)
BACKUP_DIR=/home/maykuser/backups

# Crie o diretório de backup se não existir
mkdir -p $BACKUP_DIR

# Pare temporariamente o Flowise
cd /home/maykuser/flowise
docker-compose stop

# Faça o backup
tar -czf $BACKUP_DIR/flowise-$DATE.tar.gz ~/.flowise

# Reinicie o Flowise
docker-compose start

# Mantenha apenas os últimos 7 backups
find $BACKUP_DIR -name "flowise-*.tar.gz" -type f -mtime +7 -delete`,
    tips: [
      "Configure este script para rodar automaticamente com cron",
      "Use ferramentas como Uptime Robot para monitoramento externo",
      "Considere fazer backups para armazenamento externo ou na nuvem"
    ]
  }
];

const vpsProviders = [
  {
    name: "DigitalOcean",
    description: "Hospedagem em nuvem simples e confiável, popular entre desenvolvedores",
    advantages: [
      "Interface amigável",
      "Preços transparentes",
      "Bom desempenho",
      "Snapshots e backups fáceis",
      "Excelente documentação"
    ],
    disadvantages: [
      "Mais caro que algumas alternativas",
      "Menos opções de datacenter na América do Sul",
      "Suporte pode demorar em planos básicos"
    ],
    pricing: "Droplets a partir de $5/mês (1GB RAM)",
    bestFor: "Startups e agências com necessidade de simplicidade"
  },
  {
    name: "Hetzner",
    description: "Provedor europeu com excelente custo-benefício",
    advantages: [
      "Preços muito competitivos",
      "Hardware de qualidade",
      "Boa rede e conectividade",
      "Console de gerenciamento completo",
      "Backups automáticos disponíveis"
    ],
    disadvantages: [
      "Menos datacenters globais",
      "Sem datacenter na América Latina",
      "Interface menos amigável para iniciantes"
    ],
    pricing: "Servidores a partir de €3.99/mês (2GB RAM)",
    bestFor: "Agências que buscam melhor custo-benefício"
  },
  {
    name: "Vultr",
    description: "Plataforma cloud global com opções de alta performance",
    advantages: [
      "Datacenter no Brasil",
      "Implementação rápida",
      "Várias opções de sistema operacional",
      "Planos flexíveis",
      "API robusta"
    ],
    disadvantages: [
      "Preços um pouco mais altos que Hetzner",
      "Menos recursos adicionais",
      "Interface de usuário básica"
    ],
    pricing: "Servidores a partir de $5/mês (1GB RAM)",
    bestFor: "Agências com clientes no Brasil que precisam de baixa latência"
  },
  {
    name: "Contabo",
    description: "Provedor alemão com preços muito competitivos e alta capacidade",
    advantages: [
      "Excelente preço por GB de RAM",
      "Grande quantidade de armazenamento",
      "Planos de longo prazo com desconto",
      "Snapshots disponíveis"
    ],
    disadvantages: [
      "Sem datacenter na América Latina",
      "Suporte mais lento",
      "Interface menos moderna",
      "Menos ferramentas automatizadas"
    ],
    pricing: "VPS a partir de €4.99/mês (4GB RAM)",
    bestFor: "Projetos que precisam de muita RAM por baixo custo"
  },
  {
    name: "AWS Lightsail",
    description: "Solução simplificada da AWS para VPS",
    advantages: [
      "Fácil integração com outros serviços AWS",
      "Interface amigável",
      "Preços previsíveis",
      "Bom para escalar posteriormente"
    ],
    disadvantages: [
      "Menos flexível que EC2",
      "Preços mais altos que provedores dedicados",
      "Cobranças extras por tráfego excedente"
    ],
    pricing: "Planos a partir de $3.50/mês (512MB RAM)",
    bestFor: "Agências que já usam ou planejam usar outros serviços AWS"
  }
];

const Hospedagem: React.FC = () => {
  return (
    <PageLayout 
      title="Hospedagem em VPS" 
      subtitle="Aprenda a hospedar suas ferramentas de IA em servidores VPS de forma profissional e segura"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-center mb-6">Configuração de Infraestrutura</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              A infraestrutura técnica é o backbone da sua agência de IA. Aprenda a configurar
              servidores VPS de forma eficiente para hospedar suas ferramentas e bots.
            </p>
          </div>
          
          <Comparison 
            title="Provedores de VPS" 
            description="Compare os principais provedores de servidores VPS para sua agência"
            items={vpsProviders}
          />
          
          <div className="py-12"></div>
          
          <Tutorial 
            title="Configurando seu primeiro servidor para Flowise" 
            description="Um guia passo a passo para configurar um servidor VPS com Docker, Flowise e segurança básica"
            steps={vpsSetupSteps}
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default Hospedagem;
