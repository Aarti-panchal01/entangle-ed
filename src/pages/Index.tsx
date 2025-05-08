
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import InfoSection from '@/components/InfoSection';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <InfoSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
