
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ParticleBackground from '@/components/ParticleBackground';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Award, 
  BarChart2, 
  Clock, 
  Calendar, 
  Star, 
  Bookmark, 
  MessageSquare 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const Dashboard = () => {
  // Sample user data
  const user = {
    name: 'Alex Johnson',
    email: 'alex.johnson@example.com',
    joinedDate: 'January 2023',
    profileImage: '',
    level: 'Intermediate',
    totalHours: 42,
    coursesCompleted: 3,
    currentCourses: 2
  };

  // Sample progress data
  const courses = [
    {
      id: 'quantum-basics',
      title: 'Quantum Computing Fundamentals',
      progress: 100,
      completed: true,
      lastAccessed: '2 days ago'
    },
    {
      id: 'quantum-gates',
      title: 'Quantum Gates and Circuits',
      progress: 75,
      completed: false,
      lastAccessed: '1 day ago'
    },
    {
      id: 'quantum-algorithms',
      title: 'Introduction to Quantum Algorithms',
      progress: 40,
      completed: false,
      lastAccessed: 'Today'
    }
  ];

  // Sample achievements
  const achievements = [
    {
      title: 'Quantum Pioneer',
      description: 'Completed your first quantum computing course',
      date: 'Mar 15, 2023',
      icon: <Award className="h-8 w-8 text-yellow-500" />
    },
    {
      title: 'Circuit Builder',
      description: 'Created 10 quantum circuits',
      date: 'Apr 23, 2023',
      icon: <Star className="h-8 w-8 text-cyan-500" />
    },
    {
      title: 'Quiz Master',
      description: 'Scored 100% on 5 consecutive quizzes',
      date: 'May 10, 2023',
      icon: <Award className="h-8 w-8 text-purple-500" />
    }
  ];

  // Sample recommended courses
  const recommendedCourses = [
    {
      title: 'Quantum Error Correction',
      description: 'Learn techniques to protect quantum information',
      difficulty: 'Advanced',
      duration: '8 hours'
    },
    {
      title: 'Quantum Machine Learning',
      description: 'Discover quantum approaches to ML problems',
      difficulty: 'Advanced',
      duration: '10 hours'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <ParticleBackground />
      <Header />
      <main className="flex-1 py-8">
        <div className="container px-4 md:px-6">
          {/* User Profile Overview */}
          <div className="mb-8">
            <Card className="quantum-card">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row items-center gap-6">
                  <Avatar className="w-20 h-20 border-4 border-quantum-purple/30">
                    <AvatarImage src={user.profileImage} alt={user.name} />
                    <AvatarFallback className="bg-quantum-blue/30 text-lg">
                      {user.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-cyan">
                      {user.name}
                    </h1>
                    <p className="text-muted-foreground">{user.email}</p>
                    <div className="flex flex-wrap gap-2 justify-center md:justify-start mt-2">
                      <Badge variant="outline" className="bg-quantum-purple/20 border-quantum-purple/50">
                        {user.level}
                      </Badge>
                      <Badge variant="outline" className="bg-quantum-blue/20 border-quantum-blue/50">
                        Member since {user.joinedDate}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-quantum-purple">{user.totalHours}</p>
                      <p className="text-xs text-muted-foreground">Hours Learned</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-quantum-blue">{user.coursesCompleted}</p>
                      <p className="text-xs text-muted-foreground">Courses Completed</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-quantum-cyan">{user.currentCourses}</p>
                      <p className="text-xs text-muted-foreground">Current Courses</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Dashboard Content */}
          <Tabs defaultValue="progress" className="w-full">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="progress" className="data-[state=active]:bg-quantum-purple/20">
                <BarChart2 className="mr-2 h-4 w-4" />
                Progress
              </TabsTrigger>
              <TabsTrigger value="achievements" className="data-[state=active]:bg-quantum-purple/20">
                <Award className="mr-2 h-4 w-4" />
                Achievements
              </TabsTrigger>
              <TabsTrigger value="recommended" className="data-[state=active]:bg-quantum-purple/20">
                <Bookmark className="mr-2 h-4 w-4" />
                Recommended
              </TabsTrigger>
              <TabsTrigger value="community" className="data-[state=active]:bg-quantum-purple/20">
                <MessageSquare className="mr-2 h-4 w-4" />
                Community
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="progress">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {courses.map((course) => (
                  <Card key={course.id} className="quantum-card">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-center">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        {course.completed && (
                          <Badge className="bg-green-500/20 text-green-500 border-green-500/50">
                            Completed
                          </Badge>
                        )}
                      </div>
                      <CardDescription className="flex items-center gap-1">
                        <Clock className="h-3 w-3" /> Last accessed {course.lastAccessed}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-sm">Progress</span>
                          <span className="text-sm font-bold">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2 bg-muted" 
                          indicatorClassName="bg-gradient-to-r from-quantum-purple to-quantum-cyan" />
                        <Button 
                          className="w-full bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity"
                        >
                          {course.completed ? 'Review Course' : 'Continue Learning'}
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="achievements">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {achievements.map((achievement, index) => (
                  <Card key={index} className="quantum-card">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-4 p-3 rounded-full bg-quantum-purple/10">
                          {achievement.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-cyan">
                          {achievement.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">{achievement.description}</p>
                        <div className="flex items-center text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3 mr-1" /> Earned on {achievement.date}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
                
                {/* Locked Achievement Placeholder */}
                <Card className="quantum-card opacity-60">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="mb-4 p-3 rounded-full bg-muted">
                        <Award className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">???</h3>
                      <p className="text-muted-foreground mb-4">Complete more courses to unlock</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="recommended">
              <div className="grid gap-6 md:grid-cols-2">
                {recommendedCourses.map((course, index) => (
                  <Card key={index} className="quantum-card">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-quantum-purple to-quantum-cyan">
                        {course.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">{course.description}</p>
                      <div className="flex items-center gap-4 mb-4">
                        <Badge variant="outline" className="bg-quantum-purple/20 border-quantum-purple/50">
                          {course.difficulty}
                        </Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Clock className="h-4 w-4 mr-1" /> {course.duration}
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity">
                        View Course
                      </Button>
                    </CardContent>
                  </Card>
                ))}
                
                <Card className="quantum-card">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center h-full">
                    <h3 className="text-xl font-bold mb-4">Personalized Learning Path</h3>
                    <p className="text-muted-foreground mb-6">
                      Get AI-powered course recommendations based on your learning style and goals
                    </p>
                    <Button variant="outline" className="border-quantum-purple/50 text-quantum-cyan hover:bg-quantum-purple/20 hover:text-white transition-all">
                      Take Assessment Quiz
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="community">
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="quantum-card">
                  <CardHeader>
                    <CardTitle>Discussion Forums</CardTitle>
                    <CardDescription>Connect with fellow quantum enthusiasts</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-3 rounded-md bg-muted/50 hover:bg-muted cursor-pointer">
                        <div>
                          <h4 className="font-medium">Quantum Error Correction Techniques</h4>
                          <p className="text-sm text-muted-foreground">23 participants • Last post 2h ago</p>
                        </div>
                        <Button size="sm" variant="ghost">View</Button>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-md bg-muted/50 hover:bg-muted cursor-pointer">
                        <div>
                          <h4 className="font-medium">Understanding Bell States</h4>
                          <p className="text-sm text-muted-foreground">15 participants • Last post 5h ago</p>
                        </div>
                        <Button size="sm" variant="ghost">View</Button>
                      </div>
                      <div className="flex justify-between items-center p-3 rounded-md bg-muted/50 hover:bg-muted cursor-pointer">
                        <div>
                          <h4 className="font-medium">Quantum Computing Job Opportunities</h4>
                          <p className="text-sm text-muted-foreground">42 participants • Last post 1d ago</p>
                        </div>
                        <Button size="sm" variant="ghost">View</Button>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-quantum-purple to-quantum-blue hover:opacity-90 transition-opacity">
                      Browse All Forums
                    </Button>
                  </CardContent>
                </Card>
                
                <Card className="quantum-card">
                  <CardHeader>
                    <CardTitle>Community Events</CardTitle>
                    <CardDescription>Upcoming webinars and workshops</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="border-l-4 border-quantum-cyan pl-4">
                        <h4 className="font-medium">Live Q&A: Quantum Machine Learning</h4>
                        <p className="text-sm text-muted-foreground mb-2">May 15, 2025 • 7:00 PM EST</p>
                        <Button size="sm" className="bg-quantum-cyan text-white hover:bg-quantum-cyan/80">
                          Register
                        </Button>
                      </div>
                      
                      <div className="border-l-4 border-quantum-purple pl-4">
                        <h4 className="font-medium">Workshop: Building Your First Quantum Circuit</h4>
                        <p className="text-sm text-muted-foreground mb-2">May 22, 2025 • 2:00 PM EST</p>
                        <Button size="sm" className="bg-quantum-purple text-white hover:bg-quantum-purple/80">
                          Register
                        </Button>
                      </div>
                      
                      <div className="border-l-4 border-quantum-blue pl-4">
                        <h4 className="font-medium">Panel Discussion: The Future of Quantum Computing</h4>
                        <p className="text-sm text-muted-foreground mb-2">June 5, 2025 • 11:00 AM EST</p>
                        <Button size="sm" className="bg-quantum-blue text-white hover:bg-quantum-blue/80">
                          Register
                        </Button>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full mt-4 border-quantum-purple/50 text-quantum-cyan hover:bg-quantum-purple/20 hover:text-white transition-all">
                      View All Events
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
