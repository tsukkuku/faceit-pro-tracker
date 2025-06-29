export interface PlayerStats {
  lifetime: {
    matches: string;
    avgKDRatio: string;
    avgHeadshots: string;
    longestWinStreak: string;
    winrate: string;
    recentResults: {
      0: string;
      1: string;
      2: string;
      3: string;
      4: string;
    };
  };
}
