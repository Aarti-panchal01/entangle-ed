
import React from 'react';
import { cn } from '@/lib/utils';

interface InfoCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
}

const InfoCard = ({ title, description, icon, className }: InfoCardProps) => {
  return (
    <div className={cn("quantum-card group hover:shadow-lg transition-all duration-300", className)}>
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br from-quantum-purple/30 to-quantum-blue/10 rounded-full blur-xl group-hover:opacity-100 opacity-50 transition-opacity"></div>
      
      {icon && (
        <div className="mb-4 text-quantum-cyan">{icon}</div>
      )}
      
      <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-cyan">
        {title}
      </h3>
      
      <p className="text-muted-foreground">{description}</p>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-quantum-purple to-quantum-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
    </div>
  );
};

export default InfoCard;
