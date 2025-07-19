import type { FC } from "react";
import { useGetPlayerInMatchInfoQuery } from "@/modules/matches/api";
import { VerifySVG } from "@/shared/assets";
import { NO_AVATAR } from "@/shared/constants";
import { Avatar } from "@/shared/ui";
import { Link } from "react-router-dom";
import style from "./PlayerRow.module.scss";

interface PlayerRowProps {
  id: string;
}

export const PlayerRow: FC<PlayerRowProps> = ({ id }) => {
  const { data } = useGetPlayerInMatchInfoQuery(id);
  return (
    <Link to={`/player/${data?.player_id}`} className={style.playerRowCard}>
      <Avatar
        src={data?.avatar}
        alt={data?.nickname}
        size="sm"
        fallback={NO_AVATAR}
      />
      {data?.nickname}
      {data?.verified && <VerifySVG width={15} height={15} />}
    </Link>
  );
};
