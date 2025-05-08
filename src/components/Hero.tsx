
import React from 'react';
import { Button } from '@/components/ui/button';
import QuantumVisualization from './QuantumVisualization';

const Hero = () => {
  return (
    <section className="relative py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 md:grid-cols-2 md:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple via-quantum-blue to-quantum-cyan">
                  Quantum Cognition Builder
                </span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explore the fascinating intersection of quantum theory and cognitive science. 
                Build models that harness quantum probability for a deeper understanding of human decision-making.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity">
                Get Started
              </Button>
              <Button variant="outline" className="border-quantum-purple/50 text-quantum-cyan hover:bg-quantum-purple/20 hover:text-white transition-all">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <QuantumVisualization />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
