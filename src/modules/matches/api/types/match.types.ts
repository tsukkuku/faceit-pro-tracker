export interface PlayerMatches {
  stats: PlayerMatchStats;
}

export interface PlayerMatchStats {
  "Match Id": string;
  "Match Finished At": number;
  "Game Mode": string;
  Winner: string;
  Score: string;
  Kills: string;
  Deaths: string;
  Assists: string;
  "K/D Ratio": string;
  "K/R Ratio": string;
  ADR: string;
  "Headshots %": string;
  Map: string;
  Result: string;
}

export interface Matches {
  items: PlayerMatches[];
}
