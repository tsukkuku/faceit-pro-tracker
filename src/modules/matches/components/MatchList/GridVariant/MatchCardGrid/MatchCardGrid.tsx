import type { PlayerMatches } from "@/modules/matches/api";
import { formatDate } from "@/shared/helpers";
import type { FC } from "react";
import { Button, Image } from "@/shared/ui";
import { MAP_IMAGES } from "@/modules/matches/constants";
import { Link } from "react-router-dom";
import style from "./MatchCardGrid.module.scss";

interface MatchCardGridProps {
  match: PlayerMatches;
}

export const MatchCardGrid: FC<MatchCardGridProps> = ({ match }) => {
  const winOrLose = () => {
    if (match.stats.Result === "1") {
      return <div className={style.cardGridWin}>Победа</div>;
    } else {
      return <div className={style.cardGridLose}>Поражение</div>;
    }
  };
  return (
    <div className={style.matchCardGrid}>
      <Link
        to={`/match/${match.stats["Match Id"]}`}
        target="_blank"
        className={style.content}
      >
        <div className={style.matchCardGridImage}>
          <Image
            src={MAP_IMAGES[match.stats.Map]}
            alt={match.stats.Map}
            className={style.cardImage}
          />
        </div>
        <div className={style.matchInfo}>
          <div className={style.matchInfoTitle}>Информация:</div>
          <div className={style.matchInfoContainer}>
            <div className={style.titles}>
              <div className={style.dateText}>Дата:</div>
              <div className={style.text}>Режим:</div>
              <div className={style.resultText}>Результат:</div>
              <div className={style.lastTitleText}>Счет:</div>
            </div>
            <div className={style.values}>
              <div className={style.dateText}>
                {formatDate(match.stats["Match Finished At"])}
              </div>
              <div className={style.text}>{match.stats["Game Mode"]}</div>
              <div className={style.resultText}>{winOrLose()}</div>
              <div className={style.lastTitleText}>{match.stats.Score}</div>
            </div>
          </div>
          <div className={style.matchInfoTitle}>Статистика:</div>
          <div className={style.matchInfoContainer}>
            <div className={style.statsTitles}>
              <div className={style.text}>Kills</div>
              <div className={style.text}>Deaths</div>
              <div className={style.text}>Assists</div>
              <div className={style.text}>K/D</div>
              <div className={style.text}>K/R</div>
              <div className={style.lastText}>ADR</div>
            </div>
            <div className={style.values}>
              <div className={style.text}>{match.stats.Kills}</div>
              <div className={style.text}>{match.stats.Deaths}</div>
              <div className={style.text}>{match.stats.Assists}</div>
              <div className={style.text}>{match.stats["K/D Ratio"]}</div>
              <div className={style.text}>{match.stats["K/R Ratio"]}</div>
              <div className={style.lastText}>
                {match.stats.ADR ? match.stats.ADR : "N/A"}
              </div>
            </div>
          </div>
          <Button>Открыть матч</Button>
        </div>
      </Link>
    </div>
  );
};
