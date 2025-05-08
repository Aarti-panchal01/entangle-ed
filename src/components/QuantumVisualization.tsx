
import React, { useEffect, useState } from 'react';

const QuantumVisualization = () => {
  const [rotation, setRotation] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 0.5) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-[400px] rounded-lg flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-quantum-indigo/20 to-transparent"></div>
      
      {/* Orbital circles */}
      <div 
        className="absolute w-[300px] h-[300px] border border-quantum-blue/30 rounded-full"
        style={{ transform: `rotateX(70deg) rotateZ(${rotation}deg)` }}
      ></div>
      <div 
        className="absolute w-[200px] h-[200px] border border-quantum-cyan/40 rounded-full"
        style={{ transform: `rotateX(60deg) rotateZ(${-rotation * 1.5}deg)` }}
      ></div>
      <div 
        className="absolute w-[100px] h-[100px] border border-quantum-purple/50 rounded-full"
        style={{ transform: `rotateX(50deg) rotateZ(${rotation * 2}deg)` }}
      ></div>
      
      {/* Particles */}
      <div 
        className="absolute w-4 h-4 bg-quantum-purple rounded-full shadow-lg shadow-quantum-purple/50"
        style={{ 
          transform: `translate(${Math.cos(rotation * 0.0174533) * 150}px, ${Math.sin(rotation * 0.0174533) * 40}px)`,
          filter: "blur(1px)"
        }}
      ></div>
      <div 
        className="absolute w-3 h-3 bg-quantum-blue rounded-full shadow-lg shadow-quantum-blue/50"
        style={{ 
          transform: `translate(${Math.cos((rotation + 120) * 0.0174533) * 100}px, ${Math.sin((rotation + 120) * 0.0174533) * 30}px)`,
          filter: "blur(1px)"
        }}
      ></div>
      <div 
        className="absolute w-2 h-2 bg-quantum-cyan rounded-full shadow-lg shadow-quantum-cyan/50"
        style={{ 
          transform: `translate(${Math.cos((rotation + 240) * 0.0174533) * 50}px, ${Math.sin((rotation + 240) * 0.0174533) * 20}px)`,
          filter: "blur(1px)"
        }}
      ></div>
      
      {/* Central node */}
      <div className="relative w-10 h-10">
        <div className="absolute inset-0 bg-quantum-pink rounded-full animate-pulse-slow"></div>
        <div className="absolute inset-0 bg-quantum-purple rounded-full animate-pulse-slow opacity-70 delay-500"></div>
      </div>
    </div>
  );
};

export default QuantumVisualization;
