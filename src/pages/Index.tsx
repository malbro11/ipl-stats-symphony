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
          <h1>Royal Challengers Bengaluru vs Gujarat Titans, 14th Match</h1>
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

        <div className="container mx-auto px-6 py-8 rounded-lg shadow-lg mt-10">
          <h1 className="text-3xl font-bold text-center text-purple-600 mb-6">
            Royal Challengers Bengaluru vs Gujarat Titans, 14th Match - Live Cricket Score, Commentary
          </h1>

          <p className="text-lg leading-relaxed text-center">
            The exciting clash between <strong>Royal Challengers Bengaluru (RCB)</strong> and
            <strong> Gujarat Titans (GT)</strong> is set to be an electrifying contest in the IPL 2025 season.
            Fans eagerly await to see how both teams will fare in this crucial matchup.
          </p>

          <div className="mt-6 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">RCB vs GT Live Score & Updates</h2>
            <p>Stay tuned with the latest <strong>RCB vs GT live score</strong> and match updates. With
              key players on both sides, expect an action-packed game.</p>
          </div>

          <div className="mt-6 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">RCB vs GT Head-to-Head & Stats</h2>
            <p>Looking at the <strong>RCB vs GT head-to-head</strong> record, both teams have had
              competitive outings. Will RCB capitalize on their home advantage, or will GT bounce back
              with a strong performance?</p>
          </div>

          <div className="mt-6 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">RCB vs GT 2025 Match Prediction</h2>
            <p>Experts predict a high-scoring game with <strong>Virat Kohli</strong> and
              <strong> Shubman Gill</strong> playing key roles. Will RCB’s aggressive batting outshine GT’s bowling attack?</p>
          </div>

          <div className="mt-6 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Who Will Win RCB vs GT Match?</h2>
            <p>The ultimate question: <strong>Who will win RCB vs GT match?</strong> With match-winners like Rashid Khan and Rajat Patidar, both teams have the potential to turn the game in their favor.</p>
          </div>

          <div className="mt-6 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">RCB vs GT IPL Highlights Today</h2>
            <p>Missed the match? Catch all the <strong>RCB vs GT IPL highlights today</strong> and relive the thrilling moments from this epic encounter.</p>
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
