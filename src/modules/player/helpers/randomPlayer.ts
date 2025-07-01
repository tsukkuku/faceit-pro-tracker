import type { PlayerRanked } from "../api/types/player.types";

export const randomPlayers = (
  arr: PlayerRanked[],
  count = 5
): PlayerRanked[] => {
  const randomELement = [...arr].sort(() => 0.5 - Math.random());
  return randomELement.slice(0, count);
};
