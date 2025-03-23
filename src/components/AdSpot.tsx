
import { useEffect, useState } from "react";
import { Coins, TrendingUp, PiggyBank } from "lucide-react";

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
    
  // Show a themed SIP ad
  const showSipAd = position === "sidebar" || position === "content";
  
  if (showSipAd) {
    return (
      <div className="my-6 w-full">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950 dark:to-indigo-950 rounded-lg shadow-md overflow-hidden">
          <div className="p-4 flex flex-col items-center text-center border border-blue-200 dark:border-blue-800 rounded-lg">
            <div className="flex items-center justify-center mb-3">
              <Coins className="h-10 w-10 text-blue-500 mr-2" />
              <TrendingUp className="h-6 w-6 text-green-500" />
            </div>
            <h3 className="text-lg font-bold text-blue-800 dark:text-blue-300 mb-2">Make wiser decisions with SIP</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">Start your financial journey with systematic investments</p>
            <div className="flex items-center justify-center gap-2 mb-2">
              <PiggyBank className="h-5 w-5 text-purple-500" />
              <span className="text-xs font-medium bg-blue-600 text-white px-2 py-1 rounded">
                {displaySize}
              </span>
            </div>
            <button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Default placeholder for other positions
  return (
    <div className="my-6 w-full">
      <div className="bg-gray-200 dark:bg-gray-800 border border-dashed border-gray-400 dark:border-gray-600 rounded-lg p-4 text-center">
        <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
          AD SPACE
        </p>
        <p className="text-gray-800 dark:bg-gray-600 dark:text-white bg-gray-600 text-white text-xs font-medium px-2 py-1 rounded inline-block mt-1">
          {displaySize} - {position}
        </p>
      </div>
    </div>
  );
}
