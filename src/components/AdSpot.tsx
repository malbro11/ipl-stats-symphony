
import { useEffect, useState } from "react";
import { Coins, TrendingUp, PiggyBank, ChartBar, ArrowUpCircle } from "lucide-react";
import { Card } from "@/components/ui/card";

type AdSpotProps = {
  size: string;
  position: string;
};

export function AdSpot({ size, position }: AdSpotProps) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Optimize ad size for desktop/mobile
  const displaySize = isDesktop ? size : size.includes("970") || size.includes("728") 
    ? "320x100" 
    : "300x250";
    
  // Always show SIP ad with new design
  const isProminent = position === "Below Points Table" || position === "Above Points Table";
  
  // SIP ad with enhanced visibility
  return (
    <div className="my-6 w-full relative z-10">
      <Card className={`overflow-hidden ${isProminent ? 'shadow-xl' : 'shadow-md'} border-2 transition-all hover:shadow-2xl`}
        style={{
          borderColor: isProminent ? '#6366f1' : '#e2e8f0',
          borderRadius: '12px',
        }}>
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/90 dark:to-indigo-950/90">
          <div className="p-6 flex flex-col items-center text-center">
            {/* Enhanced Header Section */}
            <div className="flex items-center justify-center mb-3 gap-2">
              <div className="bg-blue-100 dark:bg-blue-900/50 p-2 rounded-full">
                <Coins className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <ArrowUpCircle className="h-6 w-6 text-green-500" />
            </div>
            
            {/* Improved Typography */}
            <h3 className="text-xl font-bold text-blue-800 dark:text-blue-300 mb-2">
              Make Wiser Decisions with SIP
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 max-w-md">
              Start your financial journey with systematic investments for long-term growth
            </p>
            
            {/* Visual Elements */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <ChartBar className="h-5 w-5 text-purple-500" />
              <div className="bg-blue-600 text-white px-3 py-1.5 rounded-full text-xs font-medium">
                {displaySize}
              </div>
              <PiggyBank className="h-5 w-5 text-purple-500" />
            </div>
            
            {/* Call to Action */}
            <button className="group mt-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2.5 rounded-full transition-all transform hover:scale-105 flex items-center gap-2">
              Learn More
              <TrendingUp className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            {/* Position Indicator */}
            <div className="absolute top-2 right-2">
              <span className="text-xs bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 px-2 py-0.5 rounded-full">
                {position}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
