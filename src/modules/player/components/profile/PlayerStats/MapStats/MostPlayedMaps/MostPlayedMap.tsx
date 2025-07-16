import type { FC } from "react";
import type { PlayerMap } from "@/modules/player/api";
import style from "./MostPlayedMap.module.scss";
import { Image } from "@/shared/ui";

interface MostPlayedMapsProps {
  maps: PlayerMap;
}

export const MostPlayedMap: FC<MostPlayedMapsProps> = ({ maps }) => {
  return (
    <div className={style.mapContainer}>
      <Image
        src={maps.img_regular}
        alt={maps.label}
        className={style.mapImage}
      />
      <div className={style.mapStatsInfo}>
        <div className={style.mapStatsDetail}>
          <span>Win Rate %</span>
          <span className={style.mapWinRate}>{maps.stats["Win Rate %"]}</span>
        </div>
        <div className={style.mapStatsDetail}>
          <span>Matches</span>
          <span className={style.mapMatches}>{maps.stats.Matches}</span>
        </div>
      </div>
      <div className={style.mapLabel}>
        <span>{maps.label}</span>
      </div>
    </div>
  );
};
