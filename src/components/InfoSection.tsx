
import React from 'react';
import InfoCard from './InfoCard';
import { AtomIcon, Brain, Lightbulb, Network, Share2 } from 'lucide-react';

const InfoSection = () => {
  return (
    <section className="py-12 md:py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
            Understanding Quantum Cognition
          </h2>
          <p className="text-muted-foreground">
            Explore how quantum theory principles help explain paradoxes in human cognition
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard 
            title="Quantum Superposition" 
            description="Cognitive states exist in superposition until measured, explaining why preferences can seem undetermined until a choice is made."
            icon={<AtomIcon className="h-6 w-6" />}
          />
          <InfoCard 
            title="Contextuality" 
            description="Human judgments depend on context in ways that violate classical probability, similar to quantum contextuality."
            icon={<Network className="h-6 w-6" />}
          />
          <InfoCard 
            title="Interference Effects" 
            description="Cognitive processes show interference patterns where considering multiple options together produces different results than separately."
            icon={<Share2 className="h-6 w-6" />}
          />
          <InfoCard 
            title="Order Effects" 
            description="The sequence of questions affects answers in ways that classical probability cannot explain, but quantum models can."
            icon={<Lightbulb className="h-6 w-6" />}
          />
          <InfoCard 
            title="Conjunction Fallacy" 
            description="Quantum probability provides a natural explanation for why people sometimes judge conjunctions more likely than their constituents."
            icon={<Brain className="h-6 w-6" />}
          />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
