import type { FC } from "react";
import { ProgressBar } from "./ProgressBar";
import { EloInfo } from "./EloInfo";
import { PlayerLevel } from "@/shared/ui";
import style from "./SkillLevel.module.scss";
import {
  useGetPlayerRankedCountryPositionQuery,
  useGetPlayerRankedRegionPositionQuery,
  type Player,
} from "@/modules/player/api";
import { PositionCard } from "./PositionCard";

interface SkillLevelProps {
  id: string;
  player: Player;
  elo: number;
}

export const SkillLevel: FC<SkillLevelProps> = ({ elo, id, player }) => {
  const { data: position } = useGetPlayerRankedRegionPositionQuery({
    id,
    region: player.games.cs2.region,
  });
  const { data: countryPosition } = useGetPlayerRankedCountryPositionQuery({
    id,
    region: player.games.cs2.region,
    country: player?.country,
  });

  return (
    <>
      <EloInfo elo={elo} />
      <div className={style.skillLevelContainer}>
        <div className={style.skillLevelTitle}>Уровень мастерства</div>
        {position && (
          <PlayerLevel
            skill_level={player.games.cs2.skill_level}
            position={position.position}
          />
        )}
        <ProgressBar
          elo={elo}
          currentLevel={player.games.cs2.skill_level}
          nextLevel={player.games.cs2.skill_level + 1}
        />
      </div>
      <div className={style.skillLevelContainer}>
        {position && (
          <PositionCard
            titleCard="Место в регионе"
            player={player}
            position={position}
            variant="region"
          />
        )}
      </div>
      <div className={style.skillLevelContainer}>
        {countryPosition && (
          <PositionCard
            titleCard="Место по стране"
            player={player}
            countryPosition={countryPosition}
            variant="country"
          />
        )}
      </div>
    </>
  );
};
