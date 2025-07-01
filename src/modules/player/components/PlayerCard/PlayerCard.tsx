import type { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useGetPlayerInfoQuery } from "../../api/profileApi";
import type { PlayerRanked } from "../../api/types/player.types";
import { NO_AVATAR } from "@/modules/player/constans/constans";
import { VscVerifiedFilled } from "react-icons/vsc";
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
      <div className={style.avatar}>
        <img src={data?.avatar || NO_AVATAR} className={style.avatarPhoto} />
      </div>
      <p className={style.nickname}>
        {data?.nickname}
        {data?.verified && <VscVerifiedFilled className={style.verified} />}
      </p>
    </div>
  );
};

export default PlayerCard;
