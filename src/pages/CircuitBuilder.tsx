
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import QuantumCircuitBuilder from '@/components/QuantumCircuitBuilder';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import InfoCard from '@/components/InfoCard';
import { Code, BookOpen, Share2, Download } from 'lucide-react';

const CircuitBuilder = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
              Quantum Circuit Builder
            </h1>
            <p className="text-muted-foreground">
              Create, simulate and visualize quantum circuits with our interactive builder
            </p>
          </div>
          
          <Tabs defaultValue="builder" className="w-full max-w-5xl mx-auto">
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="builder" className="data-[state=active]:bg-quantum-purple/20">
                <Code className="mr-2 h-4 w-4" />
                Circuit Builder
              </TabsTrigger>
              <TabsTrigger value="examples" className="data-[state=active]:bg-quantum-purple/20">
                <BookOpen className="mr-2 h-4 w-4" />
                Example Circuits
              </TabsTrigger>
              <TabsTrigger value="share" className="data-[state=active]:bg-quantum-purple/20">
                <Share2 className="mr-2 h-4 w-4" />
                Community Circuits
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="builder">
              <QuantumCircuitBuilder />
            </TabsContent>
            
            <TabsContent value="examples">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {/* Example circuits */}
                <InfoCard
                  title="Bell State Circuit"
                  description="Create a quantum entanglement between two qubits with this simple circuit."
                  icon={<Code className="h-6 w-6" />}
                  className="cursor-pointer"
                  onClick={() => {}}
                />
                <InfoCard
                  title="Quantum Teleportation"
                  description="Demonstrates how to transfer a quantum state from one qubit to another."
                  icon={<Code className="h-6 w-6" />}
                  className="cursor-pointer"
                  onClick={() => {}}
                />
                <InfoCard
                  title="Grover's Algorithm"
                  description="A quantum search algorithm that finds with high probability the unique input to a black box function."
                  icon={<Code className="h-6 w-6" />}
                  className="cursor-pointer"
                  onClick={() => {}}
                />
                <InfoCard
                  title="Deutsch-Jozsa Algorithm"
                  description="Determines whether a function is constant or balanced with just one evaluation."
                  icon={<Code className="h-6 w-6" />}
                  className="cursor-pointer"
                  onClick={() => {}}
                />
                <InfoCard
                  title="Quantum Fourier Transform"
                  description="The quantum analog of the discrete Fourier transform, a key component in many quantum algorithms."
                  icon={<Code className="h-6 w-6" />}
                  className="cursor-pointer"
                  onClick={() => {}}
                />
                <InfoCard
                  title="Quantum Random Number Generator"
                  description="Generate true random numbers using quantum superposition."
                  icon={<Code className="h-6 w-6" />}
                  className="cursor-pointer"
                  onClick={() => {}}
                />
              </div>
            </TabsContent>
            
            <TabsContent value="share">
              <div className="grid gap-6 md:grid-cols-2">
                <InfoCard
                  title="Share Your Circuits"
                  description="Export your circuit and share it with the quantum computing community."
                  icon={<Share2 className="h-6 w-6" />}
                  className="h-full"
                />
                <InfoCard
                  title="Import Community Circuits"
                  description="Browse and import circuits created by other quantum enthusiasts."
                  icon={<Download className="h-6 w-6" />}
                  className="h-full"
                />
              </div>
              
              <div className="mt-8 quantum-card p-6">
                <h3 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
                  Community Showcase
                </h3>
                <p className="text-muted-foreground mb-6">
                  These circuits were created by members of our community. Click on any circuit to view and import it into your builder.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="quantum-card p-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <h4 className="font-bold">Complex Phase Estimation</h4>
                    <p className="text-sm text-muted-foreground">By quantum_coder</p>
                    <div className="mt-2 text-xs text-quantum-cyan">8 qubits • 42 gates</div>
                  </div>
                  
                  <div className="quantum-card p-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <h4 className="font-bold">Variational Quantum Classifier</h4>
                    <p className="text-sm text-muted-foreground">By ai_quantum</p>
                    <div className="mt-2 text-xs text-quantum-cyan">5 qubits • 27 gates</div>
                  </div>
                  
                  <div className="quantum-card p-4 hover:shadow-lg transition-all duration-300 cursor-pointer">
                    <h4 className="font-bold">Enhanced QAOA Implementation</h4>
                    <p className="text-sm text-muted-foreground">By optimization_expert</p>
                    <div className="mt-2 text-xs text-quantum-cyan">4 qubits • 36 gates</div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CircuitBuilder;
