import { useGetPlayerRankedQuery } from "../../api/profileApi";
import { randomPlayers } from "../../helpers/randomPlayer";
import PlayerCard from "../PlayerCard/PlayerCard";
import { ScaleLoader } from "react-spinners";
import style from "./TopPlayers.module.scss";

export const TopPlayers = () => {
  const { data } = useGetPlayerRankedQuery();

  if (!data) return <ScaleLoader color="var(--text-color)" />;
  return (
    <>
      <h1 className={style.title}>Лучшие игроки этого сезона</h1>
      <div className={style.topPlayers}>
        {randomPlayers(data?.items).map((player) => (
          <PlayerCard key={player.nickname} player={player} />
        ))}
      </div>
    </>
  );
};
