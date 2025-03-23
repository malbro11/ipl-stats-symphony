
import { Layout } from "@/components/Layout";
import { matches, teams, Match } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Calendar, MapPin, Trophy, User } from "lucide-react";
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
import { useIsMobile } from "@/hooks/use-mobile";

const AllMatches = () => {
  const [currentTab, setCurrentTab] = useState<"all" | "upcoming" | "live" | "completed">("all");
  const [currentPage, setCurrentPage] = useState(1);
  const matchesPerPage = 5;
  const isMobile = useIsMobile();

  const filteredMatches = matches.filter(match => {
    if (currentTab === "all") return true;
    return match.status.toLowerCase() === currentTab;
  });

  const sortedMatches = [...filteredMatches].sort((a, b) => {
    if (a.status === "Live" && b.status !== "Live") return -1;
    if (a.status !== "Live" && b.status === "Live") return 1;
    return new Date(a.date).getTime() - new Date(b.date).getTime();
  });

  const indexOfLastMatch = currentPage * matchesPerPage;
  const indexOfFirstMatch = indexOfLastMatch - matchesPerPage;
  const currentMatches = sortedMatches.slice(indexOfFirstMatch, indexOfLastMatch);
  const totalPages = Math.ceil(sortedMatches.length / matchesPerPage);

  const getTeamData = (teamId: string) => {
    return teams.find(team => team.id === teamId);
  };

  const getStatusBadge = (status: string) => {
    switch(status) {
      case "Live":
        return <Badge variant="destructive" className="animate-pulse">LIVE</Badge>;
      case "Upcoming":
        return <Badge variant="secondary" className="bg-blue-600">UPCOMING</Badge>;
      case "Completed":
        return <Badge variant="outline" className="bg-green-600 text-white">COMPLETED</Badge>;
      default:
        return null;
    }
  };

  const renderMatchCard = (match: Match) => {
    const team1 = getTeamData(match.team1Id);
    const team2 = getTeamData(match.team2Id);
    const matchDate = parseISO(match.date);

    if (!team1 || !team2) return null;

    return (
      <Card 
        key={match.id} 
        className="mb-6 overflow-hidden transition-all duration-300 hover:shadow-lg"
        style={{
          borderColor: match.status === "Live" ? "#ff4d4f" : "#e2e8f0",
          borderWidth: match.status === "Live" ? "2px" : "1px",
          borderRadius: "12px",
        }}
      >
        <CardContent className="p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-semibold">Match #{match.id.slice(-3)}</h3>
            <div className="flex gap-2">{getStatusBadge(match.status)}</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 mb-5">
            <div className={`flex ${isMobile ? "flex-row" : ""} items-center w-full sm:w-2/5 justify-center sm:justify-start gap-3`}>
              <div
                className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center border-2"
                style={{
                  backgroundColor: team1.primaryColor,
                  borderColor: team1.secondaryColor || "#ffffff",
                }}
              >
                <span className="text-white font-bold">{team1.shortName}</span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-base font-semibold block">{team1.name}</span>
                {match?.team1Score !== undefined && (
                  <div className="text-base font-bold mt-1 text-primary">{match.team1Score}</div>
                )}
              </div>
            </div>

            <div className="text-xl font-bold py-2 px-4 bg-muted rounded-full">VS</div>

            <div className={`flex ${isMobile ? "flex-row" : "flex-row-reverse"} items-center w-full sm:w-2/5 justify-center sm:justify-start gap-3`}>
              <div
                className="w-14 h-14 flex-shrink-0 rounded-full flex items-center justify-center border-2"
                style={{
                  backgroundColor: team2.primaryColor,
                  borderColor: team2.secondaryColor || "#ffffff",
                }}
              >
                <span className="text-white font-bold">{team2.shortName}</span>
              </div>
              <div className={`text-center sm:${isMobile ? "text-left" : "text-right"}`}>
                <span className="text-base font-semibold block">{team2.name}</span>
                {match?.team2Score !== undefined && (
                  <div className="text-base font-bold mt-1 text-primary">{match.team2Score}</div>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 pt-4 border-t border-gray-200 dark:border-gray-700 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center text-sm text-muted-foreground">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{format(matchDate, "dd MMM yyyy")}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mr-2" />
                <span>{format(matchDate, "h:mm a")}</span>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mr-2" />
                <span>{match.venue}</span>
              </div>
            </div>
              
            <div className="space-y-2">
              {match.finalStats && (
                <div className="flex items-start text-sm font-medium">
                  <Trophy className="h-4 w-4 mr-2 mt-0.5 text-yellow-500" />
                  <span>{match.finalStats}</span>
                </div>
              )}
              {match.player_match && (
                <div className="flex items-center text-sm">
                  <User className="h-4 w-4 mr-2 text-purple-500" />
                  <span className="text-muted-foreground">Man of the Match:</span>
                  <span className="font-medium ml-1">{match.player_match}</span>
                </div>
              )}
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
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">IPL 2025 Matches</h1>
          <p className="text-muted-foreground">View all matches, schedules, and results for IPL 2025 season</p>
        </div>
        
        <Tabs 
          defaultValue="all" 
          onValueChange={(value) => {
            setCurrentTab(value as "all" | "upcoming" | "live" | "completed");
            setCurrentPage(1);
          }}
          className="w-full"
        >
          <TabsList className="mb-6 w-full sm:w-auto grid grid-cols-4 sm:flex">
            <TabsTrigger value="all">All Matches</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
            <TabsTrigger value="live">Live</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="mt-0">
            {currentMatches.length > 0 ? (
              currentMatches.map(renderMatchCard)
            ) : (
              <p className="text-center py-8 text-muted-foreground">No matches found</p>
            )}
          </TabsContent>
          
          <TabsContent value="upcoming" className="mt-0">
            {currentMatches.length > 0 ? (
              currentMatches.map(renderMatchCard)
            ) : (
              <p className="text-center py-8 text-muted-foreground">No upcoming matches found</p>
            )}
          </TabsContent>
          
          <TabsContent value="live" className="mt-0">
            {currentMatches.length > 0 ? (
              currentMatches.map(renderMatchCard)
            ) : (
              <p className="text-center py-8 text-muted-foreground">No live matches at the moment</p>
            )}
          </TabsContent>
          
          <TabsContent value="completed" className="mt-0">
            {currentMatches.length > 0 ? (
              currentMatches.map(renderMatchCard)
            ) : (
              <p className="text-center py-8 text-muted-foreground">No completed matches yet</p>
            )}
          </TabsContent>
        </Tabs>
        
        {totalPages > 1 && (
          <Pagination className="mt-8">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious 
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  className={currentPage === 1 ? "pointer-events-none opacity-50" : "cursor-pointer"}
                />
              </PaginationItem>
              
              {Array.from({ length: totalPages }).map((_, index) => (
                <PaginationItem key={index} className="hidden sm:inline-block">
                  <PaginationLink 
                    onClick={() => setCurrentPage(index + 1)}
                    isActive={currentPage === index + 1}
                    className="cursor-pointer"
                  >
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              
              <PaginationItem className="sm:hidden">
                <span className="flex h-9 items-center justify-center px-4">
                  {currentPage} / {totalPages}
                </span>
              </PaginationItem>
              
              <PaginationItem>
                <PaginationNext 
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  className={currentPage === totalPages ? "pointer-events-none opacity-50" : "cursor-pointer"}
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
