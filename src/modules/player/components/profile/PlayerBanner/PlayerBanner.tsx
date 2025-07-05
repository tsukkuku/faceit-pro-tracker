import { useGetPlayerInfoQuery } from "@/modules/player/api";
import { useParams } from "react-router-dom";
import { NO_AVATAR, NO_BACKGROUND } from "@/modules/player/constans";
import { VerifySVG } from "@/shared/assets";
import { convertDate } from "@/modules/player/helpers";
import ReactCountryFlag from "react-country-flag";
import { ScaleLoader } from "react-spinners";
import { Button } from "@/shared/ui";
import style from "./PlayerBanner.module.scss";

export const PlayerBanner = () => {
  const { id } = useParams();
  const { data: playerInfo } = useGetPlayerInfoQuery(id || "");

  if (!playerInfo) return <ScaleLoader color="var(--text-color)" />;
  return (
    <div className={style.playerBanner}>
      <img
        src={playerInfo.cover_image || NO_BACKGROUND}
        className={style.playerBackground}
      />
      <div className={style.playerHeader}>
        <img
          src={playerInfo.avatar || NO_AVATAR}
          className={style.playerAvatar}
        />
        <div className={style.playerTitle}>
          <div className={style.playerInfo}>
            <h1 className={style.playerNickname}>
              {playerInfo.nickname}
              <div className={style.iconsContainer}>
                {playerInfo.verified && <VerifySVG />}
                <ReactCountryFlag
                  countryCode={playerInfo.country.toUpperCase() || ""}
                  svg
                  style={{ width: "20px", height: "20px" }}
                />
              </div>
            </h1>
            <p className={style.playerActivatedAt}>
              Пользователь с {convertDate(playerInfo.activated_at)}
            </p>
          </div>
        </div>
        <div className={style.subscribeButton}>
          <Button>Подписаться</Button>
        </div>
      </div>
    </div>
  );
};
