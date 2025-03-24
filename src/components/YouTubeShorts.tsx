
import { useState } from "react";
import { Youtube } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function YouTubeShorts() {
  const [currentVideo, setCurrentVideo] = useState(0);
  
  const shorts = [
    { id: "6CZM7yUx4uw", title: "Best IPL 2025 Moments" },
    { id: "W7F9T0bZj9Q", title: "Top Catches of the Week" },
    { id: "oYJAzs0mMX8", title: "Fastest Deliveries This Season" },
    { id: "S3QW1QZU_sk", title: "Incredible Batting Display" }
  ];
  
  const handleNext = () => {
    setCurrentVideo((prev) => (prev + 1) % shorts.length);
  };
  
  const handlePrev = () => {
    setCurrentVideo((prev) => (prev - 1 + shorts.length) % shorts.length);
  };
  
  return (
    <section className="my-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-4">
          <Youtube className="h-6 w-6 text-red-600 mr-2" />
          <h3 className="text-xl font-bold">IPL Shorts</h3>
        </div>
        
        <Card className="overflow-hidden border-2 border-red-100 dark:border-red-900/30 shadow-lg">
          <CardContent className="p-0">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${shorts[currentVideo].id}?autoplay=0&controls=1&rel=0&showinfo=0`}
                title={shorts[currentVideo].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold">{shorts[currentVideo].title}</h4>
              <div className="flex justify-between mt-3">
                <button 
                  onClick={handlePrev}
                  className="px-3 py-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 rounded text-sm font-medium transition-colors"
                >
                  Previous
                </button>
                <span className="text-sm text-muted-foreground">
                  {currentVideo + 1} of {shorts.length}
                </span>
                <button 
                  onClick={handleNext}
                  className="px-3 py-1 bg-red-100 hover:bg-red-200 dark:bg-red-900/30 dark:hover:bg-red-800/50 rounded text-sm font-medium transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
