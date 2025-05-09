
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { toast } from 'sonner';
import { BookOpen, ArrowLeft, Check, Play, Download, Star, Trophy, Clock, Users, AlertCircle, CheckCircle } from 'lucide-react';
import QuantumMentor from '@/components/QuantumMentor';

interface Lesson {
  id: string;
  title: string;
  duration: string;
  completed: boolean;
}

interface CourseModule {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}

// Mock course data
const coursesData = {
  'quantum-basics': {
    title: 'Quantum Computing Fundamentals',
    description: 'Introduction to the core concepts of quantum computing, including superposition, entanglement, and quantum measurement.',
    difficulty: 'beginner',
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Quantum Mechanics',
        description: 'Learn the basic principles of quantum mechanics that underpin quantum computing',
        lessons: [
          { id: 'lesson-1-1', title: 'Classical vs Quantum Physics', duration: '15 min', completed: true },
          { id: 'lesson-1-2', title: 'Wave-Particle Duality', duration: '20 min', completed: true },
          { id: 'lesson-1-3', title: 'Quantum Measurement', duration: '25 min', completed: false }
        ]
      },
      {
        id: 'module-2',
        title: 'Qubits and Quantum States',
        description: 'Understand the fundamental unit of quantum information - the qubit',
        lessons: [
          { id: 'lesson-2-1', title: 'What is a Qubit?', duration: '20 min', completed: false },
          { id: 'lesson-2-2', title: 'Quantum Superposition', duration: '25 min', completed: false },
          { id: 'lesson-2-3', title: 'Bloch Sphere Representation', duration: '30 min', completed: false }
        ]
      },
      {
        id: 'module-3',
        title: 'Quantum Entanglement',
        description: 'Explore the phenomenon of quantum entanglement and its importance',
        lessons: [
          { id: 'lesson-3-1', title: 'Understanding Entanglement', duration: '25 min', completed: false },
          { id: 'lesson-3-2', title: 'Bell States', duration: '20 min', completed: false },
          { id: 'lesson-3-3', title: 'Quantum Teleportation', duration: '35 min', completed: false }
        ]
      }
    ],
    totalLessons: 9,
    completedLessons: 2,
    duration: '4 hours',
    prerequisites: [],
    students: 1243,
    rating: 4.8
  },
  'quantum-gates': {
    title: 'Quantum Gates and Circuits',
    description: 'Learn about quantum logic gates, how they manipulate qubits, and how to construct simple quantum circuits.',
    difficulty: 'beginner',
    modules: [
      {
        id: 'module-1',
        title: 'Introduction to Quantum Gates',
        description: 'Learn about the basic quantum gates and their operations',
        lessons: [
          { id: 'lesson-1-1', title: 'Single-Qubit Gates', duration: '25 min', completed: true },
          { id: 'lesson-1-2', title: 'Pauli Gates', duration: '20 min', completed: false },
          { id: 'lesson-1-3', title: 'Hadamard Gate', duration: '15 min', completed: false }
        ]
      }
    ],
    totalLessons: 8,
    completedLessons: 1,
    duration: '3.5 hours',
    prerequisites: ['Quantum Computing Fundamentals'],
    students: 876,
    rating: 4.6
  },
  'quantum-algorithms': {
    title: 'Introduction to Quantum Algorithms',
    description: "Explore the basic quantum algorithms that demonstrate quantum advantage, such as Deutsch's algorithm.",
    difficulty: 'intermediate',
    modules: [
      {
        id: 'module-1',
        title: 'Quantum Algorithm Basics',
        description: 'Understand what makes quantum algorithms different from classical ones',
        lessons: [
          { id: 'lesson-1-1', title: 'Quantum Parallelism', duration: '30 min', completed: false },
          { id: 'lesson-1-2', title: 'Quantum Interference', duration: '25 min', completed: false },
          { id: 'lesson-1-3', title: 'Quantum Speed-up', duration: '20 min', completed: false }
        ]
      }
    ],
    totalLessons: 12,
    completedLessons: 0,
    duration: '5 hours',
    prerequisites: ['Quantum Gates and Circuits'],
    students: 542,
    rating: 4.7
  }
};

