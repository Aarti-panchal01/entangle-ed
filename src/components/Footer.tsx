
import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-border/40">
      <div className="container px-4 py-10 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="relative w-6 h-6">
                <div className="absolute w-6 h-6 rounded-full bg-quantum-purple animate-pulse-slow"></div>
                <div className="absolute w-6 h-6 rounded-full bg-quantum-blue animate-spin-slow opacity-70"></div>
                <div className="absolute w-4 h-4 top-1 left-1 rounded-full bg-quantum-cyan animate-pulse-slow"></div>
              </div>
              <span className="text-lg font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple via-quantum-blue to-quantum-cyan">
                  Quantum Cognition
                </span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Exploring the intersection of quantum theory and cognitive science.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan">Tutorials</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan">Research Papers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan">API Reference</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan">About</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan">Careers</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan">Contact</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan">Privacy Policy</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-quantum-cyan">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-10 pt-4 border-t border-border/40 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © 2025 Quantum Cognition Builder. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-muted-foreground hover:text-quantum-cyan">
              <span className="sr-only">Twitter</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-quantum-cyan">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-quantum-cyan">
              <span className="sr-only">Discord</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z"/></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
