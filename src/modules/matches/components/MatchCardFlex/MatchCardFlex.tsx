import type { FC } from "react";
import type { PlayerMatches } from "@/modules/matches/api";
import { formatDate } from "@/shared/helpers";
import { MAP_IMAGES } from "@/modules/matches/constants";
import { Image } from "@/shared/ui";
import style from "./MatchCardFlex.module.scss";

interface MatchCardFlexProps {
  match: PlayerMatches;
}

export const MatchCardFlex: FC<MatchCardFlexProps> = ({ match }) => {
  const winOrLose = () => {
    if (match.stats.Result === "1") {
      return <div className={style.cardFlexWin}>Победа</div>;
    } else {
      return <div className={style.cardFlexLose}>Поражение</div>;
    }
  };
  return (
    <>
      <div className={style.matchCardFlex}>
        <div className={style.matchCardFlexContent}>
          <div className={style.statsColumn}>
            <div className={style.cardFlexValue} style={{ width: "180px" }}>
              {formatDate(match.stats["Match Finished At"])}
            </div>
          </div>
          <div className={style.statsColumn}>
            <div className={style.cardFlexValue}>
              {match.stats["Game Mode"]}
            </div>
          </div>
          <div className={style.statsColumn}>{winOrLose()}</div>
          <div className={style.statsColumn}>
            <div className={style.cardFlexValue}>{match.stats.Score}</div>
          </div>
          <div className={style.statsColumn}>
            <div className={style.cardFlexValue}>
              {match.stats.Kills} / {match.stats.Deaths} / {match.stats.Assists}
            </div>
          </div>
          <div className={style.statsColumn}>
            <div className={style.cardFlexValue}>
              {parseFloat(match.stats["K/D Ratio"]).toFixed(2)}
            </div>
          </div>
          <div className={style.statsColumn}>
            <div className={style.cardFlexValue}>
              {parseFloat(match.stats["K/R Ratio"]).toFixed(2)}
            </div>
          </div>
          <div className={style.statsColumn}>
            <div className={style.cardFlexValue}>
              {parseFloat(match.stats.ADR).toFixed(2)}
            </div>
          </div>
          <div className={style.statsColumn}>
            <div className={style.cardFlexValue}>
              {match.stats["Headshots %"]}
            </div>
          </div>
          <div className={style.statsColumn}>
            <div className={style.cardFlexValue}>
              <Image
                src={MAP_IMAGES[match.stats.Map]}
                alt={match.stats.Map}
                className={style.cardFlexImage}
              />
              {match.stats.Map}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
