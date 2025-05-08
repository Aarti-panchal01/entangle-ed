
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import QuantumSimulation from '@/components/QuantumSimulation';

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
      </main>
      <Footer />
    </div>
  );
};

export default Index;
