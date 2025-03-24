
import { useEffect, useState } from "react";
import { Coins, TrendingUp, PiggyBank, ChartBar, ArrowUpCircle, Scissors, PiSquare, Image, Palette, BarChart } from "lucide-react";
import { Card } from "@/components/ui/card";

type AdSpotProps = {
  size: string;
  position: string;
};

type AdTemplate = 'sip' | 'split' | 'imagetools';

export function AdSpot({ size, position }: AdSpotProps) {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
  const [adTemplate, setAdTemplate] = useState<AdTemplate>('sip');

  // Rotate ad templates every 8 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setAdTemplate(current => {
        // Rotate through available templates
        if (current === 'sip') return 'split';
        if (current === 'split') return 'imagetools';
        return 'sip';
      });
    }, 8000);

    return () => clearInterval(interval);
  }, []);

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

  // Determine if ad should have enhanced visibility
  const isProminent = position === "Below Points Table" || position === "Above Points Table";

  // Render appropriate ad template
  const renderAdTemplate = () => {
    switch (adTemplate) {
      case 'sip':
        return renderSipAd();
      case 'split':
        return renderSplitAd();
      case 'imagetools':
        return renderImageToolsAd();
      default:
        return renderSipAd();
    }
  };

  // SIP ad template (original)
  const renderSipAd = () => (
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
          <PiggyBank className="h-5 w-5 text-purple-500" />
        </div>

        {/* Call to Action */}
        <a
          href="https://invx.in"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 bg-blue-600 hover:bg-blue-700 font-medium rounded-full transition-all transform hover:scale-105 flex items-center gap-2 px-4 py-2 text-white"
        >
          Learn More
          <TrendingUp className="h-4 w-4" />
        </a>
      </div>
    </div>
  );

  // Split Pe ad template (new)
  const renderSplitAd = () => (
    <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/90 dark:to-pink-950/90">
      <div className="p-6 flex flex-col items-center text-center">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-3 gap-2">
          <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-full">
            <Scissors className="h-8 w-8 text-purple-600 dark:text-purple-400" />
          </div>
          <PiSquare className="h-6 w-6 text-pink-500" />
        </div>

        {/* Typography */}
        <h3 className="text-xl font-bold text-purple-800 dark:text-purple-300 mb-2">
          Split Bills Effortlessly with Split Pe
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 max-w-md">
          Never worry about who owes what. Split expenses with friends and family instantly.
        </p>

        {/* Visual Elements */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="flex space-x-1">
            {['bg-purple-500', 'bg-pink-500', 'bg-indigo-500'].map((color, i) => (
              <div key={i} className={`${color} w-3 h-3 rounded-full`}></div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <a
          href="https://splitpe.shivamkmr.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-medium rounded-full transition-all transform hover:scale-105 flex items-center gap-2 px-4 py-2"
        >
          Split Now
          <PiSquare className="h-4 w-4" />
        </a>
      </div>
    </div>
  );

  // Image Tools ad template (new)
  const renderImageToolsAd = () => (
    <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/90 dark:to-cyan-950/90">
      <div className="p-6 flex flex-col items-center text-center">
        {/* Header Section */}
        <div className="flex items-center justify-center mb-3 gap-2">
          <div className="bg-teal-100 dark:bg-teal-900/50 p-2 rounded-full">
            <Image className="h-8 w-8 text-teal-600 dark:text-teal-400" />
          </div>
          <Palette className="h-6 w-6 text-cyan-500" />
        </div>

        {/* Typography */}
        <h3 className="text-xl font-bold text-teal-800 dark:text-teal-300 mb-2">
          Transform Your Images with PAD Tools
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 max-w-md">
          Professional editing, AI enhancement, and design tools all in one place
        </p>

        {/* Visual Elements */}
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="h-8 w-8 bg-gradient-to-br from-teal-200 to-cyan-300 rounded-md"></div>
          <div className="h-8 w-8 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-md"></div>
          <div className="h-8 w-8 bg-gradient-to-br from-blue-200 to-teal-300 rounded-md"></div>
        </div>

        {/* Call to Action */}
        <a
          href="https://utilix.pro/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-600 hover:to-cyan-700 text-white font-medium rounded-full transition-all transform hover:scale-105 flex items-center gap-2 px-4 py-2"
        >
          Try Free
          <BarChart className="h-4 w-4" />
        </a>
      </div>
    </div>
  );

  // Ad card with template inside
  return (
    <div className="my-6 w-full relative z-10">
      <Card
        className={`overflow-hidden ${isProminent ? 'shadow-xl' : 'shadow-md'} border-2 transition-all hover:shadow-2xl animate-fade-in`}
        style={{
          borderColor: isProminent ? '#6366f1' : '#e2e8f0',
          borderRadius: '12px',
        }}>
        {renderAdTemplate()}
      </Card>
    </div>
  );
}
