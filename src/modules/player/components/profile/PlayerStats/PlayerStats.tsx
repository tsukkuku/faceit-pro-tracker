import { useGetPlayerStatsQuery } from "@/modules/player/api";
import { useParams } from "react-router-dom";
import { STATS_CARD } from "@/modules/player/constans";
import { StatsCard } from "./StatsCard";
import { ScaleLoader } from "react-spinners";
import style from "./PlayerStats.module.scss";

export const PlayerStats = () => {
  const { id } = useParams();
  const { data } = useGetPlayerStatsQuery(id || "");
  if (!data) return <ScaleLoader color="var(--text-color)" />;
  return (
    <div className={style.playerStatsSection}>
      <h1>Статистика за всё время</h1>
      <div className={style.statsCardsContainer}>
        {STATS_CARD.map((stat) => (
          <StatsCard key={stat} value={data.lifetime[stat]} wrapper={stat} />
        ))}
      </div>
    </div>
  );
};
