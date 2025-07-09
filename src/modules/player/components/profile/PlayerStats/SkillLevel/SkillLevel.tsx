import type { FC } from "react";
import { ProgressBar } from "../ProgressBar";
import { EloInfo } from "../EloInfo";
import style from "./SkillLevel.module.scss";
import { PlayerLevel } from "@/shared/ui/PlayerLevel/PlayerLevel";

interface SkillLevelProps {
  elo: number;
  skill_level: number;
  position: number;
}

export const SkillLevel: FC<SkillLevelProps> = ({
  skill_level,
  position,
  elo,
}) => {
  return (
    <>
      <EloInfo elo={elo} />
      <div className={style.skillLevelContainer}>
        <h3 className={style.skillLevelTitle}>Уровень мастерства</h3>
        <PlayerLevel skill_level={skill_level} position={position} />
        <ProgressBar
          elo={elo}
          currentLevel={skill_level}
          nextLevel={skill_level + 1}
        />
      </div>
    </>
  );
};
