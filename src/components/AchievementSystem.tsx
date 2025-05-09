
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Award, BookOpen, Star, Trophy, CheckCircle, Lock, Zap, Brain } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: React.ReactNode;
  progress: number;
  maxProgress: number;
  unlocked: boolean;
}

const achievements: Achievement[] = [
  {
    id: 'quantum-beginner',
    name: 'Quantum Beginner',
    description: 'Complete your first quantum computing module',
    icon: <BookOpen className="h-5 w-5 text-quantum-purple" />,
    progress: 1,
    maxProgress: 1,
    unlocked: true
  },
  {
    id: 'circuit-builder',
    name: 'Circuit Architect',
    description: 'Create 5 quantum circuits',
    icon: <Zap className="h-5 w-5 text-quantum-blue" />,
    progress: 3,
    maxProgress: 5,
    unlocked: false
  },
  {
    id: 'quick-learner',
    name: 'Quick Learner',
    description: 'Complete a module in a single day',
    icon: <Brain className="h-5 w-5 text-quantum-cyan" />,
    progress: 1,
    maxProgress: 1,
    unlocked: true
  },
  {
    id: 'quantum-master',
    name: 'Quantum Master',
    description: 'Complete all beginner modules',
    icon: <Trophy className="h-5 w-5 text-amber-500" />,
    progress: 3,
    maxProgress: 5,
    unlocked: false
  },
  {
    id: 'entanglement-expert',
    name: 'Entanglement Expert',
    description: 'Successfully simulate an entangled state',
    icon: <Star className="h-5 w-5 text-pink-500" />,
    progress: 0,
    maxProgress: 1,
    unlocked: false
  },
  {
    id: 'quantum-explorer',
    name: 'Quantum Explorer',
    description: 'Complete 5 different lessons',
    icon: <Award className="h-5 w-5 text-purple-500" />,
    progress: 5,
    maxProgress: 5,
    unlocked: true
  }
];

const AchievementSystem = () => {
  return (
    <Card className="quantum-card">
      <CardContent className="pt-6">
        <div className="grid gap-4">
          <div className="pb-4 border-b border-border flex items-center justify-between">
            <div>
              <h3 className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-cyan">Achievements</h3>
              <p className="text-sm text-muted-foreground">Track your quantum learning journey</p>
            </div>
            <Badge variant="outline" className="bg-quantum-purple/20 text-quantum-purple">
              {achievements.filter(a => a.unlocked).length}/{achievements.length} Unlocked
            </Badge>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2">
            {achievements.map((achievement) => (
              <div 
                key={achievement.id}
                className={`p-4 rounded-lg border ${achievement.unlocked ? 'border-quantum-purple/30 bg-quantum-purple/5' : 'border-border bg-background/30'}`}
              >
                <div className="flex items-start gap-3">
                  <div className={`p-2 rounded-full ${achievement.unlocked ? 'bg-quantum-purple/20' : 'bg-muted'}`}>
                    {achievement.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">{achievement.name}</h4>
                      {achievement.unlocked ? (
                        <CheckCircle className="h-4 w-4 text-green-500" />
                      ) : (
                        <Lock className="h-4 w-4 text-muted-foreground" />
                      )}
                    </div>
                    
                    <p className="text-xs text-muted-foreground mb-2">
                      {achievement.description}
                    </p>
                    
                    <div className="flex items-center gap-2">
                      <Progress 
                        value={(achievement.progress / achievement.maxProgress) * 100} 
                        className="h-1.5 flex-1" 
                      />
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {achievement.progress}/{achievement.maxProgress}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default AchievementSystem;
