import { useGetPlayerRankedQuery } from "@/modules/player/api";
import { useSavePlayers } from "@/modules/player/hooks";
import { ScaleLoader } from "react-spinners";
import { PlayerCard } from "../PlayerCard/PlayerCard";
import style from "./TopPlayers.module.scss";

export const TopPlayers = () => {
  const { data } = useGetPlayerRankedQuery();
  const players = useSavePlayers(data!);

  if (!data) return <ScaleLoader color="var(--text-color)" />;
  return (
    <>
      <h1 className={style.title}>Лучшие игроки этого сезона</h1>
      <div className={style.topPlayers}>
        {players.map((player) => (
          <PlayerCard key={player.nickname} player={player} />
        ))}
      </div>
    </>
  );
};
