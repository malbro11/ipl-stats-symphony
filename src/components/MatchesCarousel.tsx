
import { useState, useMemo } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { matches, teams } from "@/lib/mockData";
import { format, parseISO, isAfter, isBefore } from "date-fns";
import { Link } from "react-router-dom";

export function MatchesCarousel() {
  // Get upcoming and live matches
  const [activeMatches] = useState(
    matches
      .filter(match => ["Upcoming", "Live", "Completed"].includes(match.status))
      .sort((a, b) => {
        const order = { "Live": 1, "Upcoming": 2, "Completed": 3 };
        return order[a.status] - order[b.status];
      })
  );

  // Find the latest match (closest upcoming match to current date)
  const latestMatch = useMemo(() => {
    const now = new Date();
    const upcomingMatches = activeMatches.filter(match =>
      match.status === "Upcoming" && isAfter(parseISO(match.date), now)
    );

    if (upcomingMatches.length === 0) return null;

    return upcomingMatches.reduce((closest, match) => {
      const closestDate = parseISO(closest.date);
      const matchDate = parseISO(match.date);
      return isBefore(matchDate, closestDate) ? match : closest;
    });
  }, [activeMatches]);

  const getTeamData = (teamId: string) => {
    return teams.find(team => team.id === teamId);
  };

  return (
    <div className="py-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">IPL 2025 Upcoming Matches</h3>
        <Link to="/all-matches" className="flex items-center text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
          View All
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
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
            const isLatest = latestMatch && match.id === latestMatch.id;

            if (!team1 || !team2) return null;

            return (
              <CarouselItem key={match.id} className="m-1 pl-1 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                <Card className={`overflow-hidden border-2 ${isLatest ? 'ring-2 ring-blue-500 dark:ring-blue-400' : ''}`} style={{
                  borderColor: match.status === "Live" ? "#ff4d4f" : isLatest ? "#3b82f6" : "#e2e8f0"
                }}>
                  <div className="relative">
                    {/* Status badges positioned at the top of the card */}
                    <div className="absolute top-2 left-2 flex gap-2">
                      {isLatest && match.status === "Upcoming" && (
                        <div className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          NEXT MATCH
                        </div>
                      )}
                      {match.status === "Completed" && (
                        <div className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-full">
                          Completed
                        </div>
                      )}
                    </div>
                    <div className="absolute top-2 right-2">
                      {match.status === "Upcoming" && (
                        <div className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2">
                          UPCOMING
                        </div>
                      )}
                    </div>

                    <div className="absolute top-2 right-2">
                      {match.status === "Live" && (
                        <div className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-full mb-2">
                          LIVE
                        </div>
                      )}
                    </div>
                  </div>
                  <CardContent className="p-4 pt-10"> {/* Increased padding-top to avoid overlapping with badges */}
                    <div className="flex justify-between items-center mb-3">
                      <div className="flex flex-col items-center justify-center w-2/5">
                        <div
                          className="w-8 h-8"
                          style={{
                            backgroundColor: team1.primaryColor,
                            borderRadius: "50%",
                          }}
                        ></div>
                        <span className="text-sm font-semibold mt-1">{team1.shortName}</span>
                        <div className="h-4">
                          {match?.team1Score && <span className="text-sm font-semibold mt-1">{match.team1Score}</span>}
                        </div>

                      </div>

                      <div className="text-lg font-bold">VS</div>

                      <div className="flex flex-col items-center justify-center w-2/5">
                        <div
                          className="w-8 h-8"
                          style={{
                            backgroundColor: team2.primaryColor,
                            borderRadius: "50%",
                          }}
                        ></div>
                        <span className="text-sm font-semibold mt-1">{team2.shortName}</span>
                        <div className="h-4">
                          {match?.team2Score && <span className="text-sm font-semibold mt-1">{match.team2Score}</span>}
                        </div>
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
                      <div className="h-5 mt-1">
                        {match.finalStats && <div className="text-xs truncate">
                          {match.finalStats}
                        </div>}
                      </div>
                      <div className="h-5">
                        {match.player_match && <div className="text-xs truncate">
                          <span className="text-xs text-gray-600 dark:text-gray-400 truncate">
                            MoF:
                          </span>
                          {' ' + match.player_match}
                        </div>}
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
