import type { Ban } from "@/modules/player/api";
import { formatDate } from "@/shared/helpers";
import type { FC } from "react";
import style from "./PlayerBanDetails.module.scss";

interface PlayerBanDetailsProps {
  ban: Ban;
}

export const PlayerBanDetails: FC<PlayerBanDetailsProps> = ({ ban }) => {
  return (
    <div className={style.banInfo}>
      {ban.ends_at ? (
        <p>
          Действует блокировка до <span>{formatDate(ban.ends_at)}</span>
        </p>
      ) : (
        <span>Бессрочная блокировка</span>
      )}
      <p>
        Причина: <span>{ban.reason}</span>
      </p>
    </div>
  );
};
