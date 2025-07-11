import type { FC } from "react";
import style from "./StatsCard.module.scss";

interface StatsCardProps {
  value: string | number | string[];
  wrapper: string;
}

export const StatsCard: FC<StatsCardProps> = ({ value, wrapper }) => {
  const formatValue = () => {
    if (typeof value === "string" || typeof value === "number") {
      return value;
    }
    return value?.map((result, index) => (
      <span
        key={index}
        className={
          result === "1" ? style.statResultValueWin : style.statResultValueLose
        }
      >
        {result === "1" ? "W" : "L"}
      </span>
    ));
  };
  return (
    <div className={style.statsCard}>
      <div className={style.statsCardContent}>
        <div className={style.statsCardValue}>
          <span className={style.text}>{formatValue()}</span>
        </div>
        <div className={style.statsCardWrapper}>
          <span className={style.textUpperCase}>{wrapper}</span>
        </div>
      </div>
    </div>
  );
};
