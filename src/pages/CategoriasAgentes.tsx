
import React, { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AgentType, agentTypes } from "@/data/agentTypes";

const CategoriasAgentes: React.FC = () => {
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);
  const selectedAgent = selectedAgentId ? agentTypes.find(agent => agent.id === selectedAgentId) : null;

  return (
    <PageLayout 
      title="Categorias de Agentes de IA" 
      subtitle="Conheça os diversos tipos de agentes que você pode criar e suas aplicações"
    >
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1 space-y-4">
              <h3 className="text-2xl font-semibold mb-4">Tipos de Agentes</h3>
              
              {agentTypes.map((agent) => (
                <Card 
                  key={agent.id}
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedAgentId === agent.id ? 'ring-2 ring-mayk-purple' : ''
                  }`}
                  onClick={() => setSelectedAgentId(agent.id)}
                >
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{agent.type}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{agent.description}</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <Badge variant={agent.complexity === 'básico' ? 'outline' : 
                              agent.complexity === 'intermediário' ? 'secondary' :
                              'default'}>
                        {agent.complexity}
                      </Badge>
                      
                      {agent.setupTime && (
                        <Badge variant="outline" className="bg-background/50">
                          {agent.setupTime}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="md:col-span-2">
              {selectedAgent ? (
                <div className="space-y-6">
                  <div className="flex justify-between items-center">
                    <h2 className="text-3xl font-bold">{selectedAgent.type}</h2>
                    <div className="flex gap-2">
                      <Badge variant={selectedAgent.complexity === 'básico' ? 'outline' : 
                              selectedAgent.complexity === 'intermediário' ? 'secondary' :
                              'default'} className="text-sm">
                        {selectedAgent.complexity}
                      </Badge>
                      
                      {selectedAgent.maintenanceLevel && (
                        <Badge variant={
                          selectedAgent.maintenanceLevel === 'baixo' ? 'outline' : 
                          selectedAgent.maintenanceLevel === 'médio' ? 'secondary' : 
                          'default'
                        }>
                          Manutenção: {selectedAgent.maintenanceLevel}
                        </Badge>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-lg">{selectedAgent.description}</p>
                  
                  <Card>
                    <CardHeader>
                      <CardTitle>Casos de Uso</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc pl-5 space-y-2">
                        {selectedAgent.examples.map((example, index) => (
                          <li key={index}>{example}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                  
                  {selectedAgent.industries && (
                    <div className="bg-mayk-purple/10 p-4 rounded-lg">
                      <h3 className="font-medium mb-2">Indústrias Recomendadas</h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedAgent.industries.map((industry, index) => (
                          <Badge key={index} variant="outline" className="bg-background/50">
                            {industry}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <h3 className="text-xl font-medium mb-4">Componentes Principais</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedAgent.components.map((component, index) => (
                        <Badge key={index} className="bg-mayk-purple/20 text-mayk-purple hover:bg-mayk-purple/30">
                          {component}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <Tabs defaultValue="flowise" className="w-full">
                    <TabsList className="grid grid-cols-4">
                      <TabsTrigger value="flowise">Flowise</TabsTrigger>
                      <TabsTrigger value="n8n" disabled={!selectedAgent.n8nInstructions}>
                        N8N
                      </TabsTrigger>
                      <TabsTrigger value="make" disabled={!selectedAgent.makeInstructions}>
                        Make
                      </TabsTrigger>
                      <TabsTrigger value="zaia" disabled={!selectedAgent.zaiaInstructions}>
                        Zaia
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="flowise">
                      <Card>
                        <CardHeader>
                          <CardTitle>Como implementar no Flowise</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {selectedAgent.flowiseInstructions ? (
                            <div className="whitespace-pre-line">
                              {selectedAgent.flowiseInstructions}
                            </div>
                          ) : (
                            <p>Instruções de implementação não disponíveis para este agente.</p>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="n8n">
                      <Card>
                        <CardHeader>
                          <CardTitle>Como implementar no N8N</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {selectedAgent.n8nInstructions ? (
                            <div className="whitespace-pre-line">
                              {selectedAgent.n8nInstructions}
                            </div>
                          ) : (
                            <p>Instruções de implementação não disponíveis para N8N.</p>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="make">
                      <Card>
                        <CardHeader>
                          <CardTitle>Como implementar no Make</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {selectedAgent.makeInstructions ? (
                            <div className="whitespace-pre-line">
                              {selectedAgent.makeInstructions}
                            </div>
                          ) : (
                            <p>Instruções de implementação não disponíveis para Make.</p>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="zaia">
                      <Card>
                        <CardHeader>
                          <CardTitle>Como implementar no Zaia</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-2">
                          {selectedAgent.zaiaInstructions ? (
                            <div className="whitespace-pre-line">
                              {selectedAgent.zaiaInstructions}
                            </div>
                          ) : (
                            <p>Instruções de implementação não disponíveis para Zaia.</p>
                          )}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  </Tabs>
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center p-12 border-2 border-dashed border-border rounded-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-muted-foreground/50 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <h3 className="text-xl font-medium text-muted-foreground">Selecione um tipo de agente</h3>
                  <p className="text-center text-muted-foreground mt-2">
                    Escolha uma categoria à esquerda para ver detalhes e instruções de implementação
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default CategoriasAgentes;
