
import React, { useState } from 'react';
import { ArrowLeft, Copy, Sigma } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const codeExamples = {
  quantum: `# Python code for quantum probability calculation
import numpy as np

def quantum_probability(psi, operator):
    """Calculate quantum probability using Born rule"""
    # Convert to numpy arrays
    psi = np.array(psi)
    operator = np.array(operator)
    
    # Apply operator to state
    result = operator @ psi
    
    # Calculate probability using Born rule
    probability = np.abs(result) ** 2
    return probability

# Example: Decision state in superposition
# |ψ⟩ = α|Yes⟩ + β|No⟩
decision_state = [0.7071, 0.7071]  # Equal superposition
measurement = [[1, 0], [0, 0]]     # Project onto |Yes⟩

# Calculate probability of "Yes" decision
prob_yes = quantum_probability(decision_state, measurement)
print(f"Probability of 'Yes' decision: {prob_yes}")`,

  interference: `# Python code for interference effect
import numpy as np

def interference_model(p_A, p_B, theta):
    """
    Calculate joint probability with quantum interference
    
    Parameters:
    p_A, p_B: Individual probabilities
    theta: Interference angle
    """
    # Classical component (product rule)
    classical = p_A * p_B
    
    # Interference term
    interference = 2 * np.sqrt(p_A * (1-p_A) * p_B * (1-p_B)) * np.cos(theta)
    
    # Final probability with interference
    return classical + interference

# Example: Conjunction fallacy experiment
p_bank_teller = 0.3
p_feminist = 0.5
theta = np.pi/6  # 30 degrees (interference parameter)

# Calculate probability with interference effect
p_conjunction = interference_model(p_bank_teller, p_feminist, theta)
print(f"P(bank teller AND feminist) = {p_conjunction}")
print(f"Classical P(A and B) would be: {p_bank_teller * p_feminist}")`,

  hilbert: `# Python code for Hilbert space representation
import numpy as np
from scipy.linalg import expm

def rotate_state(state, angle):
    """Rotate quantum state by given angle"""
    # Pauli X matrix (rotation generator)
    pauli_x = np.array([[0, 1], [1, 0]])
    
    # Create rotation operator
    rotation = expm(-1j * angle/2 * pauli_x)
    
    # Apply rotation to state
    new_state = rotation @ state
    return new_state

# Initial cognitive state (belief = 0.7)
state = np.array([np.sqrt(0.7), np.sqrt(0.3)])
print("Initial state:", state)

# Apply cognitive dissonance (represented as rotation)
angle = np.pi/4  # 45 degrees
new_state = rotate_state(state, angle)
new_belief = np.abs(new_state[0])**2

print("Rotated state:", new_state)
print(f"New belief probability: {new_belief:.4f}")
`
};

const MathematicalFramework = () => {
  const [activeTab, setActiveTab] = useState("quantum");

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    toast.success("Code copied to clipboard");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      <main className="flex-1 container px-4 py-8">
        <Button 
          variant="ghost" 
          className="mb-6 flex items-center gap-2 text-muted-foreground hover:text-foreground"
          asChild
        >
          <Link to="/">
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </Button>
        
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 bg-muted inline-block rounded-lg">
            <Sigma className="h-6 w-6 text-quantum-cyan" />
          </div>
          <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-cyan">
            Mathematical Framework
          </h1>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="border border-border/50 bg-card/80 backdrop-blur-sm">
              <CardHeader>
                <CardTitle>Quantum Mathematical Models</CardTitle>
                <CardDescription>
                  Explore the mathematical foundations that power quantum cognitive models
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="quantum" value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="w-full mb-4">
                    <TabsTrigger value="quantum" className="flex-1">Quantum Probability</TabsTrigger>
                    <TabsTrigger value="interference" className="flex-1">Interference Effects</TabsTrigger>
                    <TabsTrigger value="hilbert" className="flex-1">Hilbert Space</TabsTrigger>
                  </TabsList>
                  
                  {Object.entries(codeExamples).map(([key, code]) => (
                    <TabsContent key={key} value={key} className="relative">
                      <div className="bg-muted/50 rounded-md p-4 relative">
                        <Button 
                          size="icon" 
                          variant="ghost" 
                          className="absolute top-2 right-2 h-8 w-8 text-muted-foreground hover:text-foreground"
                          onClick={() => copyCode(code)}
                        >
                          <Copy className="h-4 w-4" />
                        </Button>
                        <pre className="text-xs md:text-sm overflow-x-auto whitespace-pre-wrap max-h-[500px] overflow-y-auto">
                          <code>{code}</code>
                        </pre>
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </CardContent>
            </Card>
          </div>

          <div>
            <Card className="border border-border/50 bg-card/80 backdrop-blur-sm sticky top-20">
              <CardHeader>
                <CardTitle>Core Concepts</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  <li>
                    <h3 className="font-medium text-quantum-cyan">Quantum Probability</h3>
                    <p className="text-sm text-muted-foreground">
                      The mathematical formalism that generalizes probability theory using the mathematics of Hilbert spaces
                    </p>
                  </li>
                  <li>
                    <h3 className="font-medium text-quantum-purple">Superposition States</h3>
                    <p className="text-sm text-muted-foreground">
                      Mathematical representation of cognitive states that exist in multiple possibilities simultaneously
                    </p>
                  </li>
                  <li>
                    <h3 className="font-medium text-quantum-blue">Interference Effects</h3>
                    <p className="text-sm text-muted-foreground">
                      Mathematical explanation for violations of the law of total probability in human cognition
                    </p>
                  </li>
                  <li>
                    <h3 className="font-medium text-quantum-pink">Hilbert Space</h3>
                    <p className="text-sm text-muted-foreground">
                      The mathematical structure where quantum cognitive states are represented as vectors
                    </p>
                  </li>
                </ul>

                <Button 
                  className="w-full mt-6 bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
                  onClick={() => {
                    toast.info("Resources Downloaded", {
                      description: "Mathematical documentation and examples have been downloaded to your device."
                    });
                  }}
                >
                  Download Resources
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MathematicalFramework;
