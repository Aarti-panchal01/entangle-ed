
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X,
  BookOpen, 
  AtomIcon, 
  Code, 
  Smartphone, 
  LayoutDashboard, 
  LogIn 
} from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-sm z-10">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <div className="relative w-8 h-8">
              <img 
                src="/lovable-uploads/912be702-8124-4171-9486-320ba5b4876c.png" 
                alt="entangle.ED logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple via-quantum-blue to-quantum-cyan">
                entangle.ED
              </span>
            </span>
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/courses" className="text-sm font-medium hover:text-quantum-cyan transition-colors flex items-center gap-1">
            <BookOpen className="h-4 w-4" />
            Courses
          </Link>
          <Link to="/circuit-builder" className="text-sm font-medium hover:text-quantum-cyan transition-colors flex items-center gap-1">
            <Code className="h-4 w-4" />
            Circuit Builder
          </Link>
          <Link to="/mathematical-framework" className="text-sm font-medium hover:text-quantum-cyan transition-colors flex items-center gap-1">
            <AtomIcon className="h-4 w-4" />
            Math Framework
          </Link>
          <Link to="/ar" className="text-sm font-medium hover:text-quantum-cyan transition-colors flex items-center gap-1">
            <Smartphone className="h-4 w-4" />
            AR Experience
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:text-quantum-cyan transition-colors flex items-center gap-1">
            <LayoutDashboard className="h-4 w-4" />
            Dashboard
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Button 
            variant="outline" 
            size="sm" 
            className="hidden md:flex border-quantum-purple/50 text-quantum-cyan hover:bg-quantum-purple/20 hover:text-white transition-all"
          >
            <LogIn className="h-4 w-4 mr-1" />
            Login
          </Button>
          <Button
            className="md:hidden" 
            size="icon" 
            variant="ghost"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-2 px-4 bg-background/95 backdrop-blur-lg border-b border-border/40">
          <nav className="flex flex-col space-y-2 py-2">
            <Link 
              to="/courses" 
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <BookOpen className="h-4 w-4 text-quantum-cyan" />
              Courses
            </Link>
            <Link 
              to="/circuit-builder" 
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Code className="h-4 w-4 text-quantum-cyan" />
              Circuit Builder
            </Link>
            <Link 
              to="/mathematical-framework" 
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <AtomIcon className="h-4 w-4 text-quantum-cyan" />
              Math Framework
            </Link>
            <Link 
              to="/ar" 
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Smartphone className="h-4 w-4 text-quantum-cyan" />
              AR Experience
            </Link>
            <Link 
              to="/dashboard" 
              className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              <LayoutDashboard className="h-4 w-4 text-quantum-cyan" />
              Dashboard
            </Link>
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full justify-center mt-2 border-quantum-purple/50 text-quantum-cyan hover:bg-quantum-purple/20 hover:text-white transition-all"
            >
              <LogIn className="h-4 w-4 mr-1" />
              Login
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
