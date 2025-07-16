import { type FC } from "react";
import type { PlayerMatches } from "@/modules/matches/api";
import { MatchCardGrid } from "./MatchCardGrid";
import { ClipLoader } from "react-spinners";
import style from "./GridVariant.module.scss";

interface GridProps {
  match: PlayerMatches[];
  ref: (node: Element | null) => void;
  isFetching: boolean;
  hasMore: boolean;
}

export const GridVariant: FC<GridProps> = ({
  match,
  ref,
  isFetching,
  hasMore,
}) => {
  return (
    <div>
      <div className={style.matchGridSection}>
        {match.map((match) => (
          <MatchCardGrid key={match.stats["Match Id"]} match={match} />
        ))}
      </div>
      <div
        ref={ref}
        style={{ width: "100%", height: "20px", textAlign: "center" }}
      >
        {isFetching && <ClipLoader color="var(--text-color)" />}
        {!hasMore && <p>У игрока больше нету матчей в Counter Strike 2</p>}
      </div>
    </div>
  );
};
