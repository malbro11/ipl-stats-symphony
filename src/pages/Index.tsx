import { Layout } from "@/components/Layout";
import { PointsTable } from "@/components/PointsTable";
import { TopPerformers } from "@/components/TopPerformers";
import { PlayerComparison } from "@/components/PlayerComparison";
import { useLocation } from "react-router-dom";
import { AdSpot } from "@/components/AdSpot";
import { ViewerCounter } from "@/components/ViewerCounter";
import { MatchesCarousel } from "@/components/MatchesCarousel";
import { LiveMatchMeter } from "@/components/LiveMatchMeter";
import { YouTubeShorts } from "@/components/YouTubeShorts";
import { Helmet } from "react-helmet-async";

const Index = () => {
  const location = useLocation();
  const isPointsTableRoute = location.pathname === "/points-table";

  return (
    <Layout>
      <Helmet>
        <title>IPL 2025 Points Table, Match Highlights & Stats</title>
        <meta 
          name="description" 
          content="Get the latest IPL 2025 updates, points table standings, match highlights, top performers, and player comparisons. Stay updated with real-time stats!" 
        />
        <meta 
          name="keywords" 
          content="IPL 2025, IPL live scores, IPL points table, IPL match highlights, IPL stats, Indian Premier League" 
        />
        <meta name="author" content="IPL 2025 Live Updates" />

        <meta property="og:title" content="IPL 2025 Live Updates | Match Highlights & Stats" />
        <meta 
          property="og:description" 
          content="Follow IPL 2025 with real-time match highlights, points table standings, and top performer stats. Stay ahead with all the action!" 
        />
        <meta property="og:image" content="https://ipl2025.site/banner.webp" />
        <meta property="og:url" content="https://ipl2025.site/" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPL 2025 Live Updates | Match Highlights & Stats" />
        <meta 
          name="twitter:description" 
          content="Live IPL 2025 match highlights, points table updates, and top performer stats in real-time!" 
        />
        <meta name="twitter:image" content="https://ipl2025.site/banner.webp" />

        <link rel="canonical" href="https://ipl2025.site/" />
      </Helmet>
      <div id="content">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">IPL 2025 Season</h2>
            <ViewerCounter />
          </div>
          
          <section className="mb-6">
            <MatchesCarousel />
          </section>
          
          <div className="my-6">
            <AdSpot size="970x90" position="Above Points Table" />
          </div>
          
          <YouTubeShorts />
          
          <LiveMatchMeter />
        </div>
        
        <div id="points-table">
          <PointsTable />
          {!isPointsTableRoute && (
            <div className="container mx-auto px-4">
              <AdSpot size="728x90" position="Below Points Table" />
            </div>
          )}
        </div>
        
        {!isPointsTableRoute && (
          <>
            <div id="top-performers">
              <TopPerformers />
              <div className="container mx-auto px-4">
                <AdSpot size="300x250" position="Below Top Performers" />
              </div>
            </div>
            
            <div id="player-comparison">
              <PlayerComparison />
              <div className="container mx-auto px-4">
                <AdSpot size="970x250" position="Below Player Comparison" />
              </div>
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Index;
