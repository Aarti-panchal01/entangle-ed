
import React from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  className?: string;
  onButtonClick?: () => void;
  implementedFeature?: boolean;
}

const FeatureCard = ({ 
  title, 
  description, 
  icon, 
  buttonText, 
  className, 
  onButtonClick,
  implementedFeature = false
}: FeatureCardProps) => {
  return (
    <div className={cn("flex flex-col justify-between bg-card/80 border border-border/50 rounded-lg p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg", className)}>
      <div>
        <div className="p-3 bg-muted inline-block rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
      </div>
      <Button 
        className={cn(
          "w-full transition-opacity", 
          implementedFeature 
            ? "bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90" 
            : "bg-gradient-to-r from-quantum-purple/80 to-quantum-blue/80 hover:opacity-90"
        )}
        onClick={onButtonClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default FeatureCard;
