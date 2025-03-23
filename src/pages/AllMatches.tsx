
import { Layout } from "@/components/Layout";
import { matches, teams, Match } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";
import { format, parseISO } from "date-fns";
import { Helmet } from "react-helmet-async";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious
} from "@/components/ui/pagination";
import { useState } from "react";

const AllMatches = () => {
  const [currentTab, setCurrentTab] = useState<"all" | "upcoming" | "live" | "completed">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const matchesPerPage = 5;

  // Filter matches based on the selected tab
  const filteredMatches = matches.filter(match => {
    if (currentTab === "all") return true;
    return match.status.toLowerCase() === currentTab;
  });

  // Sort matches by date, with live matches first
  const sortedMatches = [...filteredMatches].sort((a, b) => {
    if (a.status === "Live" && b.status !== "Live") return -1;
    if (a.status !== "Live" && b.status === "Live") return 1;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  // Paginate matches
  const indexOfLastMatch = currentPage * matchesPerPage;
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
  const currentMatches = sortedMatches.slice(indexOfFirstMatch, indexOfLastMatch);
  const totalPages = Math.ceil(sortedMatches.length / matchesPerPage);

  const getTeamData = (teamId: string) => {
    return teams.find(team => team.id === teamId);
  };

  const renderMatchCard = (match: Match) => {
    const team1 = getTeamData(match.team1Id);
    const team2 = getTeamData(match.team2Id);
    const matchDate = parseISO(match.date);

    if (!team1 || !team2) return null;

    return (
      <Card key={match.id} className="mb-4 overflow-hidden border-2" style={{
        borderColor: match.status === "Live" ? "#ff4d4f" : "#e2e8f0"
      }}>
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-3 relative">
            {/* Status badges */}
            <div className="absolute -top-2 right-0 flex gap-2">
              {match.status === "Live" && (
                <div className="bg-red-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  LIVE
                </div>
              )}
              {match.status === "Upcoming" && (
                <div className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  UPCOMING
                </div>
              )}
              {match.status === "Completed" && (
                <div className="bg-green-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  COMPLETED
                </div>
              )}
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-6">
              <div className="flex items-center w-full sm:w-2/5 justify-center sm:justify-start mb-4 sm:mb-0">
                <div
                  className="w-12 h-12 flex-shrink-0"
                  style={{
                    backgroundColor: team1.primaryColor,
                    borderRadius: "50%",
                  }}
                ></div>
                <div className="ml-3">
                  <span className="text-sm font-semibold">{team1.name}</span>
                  {match?.team1Score && (
                    <div className="text-sm font-bold mt-1">{match.team1Score}</div>
                  )}
                </div>
              </div>

              <div className="text-lg font-bold mx-4">VS</div>

              <div className="flex items-center w-full sm:w-2/5 justify-center sm:justify-end">
                <div className="mr-3 text-right">
                  <span className="text-sm font-semibold">{team2.name}</span>
                  {match?.team2Score && (
                    <div className="text-sm font-bold mt-1">{match.team2Score}</div>
                  )}
                </div>
                <div
                  className="w-12 h-12 flex-shrink-0"
                  style={{
                    backgroundColor: team2.primaryColor,
                    borderRadius: "50%",
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{format(matchDate, "dd MMM yyyy")}</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{format(matchDate, "h:mm a")}</span>
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {match.venue}
                </div>
              </div>
              
              <div className="mt-2 sm:mt-0">
                {match.finalStats && (
                  <div className="text-sm font-medium">
                    {match.finalStats}
                  </div>
                )}
                {match.player_match && (
                  <div className="text-sm mt-1">
                    <span className="text-gray-600 dark:text-gray-400">
                      Man of the Match:
                    </span>
                    {' ' + match.player_match}
                  </div>
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  };

  return (
    <Layout>
      <Helmet>
        <title>IPL 2025 All Matches | Schedule and Results</title>
        <meta 
          name="description" 
          content="View all IPL 2025 matches including upcoming fixtures, live matches and completed results with detailed match information." 
        />
      </Helmet>
      
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-2xl font-bold mb-6">IPL 2025 Matches</h1>
        
        <Tabs defaultValue="all" onValueChange={(value) => {
          setCurrentTab(value as "all" | "upcoming" | "live" | "completed");
          setCurrentPage(1);
        }}>
          <TabsList className="mb-6">
            <TabsTrigger value="all">All Matches</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            {currentMatches.map(renderMatchCard)}
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-0">
            {currentMatches.map(renderMatchCard)}
          </TabsContent>
          
          <TabsContent value="live" className="mt-0">
            {currentMatches.map(renderMatchCard)}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-0">
            {currentMatches.map(renderMatchCard)}
          </TabsContent>
        </Tabs>
        
        {totalPages > 1 && (
          <Pagination className="mt-6">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index}>
                  <PaginationLink 
                    onClick={() => setCurrentPage(index + 1)}
                    isActive={currentPage === index + 1}
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : ""}
                />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        )}
      </div>
    </Layout>
  );
};

export default AllMatches;
