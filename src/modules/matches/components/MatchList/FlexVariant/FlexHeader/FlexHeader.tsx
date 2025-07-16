import { MATCH_HEADERS } from "@/modules/matches/constants";
import style from "./FlexHeader.module.scss";

export const FlexHeader = () => {
  return (
    <div className={style.flexHeader}>
      <span className={style.cardFlexFirstTitle}>Дата</span>
      <div className={style.matchCardFlexTitles}>
        {MATCH_HEADERS.map((header) => (
          <span key={header} className={style.cardFlexTitle}>
            {header}
          </span>
        ))}
      </div>
    </div>
  );
};
