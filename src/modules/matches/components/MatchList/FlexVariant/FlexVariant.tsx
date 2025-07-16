import { type FC } from "react";
import type { PlayerMatches } from "@/modules/matches/api";
import { ClipLoader } from "react-spinners";
import { FlexHeader } from "./FlexHeader";
import { MatchCardFlex } from "./MatchCardFlex";
import style from "./FlexVariant.module.scss";

interface FlexProps {
  match: PlayerMatches[];
  ref: (node: Element | null) => void;
  isFetching: boolean;
  hasMore: boolean;
}

export const FlexVariant: FC<FlexProps> = ({ match, ref, isFetching, hasMore }) => {
  return (
    <div className={style.matchesFlexSection}>
      <FlexHeader />
      {match.map((match) => (
        <MatchCardFlex key={match.stats["Match Id"]} match={match} />
      ))}
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