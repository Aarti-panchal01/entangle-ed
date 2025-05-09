
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, CheckCircle, Circle, Lock, Play } from 'lucide-react';
import { toast } from 'sonner';

type LessonStatus = 'completed' | 'in-progress' | 'locked';

interface Lesson {
  id: string;
  title: string;
  description: string;
  status: LessonStatus;
  videoUrl?: string;
  simulationUrl?: string;
}

interface Module {
  id: string;
  title: string;
  status: LessonStatus;
  lessons: Lesson[];
}

interface CourseModulesProps {
  modules: Module[];
}

const CourseModules: React.FC<CourseModulesProps> = ({ modules }) => {
  const [expandedModules, setExpandedModules] = useState<string[]>([modules[0].id]);
  const [expandedLessons, setExpandedLessons] = useState<string[]>([]);
  
  const handleModuleClick = (moduleId: string) => {
    setExpandedModules(prev => 
      prev.includes(moduleId) 
        ? prev.filter(id => id !== moduleId) 
        : [...prev, moduleId]
    );
  };

  const handleLessonAction = (lesson: Lesson) => {
    if (lesson.status === 'locked') {
      toast.error('This lesson is locked', {
        description: 'Complete the prerequisite lessons to unlock this content'
      });
      return;
    }
    
    // Toggle expanded state for the lesson
    setExpandedLessons(prev => 
      prev.includes(lesson.id) 
        ? prev.filter(id => id !== lesson.id) 
        : [...prev, lesson.id]
    );
    
    const action = lesson.status === 'completed' ? 'Review' : 'Continue';
    toast.success(`${action} lesson`, {
      description: `Loading ${lesson.title}`
    });
  };

  const handleLearnClick = (lesson: Lesson) => {
    if (lesson.status === 'locked') return;
    
    // Always expand the lesson to show its content
    if (!expandedLessons.includes(lesson.id)) {
      setExpandedLessons(prev => [...prev, lesson.id]);
    }
    
    toast.success('Opening lesson content', {
      description: `Loading ${lesson.title} details`
    });
  };

  const handleTryItClick = (lesson: Lesson) => {
    if (lesson.status === 'locked') return;
    
    toast.success('Loading interactive element', {
      description: `Opening ${lesson.title} simulator`
    });
  };

  const getStatusIcon = (status: LessonStatus) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'in-progress':
        return <Circle className="h-5 w-5 text-blue-500 border-2 border-blue-500 rounded-full" />;
      case 'locked':
        return <Lock className="h-5 w-5 text-muted-foreground" />;
      default:
        return <Circle className="h-5 w-5" />;
    }
  };

  const getStatusBadge = (status: LessonStatus) => {
    switch (status) {
      case 'completed':
        return (
          <Badge variant="outline" className="bg-green-500/20 text-green-500 border-green-500/50">
            Completed
          </Badge>
        );
      case 'in-progress':
        return (
          <Badge variant="outline" className="bg-blue-500/20 text-blue-500 border-blue-500/50">
            In Progress
          </Badge>
        );
      case 'locked':
        return (
          <Badge variant="outline" className="bg-muted text-muted-foreground">
            Locked
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6">
      {modules.map((module) => (
        <Card 
          key={module.id}
          className={`quantum-card transition-all duration-300 hover:shadow-[0_0_10px_rgba(155,135,245,0.5)] hover:border-quantum-purple/50 ${
            expandedModules.includes(module.id) ? 'border-quantum-purple' : ''
          }`}
        >
          <Collapsible
            open={expandedModules.includes(module.id)}
            onOpenChange={() => handleModuleClick(module.id)}
          >
            <div className="p-6">
              <CollapsibleTrigger className="flex w-full justify-between items-center">
                <div className="flex items-center gap-3">
                  {getStatusIcon(module.status)}
                  <h3 className="text-xl font-bold">
                    {module.title}
                  </h3>
                </div>
                {getStatusBadge(module.status)}
              </CollapsibleTrigger>
            </div>
            
            <CollapsibleContent className="px-6 pb-6 space-y-4">
              {module.lessons.map((lesson) => (
                <Collapsible
                  key={lesson.id}
                  open={expandedLessons.includes(lesson.id)}
                  onOpenChange={() => {
                    if (lesson.status !== 'locked') {
                      setExpandedLessons(prev => 
                        prev.includes(lesson.id) 
                          ? prev.filter(id => id !== lesson.id) 
                          : [...prev, lesson.id]
                      );
                    }
                  }}
                >
                  <div 
                    className={`flex flex-col rounded-md bg-background/50 hover:bg-background/70 transition-colors ${
                      lesson.status === 'locked' ? 'opacity-70' : ''
                    }`}
                  >
                    <div className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        {getStatusIcon(lesson.status)}
                        <span className="font-medium">{lesson.title}</span>
                      </div>
                      
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => handleLessonAction(lesson)}
                        disabled={lesson.status === 'locked'}
                        className="hover:bg-quantum-purple/10"
                      >
                        {lesson.status === 'completed' ? 'Review' : 
                         lesson.status === 'in-progress' ? 'Continue' : 'Start'}
                      </Button>
                    </div>
                    
                    <CollapsibleContent>
                      {lesson.status !== 'locked' && (
                        <div className="px-4 pb-4 pt-0">
                          <div className="p-4 rounded-md bg-background/30 space-y-4">
                            <p className="text-sm text-muted-foreground">
                              {lesson.description}
                            </p>
                            
                            <div className="flex flex-wrap items-center gap-4">
                              {lesson.videoUrl && (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="border-quantum-purple/30 hover:bg-quantum-purple/10"
                                  onClick={() => handleLearnClick(lesson)}
                                >
                                  <BookOpen className="mr-1 h-4 w-4 text-quantum-purple" />
                                  Learn
                                </Button>
                              )}
                              
                              {lesson.simulationUrl && (
                                <Button 
                                  variant="outline" 
                                  size="sm"
                                  className="border-quantum-cyan/30 hover:bg-quantum-cyan/10"
                                  onClick={() => handleTryItClick(lesson)}
                                >
                                  <BookOpen className="mr-1 h-4 w-4 text-quantum-cyan" />
                                  Try It
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              ))}
            </CollapsibleContent>
          </Collapsible>
        </Card>
      ))}
    </div>
  );
};

export default CourseModules;
