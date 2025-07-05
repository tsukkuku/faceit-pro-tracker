import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetPlayerInfoQuery, type PlayerRanked } from "@/modules/player/api";
import { NO_AVATAR } from "@/modules/player/constans";
import { VerifySVG } from "@/shared/assets";
import { PlayerPlace } from "../PlayerPlace/PlayerPlace";
import { getVariant } from "@/modules/player/helpers";
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
      onClick={() => navigate(`/player/${data?.player_id}`)}
    >
      <div className={style.avatar}>
        <img src={data?.avatar || NO_AVATAR} className={style.avatarPhoto} />
      </div>
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
