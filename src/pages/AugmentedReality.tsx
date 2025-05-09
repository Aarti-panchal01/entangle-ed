
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Smartphone, TabletSmartphone, QrCode, Info, Download, Eye } from 'lucide-react';
import { toast } from 'sonner';

const AugmentedReality = () => {
  const [activeTab, setActiveTab] = useState('introduction');
  const [showQRCode, setShowQRCode] = useState(false);

  const handleViewAR = () => {
    setShowQRCode(true);
    toast.info("AR Experience Ready", {
      description: "Scan the QR code with your mobile device to view in AR."
    });
  };

  const handleDownloadApp = () => {
    toast.success("Download Started", {
      description: "Check your device for the entangle.ED AR app download."
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
              Quantum AR Experience
            </h1>
            <p className="text-muted-foreground">
              Visualize quantum phenomena in augmented reality
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="md:col-span-1">
              <Tabs 
                orientation="vertical" 
                defaultValue="introduction" 
                className="w-full"
                onValueChange={setActiveTab}
              >
                <TabsList className="flex flex-col h-full gap-2 w-full">
                  <TabsTrigger value="introduction" className="w-full justify-start data-[state=active]:bg-quantum-purple/20">
                    <Info className="mr-2 h-4 w-4" />
                    Introduction
                  </TabsTrigger>
                  <TabsTrigger value="bloch-sphere" className="w-full justify-start data-[state=active]:bg-quantum-purple/20">
                    <Eye className="mr-2 h-4 w-4" />
                    Bloch Sphere
                  </TabsTrigger>
                  <TabsTrigger value="entanglement" className="w-full justify-start data-[state=active]:bg-quantum-purple/20">
                    <Eye className="mr-2 h-4 w-4" />
                    Entanglement
                  </TabsTrigger>
                  <TabsTrigger value="quantum-gates" className="w-full justify-start data-[state=active]:bg-quantum-purple/20">
                    <Eye className="mr-2 h-4 w-4" />
                    Quantum Gates
                  </TabsTrigger>
                  <TabsTrigger value="app" className="w-full justify-start data-[state=active]:bg-quantum-purple/20">
                    <Download className="mr-2 h-4 w-4" />
                    Download AR App
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
            
            <div className="md:col-span-2">
              <Card className="quantum-card h-full">
                <CardHeader>
                  <CardTitle>
                    {activeTab === 'introduction' && 'Welcome to Quantum AR'}
                    {activeTab === 'bloch-sphere' && 'Bloch Sphere Visualization'}
                    {activeTab === 'entanglement' && 'Quantum Entanglement'}
                    {activeTab === 'quantum-gates' && 'Quantum Gates in 3D'}
                    {activeTab === 'app' && 'Download the AR App'}
                  </CardTitle>
                  <CardDescription>
                    {activeTab === 'introduction' && 'Experience quantum phenomena in augmented reality'}
                    {activeTab === 'bloch-sphere' && 'Visualize qubit states on the Bloch sphere'}
                    {activeTab === 'entanglement' && 'See entangled qubits interact in real time'}
                    {activeTab === 'quantum-gates' && 'Observe how quantum gates transform qubits'}
                    {activeTab === 'app' && 'Get our dedicated AR app for the full experience'}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  {activeTab === 'introduction' && (
                    <div className="space-y-4">
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-quantum-purple/30 to-quantum-blue/30 flex items-center justify-center">
                        <div className="text-center p-6">
                          <Smartphone className="h-16 w-16 mx-auto mb-4 text-quantum-cyan" />
                          <h3 className="text-lg font-bold mb-2">Quantum Concepts in AR</h3>
                          <p className="text-muted-foreground max-w-md mx-auto">
                            Our augmented reality experiences bring abstract quantum concepts to life. 
                            Point your device at a flat surface to begin exploring.
                          </p>
                        </div>
                      </div>
                      <p>
                        Quantum mechanics introduces concepts that can be difficult to visualize using traditional 
                        methods. Our AR experience helps you understand these abstract ideas by bringing them into 
                        the physical world through your mobile device.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="quantum-card p-4 bg-gradient-to-br from-quantum-purple/20 to-transparent">
                          <h4 className="font-semibold mb-2">Interactive Learning</h4>
                          <p className="text-sm text-muted-foreground">
                            Interact with quantum objects in your own space
                          </p>
                        </div>
                        <div className="quantum-card p-4 bg-gradient-to-br from-quantum-blue/20 to-transparent">
                          <h4 className="font-semibold mb-2">Spatial Understanding</h4>
                          <p className="text-sm text-muted-foreground">
                            Gain intuition about quantum states through 3D models
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeTab === 'bloch-sphere' && (
                    <div className="space-y-4">
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-quantum-purple/30 to-quantum-blue/30 flex items-center justify-center">
                        {showQRCode ? (
                          <div className="text-center">
                            <div className="w-48 h-48 mx-auto bg-white p-2 rounded-lg mb-4">
                              {/* This would be a real QR code in production */}
                              <div className="w-full h-full border-2 border-quantum-purple flex items-center justify-center">
                                <QrCode className="h-24 w-24 text-quantum-purple" />
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Scan this QR code with your mobile device
                            </p>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="mt-2"
                              onClick={() => setShowQRCode(false)}
                            >
                              Hide QR Code
                            </Button>
                          </div>
                        ) : (
                          <div className="text-center p-6">
                            <div className="relative w-32 h-32 mx-auto mb-4">
                              <div className="absolute inset-0 rounded-full border-2 border-quantum-blue/50 animate-spin-slow"></div>
                              <div className="absolute inset-0 rounded-full border-2 border-quantum-purple/50 animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-quantum-cyan rounded-full"></div>
                              <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-quantum-purple rounded-full"></div>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Bloch Sphere</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                              The Bloch sphere is a geometrical representation of the pure state space of a qubit.
                            </p>
                          </div>
                        )}
                      </div>
                      <p>
                        The Bloch sphere is a powerful visualization tool for understanding qubit states. In our AR 
                        experience, you can see how quantum states evolve on the sphere and gain intuition about 
                        quantum operations.
                      </p>
                      <p>
                        You'll be able to:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Visualize single-qubit states as points on the Bloch sphere</li>
                        <li>See quantum gates as rotations of the sphere</li>
                        <li>Understand concepts like superposition and phase</li>
                        <li>Interact with the sphere by rotating and scaling it</li>
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'entanglement' && (
                    <div className="space-y-4">
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-quantum-purple/30 to-quantum-blue/30 flex items-center justify-center">
                        {showQRCode ? (
                          <div className="text-center">
                            <div className="w-48 h-48 mx-auto bg-white p-2 rounded-lg mb-4">
                              <div className="w-full h-full border-2 border-quantum-purple flex items-center justify-center">
                                <QrCode className="h-24 w-24 text-quantum-purple" />
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Scan this QR code with your mobile device
                            </p>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="mt-2"
                              onClick={() => setShowQRCode(false)}
                            >
                              Hide QR Code
                            </Button>
                          </div>
                        ) : (
                          <div className="text-center p-6">
                            <div className="relative w-32 h-32 mx-auto mb-4">
                              <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-quantum-purple rounded-full"></div>
                              <div className="absolute top-3/4 left-3/4 w-4 h-4 bg-quantum-cyan rounded-full"></div>
                              <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-quantum-purple/50 rounded-full animate-ping"></div>
                              <div className="absolute top-3/4 left-3/4 w-16 h-16 border border-quantum-cyan/50 rounded-full animate-ping"></div>
                              <div className="absolute top-[calc(25%-2px)] left-[calc(25%-2px)] w-10 h-1 bg-quantum-purple/30 rotate-45"></div>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Quantum Entanglement</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                              Experience how entangled qubits maintain correlations regardless of distance.
                            </p>
                          </div>
                        )}
                      </div>
                      <p>
                        Quantum entanglement is one of the most fascinating aspects of quantum mechanics. Our AR 
                        experience shows you how entangled particles behave in ways that have no classical analogue.
                      </p>
                      <p>
                        In this AR experience, you'll:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Observe the creation of entangled qubit pairs</li>
                        <li>See how measuring one qubit instantly affects the other</li>
                        <li>Understand Bell states and their properties</li>
                        <li>Visualize entanglement through interactive 3D models</li>
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'quantum-gates' && (
                    <div className="space-y-4">
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-quantum-purple/30 to-quantum-blue/30 flex items-center justify-center">
                        {showQRCode ? (
                          <div className="text-center">
                            <div className="w-48 h-48 mx-auto bg-white p-2 rounded-lg mb-4">
                              <div className="w-full h-full border-2 border-quantum-purple flex items-center justify-center">
                                <QrCode className="h-24 w-24 text-quantum-purple" />
                              </div>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Scan this QR code with your mobile device
                            </p>
                            <Button 
                              variant="outline" 
                              size="sm" 
                              className="mt-2"
                              onClick={() => setShowQRCode(false)}
                            >
                              Hide QR Code
                            </Button>
                          </div>
                        ) : (
                          <div className="text-center p-6">
                            <div className="relative w-32 h-32 mx-auto mb-4 flex items-center justify-center">
                              <div className="w-16 h-16 border-2 border-quantum-blue text-quantum-blue flex items-center justify-center font-mono font-bold">H</div>
                              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-2 border-quantum-purple text-quantum-purple flex items-center justify-center font-mono font-bold">X</div>
                            </div>
                            <h3 className="text-lg font-bold mb-2">Quantum Gates</h3>
                            <p className="text-muted-foreground max-w-md mx-auto">
                              Explore how quantum gates transform qubits in three dimensions.
                            </p>
                          </div>
                        )}
                      </div>
                      <p>
                        Quantum gates are the building blocks of quantum circuits. In our AR experience, you can 
                        see these abstract mathematical operations come to life as transformations in 3D space.
                      </p>
                      <p>
                        Features of the Quantum Gates AR experience:
                      </p>
                      <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                        <li>Interactive 3D models of common quantum gates</li>
                        <li>See the before and after states of qubits</li>
                        <li>Step-by-step animations of gate operations</li>
                        <li>Compare single-qubit and multi-qubit gates</li>
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'app' && (
                    <div className="space-y-4">
                      <div className="aspect-video rounded-lg bg-gradient-to-br from-quantum-purple/30 to-quantum-blue/30 flex items-center justify-center">
                        <div className="text-center p-6">
                          <TabletSmartphone className="h-16 w-16 mx-auto mb-4 text-quantum-cyan" />
                          <h3 className="text-lg font-bold mb-2">entangle.ED AR App</h3>
                          <p className="text-muted-foreground max-w-md mx-auto">
                            Download our dedicated app for the full AR experience on your mobile device.
                          </p>
                          <div className="flex justify-center gap-4 mt-4">
                            <Button 
                              className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
                              onClick={handleDownloadApp}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              iOS App
                            </Button>
                            <Button 
                              className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
                              onClick={handleDownloadApp}
                            >
                              <Download className="mr-2 h-4 w-4" />
                              Android App
                            </Button>
                          </div>
                        </div>
                      </div>
                      <p>
                        Our dedicated AR app provides the most immersive experience for exploring quantum concepts. 
                        With regular updates and new features, it's the best way to visualize quantum phenomena.
                      </p>
                      <div className="grid grid-cols-2 gap-4 mt-4">
                        <div className="quantum-card p-4">
                          <h4 className="font-semibold mb-2">System Requirements</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>iOS 14+ / Android 9+</li>
                            <li>AR-capable device</li>
                            <li>500MB free space</li>
                          </ul>
                        </div>
                        <div className="quantum-card p-4">
                          <h4 className="font-semibold mb-2">App Features</h4>
                          <ul className="text-sm text-muted-foreground space-y-1">
                            <li>Offline mode available</li>
                            <li>Save and share experiences</li>
                            <li>Guided tutorials</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
                
                <CardFooter>
                  {activeTab !== 'introduction' && activeTab !== 'app' && (
                    <Button 
                      className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
                      onClick={handleViewAR}
                    >
                      <Eye className="mr-2 h-4 w-4" />
                      View in AR
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AugmentedReality;
