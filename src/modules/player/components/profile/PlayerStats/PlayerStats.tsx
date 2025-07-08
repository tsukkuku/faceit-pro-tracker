import {
  useGetPlayerInfoQuery,
  useGetPlayerRankedPositionQuery,
  useGetPlayerStatsQuery,
} from "@/modules/player/api";
import { useParams } from "react-router-dom";
import { STATS_CARD } from "@/modules/player/constants";
import { StatsCard } from "./StatsCard";
import { SkillLevel } from "./SkillLevel";
import { ScaleLoader } from "react-spinners";
import style from "./PlayerStats.module.scss";

export const PlayerStats = () => {
  const { id } = useParams();
  const { data, isLoading } = useGetPlayerStatsQuery(id || "");
  const { data: playerLvl } = useGetPlayerInfoQuery(id || "");
  const { data: position } = useGetPlayerRankedPositionQuery(id || "");

  if (isLoading) return <ScaleLoader color="var(--text-color)" />;
  if (!data) return <p>У игрока нету статистики в Counter Strike 2</p>;
  if (!position) return <p>Error</p>;
  return (
    <div className={style.playerStatsSection}>
      <h1>Статистика за всё время</h1>
      <div className={style.statsCardsContainer}>
        {STATS_CARD.map((stat) => (
          <StatsCard key={stat} value={data.lifetime[stat]} wrapper={stat} />
        ))}
      </div>
      {playerLvl?.games.cs2.skill_level && (
        <div className={style.skillLevelSection}>
          <SkillLevel
            elo={playerLvl.games.cs2.faceit_elo}
            skill_level={playerLvl?.games.cs2.skill_level}
            position={position.position}
          />
        </div>
      )}
    </div>
  );
};
