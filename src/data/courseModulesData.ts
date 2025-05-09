
// Course modules data based on the user's requirements
export const quantumComputingModules = [
  {
    id: 'module-1',
    title: 'Module 1: Introduction to Qubits & Quantum Mechanics',
    status: 'completed' as const,
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'What is a Qubit?',
        description: 'Introduction to the quantum bit (qubit), the fundamental unit of quantum information. Learn how qubits differ from classical bits and form the foundation of quantum computing.',
        status: 'completed' as const,
        videoUrl: '/videos/qubit-intro.mp4',
        simulationUrl: '/simulator/qubit-visualization'
      },
      {
        id: 'lesson-1-2',
        title: 'Classical vs. Quantum Bits',
        description: 'Compare classical binary bits with quantum bits, exploring the limitations of classical computing and the new possibilities that quantum computing unlocks.',
        status: 'completed' as const,
        videoUrl: '/videos/classical-vs-quantum.mp4',
        simulationUrl: '/simulator/bit-comparison'
      },
      {
        id: 'lesson-1-3',
        title: 'Bloch Sphere Visualization',
        description: 'Learn how to represent and visualize qubits using the Bloch sphere, an intuitive geometric representation of a qubit's quantum state in three dimensions.',
        status: 'completed' as const,
        videoUrl: '/videos/bloch-sphere.mp4',
        simulationUrl: '/simulator/bloch-sphere'
      },
      {
        id: 'lesson-1-4',
        title: 'Measurement & Probabilistic States',
        description: 'Understand how quantum measurement works, the probabilistic nature of quantum states, and the concept of quantum wave function collapse.',
        status: 'completed' as const,
        videoUrl: '/videos/quantum-measurement.mp4',
        simulationUrl: '/simulator/measurement-demo'
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Module 2: Quantum Superposition & Interference',
    status: 'in-progress' as const,
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'Principle of Superposition',
        description: 'Explore the fundamental quantum principle that allows qubits to exist in multiple states simultaneously. Learn how superposition enables quantum parallelism.',
        status: 'in-progress' as const,
        videoUrl: '/videos/superposition.mp4',
        simulationUrl: '/simulator/superposition-demo'
      },
      {
        id: 'lesson-2-2',
        title: 'Wave–Particle Duality',
        description: 'Discover how quantum objects exhibit both wave-like and particle-like properties, and how this duality relates to quantum computing principles.',
        status: 'locked' as const,
        videoUrl: '/videos/wave-particle.mp4',
        simulationUrl: '/simulator/wave-particle-demo'
      },
      {
        id: 'lesson-2-3',
        title: 'Double-Slit Experiment',
        description: 'Interact with a simulation of the famous double-slit experiment that demonstrates the wave-particle duality of quantum particles and interference patterns.',
        status: 'locked' as const,
        videoUrl: '/videos/double-slit.mp4',
        simulationUrl: '/simulator/double-slit-interactive'
      },
      {
        id: 'lesson-2-4',
        title: 'Constructive & Destructive Interference',
        description: 'Learn about quantum interference patterns, and how constructive and destructive interference plays a crucial role in quantum algorithms.',
        status: 'locked' as const,
        videoUrl: '/videos/interference.mp4',
        simulationUrl: '/simulator/interference-patterns'
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Module 3: Quantum Gates & Circuits',
    status: 'locked' as const,
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Pauli X, Y, Z Gates',
        description: 'Study the fundamental single-qubit Pauli gates, their matrix representations, and how they manipulate qubits by rotating them around different axes of the Bloch sphere.',
        status: 'locked' as const,
        videoUrl: '/videos/pauli-gates.mp4',
        simulationUrl: '/simulator/pauli-gates-demo'
      },
      {
        id: 'lesson-3-2',
        title: 'Hadamard & Phase Gates',
        description: 'Learn about the Hadamard gate that creates superposition and the Phase gate that introduces quantum phase shifts, critical components for quantum algorithms.',
        status: 'locked' as const,
        videoUrl: '/videos/hadamard-phase.mp4',
        simulationUrl: '/simulator/hadamard-demo'
      },
      {
        id: 'lesson-3-3',
        title: 'CNOT & Controlled Gates',
        description: 'Explore multi-qubit operations with controlled gates, particularly the CNOT gate, which is essential for creating entanglement between qubits.',
        status: 'locked' as const,
        videoUrl: '/videos/cnot-gates.mp4',
        simulationUrl: '/simulator/cnot-demo'
      },
      {
        id: 'lesson-3-4',
        title: 'Building & Simulating a Simple Circuit',
        description: 'Apply your knowledge by building and simulating a simple quantum circuit that implements a basic quantum algorithm using multiple gates.',
        status: 'locked' as const,
        videoUrl: '/videos/simple-circuit.mp4',
        simulationUrl: '/simulator/circuit-builder'
      }
    ]
  },
  {
    id: 'module-4',
    title: 'Module 4: Entanglement & Teleportation',
    status: 'locked' as const,
    lessons: [
      {
        id: 'lesson-4-1',
        title: 'EPR Pairs & Bell States',
        description: 'Understand quantum entanglement through EPR pairs and Bell states, where qubits become correlated in ways that have no classical analog.',
        status: 'locked' as const,
        videoUrl: '/videos/bell-states.mp4',
        simulationUrl: '/simulator/bell-states-demo'
      },
      {
        id: 'lesson-4-2',
        title: 'Entanglement Visualization',
        description: 'Use augmented reality to visualize entangled quantum states and understand the non-local correlations that exist between entangled qubits.',
        status: 'locked' as const,
        videoUrl: '/videos/entanglement-visual.mp4',
        simulationUrl: '/ar/entanglement-demo'
      },
      {
        id: 'lesson-4-3',
        title: 'Quantum Teleportation Protocol',
        description: 'Learn the theoretical framework behind quantum teleportation, which transfers quantum states using entanglement and classical communication.',
        status: 'locked' as const,
        videoUrl: '/videos/teleportation-theory.mp4',
        simulationUrl: '/simulator/teleportation-steps'
      },
      {
        id: 'lesson-4-4',
        title: 'Hands-on Teleportation Circuit',
        description: 'Build and simulate a quantum circuit that implements the quantum teleportation protocol, transferring a quantum state from one qubit to another.',
        status: 'locked' as const,
        videoUrl: '/videos/teleportation-circuit.mp4',
        simulationUrl: '/simulator/teleportation-builder'
      }
    ]
  },
  {
    id: 'module-5',
    title: 'Module 5: Quantum Algorithms',
    status: 'locked' as const,
    lessons: [
      {
        id: 'lesson-5-1',
        title: 'Deutsch–Jozsa Algorithm',
        description: 'Study one of the first quantum algorithms that demonstrates quantum advantage, solving a specific problem exponentially faster than any classical algorithm.',
        status: 'locked' as const,
        videoUrl: '/videos/deutsch-jozsa.mp4',
        simulationUrl: '/simulator/deutsch-jozsa-demo'
      },
      {
        id: 'lesson-5-2',
        title: "Grover's Search",
        description: 'Learn about Grover's algorithm, which provides quadratic speedup for searching unstructured databases, a significant quantum advantage for search problems.',
        status: 'locked' as const,
        videoUrl: '/videos/grover-search.mp4',
        simulationUrl: '/simulator/grover-demo'
      },
      {
        id: 'lesson-5-3',
        title: "Shor's Factoring Overview",
        description: 'Explore Shor's factoring algorithm, which can efficiently factor large numbers and potentially break RSA encryption, demonstrating quantum computing's disruptive potential.',
        status: 'locked' as const,
        videoUrl: '/videos/shor-overview.mp4',
        simulationUrl: '/simulator/shor-visualization'
      },
      {
        id: 'lesson-5-4',
        title: 'Interactive Algorithm Simulator',
        description: 'Experiment with interactive simulations of quantum algorithms, comparing their performance to classical counterparts and visualizing their quantum advantage.',
        status: 'locked' as const,
        videoUrl: '/videos/algorithm-comparison.mp4',
        simulationUrl: '/simulator/algorithm-playground'
      }
    ]
  },
  {
    id: 'module-6',
    title: 'Module 6: Quantum Error Correction & Noise',
    status: 'locked' as const,
    lessons: [
      {
        id: 'lesson-6-1',
        title: 'Sources of Decoherence',
        description: 'Understand the challenges of quantum decoherence and noise, which cause quantum systems to lose their quantum properties and limit quantum computer performance.',
        status: 'locked' as const,
        videoUrl: '/videos/decoherence.mp4',
        simulationUrl: '/simulator/decoherence-demo'
      },
      {
        id: 'lesson-6-2',
        title: 'Bit-Flip & Phase-Flip Codes',
        description: 'Learn basic quantum error correction techniques to protect against bit-flip and phase-flip errors, the quantum analogs of classical bit errors.',
        status: 'locked' as const,
        videoUrl: '/videos/error-codes.mp4',
        simulationUrl: '/simulator/error-correction-basics'
      },
      {
        id: 'lesson-6-3',
        title: 'Surface Codes Basics',
        description: 'Explore surface codes, a promising approach to scalable quantum error correction that arranges qubits in a two-dimensional lattice structure.',
        status: 'locked' as const,
        videoUrl: '/videos/surface-codes.mp4',
        simulationUrl: '/simulator/surface-code-visual'
      },
      {
        id: 'lesson-6-4',
        title: 'Error-Correction Circuit Builder',
        description: 'Design and simulate quantum error correction circuits to see how redundancy and syndrome measurements can protect quantum information from noise.',
        status: 'locked' as const,
        videoUrl: '/videos/error-circuit.mp4',
        simulationUrl: '/simulator/error-correction-builder'
      }
    ]
  },
  {
    id: 'module-7',
    title: 'Module 7: Advanced Topics & Frontier',
    status: 'locked' as const,
    lessons: [
      {
        id: 'lesson-7-1',
        title: 'Topological Qubits',
        description: 'Discover cutting-edge research on topological qubits, which use exotic quantum states of matter to create error-resistant quantum computing platforms.',
        status: 'locked' as const,
        videoUrl: '/videos/topological-qubits.mp4',
        simulationUrl: '/simulator/topological-visual'
      },
      {
        id: 'lesson-7-2',
        title: 'Quantum Machine Learning',
        description: 'Explore the intersection of quantum computing and machine learning, where quantum algorithms may provide advantages for certain ML tasks and models.',
        status: 'locked' as const,
        videoUrl: '/videos/quantum-ml.mp4',
        simulationUrl: '/simulator/qml-demo'
      },
      {
        id: 'lesson-7-3',
        title: 'Quantum Supremacy & Applications',
        description: 'Learn about quantum supremacy demonstrations and potential real-world applications of quantum computing in chemistry, materials science, optimization, and more.',
        status: 'locked' as const,
        videoUrl: '/videos/quantum-applications.mp4',
        simulationUrl: '/simulator/application-explorer'
      },
      {
        id: 'lesson-7-4',
        title: 'Research Pathways & Resources',
        description: 'Discover pathways to continue your quantum computing education, with curated resources for further learning and potential research directions in the field.',
        status: 'locked' as const,
        videoUrl: '/videos/research-pathways.mp4',
        simulationUrl: '/resources/quantum-research'
      }
    ]
  }
];
