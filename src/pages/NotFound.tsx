import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
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

        {/* Open Graph (Facebook, WhatsApp) */}
        <meta property="og:title" content="IPL 2025 Live Updates | Match Highlights & Stats" />
        <meta
          property="og:description"
          content="Follow IPL 2025 with real-time match highlights, points table standings, and top performer stats. Stay ahead with all the action!"
        />
        <meta property="og:image" content="https://ipl2025.site/banner.webp" />
        <meta property="og:url" content="https://ipl2025.site/" />
        <meta property="og:type" content="website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="IPL 2025 Live Updates | Match Highlights & Stats" />
        <meta
          name="twitter:description"
          content="Live IPL 2025 match highlights, points table updates, and top performer stats in real-time!"
        />
        <meta name="twitter:image" content="https://ipl2025.site/banner.webp" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://ipl2025.site/" />
      </Helmet>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-4">Oops! Page not found</p>
          <a href="/" className="text-blue-500 hover:text-blue-700 underline">
            Return to Home
          </a>
        </div>
      </div>
    </>

  );
};

export default NotFound;
