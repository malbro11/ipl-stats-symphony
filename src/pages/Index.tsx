
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { PointsTable } from "@/components/PointsTable";
import { TopPerformers } from "@/components/TopPerformers";
import { PlayerComparison } from "@/components/PlayerComparison";
import { useLocation } from "react-router-dom";

const Index = () => {
  const location = useLocation();
  const isPointsTableRoute = location.pathname === "/points-table";

  return (
    <Layout>
      {!isPointsTableRoute && <Hero />}
      <div id="content" className={isPointsTableRoute ? "" : "pt-10"}>
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
