
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import CourseResources from '@/components/CourseResources';
import CourseModules from '@/components/CourseModules';
import { quantumComputingModules } from '@/data/courseModulesData';
import { BookOpen, ArrowLeft, CheckCircle, Lock, Download } from 'lucide-react';

const CourseDetail = () => {
  const { courseId } = useParams<{ courseId: string }>();
  const [progress, setProgress] = useState(22);
  const [activeTab, setActiveTab] = useState('content');

  // Sample course data
  const course = {
    id: courseId,
    title: 'Quantum Computing Fundamentals',
    description: 'Introduction to the core concepts of quantum computing, including superposition, entanglement, and quantum measurement.',
    difficulty: 'beginner',
    modules: 9,
    duration: '4 hours',
    instructor: 'Dr. Quantum',
  };

  // Sample resources data
  const resources = [
    {
      id: 'resource-1',
      title: 'Course Slides',
      type: 'PDF',
      fileSize: '4.2MB',
      fileUrl: '/downloads/course-slides.pdf',
      fileType: 'pdf' as const
    },
    {
      id: 'resource-2',
      title: 'Practice Exercises',
      type: 'PDF',
      fileSize: '1.8MB',
      fileUrl: '/downloads/practice-exercises.pdf',
      fileType: 'pdf' as const
    },
    {
      id: 'resource-3',
      title: 'Quantum Circuit Templates',
      type: 'JSON',
      fileSize: '756KB',
      fileUrl: '/downloads/quantum-circuit-templates.json',
      fileType: 'json' as const
    }
  ];

  // Simulate progress loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(Math.min(progress + 5, 100));
    }, 2000);
    return () => clearTimeout(timer);
  }, [progress]);

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="mb-6">
            <Link 
              to="/courses" 
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-4"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Courses
            </Link>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
                  {course.title}
                </h1>
                <p className="text-muted-foreground mt-2">{course.description}</p>
              </div>
              
              <Button 
                size="lg"
                className="bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
              >
                Continue Learning
              </Button>
            </div>
            
            <div className="mt-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Course Progress</span>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-xs text-muted-foreground mt-2">
                2 of 9 lessons completed (22%)
              </p>
            </div>
          </div>
          
          <Tabs 
            defaultValue="content" 
            className="mt-8" 
            onValueChange={(value) => setActiveTab(value)}
          >
            <TabsList className="grid grid-cols-3 mb-8">
              <TabsTrigger 
                value="content"
                className="data-[state=active]:bg-quantum-purple/20"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Course Content
              </TabsTrigger>
              <TabsTrigger 
                value="resources"
                className="data-[state=active]:bg-quantum-purple/20"
              >
                <Download className="mr-2 h-4 w-4" />
                Resources
              </TabsTrigger>
              <TabsTrigger 
                value="community"
                className="data-[state=active]:bg-quantum-purple/20"
              >
                <BookOpen className="mr-2 h-4 w-4" />
                Community
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="content" className="space-y-6">
              <CourseModules modules={quantumComputingModules} />
            </TabsContent>
            
            <TabsContent value="resources">
              <CourseResources resources={resources} />
            </TabsContent>
            
            <TabsContent value="community">
              <div className="quantum-card">
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-4">Community Discussion</h3>
                  <p className="text-muted-foreground">
                    Connect with other students and instructors in the course community.
                  </p>
                  
                  <div className="mt-6 p-8 text-center">
                    <p className="text-muted-foreground mb-4">
                      Join the discussion to ask questions and share your insights.
                    </p>
                    <Button>
                      View Community
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CourseDetail;
