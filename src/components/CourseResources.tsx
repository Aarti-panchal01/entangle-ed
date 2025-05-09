
import React from 'react';
import { Download } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface Resource {
  id: string;
  title: string;
  type: string;
  fileSize: string;
  fileUrl: string;
  fileType: 'pdf' | 'json' | 'other';
}

interface CourseResourcesProps {
  resources: Resource[];
}

const CourseResources: React.FC<CourseResourcesProps> = ({ resources }) => {
  const handleDownload = (resource: Resource) => {
    // In a real application, this would download the file
    // For demonstration purposes, we'll just show a toast
    toast.success(`Downloading ${resource.title}`, {
      description: `${resource.fileType.toUpperCase()}, ${resource.fileSize}`
    });
    
    // Simulate download by creating a link and clicking it
    // In production, this would point to actual files
    const link = document.createElement('a');
    link.href = resource.fileUrl;
    link.download = `${resource.title.toLowerCase().replace(/\s+/g, '-')}.${resource.fileType}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getIconColor = (fileType: string) => {
    switch (fileType) {
      case 'pdf':
        return 'text-quantum-purple';
      case 'json':
        return 'text-quantum-cyan';
      default:
        return 'text-quantum-blue';
    }
  };

  return (
    <Card className="quantum-card">
      <CardHeader>
        <CardTitle>Course Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {resources.map((resource) => (
            <div 
              key={resource.id}
              className="flex items-center justify-between p-4 rounded-md bg-background/50 hover:bg-background/70 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-md bg-background/80 ${getIconColor(resource.fileType)}`}>
                  <Download className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-medium">{resource.title}</h4>
                  <p className="text-xs text-muted-foreground">
                    {resource.type}, {resource.fileSize}
                  </p>
                </div>
              </div>
              <Button 
                variant="outline" 
                size="sm"
                className="border-quantum-purple/30 hover:bg-quantum-purple/10"
                onClick={() => handleDownload(resource)}
              >
                Download
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseResources;
