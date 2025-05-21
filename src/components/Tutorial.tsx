
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export interface TutorialStep {
  title: string;
  description: string;
  imageUrl?: string;
  code?: string;
  tips?: string[];
}

interface TutorialProps {
  title: string;
  description: string;
  steps: TutorialStep[];
}

const Tutorial: React.FC<TutorialProps> = ({ title, description, steps }) => {
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>
      
      <div className="space-y-8 max-w-4xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="flex flex-col md:flex-row gap-6 items-start">
            <div className="flex-shrink-0 bg-mayk-purple/20 w-12 h-12 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold text-mayk-purple">{index + 1}</span>
            </div>
            
            <Card className="flex-grow card-gradient">
              <CardHeader>
                <CardTitle>{step.title}</CardTitle>
                <CardDescription>{step.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {step.imageUrl && (
                  <div className="mb-4">
                    <img 
                      src={step.imageUrl} 
                      alt={step.title} 
                      className="rounded-lg shadow-md w-full"
                    />
                  </div>
                )}
                
                {step.code && (
                  <div className="mb-4 bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto">
                    <pre><code>{step.code}</code></pre>
                  </div>
                )}
                
                {step.tips && step.tips.length > 0 && (
                  <div className="mt-4 bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 p-4 rounded-md">
                    <p className="font-medium text-amber-800 dark:text-amber-300 mb-2">Dicas:</p>
                    <ul className="list-disc pl-5 space-y-1">
                      {step.tips.map((tip, i) => (
                        <li key={i} className="text-sm text-amber-700 dark:text-amber-400">{tip}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorial;
