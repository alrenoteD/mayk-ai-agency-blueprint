
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export interface ComparisonItem {
  name: string;
  description: string;
  advantages: string[];
  disadvantages: string[];
  pricing?: string;
  bestFor?: string;
  imageUrl?: string;
}

interface ComparisonProps {
  title: string;
  description: string;
  items: ComparisonItem[];
}

const Comparison: React.FC<ComparisonProps> = ({ title, description, items }) => {
  return (
    <div className="py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">{title}</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <Card key={index} className="card-gradient">
            <CardHeader>
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{item.description}</p>
              
              {item.imageUrl && (
                <div className="mb-4">
                  <img 
                    src={item.imageUrl} 
                    alt={item.name} 
                    className="rounded-lg w-full h-32 object-cover"
                  />
                </div>
              )}
              
              {item.bestFor && (
                <div className="mb-3 bg-blue-50 dark:bg-blue-950/30 p-2 rounded-md">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    <span className="font-medium">Ideal para: </span> 
                    {item.bestFor}
                  </p>
                </div>
              )}
              
              {item.pricing && (
                <div className="mb-3 bg-purple-50 dark:bg-purple-950/30 p-2 rounded-md">
                  <p className="text-sm text-purple-700 dark:text-purple-300">
                    <span className="font-medium">Preço: </span> 
                    {item.pricing}
                  </p>
                </div>
              )}
              
              <div className="mb-3">
                <h4 className="text-sm font-semibold text-green-600 dark:text-green-400 mb-2">Vantagens:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {item.advantages.map((adv, i) => (
                    <li key={i}>{adv}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-red-600 dark:text-red-400 mb-2">Desvantagens:</h4>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                  {item.disadvantages.map((disadv, i) => (
                    <li key={i}>{disadv}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Comparison;
