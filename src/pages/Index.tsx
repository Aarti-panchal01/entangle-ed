
import React from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import QuantumSimulation from '@/components/QuantumSimulation';
import QuantumMentor from '@/components/QuantumMentor';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      <main className="flex-1">
        <Hero />
        
        <section className="py-12 md:py-24 bg-background/50">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
                Interactive Demo
              </h2>
              <p className="text-muted-foreground">
                Experience quantum decision-making in action with our interactive simulator
              </p>
            </div>
            <QuantumSimulation />
          </div>
        </section>
        
        <Features />
        <InfoSection />
        
        <section className="py-12 md:py-24 bg-background/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
                  Ask Our Quantum Mentor
                </h2>
                <p className="text-muted-foreground mb-6">
                  Get instant answers to your quantum computing questions from our AI-powered assistant. 
                  Whether you're puzzled by quantum gates or curious about quantum algorithms, our Quantum 
                  Mentor is here to help you navigate your learning journey.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-quantum-purple/20 flex items-center justify-center text-quantum-purple">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold">Ask Anything</h3>
                      <p className="text-sm text-muted-foreground">
                        From basic concepts to complex topics, our mentor is ready to assist.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-quantum-blue/20 flex items-center justify-center text-quantum-blue">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold">Get Immediate Answers</h3>
                      <p className="text-sm text-muted-foreground">
                        Receive instant responses with clear explanations and relevant examples.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-quantum-cyan/20 flex items-center justify-center text-quantum-cyan">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold">Continue Your Learning</h3>
                      <p className="text-sm text-muted-foreground">
                        Follow recommended resources and courses tailored to your interests.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-8">
                  <Link to="/dashboard">
                    <button className="bg-gradient-to-r from-quantum-purple to-quantum-blue text-white px-6 py-3 rounded-md hover:opacity-90 transition-opacity">
                      Explore Full Dashboard
                    </button>
                  </Link>
                </div>
              </div>
              <div>
                <QuantumMentor />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
