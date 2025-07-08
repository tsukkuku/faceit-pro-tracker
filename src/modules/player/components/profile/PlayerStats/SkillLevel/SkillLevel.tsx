import type { FC } from "react";
import { LEVEL_ICONS } from "@/modules/player/constants";
import { getVariant } from "@/modules/player/helpers";
import { ProgressBar } from "../ProgressBar";
import { Elo } from "@/shared/assets";
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
      return <Image src={icons[skill_level]} />;
    }
  };
  return (
    <>
      <div className={style.skillLevelContainer}>
        <h3 className={style.skillLevelTitle}>
          ELO <Elo width={30} height={30} />
        </h3>
        <div className={style.skillLevelElo}>{elo}</div>
        <div className={style.weekendResultsContainer}>
          <span className={style.text}>Результаты последней недели</span>
          <div className={style.weekendResultsText}>
            <span className={style.weekendResultsWins}>W: 0</span>
            <span className={style.weekendResultsLoses}>L: 0</span>
          </div>
        </div>
      </div>
      <div className={style.skillLevelContainer}>
        <h3 className={style.skillLevelTitle}>Уровень мастерства</h3>
        {checkPosition()}
        <ProgressBar
          elo={elo}
          currentLevel={skill_level}
          futureLevel={skill_level + 1}
        />
      </div>
    </>
  );
};
