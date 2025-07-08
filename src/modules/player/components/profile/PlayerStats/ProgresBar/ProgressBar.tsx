import type { FC } from "react";
import { levels } from "@/modules/player/constants";
import style from "./ProgressBar.module.scss";

interface ProgressBarProps {
  elo: number;
  currentLevel: number;
  futureLevel: number;
}

export const ProgressBar: FC<ProgressBarProps> = ({
  elo,
  currentLevel,
  futureLevel,
}) => {
  const minAndMax = levels.find((item) => item.level === currentLevel);
  return elo < 2001 ? (
    <div className={style.progressBarContainer}>
      <span className={style.textProgress}>{currentLevel} уровень</span>
      <meter
        className={style.progressBar}
        min={minAndMax?.min}
        value={elo}
        max={minAndMax?.max}
      />
      <span className={style.textProgress}>{futureLevel} уровень</span>
    </div>
  ) : (
    <span style={{ fontSize: "16px", fontWeight: 700 }}>
      Максимальный уровень!
    </span>
  );
};
