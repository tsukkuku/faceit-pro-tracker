import {
  useGetPlayerInfoQuery,
  useGetPlayerStatsQuery,
} from "@/modules/player/api";
import { useParams } from "react-router-dom";
import { STATS_CARD } from "@/modules/player/constants";
import { ScaleLoader } from "react-spinners";
import { StatsCard } from "./StatsCard";
import { SkillLevel } from "./SkillLevel";
import { MapStats } from "./MapStats";
import { LastMatchesStats } from "./LastMacthesStats";
import style from "./PlayerStats.module.scss";

export const PlayerStats = () => {
  const { id = "" } = useParams();
  const { data, isLoading } = useGetPlayerStatsQuery(id);
  const { data: playerLvl } = useGetPlayerInfoQuery(id);

  if (isLoading) return <ScaleLoader color="var(--text-color)" />;
  if (!playerLvl) return;
  if (!data) return <p>У игрока нету статистики в Counter Strike 2</p>;
  return (
    <div className={style.playerStatsSection}>
      <h1>Статистика за всё время</h1>
      <div className={style.statsCardsContainer}>
        {STATS_CARD.map((stat) => (
          <StatsCard key={stat} value={data.lifetime[stat]} wrapper={stat} />
        ))}
      </div>
      <LastMatchesStats id={id} />
      <h3 className={style.skillLevelSectionTitle}>Эло и уровень мастерства</h3>

      <div className={style.skillLevelSection}>
        <SkillLevel player={playerLvl} id={id} />
      </div>

      {data.segments.length > 0 && (
        <div className={style.mapStatsSection}>
          <h4 className={style.mapStatsTitle}>Статистика на картах</h4>
          <MapStats stats={data} />
        </div>
      )}
    </div>
  );
};
