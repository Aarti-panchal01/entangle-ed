
import React, { useState, useRef, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { SendIcon, Bot, User, TrashIcon } from 'lucide-react';

interface Message {
  id: number;
  sender: 'user' | 'assistant';
  text: string;
  timestamp: Date;
}

const presetResponses: Record<string, string> = {
  "What is quantum computing?": "Quantum computing is a type of computation that harnesses the collective properties of quantum states, such as superposition, interference, and entanglement, to perform calculations. The devices that perform quantum computations are known as quantum computers.",
  "How does a qubit work?": "A qubit (quantum bit) is the basic unit of quantum information. Unlike classical bits that can be either 0 or 1, qubits can exist in a superposition of both states simultaneously. This property allows quantum computers to process a vast number of possibilities simultaneously.",
  "What is quantum entanglement?": "Quantum entanglement is a physical phenomenon that occurs when a pair or group of particles interact in ways such that the quantum state of each particle cannot be described independently of the state of the others, regardless of the distance separating them.",
  "What is Shor's algorithm?": "Shor's algorithm is a quantum algorithm for integer factorization. On a quantum computer, it can factor integers exponentially faster than the best-known algorithm running on a classical computer, making it a potential threat to current encryption methods like RSA.",
  "What is quantum supremacy?": "Quantum supremacy (or quantum advantage) refers to the point where a quantum computer can solve a problem that no classical computer can solve in a reasonable amount of time. Google claimed to have achieved this milestone in 2019 with their Sycamore processor.",
  "How many qubits are needed for practical quantum computing?": "The number of qubits needed depends on the application. For quantum error correction and solving real-world problems, estimates range from thousands to millions of qubits. Current quantum computers have around 50-100 qubits, with significant error rates.",
  "What is quantum decoherence?": "Quantum decoherence is the loss of quantum coherence, where quantum systems lose their quantum behavior and start behaving more like classical systems. It's a major challenge in quantum computing, as it leads to errors in calculations.",
  "What are quantum gates?": "Quantum gates are the basic quantum circuit operations that manipulate qubits. They are the quantum computing analog to classical logic gates. Common quantum gates include the Hadamard gate (creating superposition), Pauli-X gate (quantum NOT), CNOT gate (controlled-NOT), and many others."
};

const QuantumMentor = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: 'assistant',
      text: "Hello! I'm your Quantum Mentor, an AI assistant specialized in quantum computing. How can I help you today?",
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Scroll to bottom of messages
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Process user message and generate response
  const processMessage = (userMessage: string) => {
    // Simple keyword matching for demo purposes
    const lowerMessage = userMessage.toLowerCase();
    let response = "I'm still learning about that. Would you like to explore our learning modules for more information?";
    
    // Check for exact matches in preset responses
    for (const [question, answer] of Object.entries(presetResponses)) {
      if (lowerMessage.includes(question.toLowerCase())) {
        response = answer;
        break;
      }
    }
    
    // Check for keywords if no exact match
    if (lowerMessage.includes("entanglement")) {
      response = "Quantum entanglement is a phenomenon where two or more quantum particles become correlated in such a way that the quantum state of each particle cannot be described independently of the others, regardless of the distance separating them. Einstein famously referred to this as 'spooky action at a distance.'";
    } else if (lowerMessage.includes("superposition")) {
      response = "Superposition is a principle of quantum mechanics that describes a quantum particle's ability to exist in multiple states simultaneously until measured. This property is fundamental to quantum computing.";
    } else if (lowerMessage.includes("circuit") || lowerMessage.includes("builder")) {
      response = "Our quantum circuit builder allows you to create and simulate quantum circuits. Would you like me to show you how to use it?";
    } else if (lowerMessage.includes("course") || lowerMessage.includes("learn")) {
      response = "We offer courses from beginner to expert level in quantum computing. I recommend starting with 'Quantum Computing Fundamentals' if you're new to the field.";
    } else if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      response = "Hello there! How can I assist you with quantum computing today?";
    } else if (lowerMessage.includes("thank")) {
      response = "You're welcome! Feel free to ask if you have more questions about quantum computing.";
    } else if (lowerMessage.includes("help")) {
      response = "I can help you understand quantum computing concepts, guide you through our courses, or assist with using our quantum circuit builder. What would you like to know more about?";
    } else if (lowerMessage.includes("ar") || lowerMessage.includes("augmented reality")) {
      response = "Our AR feature allows you to visualize quantum states and phenomena in 3D using your mobile device. Try it out by navigating to the AR section!";
    }
    
    return response;
  };

  // Handle send message
  const handleSendMessage = () => {
    if (!input.trim()) return;
    
    const userMessage = {
      id: messages.length + 1,
      sender: 'user' as const,
      text: input.trim(),
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    
    // Simulate AI thinking time
    setTimeout(() => {
      const aiResponse = {
        id: messages.length + 2,
        sender: 'assistant' as const,
        text: processMessage(userMessage.text),
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };
  
  // Handle Enter key
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  // Clear chat history
  const clearChat = () => {
    setMessages([
      {
        id: 1,
        sender: 'assistant',
        text: "Hello! I'm your Quantum Mentor, an AI assistant specialized in quantum computing. How can I help you today?",
        timestamp: new Date()
      }
    ]);
  };
  
  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <Card className="quantum-card flex flex-col h-[600px]">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-r from-quantum-purple to-quantum-cyan flex items-center justify-center">
              <Bot className="h-4 w-4 text-white" />
            </div>
            <CardTitle>Quantum Mentor</CardTitle>
          </div>
          <div className="flex gap-2">
            <Button 
              size="sm" 
              variant="ghost" 
              onClick={clearChat}
              className="h-8 w-8 p-0"
              title="Clear chat"
            >
              <TrashIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="flex-grow overflow-y-auto pb-0">
        <div className="space-y-4">
          {messages.map(message => (
            <div 
              key={message.id} 
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`flex gap-3 max-w-[80%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                {message.sender === 'assistant' ? (
                  <Avatar className="h-8 w-8 bg-quantum-purple/20">
                    <AvatarFallback className="text-xs text-white bg-gradient-to-r from-quantum-purple to-quantum-cyan">AI</AvatarFallback>
                  </Avatar>
                ) : (
                  <Avatar className="h-8 w-8 bg-muted">
                    <AvatarFallback className="text-xs">
                      <User className="h-4 w-4" />
                    </AvatarFallback>
                  </Avatar>
                )}
                <div 
                  className={`py-2 px-4 rounded-lg ${
                    message.sender === 'assistant' 
                      ? 'bg-muted text-foreground' 
                      : 'bg-gradient-to-r from-quantum-purple to-quantum-blue text-white'
                  }`}
                >
                  <div className="text-sm">{message.text}</div>
                  <div className="text-[10px] opacity-70 mt-1">{formatTime(message.timestamp)}</div>
                </div>
              </div>
            </div>
          ))}
          
          {isTyping && (
            <div className="flex justify-start">
              <div className="flex gap-3 max-w-[80%]">
                <Avatar className="h-8 w-8 bg-quantum-purple/20">
                  <AvatarFallback className="text-xs text-white bg-gradient-to-r from-quantum-purple to-quantum-cyan">AI</AvatarFallback>
                </Avatar>
                <div className="py-2 px-4 rounded-lg bg-muted text-foreground">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 rounded-full bg-quantum-purple animate-pulse"></div>
                    <div className="w-2 h-2 rounded-full bg-quantum-blue animate-pulse delay-200"></div>
                    <div className="w-2 h-2 rounded-full bg-quantum-cyan animate-pulse delay-500"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      
      <CardFooter className="pt-4">
        <div className="flex w-full items-center space-x-2">
          <Input
            placeholder="Ask about quantum computing..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-grow"
            disabled={isTyping}
          />
          <Button
            size="icon"
            onClick={handleSendMessage}
            disabled={isTyping || !input.trim()}
            className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
          >
            <SendIcon className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default QuantumMentor;
