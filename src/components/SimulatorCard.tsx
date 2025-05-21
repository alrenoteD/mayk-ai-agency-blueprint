
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";

interface SimulatorCardProps {
  title: string;
  description: string;
  inputFields: {
    id: string;
    label: string;
    defaultValue: number;
    min: number;
    max: number;
    step: number;
    formatter?: (value: number) => string;
  }[];
  calculateResults: (inputs: Record<string, number>) => Record<string, any>;
}

const SimulatorCard: React.FC<SimulatorCardProps> = ({ 
  title, 
  description, 
  inputFields, 
  calculateResults 
}) => {
  const initialInputs = inputFields.reduce((acc, field) => {
    acc[field.id] = field.defaultValue;
    return acc;
  }, {} as Record<string, number>);
  
  const [inputs, setInputs] = useState<Record<string, number>>(initialInputs);
  const results = calculateResults(inputs);

  const handleInputChange = (id: string, value: number) => {
    setInputs(prev => ({ ...prev, [id]: value }));
  };

  return (
    <Card className="card-gradient">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {inputFields.map((field) => (
            <div key={field.id} className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor={field.id}>{field.label}</Label>
                <span className="text-sm text-muted-foreground">
                  {field.formatter ? field.formatter(inputs[field.id]) : inputs[field.id]}
                </span>
              </div>
              <Slider
                id={field.id}
                min={field.min}
                max={field.max}
                step={field.step}
                value={[inputs[field.id]]}
                onValueChange={(value) => handleInputChange(field.id, value[0])}
              />
            </div>
          ))}

          <div className="mt-8 p-4 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
            <h4 className="font-medium mb-3">Resultados:</h4>
            <div className="space-y-2">
              {Object.entries(results).map(([key, value]) => (
                <div key={key} className="flex justify-between text-sm">
                  <span>{key}:</span>
                  <span className="font-medium">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SimulatorCard;
