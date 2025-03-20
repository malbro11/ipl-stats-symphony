
import { Layout } from "@/components/Layout";
import { PointsTable } from "@/components/PointsTable";
import { TopPerformers } from "@/components/TopPerformers";
import { PlayerComparison } from "@/components/PlayerComparison";
import { useLocation } from "react-router-dom";

const AdSpot = ({ size, position }: { size: string; position: string }) => (
  <div className="my-6 w-full">
    <div className="bg-gray-200 dark:bg-gray-800 border border-dashed border-gray-400 dark:border-gray-600 rounded-lg p-4 text-center">
      <p className="text-gray-800 dark:text-gray-200 text-sm font-medium">
        AD SPACE: {size} - {position}
      </p>
    </div>
  </div>
);

const Index = () => {
  const location = useLocation();
  const isPointsTableRoute = location.pathname === "/points-table";

  return (
    <Layout>
      <div id="content">
        <div id="points-table">
          <PointsTable />
          {!isPointsTableRoute && <AdSpot size="728x90" position="Below Points Table" />}
        </div>
        
        {!isPointsTableRoute && (
          <>
            <div id="top-performers">
              <TopPerformers />
              <AdSpot size="300x250" position="Below Top Performers" />
            </div>
            
            <div id="player-comparison">
              <PlayerComparison />
              <AdSpot size="970x250" position="Below Player Comparison" />
            </div>
          </>
        )}
      </div>
    </Layout>
  );
};

export default Index;
