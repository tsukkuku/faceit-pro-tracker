export interface PlayerStats {
  lifetime: {
    Matches: string;
    "Average K/D Ratio": string;
    "Average Headshots %": string;
    "Longest Win Streak": string;
    "Win Rate %": string;
    "Recent Results": string[];
  };
  segments: [
    {
      img_regular: string;
      label: string;
      mode: string;
      stats: PlayerMapStats;
    }
  ];
}

export interface PlayerMap {
  img_regular: string;
  label: string;
  stats: PlayerMapStats;
}

export interface PlayerMapStats {
  Matches: string;
  "Win Rate %": string;
  "Average Kills": string;
  "Average Deaths": string;
  "Average Assists": string;
  "Average K/R Ratio": string;
  "Average K/D Ratio": string;
  "Headshots per Match": string;
  "Average Headshots %": string;
  "Average Triple Kills": string;
  "Average Quadro Kills": string;
  "Average Penta Kills": string;
}
