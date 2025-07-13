export interface PositionProps {
  id: string;
  region: string;
}

export interface Cs2Stat {
  skill_level: number;
  faceit_elo: number;
  game_player_name: string;
  region: string;
}

export interface PlayerInMatch {
  avatar: string;
  country: string;
  nickname: string;
  player_id: string;
  verified: boolean;
  games: {
    cs2: Cs2Stat;
  };
}

export interface PlayerPosition {
  position: number;
}
