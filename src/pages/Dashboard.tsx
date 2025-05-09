
import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import QuantumVisualization from '@/components/QuantumVisualization';
import QuantumMentor from '@/components/QuantumMentor';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Award, BookOpen, Star, Trophy, Clock, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';
import AchievementSystem from '@/components/AchievementSystem';

const Dashboard = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(42);
  const [showAchievement, setShowAchievement] = useState(false);

  // Simulate progress loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(68);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCompleteLesson = () => {
    toast.success('Lesson completed!', {
      description: 'You earned 50 quantum points',
    });
    
    // Show achievement notification
    setShowAchievement(true);
    setTimeout(() => setShowAchievement(false), 5000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      <main className="flex-1 py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-blue">
                Welcome to entangle.ED
              </h1>
              <p className="text-muted-foreground">
                Track your progress and continue your quantum journey
              </p>
            </div>
            <Button 
              onClick={() => navigate('/courses')}
              className="mt-4 md:mt-0 bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
            >
              Explore Courses
            </Button>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {/* Main content area - 2/3 width */}
            <div className="md:col-span-2 space-y-6">
              <Card className="quantum-card">
                <CardHeader>
                  <CardTitle>Your Learning Progress</CardTitle>
                  <CardDescription>
                    You've completed 68% of the Quantum Computing Fundamentals course
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Progress value={progress} className="h-2 mb-4" />
                  
                  <div className="grid gap-4 mt-6">
                    <div className="bg-background/30 p-4 rounded-lg flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Quantum Superposition</h3>
                        <p className="text-sm text-muted-foreground">Last accessed 2 days ago</p>
                      </div>
                      <Badge variant="outline" className="bg-green-500/20 text-green-500">
                        Completed
                      </Badge>
                    </div>
                    
                    <div className="bg-background/30 p-4 rounded-lg flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Quantum Entanglement</h3>
                        <p className="text-sm text-muted-foreground">Currently in progress</p>
                      </div>
                      <Badge variant="outline" className="bg-blue-500/20 text-blue-500">
                        In Progress
                      </Badge>
                    </div>
                    
                    <div className="bg-background/30 p-4 rounded-lg flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Quantum Measurement</h3>
                        <p className="text-sm text-muted-foreground">Coming up next</p>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="gap-1"
                        onClick={handleCompleteLesson}
                      >
                        <ArrowRight className="h-4 w-4" />
                        Start
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Tabs defaultValue="achievements">
                <TabsList className="grid grid-cols-3">
                  <TabsTrigger value="achievements">
                    <Award className="mr-2 h-4 w-4" />
                    Achievements
                  </TabsTrigger>
                  <TabsTrigger value="recommendations">
                    <Star className="mr-2 h-4 w-4" />
                    Recommendations
                  </TabsTrigger>
                  <TabsTrigger value="activity">
                    <Clock className="mr-2 h-4 w-4" />
                    Recent Activity
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="achievements" className="space-y-4 mt-4">
                  <AchievementSystem />
                </TabsContent>
                
                <TabsContent value="recommendations" className="space-y-4 mt-4">
                  <Card className="quantum-card">
                    <CardHeader>
                      <CardTitle>Recommended Next Steps</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-4">
                        <div className="flex items-start gap-4">
                          <div className="bg-quantum-purple/20 p-2 rounded-md">
                            <BookOpen className="h-5 w-5 text-quantum-purple" />
                          </div>
                          <div>
                            <h4 className="font-medium">Complete "Quantum Gates" Module</h4>
                            <p className="text-sm text-muted-foreground">
                              Understanding quantum gates is essential for building quantum circuits
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="bg-quantum-blue/20 p-2 rounded-md">
                            <Star className="h-5 w-5 text-quantum-blue" />
                          </div>
                          <div>
                            <h4 className="font-medium">Try the Circuit Builder</h4>
                            <p className="text-sm text-muted-foreground">
                              Apply your knowledge by building quantum circuits interactively
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <div className="bg-quantum-cyan/20 p-2 rounded-md">
                            <Trophy className="h-5 w-5 text-quantum-cyan" />
                          </div>
                          <div>
                            <h4 className="font-medium">Complete the Weekly Challenge</h4>
                            <p className="text-sm text-muted-foreground">
                              Solve this week's quantum puzzle to earn bonus achievements
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="activity" className="mt-4">
                  <Card className="quantum-card">
                    <CardHeader>
                      <CardTitle>Your Activity Log</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ScrollArea className="h-[300px]">
                        <div className="space-y-4">
                          {[...Array(6)].map((_, i) => (
                            <div key={i} className="flex gap-3 items-start pb-3 border-b border-border/50 last:border-0">
                              <div className="bg-background/50 h-8 w-8 flex items-center justify-center rounded-full">
                                {i % 3 === 0 ? (
                                  <BookOpen className="h-4 w-4 text-quantum-purple" />
                                ) : i % 3 === 1 ? (
                                  <Star className="h-4 w-4 text-quantum-blue" />
                                ) : (
                                  <Trophy className="h-4 w-4 text-quantum-cyan" />
                                )}
                              </div>
                              <div>
                                <p className="text-sm font-medium">
                                  {i % 3 === 0
                                    ? "Completed a module lesson"
                                    : i % 3 === 1
                                    ? "Earned a new achievement"
                                    : "Built a quantum circuit"}
                                </p>
                                <p className="text-xs text-muted-foreground">
                                  {i} day{i !== 1 ? "s" : ""} ago
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </ScrollArea>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Sidebar - 1/3 width */}
            <div className="space-y-6">
              <QuantumMentor />
              
              <Card className="quantum-card overflow-hidden">
                <CardHeader className="pb-0">
                  <CardTitle>Quantum Visualization</CardTitle>
                </CardHeader>
                <CardContent className="pt-4">
                  <QuantumVisualization />
                  <div className="mt-2 text-center">
                    <Button 
                      variant="outline" 
                      className="mt-2 w-full bg-gradient-to-r from-quantum-purple/10 to-quantum-blue/10"
                      onClick={() => navigate('/ar')}
                    >
                      View in AR
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      
      {/* Achievement popup notification */}
      {showAchievement && (
        <div className="fixed bottom-4 right-4 bg-gradient-to-r from-quantum-purple to-quantum-blue p-4 rounded-lg text-white animate-fade-in shadow-lg z-50">
          <div className="flex items-center gap-3">
            <Trophy className="h-6 w-6" />
            <div>
              <h4 className="font-bold">Achievement Unlocked!</h4>
              <p className="text-sm">Quantum Explorer: Complete 5 lessons</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