const difficultyColorMap = {
  beginner: "bg-green-500/20 text-green-500 border-green-500/50",
  intermediate: "bg-blue-500/20 text-blue-500 border-blue-500/50",
  advanced: "bg-purple-500/20 text-purple-500 border-purple-500/50",
  expert: "bg-quantum-purple/20 text-quantum-purple border-quantum-purple/50"
};

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const navigate = useNavigate();
  const [currentTab, setCurrentTab] = useState('content');
  const [progress, setProgress] = useState(0);
  
  // Get course data based on courseId
  const course = courseId ? coursesData[courseId as keyof typeof coursesData] : null;

  useEffect(() => {
    if (!course) {
      // If course not found, show error toast and redirect
      toast.error('Course not found', {
        description: 'The requested course could not be found.'
      });
      navigate('/courses');
      return;
    }

    // Calculate progress
    if (course) {
      const progressValue = (course.completedLessons / course.totalLessons) * 100;
      setProgress(progressValue);
    }
  }, [course, courseId, navigate]);

  const handleStartLesson = (lessonId: string, lessonTitle: string) => {
    toast.success('Lesson started', {
      description: `You're now viewing: ${lessonTitle}`
    });
    // In a real implementation, this would navigate to the lesson content
  };

  const handleCompleteCourse = () => {
    toast.success('Achievement Unlocked!', {
      description: 'You\'ve earned the Course Completer badge'
    });
    
    // In a real implementation, this would mark the course as completed
    // and update the user's progress
  };

  if (!course) {
    return null; // Or a loading state
  }

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <Button 
            variant="outline" 
            onClick={() => navigate('/courses')} 
            className="mb-6"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Courses
          </Button>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Main content area - 2/3 width */}
            <div className="md:col-span-2 space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 items-center">
                  <Badge 
                    variant="outline" 
                    className={difficultyColorMap[course.difficulty as keyof typeof difficultyColorMap]}
                  >
                    {course.difficulty.charAt(0).toUpperCase() + course.difficulty.slice(1)}
                  </Badge>
                  
                  <div className="flex items-center gap-1 text-sm">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{course.duration}</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span className="text-muted-foreground">{course.students} students</span>
                  </div>
                  
                  <div className="flex items-center gap-1 text-sm">
                    <Star className="h-4 w-4 text-amber-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>

                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
                  {course.title}
                </h1>
                
                <p className="text-muted-foreground">{course.description}</p>
                
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 pt-2">
                  <div className="flex-1">
                    <Progress value={progress} className="h-2" />
                    <p className="text-sm text-muted-foreground mt-1">
                      {course.completedLessons} of {course.totalLessons} lessons completed ({Math.round(progress)}%)
                    </p>
                  </div>
                  <Button 
                    onClick={handleCompleteCourse}
                    className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
                  >
                    {progress === 100 ? (
                      <>
                        <Check className="mr-2 h-4 w-4" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 h-4 w-4" />
                        Continue Learning
                      </>
                    )}
                  </Button>
                </div>
              </div>
              
              <Tabs defaultValue="content" className="w-full" onValueChange={setCurrentTab}>
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="content" className="data-[state=active]:bg-quantum-purple/20">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Course Content
                  </TabsTrigger>
                  <TabsTrigger value="resources" className="data-[state=active]:bg-quantum-purple/20">
                    <Download className="mr-2 h-4 w-4" />
                    Resources
                  </TabsTrigger>
                  <TabsTrigger value="community" className="data-[state=active]:bg-quantum-purple/20">
                    <Users className="mr-2 h-4 w-4" />
                    Community
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="content" className="mt-6 space-y-6">
                  {course.modules.map((module, index) => (
                    <Card key={module.id} className="quantum-card">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center">
                          <span className="bg-muted w-8 h-8 rounded-full flex items-center justify-center mr-3 text-sm font-medium">
                            {index + 1}
                          </span>
                          {module.title}
                        </CardTitle>
                        <CardDescription>{module.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3">
                          {module.lessons.map((lesson) => (
                            <div key={lesson.id} className="flex items-center justify-between p-3 bg-background/30 rounded-lg hover:bg-background/50 transition-colors">
                              <div className="flex items-center gap-3">
                                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${lesson.completed ? 'bg-green-500/20 text-green-500' : 'bg-muted text-muted-foreground'}`}>
                                  {lesson.completed ? (
                                    <CheckCircle className="h-4 w-4" />
                                  ) : (
                                    <Play className="h-3 w-3" />
                                  )}
                                </div>
                                <div>
                                  <p className="font-medium">{lesson.title}</p>
                                  <p className="text-xs text-muted-foreground">{lesson.duration}</p>
                                </div>
                              </div>
                              <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleStartLesson(lesson.id, lesson.title)}
                              >
                                {lesson.completed ? 'Review' : 'Start'}
                              </Button>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>
                
                <TabsContent value="resources" className="mt-6">
                  <Card className="quantum-card">
                    <CardHeader>
                      <CardTitle>Course Resources</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="p-4 bg-background/30 rounded-lg flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="bg-quantum-purple/20 p-2 rounded-lg">
                              <Download className="h-5 w-5 text-quantum-purple" />
                            </div>
                            <div>
                              <h3 className="font-medium">Course Slides</h3>
                              <p className="text-xs text-muted-foreground">PDF, 4.2MB</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Download</Button>
                        </div>
                        
                        <div className="p-4 bg-background/30 rounded-lg flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="bg-quantum-blue/20 p-2 rounded-lg">
                              <Download className="h-5 w-5 text-quantum-blue" />
                            </div>
                            <div>
                              <h3 className="font-medium">Practice Exercises</h3>
                              <p className="text-xs text-muted-foreground">PDF, 1.8MB</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Download</Button>
                        </div>
                        
                        <div className="p-4 bg-background/30 rounded-lg flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <div className="bg-quantum-cyan/20 p-2 rounded-lg">
                              <Download className="h-5 w-5 text-quantum-cyan" />
                            </div>
                            <div>
                              <h3 className="font-medium">Quantum Circuit Templates</h3>
                              <p className="text-xs text-muted-foreground">JSON, 756KB</p>
                            </div>
                          </div>
                          <Button variant="outline" size="sm">Download</Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="community" className="mt-6">
                  <Card className="quantum-card">
                    <CardHeader>
                      <CardTitle>Community Discussion</CardTitle>
                      <CardDescription>
                        Join the conversation with other students and instructors
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <p className="text-center text-muted-foreground py-8">
                          Connect with your peers to enhance your learning experience.
                          <br />
                          Community features coming soon!
                        </p>
                        <Button className="w-full" variant="outline">
                          Join Discussion Forum
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar - 1/3 width */}
            <div className="space-y-6">
              <Card className="quantum-card">
                <CardHeader>
                  <CardTitle>Learning Path</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-2 rounded-full">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-medium">Quantum Computing Fundamentals</h4>
                      <p className="text-xs text-muted-foreground">
                        Currently in progress - {Math.round(progress)}% complete
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-muted p-2 rounded-full">
                      <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium">Quantum Gates and Circuits</h4>
                      <p className="text-xs text-muted-foreground">
                        Up next in your learning path
                      </p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="flex items-start gap-3">
                    <div className="bg-muted p-2 rounded-full">
                      <AlertCircle className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div>
                      <h4 className="font-medium">Introduction to Quantum Algorithms</h4>
                      <p className="text-xs text-muted-foreground">
                        Advanced course for later
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <QuantumMentor />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
