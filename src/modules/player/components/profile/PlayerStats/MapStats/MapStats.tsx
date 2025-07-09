import type {
  PlayerMap,
  PlayerStats,
} from "@/modules/player/api/types/stats.types";
import { KEYS } from "@/modules/player/constants";
import { useState, type FC } from "react";
import style from "./MapStats.module.scss";
import { Button } from "@/shared/ui";
import { MostPlayedMap } from "./MostPlayedMaps/MostPlayedMap";

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
            <tr>
              <th>Map</th>
              {KEYS.map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedArray.map((item) => (
              <tr key={item.label}>
                <td>{item.label}</td>
                {KEYS.map((key) => (
                  <td key={key}>{item.stats[key]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};
