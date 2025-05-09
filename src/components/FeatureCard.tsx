
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
    <div 
      className={cn(
        "relative flex flex-col justify-between h-full bg-card/80 border border-border/50 rounded-lg p-6 backdrop-blur-sm transition-all",
        "before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-br before:from-quantum-purple/5 before:to-quantum-blue/5 before:opacity-100 before:z-[-1]",
        "hover:border-border/80 hover:shadow-lg",
        className
      )}
    >
      <div>
        <div className={cn(
          "p-3 mb-4 rounded-lg inline-block relative overflow-hidden",
          "before:absolute before:inset-0 before:bg-quantum-purple/10 before:rounded-lg",
          "after:absolute after:inset-0 after:bg-gradient-to-br after:from-quantum-purple/20 after:to-quantum-blue/20 after:rounded-lg",
        )}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-6">{description}</p>
      </div>
      <Button 
        className={cn(
          "w-full transition-all", 
          implementedFeature 
            ? "bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 shadow-md shadow-quantum-purple/20" 
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
