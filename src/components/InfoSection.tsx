
import React, { useState } from 'react';
import InfoCard from './InfoCard';
import { AtomIcon, Brain, Lightbulb, Network, Share2 } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const InfoSection = () => {
  const [selectedInfo, setSelectedInfo] = useState<string | null>(null);
  
  const infoDetails = {
    "Quantum Superposition": {
      title: "Quantum Superposition in Decision Making",
      description: "Cognitive states exist in superposition until measured, explaining why preferences can seem undetermined until a choice is made.",
      detailedExplanation: "In quantum cognition theory, mental states are represented as superpositions of potential thoughts or beliefs, similar to how quantum particles can exist in multiple states simultaneously. This framework helps explain why human preferences can appear inconsistent or undetermined until the moment a decision is made. The act of making a choice is analogous to measurement in quantum mechanics, which collapses the superposition into a definite state.",
      examples: [
        "A consumer undecided between two products until forced to choose",
        "Political opinions that seem contradictory until questioned directly",
        "Taste preferences that depend on the context of questioning"
      ]
    },
    "Contextuality": {
      title: "Contextuality in Human Judgment",
      description: "Human judgments depend on context in ways that violate classical probability, similar to quantum contextuality.",
      detailedExplanation: "Contextuality refers to how measurements or observations depend on the context in which they're made. In human cognition, this manifests as judgments that change depending on the framing or sequence of questions, violating the mathematical rules of classical probability. Quantum probability theory provides a natural framework for modeling these contextual effects.",
      examples: [
        "Framing effects where identical problems with different wording lead to different choices",
        "Ordering effects where question sequence changes people's responses",
        "Switching preferences when options are presented in different contexts"
      ]
    },
    "Interference Effects": {
      title: "Quantum Interference in Cognition",
      description: "Cognitive processes show interference patterns where considering multiple options together produces different results than separately.",
      detailedExplanation: "Quantum interference occurs when multiple possibilities interact, either constructively (amplifying each other) or destructively (canceling each other out). In cognition, this helps explain why considering options together can lead to different judgments than evaluating them separately. This effect is mathematically captured in quantum probability's wave-like mathematics.",
      examples: [
        "The conjunction fallacy, where a specific scenario seems more probable than a general one",
        "Disjunction effects, where preferences for A over B reverse when a third option C is introduced",
        "Decision making where A is preferred to B, B to C, but C to A (intransitivity)"
      ]
    },
    "Order Effects": {
      title: "Order Effects and Non-commutativity",
      description: "The sequence of questions affects answers in ways that classical probability cannot explain, but quantum models can.",
      detailedExplanation: "Quantum models incorporate non-commutative operations, where the order of operations matters. This provides a natural framework for modeling how the sequence of questions influences human judgments. In classical probability, the order of questions should not affect the joint probability of answers, but human responses consistently violate this principle.",
      examples: [
        "Political polling where asking about one candidate before another affects approval ratings",
        "Medical diagnosis where the sequence of tests influences the final assessment",
        "Personality assessments where earlier questions prime responses to later ones"
      ]
    },
    "Conjunction Fallacy": {
      title: "The Conjunction Fallacy and Quantum Probability",
      description: "Quantum probability provides a natural explanation for why people sometimes judge conjunctions more likely than their constituents.",
      detailedExplanation: "The conjunction fallacy occurs when people judge the probability of two events occurring together (a conjunction) as more likely than one of the constituent events alone—a clear violation of classical probability theory. Quantum probability theory, with its interference effects, provides a mathematical framework that can accommodate this seemingly irrational behavior.",
      examples: [
        "The famous Linda problem: people judge 'Linda is a bank teller and active in the feminist movement' as more likely than 'Linda is a bank teller'",
        "Risk assessments where specific scenarios are judged more probable than general ones",
        "Consumer predictions where detailed future scenarios seem more plausible than broader ones"
      ]
    }
  };
  
  const handleInfoCardClick = (title: string) => {
    setSelectedInfo(title);
  };
  
  const closeDialog = () => {
    setSelectedInfo(null);
  };
  
  const selectedContent = selectedInfo ? infoDetails[selectedInfo as keyof typeof infoDetails] : null;

  return (
    <section className="py-12 md:py-24 bg-muted/20">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
            Understanding Quantum Cognition
          </h2>
          <p className="text-muted-foreground">
            Explore how quantum theory principles help explain paradoxes in human cognition
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <InfoCard 
            title="Quantum Superposition" 
            description="Cognitive states exist in superposition until measured, explaining why preferences can seem undetermined until a choice is made."
            icon={<AtomIcon className="h-6 w-6" />}
            onClick={() => handleInfoCardClick("Quantum Superposition")}
          />
          <InfoCard 
            title="Contextuality" 
            description="Human judgments depend on context in ways that violate classical probability, similar to quantum contextuality."
            icon={<Network className="h-6 w-6" />}
            onClick={() => handleInfoCardClick("Contextuality")}
          />
          <InfoCard 
            title="Interference Effects" 
            description="Cognitive processes show interference patterns where considering multiple options together produces different results than separately."
            icon={<Share2 className="h-6 w-6" />}
            onClick={() => handleInfoCardClick("Interference Effects")}
          />
          <InfoCard 
            title="Order Effects" 
            description="The sequence of questions affects answers in ways that classical probability cannot explain, but quantum models can."
            icon={<Lightbulb className="h-6 w-6" />}
            onClick={() => handleInfoCardClick("Order Effects")}
          />
          <InfoCard 
            title="Conjunction Fallacy" 
            description="Quantum probability provides a natural explanation for why people sometimes judge conjunctions more likely than their constituents."
            icon={<Brain className="h-6 w-6" />}
            onClick={() => handleInfoCardClick("Conjunction Fallacy")}
          />
        </div>
      </div>
      
      {/* Detailed information dialog */}
      <Dialog open={!!selectedInfo} onOpenChange={closeDialog}>
        <DialogContent className="sm:max-w-[600px] bg-card/95 backdrop-blur-md">
          {selectedContent && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-cyan">
                  {selectedContent.title}
                </DialogTitle>
                <DialogDescription className="text-base text-foreground/90">
                  {selectedContent.description}
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 space-y-4">
                <p className="text-sm text-foreground/90">
                  {selectedContent.detailedExplanation}
                </p>
                
                <div>
                  <h4 className="text-sm font-semibold mb-2 text-quantum-cyan">Examples:</h4>
                  <ul className="list-disc pl-5 text-sm text-foreground/80 space-y-1">
                    {selectedContent.examples.map((example, index) => (
                      <li key={index}>{example}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default InfoSection;
