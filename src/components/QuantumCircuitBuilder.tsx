
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';
import { 
  Trash2, 
  Save, 
  Download, 
  Share2, 
  Play, 
  Plus,
  X,
  Square,
  RotateCw,
  ArrowRight,
  SplitSquareVertical,
  Eye
} from 'lucide-react';

type GateType = 'H' | 'X' | 'Y' | 'Z' | 'CNOT' | 'CZ' | 'SWAP' | 'T' | 'S' | 'Rx' | 'Ry' | 'Rz';

interface Gate {
  id: string;
  type: GateType;
  qubit: number;
  controlQubit?: number;
  position: number;
  angle?: number;
}

interface CircuitState {
  qubits: number;
  gates: Gate[];
  measurements: boolean[];
}

const gateColors: Record<GateType, string> = {
  'H': 'bg-quantum-blue text-white',
  'X': 'bg-quantum-purple text-white',
  'Y': 'bg-quantum-cyan text-white',
  'Z': 'bg-quantum-pink text-white',
  'CNOT': 'bg-amber-500 text-white',
  'CZ': 'bg-orange-500 text-white',
  'SWAP': 'bg-teal-500 text-white',
  'T': 'bg-indigo-500 text-white',
  'S': 'bg-fuchsia-500 text-white',
  'Rx': 'bg-rose-500 text-white',
  'Ry': 'bg-emerald-500 text-white',
  'Rz': 'bg-violet-500 text-white'
};

