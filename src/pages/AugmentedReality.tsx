
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Smartphone, QrCode, ArrowRight, Eye3d, RotateCw, Camera, Download } from 'lucide-react';
import { toast } from 'sonner';

interface ARModel {
  id: string;
  name: string;
  description: string;
  previewUrl: string;
  complexity: 'simple' | 'intermediate' | 'complex';
  category: string;
}

const arModels: ARModel[] = [
  {
    id: 'bloch-sphere',
    name: 'Bloch Sphere',
    description: 'Visualize qubit states on the Bloch sphere representation',
    previewUrl: 'placeholder.svg',
    complexity: 'simple',
    category: 'quantum-states'
  },
  {
    id: 'entangled-particles',
    name: 'Entangled Particles',
    description: 'View the quantum entanglement between two particles',
    previewUrl: 'placeholder.svg',
    complexity: 'intermediate',
    category: 'quantum-states'
  },
  {
    id: 'quantum-gates',
    name: 'Quantum Gates',
    description: '3D visualization of common quantum gates and their operations',
    previewUrl: 'placeholder.svg',
    complexity: 'intermediate',
    category: 'quantum-operations'
  },
  {
    id: 'quantum-circuit',
    name: 'Quantum Circuit',
    description: 'View a 3D model of a quantum circuit with multiple qubits',
    previewUrl: 'placeholder.svg',
    complexity: 'complex',
    category: 'quantum-operations'
  },
  {
    id: 'quantum-teleportation',
    name: 'Quantum Teleportation',
    description: 'Visualize the quantum teleportation protocol in action',
    previewUrl: 'placeholder.svg',
    complexity: 'complex',
    category: 'quantum-algorithms'
  },
  {
    id: 'shors-algorithm',
    name: "Shor's Algorithm",
    description: 'Interactive 3D visualization of quantum factoring algorithm',
    previewUrl: 'placeholder.svg',
    complexity: 'complex',
    category: 'quantum-algorithms'
  }
];

const complexityColorMap = {
  simple: "bg-green-500/20 text-green-500 border-green-500/50",
  intermediate: "bg-blue-500/20 text-blue-500 border-blue-500/50",
  complex: "bg-purple-500/20 text-purple-500 border-purple-500/50"
};

