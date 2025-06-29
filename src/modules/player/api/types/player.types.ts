export interface GameStats {
  faceit_elo: number;
  skill_level: string;
  region: string;
}

export interface Player {
  activated_at: string;
  avatar: string;
  nickname: string;
  player_id: string;
  steam_id_64: string;
  steam_nickname: string;
  country: string;
  games: GameStats;
  verified: boolean;
}
