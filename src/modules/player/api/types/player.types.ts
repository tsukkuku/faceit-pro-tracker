export interface GameStats {
  cs2: {
    faceit_elo: number;
    skill_level: number;
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

export interface PlayerRanked {
  nickname: string;
  player_id: string;
  position: number;
}

export interface ApiResponse {
  items: PlayerRanked[];
}
