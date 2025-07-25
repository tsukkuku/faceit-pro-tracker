import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetPlayerInfoQuery, type PlayerRanked } from "@/modules/player/api";
import { NO_AVATAR } from "@/shared/constants";
import { VerifySVG } from "@/shared/assets";
import { Avatar, PlayerPlace } from "@/shared/ui";
import { getVariant } from "@/shared/helpers";
import style from "./PlayerCard.module.scss";

interface PlayerCardProps {
  player: PlayerRanked;
}

export const PlayerCard: FC<PlayerCardProps> = ({ player }) => {
  const navigate = useNavigate();
  const { data } = useGetPlayerInfoQuery(player.player_id);
  return (
    <div
      className={style.playerCard}
      onClick={() => navigate(`player/${data?.player_id}`)}
    >
      <Avatar src={data?.avatar} fallback={NO_AVATAR} size="lg" />
      <p className={style.nickname}>
        {data?.nickname}
        {data?.verified && <VerifySVG width={18} height={18} />}
      </p>
      <PlayerPlace variant={getVariant(player.position)}>
        #{player.position}
      </PlayerPlace>
    </div>
  );
};
