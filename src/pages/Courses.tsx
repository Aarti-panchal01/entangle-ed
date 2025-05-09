
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Check, Lock, Star, Award, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const difficultyColorMap = {
  beginner: "bg-green-500/20 text-green-500 border-green-500/50",
  intermediate: "bg-blue-500/20 text-blue-500 border-blue-500/50",
  advanced: "bg-purple-500/20 text-purple-500 border-purple-500/50",
  expert: "bg-quantum-purple/20 text-quantum-purple border-quantum-purple/50"
};

type Course = {
  id: string;
  title: string;
  description: string;
  difficulty: 'beginner' | 'intermediate' | 'advanced' | 'expert';
  modules: number;
  duration: string;
  prerequisites: string[];
  locked: boolean;
  progress?: number;
};

const courses: Record<string, Course[]> = {
  fundamentals: [
    {
      id: 'quantum-basics',
      title: 'Quantum Computing Fundamentals',
      description: 'Introduction to the core concepts of quantum computing, including superposition, entanglement, and quantum measurement.',
      difficulty: 'beginner',
      modules: 5,
      duration: '4 hours',
      prerequisites: [],
      locked: false,
      progress: 60
    },
    {
      id: 'quantum-gates',
      title: 'Quantum Gates and Circuits',
      description: 'Learn about quantum logic gates, how they manipulate qubits, and how to construct simple quantum circuits.',
      difficulty: 'beginner',
      modules: 4,
      duration: '3.5 hours',
      prerequisites: ['Quantum Computing Fundamentals'],
      locked: false,
      progress: 25
    },
    {
      id: 'quantum-algorithms',
      title: 'Introduction to Quantum Algorithms',
      description: 'Explore the basic quantum algorithms that demonstrate quantum advantage, such as Deutsch's algorithm.',
      difficulty: 'intermediate',
      modules: 6,
      duration: '5 hours',
      prerequisites: ['Quantum Gates and Circuits'],
      locked: false
    }
  ],
  advanced: [
    {
      id: 'quantum-error',
      title: 'Quantum Error Correction',
      description: 'Understand quantum decoherence and learn techniques to protect quantum information against errors.',
      difficulty: 'advanced',
      modules: 7,
      duration: '8 hours',
      prerequisites: ['Introduction to Quantum Algorithms'],
      locked: true
    },
    {
      id: 'quantum-ml',
      title: 'Quantum Machine Learning',
      description: 'Discover how quantum computing can enhance machine learning algorithms and solve complex pattern recognition problems.',
      difficulty: 'advanced',
      modules: 8,
      duration: '10 hours',
      prerequisites: ['Introduction to Quantum Algorithms', 'Classical Machine Learning Basics'],
      locked: true
    }
  ],
  specialized: [
    {
      id: 'quantum-crypto',
      title: 'Quantum Cryptography',
      description: 'Explore quantum key distribution and other quantum-resistant cryptographic protocols.',
      difficulty: 'expert',
      modules: 6,
      duration: '7 hours',
      prerequisites: ['Quantum Error Correction'],
      locked: true
    },
    {
      id: 'quantum-simulation',
      title: 'Quantum Simulation',
      description: 'Learn how to simulate quantum systems using both classical and quantum computers.',
      difficulty: 'expert',
      modules: 9,
      duration: '12 hours',
      prerequisites: ['Quantum Machine Learning'],
      locked: true
    }
  ]
};

const Courses = () => {
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState<string>("fundamentals");

  const handleEnrollCourse = (course: Course) => {
    if (course.locked) {
      toast.error("Course locked", {
        description: `Complete the prerequisite courses to unlock this content.`
      });
    } else {
      toast.success("Enrollment successful", {
        description: `You've been enrolled in ${course.title}.`
      });
      navigate(`/course/${course.id}`);
    }
  };

  const CourseCard = ({ course }: { course: Course }) => (
    <Card className={`quantum-card hover:shadow-lg transition-all duration-300 ${course.locked ? 'opacity-70' : ''}`}>
      <div className="p-6 flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <Badge 
            className={`${difficultyColorMap[course.difficulty]} font-medium`}
            variant="outline"
          >
            {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
          </Badge>
          {course.locked && <Lock className="text-muted-foreground" size={18} />}
        </div>
        
        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-cyan">
          {course.title}
        </h3>
        
        <p className="text-muted-foreground mb-4 flex-grow">{course.description}</p>
        
        {course.progress !== undefined && (
          <div className="w-full h-2 bg-muted rounded-full mb-4">
            <div 
              className="h-full rounded-full bg-gradient-to-r from-quantum-purple to-quantum-cyan" 
              style={{ width: `${course.progress}%` }}
            />
          </div>
        )}
        
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="flex items-center gap-1 text-xs bg-background/50 px-2 py-1 rounded-md">
            <BookOpen size={14} className="text-quantum-cyan" />
            <span>{course.modules} modules</span>
          </div>
          <div className="flex items-center gap-1 text-xs bg-background/50 px-2 py-1 rounded-md">
            <Star size={14} className="text-quantum-cyan" />
            <span>{course.duration}</span>
          </div>
        </div>
        
        {course.prerequisites.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1">
              <AlertCircle size={12} />
              Prerequisites:
            </p>
            <div className="flex flex-wrap gap-1">
              {course.prerequisites.map((req, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="text-xs"
                >
                  {req}
                </Badge>
              ))}
            </div>
          </div>
        )}
        
        <Button 
          onClick={() => handleEnrollCourse(course)}
          className="w-full bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
          disabled={course.locked}
        >
          {course.progress !== undefined ? 'Continue Learning' : 'Enroll Now'}
        </Button>
      </div>
    </Card>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
              Quantum Learning Path
            </h1>
            <p className="text-muted-foreground">
              Structured courses to take you from quantum novice to expert
            </p>
          </div>

          <Tabs defaultValue="fundamentals" className="w-full max-w-5xl mx-auto" onValueChange={setCurrentTab}>
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger value="fundamentals" className="data-[state=active]:bg-quantum-purple/20">
                <BookOpen className="mr-2 h-4 w-4" />
                Fundamentals
              </TabsTrigger>
              <TabsTrigger value="advanced" className="data-[state=active]:bg-quantum-purple/20">
                <Star className="mr-2 h-4 w-4" />
                Advanced
              </TabsTrigger>
              <TabsTrigger value="specialized" className="data-[state=active]:bg-quantum-purple/20">
                <Award className="mr-2 h-4 w-4" />
                Specialized
              </TabsTrigger>
            </TabsList>

            {Object.entries(courses).map(([key, courseList]) => (
              <TabsContent key={key} value={key} className="mt-0">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {courseList.map((course) => (
                    <CourseCard key={course.id} course={course} />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Courses;
