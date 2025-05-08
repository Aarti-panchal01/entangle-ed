
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  className?: string;
}

const FeatureCard = ({ title, description, icon, buttonText, className }: FeatureCardProps) => {
  return (
    <div className={cn("flex flex-col justify-between bg-card/80 border border-border/50 rounded-lg p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg", className)}>
      <div>
        <div className="p-3 bg-muted inline-block rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      </div>
      <Button className="w-full bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity">
        {buttonText}
      </Button>
    </div>
  );
};

export default FeatureCard;
