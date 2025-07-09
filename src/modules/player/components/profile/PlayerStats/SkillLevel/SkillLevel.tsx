import type { FC } from "react";
import { LEVEL_ICONS } from "@/modules/player/constants";
import { getVariant } from "@/modules/player/helpers";
import { ProgressBar } from "../ProgressBar";
import { EloInfo } from "../EloInfo";
import { Image } from "@/shared/ui";
import { PlayerPlace } from "@/modules/player/components/search/PlayerPlace";
import style from "./SkillLevel.module.scss";

interface SkillLevelProps {
  elo: number;
  skill_level: number;
  position: number;
}

const icons: Record<number, string> = LEVEL_ICONS;

export const SkillLevel: FC<SkillLevelProps> = ({
  skill_level,
  position,
  elo,
}) => {
  const checkPosition = () => {
    if (position !== 0 && position <= 1000) {
      return (
        <PlayerPlace variant={getVariant(position)}>#{position}</PlayerPlace>
      );
    } else {
      return (
        <Image
          src={icons[skill_level]}
          alt={`Level ${skill_level.toString()}`}
        />
      );
    }
  };
  return (
    <>
      <EloInfo elo={elo} />
      <div className={style.skillLevelContainer}>
        <h3 className={style.skillLevelTitle}>Уровень мастерства</h3>
        {checkPosition()}
        <ProgressBar
          elo={elo}
          currentLevel={skill_level}
          nextLevel={skill_level + 1}
        />
      </div>
    </>
  );
};
