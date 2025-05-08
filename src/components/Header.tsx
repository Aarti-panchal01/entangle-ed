
import React from 'react';
import { Button } from '@/components/ui/button';
import { MenuIcon } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm z-10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative w-8 h-8">
            <div className="absolute w-8 h-8 rounded-full bg-quantum-purple animate-pulse-slow"></div>
            <div className="absolute w-8 h-8 rounded-full bg-quantum-blue animate-spin-slow opacity-70"></div>
            <div className="absolute w-6 h-6 top-1 left-1 rounded-full bg-quantum-cyan animate-pulse-slow"></div>
          </div>
          <span className="text-xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple via-quantum-blue to-quantum-cyan">
              Quantum Cognition
            </span>
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-sm font-medium hover:text-quantum-cyan transition-colors">Dashboard</a>
          <a href="#" className="text-sm font-medium hover:text-quantum-cyan transition-colors">Concepts</a>
          <a href="#" className="text-sm font-medium hover:text-quantum-cyan transition-colors">Models</a>
          <a href="#" className="text-sm font-medium hover:text-quantum-cyan transition-colors">Learn</a>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="sm" className="hidden md:flex border-quantum-purple/50 text-quantum-cyan hover:bg-quantum-purple/20 hover:text-white transition-all">
            Connect
          </Button>
          <Button className="md:hidden" size="icon" variant="ghost">
            <MenuIcon className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
