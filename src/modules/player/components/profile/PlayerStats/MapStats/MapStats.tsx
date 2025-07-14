import type { PlayerMap, PlayerStats } from "@/modules/player/api";
import { KEYS } from "@/modules/player/constants";
import { useState, type FC } from "react";
import { Button } from "@/shared/ui";
import { MostPlayedMap } from "./MostPlayedMaps";
import style from "./MapStats.module.scss";

interface MapStatsProps {
  stats: PlayerStats;
}

export const MapStats: FC<MapStatsProps> = ({ stats }) => {
  const [visible, setVisible] = useState<boolean>(false);
  const sortedArray = [...stats.segments]
    .filter((item) => item.mode === "5v5")
    .sort((a: PlayerMap, b: PlayerMap) =>
      b.stats["Win Rate %"].localeCompare(a.stats["Win Rate %"])
    );

  const bestMaps = [...sortedArray].slice(0, 3);
  return (
    <>
      <div className={style.mostPlayedMaps}>
        {bestMaps.map((maps) => (
          <MostPlayedMap maps={maps} key={maps.label} />
        ))}
      </div>
      <Button
        onClick={() => setVisible((prev) => !prev)}
        className={style.button}
      >
        {!visible ? "Подробнее" : "Свернуть"}
      </Button>
      {visible && (
        <table className={style.mapStatsTable}>
          <thead>
            <tr className={style.mapRow}>
              <th className={`${style.mapHeadNames} ${style.mapCell}`}>Map</th>
              {KEYS.map((key) => (
                <th
                  key={key}
                  className={`${style.mapHeadNames} ${style.mapCell}`}
                >
                  {key}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedArray.map((item) => (
              <tr key={item.label} className={style.mapRow}>
                <td className={style.mapCell}>{item.label}</td>
                {KEYS.map((key) => (
                  <td
                    key={key}
                    className={`${style.mapStatsInfo} ${style.mapCell}`}
                  >
                    {item.stats[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
