
import React from 'react';
import { useNavigate } from 'react-router-dom';
import FeatureCard from './FeatureCard';
import { 
  AtomIcon, 
  BrainCircuitIcon, 
  NetworkIcon, 
  BarChart2, 
  Sigma,
  Sparkles
} from 'lucide-react';
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
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle animate-particle opacity-20" style={{ top: '10%', left: '5%', width: '6px', height: '6px', animationDelay: '0s' }}></div>
        <div className="particle animate-particle opacity-20" style={{ top: '30%', left: '15%', width: '8px', height: '8px', animationDelay: '2s' }}></div>
        <div className="particle animate-particle opacity-20" style={{ top: '70%', left: '20%', width: '5px', height: '5px', animationDelay: '4s' }}></div>
        <div className="particle animate-particle opacity-20" style={{ top: '40%', right: '10%', width: '7px', height: '7px', animationDelay: '1s' }}></div>
        <div className="particle animate-particle opacity-20" style={{ top: '80%', right: '20%', width: '9px', height: '9px', animationDelay: '3s' }}></div>
      </div>
      
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center mb-4">
            <Sparkles className="h-6 w-6 mr-2 text-quantum-cyan" />
            <span className="text-sm font-medium text-quantum-cyan">Explore Our Tools</span>
          </div>
          
          <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
            Quantum Modeling Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Powerful tools to explore quantum probability frameworks and cognitive models,
            designed for researchers and students in the field of quantum cognition.
          </p>
        </div>
        
        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <FeatureCard 
            title="Quantum Probability Analysis" 
            description="Leverage quantum probability frameworks to model decision-making processes beyond classical probability theory."
            icon={<AtomIcon className="h-6 w-6 text-quantum-cyan" />}
            buttonText="Explore Analysis"
            onButtonClick={() => handleFeatureClick("analysis")}
            className="transform transition-all duration-300 hover:-translate-y-2"
          />
          <FeatureCard 
            title="Cognitive State Modeling" 
            description="Create models that represent cognitive states as quantum superpositions to better represent human uncertainty."
            icon={<BrainCircuitIcon className="h-6 w-6 text-quantum-purple" />}
            buttonText="Build Model"
            onButtonClick={() => handleFeatureClick("model")}
            className="transform transition-all duration-300 hover:-translate-y-2 sm:mt-8 lg:mt-0"
          />
          <FeatureCard 
            title="Interference Pattern Toolbox" 
            description="Visualize and analyze how cognitive states interfere in quantum-like ways during decision processes."
            icon={<NetworkIcon className="h-6 w-6 text-quantum-blue" />}
            buttonText="View Patterns"
            onButtonClick={() => handleFeatureClick("patterns")}
            className="transform transition-all duration-300 hover:-translate-y-2 lg:mt-4 xl:mt-0"
          />
          <FeatureCard 
            title="Data Analysis Toolkit" 
            description="Advanced statistical tools specifically designed for analyzing quantum cognition experiments and datasets."
            icon={<BarChart2 className="h-6 w-6 text-quantum-pink" />}
            buttonText="Analyze Data"
            onButtonClick={() => handleFeatureClick("data")}
            className="transform transition-all duration-300 hover:-translate-y-2 lg:col-span-1.5"
          />
          <FeatureCard 
            title="Mathematical Framework" 
            description="Access the mathematical tools and frameworks necessary for quantum cognitive modeling."
            icon={<Sigma className="h-6 w-6 text-quantum-cyan" />}
            buttonText="Explore Math"
            onButtonClick={() => handleFeatureClick("math")}
            className="transform transition-all duration-300 hover:-translate-y-2 lg:col-span-1.5"
            implementedFeature={true}
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
