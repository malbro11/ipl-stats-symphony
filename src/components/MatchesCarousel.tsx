
import { useState } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar } from "lucide-react";
import { matches, teams } from "@/lib/mockData";
import { format, parseISO } from "date-fns";

export function MatchesCarousel() {
  // Get only upcoming and live matches
  const [activeMatches] = useState(
    matches.filter(match => match.status === "Upcoming" || match.status === "Live")
  );

  const getTeamData = (teamId: string) => {
    return teams.find(team => team.id === teamId);
  };

  return (
    <div className="py-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-1">
          {activeMatches.map((match) => {
            const team1 = getTeamData(match.team1Id);
            const team2 = getTeamData(match.team2Id);
            const matchDate = parseISO(match.date);
            
            if (!team1 || !team2) return null;
            
            return (
              <CarouselItem key={match.id} className="pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className="overflow-hidden border-2" style={{ 
                  borderColor: match.status === "Live" ? "#ff4d4f" : "#e2e8f0" 
                }}>
                  <div className="relative">
                    {match.status === "Live" && (
                      <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full animate-pulse">
                        LIVE
                      </div>
                    )}
                    {match.status === "Upcoming" && (
                      <div className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        UPCOMING
                      </div>
                    )}
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex flex-col items-center justify-center w-2/5">
                        <div 
                          className="w-12 h-12 flex items-center justify-center rounded-full p-1"
                          style={{ backgroundColor: team1.primaryColor + "20" }}
                        >
                          <img 
                            src={team1.logo} 
                            alt={team1.name} 
                            className="w-8 h-8 object-contain" 
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/placeholder.svg";
                            }}
                          />
                        </div>
                        <span className="text-sm font-semibold mt-1">{team1.shortName}</span>
                      </div>
                      
                      <div className="text-lg font-bold">VS</div>
                      
                      <div className="flex flex-col items-center justify-center w-2/5">
                        <div 
                          className="w-12 h-12 flex items-center justify-center rounded-full p-1"
                          style={{ backgroundColor: team2.primaryColor + "20" }}
                        >
                          <img 
                            src={team2.logo} 
                            alt={team2.name} 
                            className="w-8 h-8 object-contain"
                            onError={(e) => {
                              (e.target as HTMLImageElement).src = "/placeholder.svg";
                            }}
                          />
                        </div>
                        <span className="text-sm font-semibold mt-1">{team2.shortName}</span>
                      </div>
                    </div>
                    
                    <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <div className="flex items-center text-xs text-gray-600 dark:text-gray-400 mb-1">
                        <Calendar className="h-3 w-3 mr-1" />
                        <span>{format(matchDate, "dd MMM yyyy")}</span>
                      </div>
                      <div className="flex items-center text-xs text-gray-600 dark:text-gray-400">
                        <Clock className="h-3 w-3 mr-1" />
                        <span>{format(matchDate, "h:mm a")}</span>
                      </div>
                      <div className="text-xs text-gray-600 dark:text-gray-400 mt-1 truncate">
                        {match.venue}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>
        <div className="hidden sm:block">
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </div>
      </Carousel>
    </div>
  );
}
