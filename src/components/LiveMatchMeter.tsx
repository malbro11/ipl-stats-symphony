
import { useMemo } from "react";
import { matches, teams } from "@/lib/mockData";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Flame, Star } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function LiveMatchMeter() {
  const isMobile = useIsMobile();
  
  // Get current live match
  const liveMatch = useMemo(() => {
    return matches.find(match => match.status === "Live");
  }, []);

  if (!liveMatch) return null;

  const team1 = teams.find(team => team.id === liveMatch.team1Id);
  const team2 = teams.find(team => team.id === liveMatch.team2Id);

  if (!team1 || !team2) return null;

  // Parse scores to determine winning percentage
  let team1Score = 0;
  let team2Score = 0;
  let team1Wickets = 0;
  let team2Wickets = 0;
  let team1Overs = 0;
  let team2Overs = 0;
  
  if (liveMatch.team1Score) {
    // Extract format like "189/6 (20)"
    const scoreMatch = liveMatch.team1Score.match(/(\d+)\/(\d+)\s*\((\d+(\.\d+)?)\)/);
    if (scoreMatch) {
      team1Score = parseInt(scoreMatch[1], 10);
      team1Wickets = parseInt(scoreMatch[2], 10);
      team1Overs = parseFloat(scoreMatch[3]);
    }
  }
  
  if (liveMatch.team2Score) {
    const scoreMatch = liveMatch.team2Score.match(/(\d+)\/(\d+)\s*\((\d+(\.\d+)?)\)/);
    if (scoreMatch) {
      team2Score = parseInt(scoreMatch[1], 10);
      team2Wickets = parseInt(scoreMatch[2], 10);
      team2Overs = parseFloat(scoreMatch[3]);
    }
  }

  // Calculate winning percentage based on score, wickets remaining, and overs
  let winPercentage = 50; // Default to 50-50
  let winningTeam = null;
  let winningEmoji = null;

  // Simple win prediction logic - can be enhanced with more complex calculations
  if (team1Score > 0 && team2Score > 0) {
    // Both teams have batted
    if (team1Score > team2Score) {
      // Team 1 ahead
      const scoreDiff = team1Score - team2Score;
      winPercentage = 50 + Math.min(scoreDiff / 2, 40);
      winningTeam = team1;
      winningEmoji = <Trophy className="h-5 w-5 text-yellow-500" />;
    } else if (team2Score > team1Score) {
      // Team 2 ahead
      const scoreDiff = team2Score - team1Score;
      winPercentage = 50 - Math.min(scoreDiff / 2, 40);
      winningTeam = team2;
      winningEmoji = <Trophy className="h-5 w-5 text-yellow-500" />;
    }
  } else if (team1Score > 0 && team1Overs > 0) {
    // Only team 1 has batted - prediction based on run rate
    const runRate = team1Score / team1Overs;
    winPercentage = 50 + Math.min(runRate * 2, 30);
    winningTeam = team1;
    winningEmoji = <Flame className="h-5 w-5 text-orange-500" />;
  } else if (team2Score > 0 && team2Overs > 0) {
    // Only team 2 has batted - prediction based on run rate
    const runRate = team2Score / team2Overs;
    winPercentage = 50 - Math.min(runRate * 2, 30);
    winningTeam = team2;
    winningEmoji = <Flame className="h-5 w-5 text-orange-500" />;
  }

  // Stronger prediction when gap is big
  const isStrongPrediction = Math.abs(winPercentage - 50) > 25;
  
  // Random momentum swing factor to make it more dynamic
  const momentumSwing = Math.random() * 10 - 5;
  winPercentage = Math.max(5, Math.min(95, winPercentage + momentumSwing));

  return (
    <div className="my-4">
      <Card className="border-2 border-red-500 overflow-hidden">
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-2">
            <div className="flex items-center">
              <div
                className="w-8 h-8 rounded-full mr-2"
                style={{ backgroundColor: team1.primaryColor }}
              />
              <span className="font-semibold text-sm">{team1.shortName}</span>
              {winningTeam?.id === team1.id && (
                <span className="ml-1">{winningEmoji}</span>
              )}
            </div>
            <div className="text-center">
              <span className="font-bold text-red-500 text-xs px-2 py-1 bg-red-100 rounded-full animate-pulse">
                LIVE
              </span>
              <div className="text-xs mt-1">Win Predictor</div>
            </div>
            <div className="flex items-center">
              <span className="font-semibold text-sm">{team2.shortName}</span>
              {winningTeam?.id === team2.id && (
                <span className="ml-1">{winningEmoji}</span>
              )}
              <div
                className="w-8 h-8 rounded-full ml-2"
                style={{ backgroundColor: team2.primaryColor }}
              />
            </div>
          </div>

          <div className="relative pt-1">
            <div className="flex mb-2 items-center justify-between">
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  {Math.round(winPercentage)}%
                </span>
              </div>
              <div>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200">
                  {Math.round(100 - winPercentage)}%
                </span>
              </div>
            </div>
            <Progress value={winPercentage} className="h-2" />
          </div>

          <div className="mt-3 text-center">
            {winningTeam ? (
              <div className="text-sm">
                <span className="font-medium">{winningTeam.name}</span> {isStrongPrediction ? 'is dominating' : 'has the edge'} 
                {liveMatch.team1Score && liveMatch.team2Score && (
                  <span> • {liveMatch.team1Score} vs {liveMatch.team2Score}</span>
                )}
              </div>
            ) : (
              <div className="text-sm">Evenly matched!</div>
            )}
          </div>

          <div className="flex justify-center gap-1 mt-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star 
                key={i} 
                className={`h-4 w-4 ${
                  i < Math.ceil(Math.abs(winPercentage - 50) / 10) 
                    ? 'text-yellow-500 fill-yellow-500' 
                    : 'text-gray-300'
                }`} 
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
