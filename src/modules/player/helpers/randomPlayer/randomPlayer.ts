import type { PlayerRanked } from "@/modules/player/api";

export const randomPlayers = (
  arr: PlayerRanked[],
  count = 5
): PlayerRanked[] => {
  const randomELement = [...arr].sort(() => 0.5 - Math.random());
  return randomELement.slice(0, count);
};
