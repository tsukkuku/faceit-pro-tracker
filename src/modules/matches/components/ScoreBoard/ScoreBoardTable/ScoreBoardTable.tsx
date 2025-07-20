import { MATCH_STATS_HEADER } from "@/modules/matches/constants";
import type { FC } from "react";
import { type PlayerInMatchInfo } from "@/modules/matches/api";
import { PlayerRow } from "./PlayerRow/PlayerRow";
import style from "./ScoreBoardTable.module.scss";

interface SortArray {
  sortArray: PlayerInMatchInfo[];
}

export const ScoreBoardTable: FC<SortArray> = ({ sortArray }) => {
  return (
    <div className={style.tableScroll}>
      <table className={style.scoreBoard}>
        <thead className={style.scoreBoardHeader}>
          <tr className={style.scoreBoardRow}>
            <th className={style.scoreBoardPlayer}>Игрок</th>
            {MATCH_STATS_HEADER.map((name) => (
              <th key={name} className={style.scoreBoardTitles}>
                {name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortArray?.map((player) => (
            <tr className={style.scoreBoardRow} key={player.player_id}>
              <td className={style.playerRow}>
                <PlayerRow id={player.player_id} />
              </td>
              {MATCH_STATS_HEADER.map((value) => (
                <td key={value} className={style.playerRowStats}>
                  {player.player_stats[value]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
