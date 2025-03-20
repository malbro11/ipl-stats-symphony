
import { useState, useMemo } from "react";
import { teams, Team } from "@/lib/mockData";
import { ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

type SortField = "points" | "nrr" | "matches" | "won" | "lost";
type SortDirection = "asc" | "desc";

export function PointsTable() {
  const [sortField, setSortField] = useState<SortField>("points");
  const [sortDirection, setSortDirection] = useState<SortDirection>("desc");

  const toggleSort = (field: SortField) => {
    if (sortField === field) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc");
    } else {
      setSortField(field);
      setSortDirection("desc");
    }
  };

  const sortedTeams = useMemo(() => {
    return [...teams].sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];

      if (sortDirection === "asc") {
        return aValue - bValue;
      } else {
        return bValue - aValue;
      }
    });
  }, [teams, sortField, sortDirection]);

  const getSortIcon = (field: SortField) => {
    if (sortField !== field) {
      return <ArrowUpDown className="ml-1 h-4 w-4 inline" />;
    }
    return sortDirection === "asc" ? (
      <ArrowUp className="ml-1 h-4 w-4 inline" />
    ) : (
      <ArrowDown className="ml-1 h-4 w-4 inline" />
    );
  };

  return (
    <section id="points-table" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Points Table</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Current standings for IPL 2024. Teams are ranked by points, with Net
            Run Rate as a tiebreaker.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse glass-card rounded-xl overflow-hidden">
            <thead>
              <tr className="bg-gray-100/70 dark:bg-gray-800/70">
                <th className="text-left p-4">Team</th>
                <th className="p-4 cursor-pointer" onClick={() => toggleSort("matches")}>
                  M {getSortIcon("matches")}
                </th>
                <th className="p-4 cursor-pointer" onClick={() => toggleSort("won")}>
                  W {getSortIcon("won")}
                </th>
                <th className="p-4 cursor-pointer" onClick={() => toggleSort("lost")}>
                  L {getSortIcon("lost")}
                </th>
                <th className="p-4 cursor-pointer" onClick={() => toggleSort("nrr")}>
                  NRR {getSortIcon("nrr")}
                </th>
                <th className="p-4 cursor-pointer" onClick={() => toggleSort("points")}>
                  PTS {getSortIcon("points")}
                </th>
              </tr>
            </thead>
            <tbody>
              {sortedTeams.map((team, index) => (
                <tr
                  key={team.id}
                  className={`transition-colors hover:bg-gray-50/70 dark:hover:bg-gray-800/50 ${
                    index === 3 ? "border-b-2 border-gray-200 dark:border-gray-700" : ""
                  }`}
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className={`team-badge ${team.id}`}>
                        <div
                          className="w-8 h-8"
                          style={{
                            backgroundColor: team.primaryColor,
                            borderRadius: "50%",
                          }}
                        ></div>
                      </div>
                      <div>
                        <div className="font-semibold">{team.shortName}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {team.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 text-center">{team.matches}</td>
                  <td className="p-4 text-center">{team.won}</td>
                  <td className="p-4 text-center">{team.lost}</td>
                  <td className="p-4 text-center">
                    <span
                      className={
                        team.nrr > 0
                          ? "text-green-600 dark:text-green-400"
                          : "text-red-600 dark:text-red-400"
                      }
                    >
                      {team.nrr > 0 ? "+" : ""}
                      {team.nrr.toFixed(3)}
                    </span>
                  </td>
                  <td className="p-4 text-center font-bold">{team.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-6 text-sm text-gray-500 dark:text-gray-400 text-center">
          <p>
            Top 4 teams qualify for the playoffs. Net Run Rate (NRR) is used as a
            tiebreaker when teams have equal points.
          </p>
        </div>
      </div>
    </section>
  );
}
