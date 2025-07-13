import {
  useGetPlayerBansQuery,
  useGetPlayerInfoQuery,
} from "@/modules/player/api";
import { useParams } from "react-router-dom";
import { NO_BACKGROUND } from "@/modules/player/constants";
import { NO_AVATAR } from "@/shared/constants";
import { VerifySVG } from "@/shared/assets";
import { formatDate } from "@/shared/helpers";
import ReactCountryFlag from "react-country-flag";
import { ScaleLoader } from "react-spinners";
import { Avatar, Button, Image } from "@/shared/ui";
import { PlayerBanDetails } from "./PlayerBanDetails";
import style from "./PlayerBanner.module.scss";

export const PlayerBanner = () => {
  const { id = "" } = useParams();
  const { data: playerInfo, isLoading } = useGetPlayerInfoQuery(id);
  const { data: ban } = useGetPlayerBansQuery(id);

  if (isLoading) return <ScaleLoader color="var(--text-color)" />;
  if (!playerInfo) return <p>Игрок не найден...</p>;
  return (
    <div className={style.playerBanner}>
      <Image
        src={playerInfo.cover_image}
        fallback={NO_BACKGROUND}
        className={style.playerBackground}
        alt="Player background"
      />
      <div className={style.playerHeader}>
        <Avatar
          src={playerInfo.avatar}
          fallback={NO_AVATAR}
          alt="Player avatar"
        />
        <div className={style.playerTitle}>
          <div className={style.playerNickname}>
            {playerInfo.nickname}
            <div className={style.iconsContainer}>
              {playerInfo.verified && <VerifySVG />}
              <ReactCountryFlag
                countryCode={playerInfo.country.toUpperCase() || ""}
                svg
                style={{ width: "20px", height: "20px" }}
              />
            </div>
          </div>
          <p className={style.playerActivatedAt}>
            Пользователь с {formatDate(playerInfo.activated_at)}
          </p>
          {ban &&
            ban.items.map((ban) => (
              <PlayerBanDetails key={ban.user_id} ban={ban} />
            ))}
        </div>
        <div className={style.subscribeButton}>
          <Button>Подписаться</Button>
        </div>
      </div>
    </div>
  );
};
