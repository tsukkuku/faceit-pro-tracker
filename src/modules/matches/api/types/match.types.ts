export interface MatchStatsProps {
  id: string;
  to: number;
}

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

export interface Lvl {
  average: number;
}

export interface FactionInfo {
  avatar: string;
  leader: string;
  name: string;
  roster: RosterInfo[];
  stats: {
    rating: number;
    skillLevel: Lvl;
  };
}

export interface RosterInfo {
  anticheat_required: boolean;
  avatar: string;
  nickname: string;
  player_id: string;
  game_skill_level: number;
}

export interface VotingLabels {
  guid: string;
  name: string;
  class_name: string;
  image_lg: string;
  image_sm: string;
}

export interface MatchInfo {
  best_of: number;
  competition_name: string;
  region: string;
  finished_at: number;
  status: string;
  results: {
    winner: string;
  };
  teams: {
    faction1: FactionInfo;
    faction2: FactionInfo;
  };
  voting: {
    location: {
      entities: VotingLabels[];
      pick: string;
    };
    map: {
      entities: VotingLabels[];
      pick: string;
    };
  };
}

export interface PlayerInMatchStats {
  Kills: string;
  Assists: string;
  Deaths: string;
  "K/D Ratio": string;
  "K/R Ratio": string;
  Headshots: string;
  "Headshots %": string;
  MVPs: string;
  "Triple Kills": string;
  "Quadro Kills": string;
  "Penta Kills": string;
  ADR: string;
}

export interface PlayerInMatchInfo {
  nickname: string;
  player_id: string;
  player_stats: PlayerInMatchStats;
}

export interface TeamInfo {
  team_id: string;
  players: PlayerInMatchInfo[];
  team_stats: {
    "Final Score": string;
    "First Half Score": string;
    "Second Half Score": string;
    "Overtime score": string;
    Team: string;
    "Team Win": string;
  };
}

export interface MatchStats {
  rounds: {
    game_mode: string;
    round_stats: {
      Score: string;
      Winner: string;
      Region: string;
    };
    teams: TeamInfo[];
  }[];
}
