
import { Layout } from "@/components/Layout";
import { PointsTable } from "@/components/PointsTable";
import { TopPerformers } from "@/components/TopPerformers";
import { PlayerComparison } from "@/components/PlayerComparison";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const isPointsTableRoute = location.pathname === "/points-table";

  return (
    <Layout>
      <div id="content">
        <PointsTable />
        {!isPointsTableRoute && (
          <>
            <TopPerformers />
            <PlayerComparison />
          </>
        )}
      </div>
    </Layout>
  );
};

export default Index;