const AugmentedReality = () => {
  const [selectedModel, setSelectedModel] = useState<ARModel | null>(null);
  const [isLoadingAR, setIsLoadingAR] = useState(false);
  const [currentCategory, setCurrentCategory] = useState('all');

  const handleViewInAR = (model: ARModel) => {
    setSelectedModel(model);
    setIsLoadingAR(true);
    
    // Simulate AR loading
    setTimeout(() => {
      setIsLoadingAR(false);
      toast.success(`${model.name} ready for AR viewing`, {
        description: "Point your camera at a flat surface to place the 3D model"
      });
    }, 2000);
  };

  const handleLaunchAR = () => {
    // In a real implementation, this would launch the WebXR session
    toast.info("AR Experience", {
      description: "Use the AR icon in your browser to start the full AR experience"
    });
  };

  const filteredModels = currentCategory === 'all' 
    ? arModels 
    : arModels.filter(model => model.category === currentCategory);

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
              Quantum Augmented Reality
            </h1>
            <p className="text-muted-foreground">
              Visualize complex quantum phenomena in 3D using your mobile device
            </p>
          </div>

          <div className="mb-8 bg-background/30 backdrop-blur-sm p-6 rounded-lg">
            <div className="grid gap-6 md:grid-cols-2 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-2">Experience Quantum Concepts in AR</h2>
                <p className="text-muted-foreground mb-4">
                  Our augmented reality feature allows you to visualize and interact with quantum 
                  states and phenomena in 3D space, making abstract concepts tangible.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="bg-quantum-purple/20 p-2 rounded-full">
                      <Smartphone className="h-5 w-5 text-quantum-purple" />
                    </div>
                    <span>Compatible with iOS and Android devices</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-quantum-cyan/20 p-2 rounded-full">
                      <Camera className="h-5 w-5 text-quantum-cyan" />
                    </div>
                    <span>No app installation required - works in your browser</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="bg-quantum-blue/20 p-2 rounded-full">
                      <RotateCw className="h-5 w-5 text-quantum-blue" />
                    </div>
                    <span>Rotate, scale, and interact with 3D quantum objects</span>
                  </div>
                </div>
                <Button 
                  className="mt-6 bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
                  onClick={handleLaunchAR}
                >
                  <Eye3d className="mr-2 h-4 w-4" />
                  Launch AR Experience
                </Button>
              </div>
              <div className="flex items-center justify-center p-4 bg-gradient-to-r from-quantum-purple/5 to-quantum-blue/5 rounded-lg border border-white/10">
                <div className="relative">
                  <div className="w-48 h-48 rounded-full bg-quantum-purple/20 animate-pulse-slow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  <div className="w-32 h-32 rounded-full bg-quantum-blue/20 animate-pulse-slow absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                  <QrCode className="w-40 h-40 text-white/80" />
                  <p className="mt-4 text-center text-sm">Scan with your mobile device</p>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="all" className="w-full max-w-5xl mx-auto" onValueChange={setCurrentCategory}>
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-quantum-purple/20">
                All Models
              </TabsTrigger>
              <TabsTrigger value="quantum-states" className="data-[state=active]:bg-quantum-purple/20">
                Quantum States
              </TabsTrigger>
              <TabsTrigger value="quantum-operations" className="data-[state=active]:bg-quantum-purple/20">
                Operations
              </TabsTrigger>
              <TabsTrigger value="quantum-algorithms" className="data-[state=active]:bg-quantum-purple/20">
                Algorithms
              </TabsTrigger>
            </TabsList>

            <TabsContent value={currentCategory} className="mt-0">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filteredModels.map((model) => (
                  <Card key={model.id} className="quantum-card overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-quantum-purple/20 to-quantum-blue/20 flex items-center justify-center">
                      <BookOpen className="h-12 w-12 text-white/50" />
                    </div>
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start">
                        <CardTitle>{model.name}</CardTitle>
                        <Badge 
                          variant="outline"
                          className={complexityColorMap[model.complexity]}
                        >
                          {model.complexity.charAt(0).toUpperCase() + model.complexity.slice(1)}
                        </Badge>
                      </div>
                      <CardDescription>{model.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        onClick={() => handleViewInAR(model)}
                        className="w-full bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
                      >
                        <Eye3d className="mr-2 h-4 w-4" />
                        View in AR
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>

          {selectedModel && (
            <div className="mt-10 bg-background/30 backdrop-blur-sm p-6 rounded-lg">
              <h2 className="text-2xl font-bold mb-6">{selectedModel.name} - AR Preview</h2>
              
              {isLoadingAR ? (
                <div className="h-80 flex flex-col items-center justify-center">
                  <div className="w-12 h-12 border-4 border-t-quantum-purple border-r-quantum-cyan border-b-quantum-blue border-l-transparent rounded-full animate-spin mb-4" />
                  <p className="text-muted-foreground">Loading AR experience...</p>
                </div>
              ) : (
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="h-80 bg-gradient-to-br from-quantum-purple/20 to-quantum-blue/20 rounded-lg flex items-center justify-center">
                    <div className="relative w-40 h-40">
                      <div className="absolute inset-0 rounded-full bg-quantum-purple/30 animate-ping-slow opacity-75" />
                      <div className="absolute inset-0 rounded-full bg-quantum-blue/20 animate-pulse-slow" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <p className="text-white font-medium">3D Model Preview</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold">{selectedModel.name}</h3>
                    <p className="text-muted-foreground">{selectedModel.description}</p>
                    
                    <div className="space-y-2 pt-4">
                      <h4 className="font-medium">Instructions:</h4>
                      <ol className="space-y-2 list-decimal pl-5">
                        <li>Ensure you're using a WebXR-compatible browser</li>
                        <li>Point your camera at a flat surface</li>
                        <li>Tap the screen to place the 3D model</li>
                        <li>Use pinch gestures to resize the model</li>
                        <li>Drag with one finger to rotate the view</li>
                      </ol>
                    </div>
                    
                    <div className="pt-4 flex flex-wrap gap-3">
                      <Button
                        onClick={handleLaunchAR}
                        className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
                      >
                        <Eye3d className="mr-2 h-4 w-4" />
                        Launch Full AR Experience
                      </Button>
                      
                      <Button variant="outline" className="gap-2">
                        <Download className="h-4 w-4" />
                        Download 3D Model
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AugmentedReality;
