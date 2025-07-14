import type { MatchStats } from "../api";

export const useTeamInfo = (stats: MatchStats) => {
  const faction1 = stats?.rounds[0].teams[0];
  const faction2 = stats?.rounds[0].teams[1];

  const sortedFirstTeam = [...(faction1?.players || [])].sort(
    (a, b) => parseInt(b.player_stats.Kills) - parseInt(a.player_stats.Kills)
  );
  const sortedSecondTeam = [...(faction2?.players || [])].sort(
    (a, b) => parseInt(b.player_stats.Kills) - parseInt(a.player_stats.Kills)
  );

  return { faction1, faction2, sortedFirstTeam, sortedSecondTeam };
};
