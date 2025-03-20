
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToContent = () => {
    const contentElement = document.getElementById("content");
    if (contentElement) {
      contentElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-ipl-blue/20 via-ipl-purple/10 to-ipl-red/20 dark:from-ipl-blue/10 dark:via-ipl-purple/5 dark:to-ipl-red/10"
        style={{
          backgroundImage: "url('/pattern.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
            IPL 2024 Season
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight animate-scale-in text-balance">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ipl-blue via-ipl-navy to-ipl-red">
              IPL Stats Symphony
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 animate-blur-in opacity-90 max-w-2xl mx-auto text-balance">
            Dive into the world of IPL with real-time statistics, insightful
            analysis, and interactive visualizations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up">
            <a
              href="#content"
              onClick={(e) => {
                e.preventDefault();
                scrollToContent();
              }}
              className="px-6 py-3 rounded-full bg-gradient-to-r from-ipl-blue to-ipl-red text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              Explore Stats
            </a>
            <a
              href="#points-table"
              className="px-6 py-3 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-800 dark:text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
            >
              Points Table
            </a>
          </div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
        onClick={scrollToContent}
      >
        <ArrowDown className="h-6 w-6 text-gray-600 dark:text-gray-400" />
      </div>
    </section>
  );
}
