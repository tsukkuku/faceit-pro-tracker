import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetPlayerInfoQuery } from "../../api/profileApi";
import type { PlayerRanked } from "../../api/types/player.types";
import { NO_AVATAR } from "@/modules/player/constans/constans";
import style from "./PlayerCard.module.scss";

interface PlayerCardProps {
  player: PlayerRanked;
}

const PlayerCard: FC<PlayerCardProps> = ({ player }) => {
  const navigate = useNavigate();
  const { data } = useGetPlayerInfoQuery(player.nickname);
  return (
    <div
      className={style.playerCard}
      onClick={() => navigate(`/player/${data?.player_id}`)}
    >
      <img src={data?.avatar || NO_AVATAR} className={style.avatar} />
      <p className={style.nickname}>{data?.nickname}</p>
    </div>
  );
};

export default PlayerCard;
