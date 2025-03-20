
import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { PointsTable } from "@/components/PointsTable";
import { TopPerformers } from "@/components/TopPerformers";
import { PlayerComparison } from "@/components/PlayerComparison";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <div id="content" className="pt-10">
        <PointsTable />
        <TopPerformers />
        <PlayerComparison />
      </div>
    </Layout>
  );
};

export default Index;