const QuantumCircuitBuilder = () => {
  const [circuitState, setCircuitState] = useState<CircuitState>({
    qubits: 3,
    gates: [],
    measurements: [true, true, true]
  });
  const [selectedGate, setSelectedGate] = useState<GateType>('H');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationResults, setSimulationResults] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [lastId, setLastId] = useState(0);
  
  const generateId = () => {
    const newId = lastId + 1;
    setLastId(newId);
    return `gate-${newId}`;
  };

  // Adding a qubit
  const addQubit = () => {
    if (circuitState.qubits >= 8) {
      toast.error("Maximum qubits reached", {
        description: "You can have a maximum of 8 qubits in this demo."
      });
      return;
    }
    
    setCircuitState(prevState => ({
      ...prevState,
      qubits: prevState.qubits + 1,
      measurements: [...prevState.measurements, true]
    }));
  };

  // Removing a qubit
  const removeQubit = () => {
    if (circuitState.qubits <= 1) {
      toast.error("Minimum qubits reached", {
        description: "You need at least 1 qubit in your circuit."
      });
      return;
    }
    
    const lastQubit = circuitState.qubits - 1;
    
    setCircuitState(prevState => ({
      ...prevState,
      qubits: prevState.qubits - 1,
      gates: prevState.gates.filter(gate => 
        gate.qubit !== lastQubit && 
        (gate.controlQubit === undefined || gate.controlQubit !== lastQubit)
      ),
      measurements: prevState.measurements.slice(0, -1)
    }));
  };

  // Toggle measurement for a qubit
  const toggleMeasurement = (qubitIndex: number) => {
    setCircuitState(prevState => {
      const newMeasurements = [...prevState.measurements];
      newMeasurements[qubitIndex] = !newMeasurements[qubitIndex];
      return {
        ...prevState,
        measurements: newMeasurements
      };
    });
  };

  // Adding a gate to the circuit
  const addGate = (qubit: number, position: number) => {
    let newGate: Gate = {
      id: generateId(),
      type: selectedGate,
      qubit,
      position,
    };
    
    // For two-qubit gates that need a control qubit
    if (['CNOT', 'CZ'].includes(selectedGate)) {
      const controlQubit = qubit === 0 ? 1 : qubit - 1;
      newGate = {
        ...newGate,
        controlQubit: controlQubit
      };
    }
    
    // Check for gate collisions
    const hasCollision = circuitState.gates.some(gate => 
      gate.qubit === qubit && 
      gate.position === position
    );
    
    if (hasCollision) {
      toast.error("Gate collision", {
        description: "There is already a gate at this position."
      });
      return;
    }
    
    setCircuitState(prevState => ({
      ...prevState,
      gates: [...prevState.gates, newGate]
    }));
  };

  // Removing a gate
  const removeGate = (gateId: string) => {
    setCircuitState(prevState => ({
      ...prevState,
      gates: prevState.gates.filter(gate => gate.id !== gateId)
    }));
  };

  // Clearing the circuit
  const clearCircuit = () => {
    setCircuitState(prevState => ({
      ...prevState,
      gates: []
    }));
    setSimulationResults([]);
  };

  // Saving the circuit
  const saveCircuit = () => {
    const circuitData = JSON.stringify(circuitState);
    localStorage.setItem('quantum-circuit', circuitData);
    toast.success("Circuit saved", {
      description: "Your quantum circuit has been saved to local storage."
    });
  };

  // Loading a saved circuit
  const loadCircuit = () => {
    const savedCircuit = localStorage.getItem('quantum-circuit');
    if (savedCircuit) {
      try {
        const parsedCircuit = JSON.parse(savedCircuit) as CircuitState;
        setCircuitState(parsedCircuit);
        toast.success("Circuit loaded", {
          description: "Your saved quantum circuit has been loaded."
        });
      } catch (error) {
        toast.error("Error loading circuit", {
          description: "There was an error loading your saved circuit."
        });
      }
    } else {
      toast.error("No saved circuit", {
        description: "You don't have any saved circuits."
      });
    }
  };

  // Exporting the circuit
  const exportCircuit = () => {
    const circuitData = JSON.stringify(circuitState, null, 2);
    const blob = new Blob([circuitData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'quantum-circuit.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  // Simulating the circuit
  const simulateCircuit = () => {
    setIsSimulating(true);
    
    // Simplified simulation for demo purposes
    // In a real implementation, this would connect to a quantum simulator API
    setTimeout(() => {
      // Generate mock results based on the circuit configuration
      const numQubits = circuitState.qubits;
      const numMeasurements = circuitState.measurements.filter(m => m).length;
      const possibleStates = Math.pow(2, numMeasurements);
      
      const mockResults: string[] = [];
      
      // Generate results based on gates applied
      // This is a very simplified model and doesn't reflect real quantum behavior
      const hasHadamard = circuitState.gates.some(gate => gate.type === 'H');
      
      if (hasHadamard) {
        // If we have Hadamard gates, create a superposition-like result
        for (let i = 0; i < possibleStates; i++) {
          const state = i.toString(2).padStart(numMeasurements, '0');
          const probability = (1 / possibleStates * 100).toFixed(1);
          mockResults.push(`|${state}⟩: ${probability}%`);
        }
      } else {
        // Without Hadamard, just show |0...0⟩ with 100% probability
        mockResults.push(`|${'0'.repeat(numMeasurements)}⟩: 100.0%`);
      }
      
      setSimulationResults(mockResults);
      setIsSimulating(false);
      
      toast.success("Simulation completed", {
        description: "Your quantum circuit has been simulated."
      });
    }, 1500);
  };

  // Render the circuit grid
  const renderCircuitGrid = () => {
    const gridCells = [];
    const gridWidth = 10; // Number of positions in the horizontal direction
    
    // Create the grid
    for (let qubit = 0; qubit < circuitState.qubits; qubit++) {
      const qubitRow = [];
      
      // Qubit label
      qubitRow.push(
        <div key={`label-${qubit}`} className="circuit-label flex items-center justify-center w-12 h-12">
          <span className="font-mono">q{qubit}</span>
        </div>
      );
      
      // Gate positions
      for (let pos = 0; pos < gridWidth; pos++) {
        const cellKey = `cell-${qubit}-${pos}`;
        const gatesAtPosition = circuitState.gates.filter(
          gate => gate.qubit === qubit && gate.position === pos
        );
        
        const controlPoints = circuitState.gates.filter(
          gate => gate.controlQubit === qubit && gate.position === pos
        );
        
        qubitRow.push(
          <div 
            key={cellKey} 
            className={`circuit-cell relative flex items-center justify-center w-12 h-12 border border-gray-700 border-opacity-20 hover:bg-quantum-purple/10`}
            onClick={() => addGate(qubit, pos)}
          >
            {gatesAtPosition.map(gate => (
              <div 
                key={gate.id} 
                className={`absolute flex items-center justify-center w-8 h-8 rounded-md ${gateColors[gate.type]}`}
                onClick={(e) => { e.stopPropagation(); removeGate(gate.id); }}
              >
                {gate.type}
              </div>
            ))}
            
            {controlPoints.map(gate => (
              <div 
                key={`control-${gate.id}`} 
                className="absolute flex items-center justify-center w-3 h-3 bg-amber-500 rounded-full"
              />
            ))}
          </div>
        );
      }
      
      // Measurement toggle
      qubitRow.push(
        <div 
          key={`measurement-${qubit}`} 
          className={`circuit-measurement flex items-center justify-center w-12 h-12 cursor-pointer ${circuitState.measurements[qubit] ? 'text-quantum-cyan' : 'text-muted-foreground'}`}
          onClick={() => toggleMeasurement(qubit)}
        >
          <Eye />
        </div>
      );
      
      gridCells.push(
        <div key={`row-${qubit}`} className="circuit-row flex">
          {qubitRow}
        </div>
      );
    }
    
    return (
      <div className="circuit-grid">
        {gridCells}
      </div>
    );
  };

  return (
    <Card className="quantum-card w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Quantum Circuit Builder</CardTitle>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={addQubit}
              className="flex items-center gap-1"
            >
              <Plus className="h-4 w-4" />
              Qubit
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              onClick={removeQubit}
              className="flex items-center gap-1"
            >
              <X className="h-4 w-4" />
              Qubit
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Gate selector */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="w-full md:w-auto flex flex-col">
              <label className="text-sm mb-1">Gate Type:</label>
              <div className="flex flex-wrap gap-2">
                {['H', 'X', 'Y', 'Z', 'CNOT', 'CZ', 'SWAP', 'T', 'S', 'Rx', 'Ry', 'Rz'].map((gate) => (
                  <Button 
                    key={gate} 
                    variant="outline" 
                    size="sm"
                    className={`min-w-[40px] text-xs font-mono ${selectedGate === gate ? `${gateColors[gate as GateType]}` : ''}`}
                    onClick={() => setSelectedGate(gate as GateType)}
                  >
                    {gate}
                  </Button>
                ))}
              </div>
            </div>
          </div>
          
          {/* Circuit grid */}
          <div className="bg-background/30 backdrop-blur-sm p-4 rounded-lg overflow-x-auto">
            {renderCircuitGrid()}
          </div>
          
          {/* Actions */}
          <div className="flex flex-wrap justify-between gap-2">
            <div className="space-x-2">
              <Button 
                variant="outline" 
                onClick={clearCircuit}
                className="flex items-center gap-1"
              >
                <Trash2 className="h-4 w-4" />
                Clear
              </Button>
              <Button 
                variant="outline" 
                onClick={saveCircuit}
                className="flex items-center gap-1"
              >
                <Save className="h-4 w-4" />
                Save
              </Button>
              <Button 
                variant="outline" 
                onClick={loadCircuit}
                className="flex items-center gap-1"
              >
                <Eye className="h-4 w-4" />
                Load
              </Button>
              <Button 
                variant="outline" 
                onClick={exportCircuit}
                className="flex items-center gap-1"
              >
                <Download className="h-4 w-4" />
                Export
              </Button>
            </div>
            
            <Button 
              onClick={simulateCircuit}
              disabled={isSimulating}
              className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity flex items-center gap-1"
            >
              {isSimulating ? (
                <>Simulating...</>
              ) : (
                <>
                  <Play className="h-4 w-4" />
                  Run Simulation
                </>
              )}
            </Button>
          </div>
          
          {/* Simulation results */}
          {simulationResults.length > 0 && (
            <div className="mt-4 p-4 bg-background/30 backdrop-blur-sm rounded-lg">
              <h3 className="text-lg font-bold mb-2">Simulation Results</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                {simulationResults.map((result, index) => (
                  <div 
                    key={index} 
                    className="p-2 bg-quantum-purple/10 rounded-md text-sm font-mono text-center"
                  >
                    {result}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QuantumCircuitBuilder;
