
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from './FeatureCard';
import { AtomIcon, BrainCircuitIcon, NetworkIcon, BarChart2, Sigma } from 'lucide-react';
import { toast } from 'sonner';

const Features = () => {
  const navigate = useNavigate();

  const handleFeatureClick = (feature: string) => {
    switch(feature) {
      case "analysis":
        navigate("/quantum-analysis");
        break;
      case "model":
        navigate("/cognitive-model");
        break;
      case "patterns":
        navigate("/interference-patterns");
        break;
      case "data":
        navigate("/data-analysis");
        break;
      case "math":
        navigate("/mathematical-framework");
        break;
      default:
        // For features not yet implemented, show a toast
        toast.info("Coming Soon!", {
          description: `The ${feature} feature will be available in the next update.`
        });
    }
  };

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
            onButtonClick={() => handleFeatureClick("analysis")}
          />
          <FeatureCard 
            title="Cognitive State Modeling" 
            description="Create models that represent cognitive states as quantum superpositions to better represent human uncertainty."
            icon={<BrainCircuitIcon className="h-6 w-6 text-quantum-purple" />}
            buttonText="Build Model"
            onButtonClick={() => handleFeatureClick("model")}
          />
          <FeatureCard 
            title="Interference Pattern Toolbox" 
            description="Visualize and analyze how cognitive states interfere in quantum-like ways during decision processes."
            icon={<NetworkIcon className="h-6 w-6 text-quantum-blue" />}
            buttonText="View Patterns"
            onButtonClick={() => handleFeatureClick("patterns")}
          />
          <FeatureCard 
            title="Data Analysis Toolkit" 
            description="Advanced statistical tools specifically designed for analyzing quantum cognition experiments and datasets."
            icon={<BarChart2 className="h-6 w-6 text-quantum-pink" />}
            buttonText="Analyze Data"
            onButtonClick={() => handleFeatureClick("data")}
          />
          <FeatureCard 
            title="Mathematical Framework" 
            description="Access the mathematical tools and frameworks necessary for quantum cognitive modeling."
            icon={<Sigma className="h-6 w-6 text-quantum-cyan" />}
            buttonText="Explore Math"
            onButtonClick={() => handleFeatureClick("math")}
            implementedFeature={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
