export interface GameStats {
  cs2: {
    faceit_elo: number;
    skill_level: number;
    region: string;
  };
}

export interface Player {
  activated_at: string;
  avatar: string;
  cover_image: string;
  nickname: string;
  player_id: string;
  steam_id_64: string;
  steam_nickname: string;
  country: string;
  games: GameStats;
  verified: boolean;
}

export interface Ban {
  ends_at: string;
  reason: string;
  user_id: string;
}

export interface PlayerBan {
  items: Ban[];
}

export interface PlayerRanked {
  nickname: string;
  player_id: string;
  position: number;
}

export interface ApiResponse {
  items: PlayerRanked[];
}

export interface PlayerRankedPosition {
  id: string;
  region?: string;
  country?: string;
}

export interface PlayerLastMatches {
  items: LastMatches[];
}

export interface LastMatches {
  stats: LastMatchesInfo;
}

export interface LastMatchesInfo {
  Kills: string;
  Result: string;
  "K/D Ratio": string;
  "K/R Ratio": string;
  ADR: string;
  "Headshots %": string;
}
