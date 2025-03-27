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
          content="Get the latest IPL 2025 updates Chennai Super Kings vs Royal Challengers Bengaluru, points table standings, match highlights, top performers, and player comparisons. Stay updated with real-time stats!"
        />
        <meta
          name="keywords"
          content="IPL 2025, IPL live scores Chennai Super Kings vs Royal Challengers Bengaluru, IPL points table, IPL match highlights, IPL stats, Indian Premier League"
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
          <h1>Chennai Super Kings vs Royal Challengers Bengaluru</h1>
        </div>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">IPL 2025 Season</h2>
            <ViewerCounter />
          </div>

          <section className="mb-6">
            <MatchesCarousel />
          </section>

          <YouTubeShorts />

          {/* <LiveMatchMeter /> */}

          <div className="my-6">
            <AdSpot size="970x90" position="Above Points Table" />
          </div>
        </div>

        <div id="points-table">
          <PointsTable />
          {!isPointsTableRoute && (
            <div className="container mx-auto px-4">
              <AdSpot size="728x90" position="Below Points Table" />
            </div>
          )}
        </div>

        <div className="container mx-auto px-6 py-8  rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Chennai Super Kings vs Royal Challengers Bengaluru</h1>

          <p className="text-lg  leading-relaxed text-center">The much-awaited clash between <strong>Chennai Super Kings (CSK)</strong> and <strong>Royal Challengers Bengaluru (RCB)</strong> in the IPL 2025 season is set to be a thrilling contest. Cricket fans across the world eagerly anticipate this high-stakes match.</p>

          <div className="mt-6 p-6  rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold  mb-4">CSK vs RCB Match 2025: Live Updates & Prediction</h2>
            <p className="">Fans are eagerly searching for the <strong>CSK vs RCB live score</strong> and updates on who will win the match. With star players in both teams, this encounter promises intense action.</p>
          </div>

          <div className="mt-6 p-6  rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold  mb-4">CSK vs RCB Head-to-Head & Stats Comparison</h2>
            <p className="">Looking at the <strong>CSK vs RCB head-to-head</strong> record, Chennai Super Kings have had an upper hand historically. However, Royal Challengers Bengaluru have made strong additions to their squad this season.</p>
          </div>

          <div className="mt-6 p-6  rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">CSK vs RCB 2025 Match Prediction</h2>
            <p className="">Many cricket analysts and Dream11 experts are making their <strong>CSK vs RCB 2025 match prediction</strong>. The battle between CSK’s experienced squad and RCB’s power hitters will be key.</p>
          </div>

          <div className="mt-6 p-6  rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold  mb-4">Who Will Win CSK vs RCB Match?</h2>
            <p className="">The question on everyone’s mind: <strong>Who will win CSK vs RCB match?</strong> Stay tuned for expert analysis and match highlights.</p>
          </div>

          <div className="mt-6 p-6  rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold  mb-4">CSK vs RCB IPL Highlights Today</h2>
            <p className="">Missed the match? Catch all the <strong>CSK vs RCB IPL highlights today</strong> and relive the best moments.</p>
          </div>
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
