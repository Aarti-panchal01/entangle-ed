
// Course modules data for Quantum Cognition Builder course
export const quantumComputingModules = [
  {
    id: 'module-1',
    title: 'Module 1: Foundations of Quantum Computing',
    status: 'in-progress' as const,
    lessons: [
      {
        id: 'lesson-1-1',
        title: 'Understanding Qubits',
        description: 'The fundamental unit of quantum information that represents quantum states. Unlike classical bits that can only be 0 or 1, qubits can exist in a superposition of both states simultaneously, enabling quantum computers to process vast amounts of information in parallel.',
        status: 'completed' as const,
        videoUrl: '/videos/qubit-intro.mp4',
        simulationUrl: '/simulator/qubit-visualization'
      },
      {
        id: 'lesson-1-2',
        title: 'Quantum States and Notation',
        description: 'An exploration of Dirac notation (bra-ket) used to represent quantum states mathematically. This lesson covers state vectors, basis states, and how to interpret the mathematical formalism that describes qubit states, providing the language necessary for quantum algorithms.',
        status: 'in-progress' as const,
        videoUrl: '/videos/quantum-notation.mp4',
        simulationUrl: '/simulator/state-notation'
      },
      {
        id: 'lesson-1-3',
        title: 'Bloch Sphere Visualization',
        description: 'Learn how to represent and visualize qubits using the Bloch sphere, an intuitive geometric representation of a qubit\'s quantum state in three dimensions. This powerful visualization tool helps conceptualize quantum operations as rotations in 3D space.',
        status: 'locked' as const,
        videoUrl: '/videos/bloch-sphere.mp4',
        simulationUrl: '/simulator/bloch-sphere'
      }
    ]
  },
  {
    id: 'module-2',
    title: 'Module 2: Quantum Principles and Phenomena',
    status: 'locked' as const,
    lessons: [
      {
        id: 'lesson-2-1',
        title: 'Quantum Superposition',
        description: 'A deep dive into superposition, where quantum systems exist in multiple states simultaneously. This lesson examines how superposition differs from classical probability, why it\'s central to quantum computing\'s power, and how it enables quantum parallelism for exponential speedup in certain computations.',
        status: 'locked' as const,
        videoUrl: '/videos/superposition.mp4',
        simulationUrl: '/simulator/superposition-demo'
      },
      {
        id: 'lesson-2-2',
        title: 'Quantum Entanglement',
        description: 'Exploring quantum entanglement, the phenomenon Einstein called "spooky action at a distance." This lesson covers how entangled qubits form correlated systems where measuring one instantly determines the state of another, regardless of the distance separating them, enabling quantum teleportation and super-dense coding.',
        status: 'locked' as const,
        videoUrl: '/videos/entanglement.mp4',
        simulationUrl: '/simulator/entanglement-demo'
      },
      {
        id: 'lesson-2-3',
        title: 'Quantum Interference',
        description: 'Understanding quantum interference, where probability amplitudes can combine constructively or destructively. This lesson shows how interference is harnessed in quantum algorithms to amplify correct answers and suppress incorrect ones, forming the basis for quantum algorithm speedups.',
        status: 'locked' as const,
        videoUrl: '/videos/interference.mp4',
        simulationUrl: '/simulator/interference-patterns'
      }
    ]
  },
  {
    id: 'module-3',
    title: 'Module 3: Quantum Gates and Circuits',
    status: 'locked' as const,
    lessons: [
      {
        id: 'lesson-3-1',
        title: 'Single-Qubit Gates',
        description: 'An examination of fundamental quantum gates that operate on individual qubits, including the Pauli gates (X, Y, Z), Hadamard gate, and phase gates. This lesson covers how these gates transform qubit states, their matrix representations, and how they correspond to rotations on the Bloch sphere.',
        status: 'locked' as const,
        videoUrl: '/videos/single-qubit-gates.mp4',
        simulationUrl: '/simulator/single-qubit-gates-demo'
      },
      {
        id: 'lesson-3-2',
        title: 'Multi-Qubit Gates',
        description: 'Analysis of gates that operate on multiple qubits, with focus on the CNOT (controlled-NOT) gate. This lesson explores how these gates create entanglement, their role in universal quantum computation, and how they enable complex quantum algorithms through controlled operations.',
        status: 'locked' as const,
        videoUrl: '/videos/multi-qubit-gates.mp4',
        simulationUrl: '/simulator/multi-qubit-demo'
      },
      {
        id: 'lesson-3-3',
        title: 'Circuit Construction',
        description: 'Principles of designing quantum circuits by combining gates into algorithmic sequences. This lesson teaches circuit notation, how to translate algorithms into gate sequences, quantum circuit optimization techniques, and the concept of circuit depth and width.',
        status: 'locked' as const,
        videoUrl: '/videos/circuit-design.mp4',
        simulationUrl: '/simulator/circuit-builder'
      }
    ]
  },
  {
    id: 'module-4',
    title: 'Module 4: Quantum Algorithms',
    status: 'locked' as const,
    lessons: [
      {
        id: 'lesson-4-1',
        title: 'Quantum Fourier Transform',
        description: 'A comprehensive look at the Quantum Fourier Transform (QFT), the quantum analog of the classical Fast Fourier Transform. This lesson explains how QFT achieves exponential speedup over classical FFT by leveraging quantum superposition, and its critical role as a subroutine in many quantum algorithms.',
        status: 'locked' as const,
        videoUrl: '/videos/qft.mp4',
        simulationUrl: '/simulator/qft-demo'
      },
      {
        id: 'lesson-4-2',
        title: 'Grover\'s Search Algorithm',
        description: 'Detailed walkthrough of Grover\'s algorithm, which provides a quadratic speedup for searching unstructured databases. This lesson covers the amplitude amplification technique, oracle implementation, geometric interpretation, and practical applications in optimization problems.',
        status: 'locked' as const,
        videoUrl: '/videos/grover.mp4',
        simulationUrl: '/simulator/grover-search'
      },
      {
        id: 'lesson-4-3',
        title: 'Shor\'s Factoring Algorithm',
        description: 'Analysis of Shor\'s algorithm, which can efficiently factor large integers exponentially faster than the best-known classical algorithms. This lesson examines its threat to RSA encryption, its use of period-finding and modular arithmetic, and the implementation of quantum phase estimation.',
        status: 'locked' as const,
        videoUrl: '/videos/shor.mp4',
        simulationUrl: '/simulator/shor-factoring'
      }
    ]
  },
  {
    id: 'module-5',
    title: 'Module 5: Quantum Applications and Future',
    status: 'locked' as const,
    lessons: [
      {
        id: 'lesson-5-1',
        title: 'Quantum Machine Learning',
        description: 'Investigation of quantum approaches to machine learning tasks. This lesson explores quantum neural networks, quantum support vector machines, quantum principal component analysis, and how quantum computers might accelerate training or improve classification for certain problem classes.',
        status: 'locked' as const,
        videoUrl: '/videos/quantum-ml.mp4',
        simulationUrl: '/simulator/quantum-ml-demo'
      },
      {
        id: 'lesson-5-2',
        title: 'Quantum Chemistry and Materials',
        description: 'Overview of quantum computing applications in simulating molecules and materials. This lesson covers how quantum computers can efficiently model electron interactions, potentially revolutionizing drug discovery, catalyst design, and materials science by accurately simulating quantum systems.',
        status: 'locked' as const,
        videoUrl: '/videos/quantum-chem.mp4',
        simulationUrl: '/simulator/molecule-simulation'
      },
      {
        id: 'lesson-5-3',
        title: 'Challenges and Future Directions',
        description: 'Discussion of current limitations in quantum computing including decoherence, error rates, and scaling issues. This lesson explores quantum error correction techniques, the path to quantum advantage, emerging qubit technologies, and potential breakthrough applications as the field matures.',
        status: 'locked' as const,
        videoUrl: '/videos/quantum-future.mp4',
        simulationUrl: '/simulator/error-correction-demo'
      }
    ]
  }
];
