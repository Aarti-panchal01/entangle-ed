
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { toast } from 'sonner';
import { AtomIcon, Brain, Share2 } from 'lucide-react';

// This component demonstrates quantum cognition through an interactive simulation
const QuantumSimulation = () => {
  const [interference, setInterference] = useState<number>(50);
  const [probability, setProbability] = useState<number>(50);
  const [decisionState, setDecisionState] = useState<string>("superposition");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [result, setResult] = useState<string | null>(null);

  // Simulation logic
  const runSimulation = () => {
    setIsSimulating(true);
    setResult(null);
    
    // Simulated delay to show "processing"
    setTimeout(() => {
      const quantumFactor = interference / 100;
      const classicalFactor = 1 - quantumFactor;
      
      // Quantum decision model calculation (simplified for demonstration)
      const quantumProbability = probability / 100;
      const classicalProbability = Math.pow(quantumProbability, 2);
      const interferenceTerm = quantumFactor * Math.sin(probability / 100 * Math.PI);
      
      const finalProbability = (classicalFactor * classicalProbability) + interferenceTerm;
      const normalizedResult = Math.max(0, Math.min(1, finalProbability)) * 100;
      
      setResult(`${normalizedResult.toFixed(1)}%`);
      setDecisionState("measured");
      setIsSimulating(false);
      
      toast.success("Quantum simulation complete", {
        description: `Decision probability calculated with ${interference}% quantum interference.`
      });
    }, 1500);
  };
  
  // Reset simulation
  const resetSimulation = () => {
    setDecisionState("superposition");
    setResult(null);
  };
  
  // Visualization component for quantum state
  const QuantumStateViz = () => {
    const stateColor = decisionState === "measured" 
      ? "bg-quantum-cyan" 
      : "bg-gradient-to-r from-quantum-purple to-quantum-blue";
    
    return (
      <div className="relative w-full h-32 flex items-center justify-center rounded-lg border border-border/50 overflow-hidden">
        <div className="absolute inset-0 bg-card/50 backdrop-blur-sm"></div>
        
        {/* Quantum state visualization */}
        <div className="relative z-10 flex items-center justify-center w-full">
          {isSimulating ? (
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-full animate-spin-slow bg-gradient-to-r from-quantum-purple via-quantum-blue to-quantum-cyan"></div>
              <p className="text-sm text-muted-foreground">Calculating quantum state...</p>
            </div>
          ) : result ? (
            <div className="flex flex-col items-center gap-2">
              <div className={`w-16 h-16 rounded-full ${stateColor} flex items-center justify-center text-white font-bold`}>
                {result}
              </div>
              <p className="text-sm">Measured Decision Probability</p>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-quantum-purple to-quantum-blue opacity-50 animate-pulse-slow"></div>
              <p className="text-sm text-muted-foreground">Decision in superposition</p>
            </div>
          )}
        </div>
        
        {/* Particle effects */}
        {decisionState === "superposition" && (
          <>
            <div className="absolute w-2 h-2 bg-quantum-purple rounded-full animate-particle top-1/4 left-1/4"></div>
            <div className="absolute w-2 h-2 bg-quantum-blue rounded-full animate-particle top-3/4 left-1/3 animation-delay-200"></div>
            <div className="absolute w-2 h-2 bg-quantum-cyan rounded-full animate-particle top-1/2 left-2/3 animation-delay-300"></div>
          </>
        )}
      </div>
    );
  };

  return (
    <Card className="border border-border/50 bg-card/80 backdrop-blur-sm shadow-lg w-full max-w-2xl mx-auto">
      <CardHeader>
        <div className="flex items-center gap-2">
          <AtomIcon className="w-6 h-6 text-quantum-cyan" />
          <CardTitle>Quantum Decision Simulator</CardTitle>
        </div>
        <CardDescription>
          Explore how quantum probability affects decision-making with this interactive model
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <QuantumStateViz />
        
        <div className="space-y-4">
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium flex items-center gap-1">
                <Brain className="w-4 h-4" /> Initial Decision Probability
              </label>
              <span className="text-sm text-muted-foreground">{probability}%</span>
            </div>
            <Slider 
              value={[probability]}
              min={0}
              max={100}
              step={1}
              onValueChange={(value) => setProbability(value[0])}
              disabled={isSimulating}
              className="bg-gradient-to-r from-quantum-purple to-quantum-blue"
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium flex items-center gap-1">
                <Share2 className="w-4 h-4" /> Quantum Interference Factor
              </label>
              <span className="text-sm text-muted-foreground">{interference}%</span>
            </div>
            <Slider 
              value={[interference]}
              min={0}
              max={100} 
              step={1}
              onValueChange={(value) => setInterference(value[0])}
              disabled={isSimulating}
              className="bg-gradient-to-r from-quantum-blue to-quantum-cyan"
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-2 justify-end">
        <Button 
          variant="outline" 
          onClick={resetSimulation} 
          disabled={isSimulating || decisionState === "superposition"}
          className="border-quantum-purple/50 text-quantum-cyan hover:bg-quantum-purple/20 hover:text-white transition-all"
        >
          Reset
        </Button>
        <Button 
          onClick={runSimulation} 
          disabled={isSimulating} 
          className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
        >
          Run Simulation
        </Button>
      </CardFooter>
    </Card>
  );
};

export default QuantumSimulation;
