
import React from 'react';
import FeatureCard from './FeatureCard';
import { AtomIcon, BrainCircuitIcon, NetworkIcon, BarChart2, Sigma } from 'lucide-react';

const Features = () => {
  return (
    <section className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
            Quantum Modeling Tools
          </h2>
          <p className="text-muted-foreground">
            Powerful tools to explore quantum probability frameworks and cognitive models
          </p>
        </div>
        
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            title="Quantum Probability Analysis" 
            description="Leverage quantum probability frameworks to model decision-making processes beyond classical probability theory."
            icon={<AtomIcon className="h-6 w-6 text-quantum-cyan" />}
            buttonText="Explore Analysis"
          />
          <FeatureCard 
            title="Cognitive State Modeling" 
            description="Create models that represent cognitive states as quantum superpositions to better represent human uncertainty."
            icon={<BrainCircuitIcon className="h-6 w-6 text-quantum-purple" />}
            buttonText="Build Model"
          />
          <FeatureCard 
            title="Interference Pattern Toolbox" 
            description="Visualize and analyze how cognitive states interfere in quantum-like ways during decision processes."
            icon={<NetworkIcon className="h-6 w-6 text-quantum-blue" />}
            buttonText="View Patterns"
          />
          <FeatureCard 
            title="Data Analysis Toolkit" 
            description="Advanced statistical tools specifically designed for analyzing quantum cognition experiments and datasets."
            icon={<BarChart2 className="h-6 w-6 text-quantum-pink" />}
            buttonText="Analyze Data"
          />
          <FeatureCard 
            title="Mathematical Framework" 
            description="Access the mathematical tools and frameworks necessary for quantum cognitive modeling."
            icon={<Sigma className="h-6 w-6 text-quantum-cyan" />}
            buttonText="Explore Math"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
