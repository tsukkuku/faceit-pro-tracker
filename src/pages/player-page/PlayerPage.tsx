import { MatchList } from "@/modules/matches";
import { PlayerBanner, PlayerStats } from "@/modules/player";

export const PlayerPage = () => {
  return (
    <>
      <PlayerBanner />
      <PlayerStats />
      <MatchList />
    </>
  );
};
