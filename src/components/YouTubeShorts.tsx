
import { useState } from "react";
import { Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function YouTubeShorts() {
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const shorts = [
    { id: "3kwBYeU27Rk", title: "Delhi Capitals Win Ashutosh Shines" },
    { id: "h4tgZqfIdOw", title: "Best IPL 2025 Moments" },
    { id: "sasFGckg69A", title: "Opening Cermony" },
    { id: "ffyAbKFP0CI", title: "Best Catch" },
    { id: "dsWpAUuxN1s", title: "Legend" },
    { id: "azvoktSsgbY", title: "Roasting" }
  ];
  
  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % shorts.length);
  };
  
  const handlePrev = () => {
    setCurrentVideo((prev) => (prev - 1 + shorts.length) % shorts.length);
  };
  
  return (
    <section className="my-8 py-4 relative bg-background" style={{ zIndex: 10 }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <Youtube className="h-6 w-6 text-red-600 mr-2" />
          <h3 className="text-xl font-bold">IPL Shorts</h3>
        </div>
        
        <Card className="overflow-hidden border-2 border-red-100 dark:border-red-900/30 shadow-xl">
          <CardContent className="p-0">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-[20rem] md:h-full"
                src={`https://www.youtube.com/embed/${shorts[currentVideo].id}?autoplay=1&mute=1&controls=1&rel=0&showinfo=0&loop=1&playlist=${shorts[currentVideo].id}`}
                title={shorts[currentVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold">{shorts[currentVideo].title}</h4>
              <div className="flex justify-between mt-3">
                <Button 
                  onClick={handlePrev}
                  variant="outline"
                  size="sm"
                  className="text-sm font-medium"
                >
                  Previous
                </Button>
                <span className="text-sm text-muted-foreground flex items-center">
                  {currentVideo + 1} of {shorts.length}
                </span>
                <Button 
                  onClick={handleNext}
                  variant="default"
                  size="sm"
                  className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium"
                >
                  Next
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
