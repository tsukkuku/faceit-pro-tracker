import type { FC } from "react";
import { levels } from "@/modules/player/constants";
import style from "./ProgressBar.module.scss";

interface ProgressBarProps {
  elo: number;
  currentLevel: number;
  nextLevel: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({
  elo,
  currentLevel,
  nextLevel,
}) => {
  const level = levels.find((item) => item.level === currentLevel);
  return elo < 2001 ? (
    <div className={style.progressBarContainer}>
      <div className={style.textProgress}>
        {currentLevel} уровень
        <span className={style.eloForLevel}>{level?.min}</span>
      </div>
      <meter
        className={style.progressBar}
        min={level?.min}
        value={elo}
        max={level?.max}
      />
      <div className={style.textProgress}>
        {nextLevel} уровень
        <span className={style.eloForLevel}>{level?.max}</span>
      </div>
    </div>
  ) : (
    <span className={style.maxLevelText}>Максимальный уровень!</span>
  );
};
