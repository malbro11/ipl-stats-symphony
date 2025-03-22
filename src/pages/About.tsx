
import { Layout } from "@/components/Layout";
import { Helmet } from "react-helmet-async";

const About = () => {
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
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-8">About Us</h1>

        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-4">
            Welcome to IPL Stats Symphony, your premier destination for comprehensive Indian Premier League statistics and analysis.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
          <p>
            At IPL Stats Symphony, we are passionate about bringing cricket enthusiasts the most accurate, up-to-date, and insightful IPL statistics. Our mission is to enhance your cricket viewing experience by providing you with detailed analytics that tell the complete story behind the numbers.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
          <p>
            Our team consists of cricket analytics experts, data scientists, and passionate cricket fans who work tirelessly to ensure that you get the most comprehensive IPL statistics and insights. We believe in the power of data to reveal patterns and stories that might otherwise go unnoticed.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Just to make things simple</li>
            <li>Real-time points table updates</li>
            <li>In-depth player performance analytics</li>
            <li>Interactive player comparison tools</li>
            <li>Historical team performance data</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Journey</h2>
          <p>
            IPL Stats Symphony was founded in 2024 with a simple goal: to make cricket statistics accessible, understandable, and enjoyable for fans.
          </p>

          <p className="mt-8">
            Thank you for being a part of our cricket-loving community. We're excited to continue enhancing your IPL experience with powerful statistics and insights.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
