import type { FC } from "react";
import type { Player } from "@/modules/player/api";
import { VerifySVG } from "@/shared/assets";
import { LEVEL_ICONS, NO_AVATAR } from "@/shared/constants";
import { Avatar, Image } from "@/shared/ui";
import ReactCountryFlag from "react-country-flag";
import { Link } from "react-router-dom";
import style from "./SubscribePlayerCard.module.scss";

interface SubscribePlayerCardProps {
  player: Player;
}

const icons: Record<number, string> = LEVEL_ICONS;

export const SubscribePlayerCard: FC<SubscribePlayerCardProps> = ({
  player,
}) => {
  return (
    <div className={style.subscribePlayerCard}>
      <Link
        to={`/faceit-pro-tracker/player/${player.player_id}`}
        className={style.link}
      >
        <div className={style.cardContainer}>
          <div className={style.infoContainer}>
            <Avatar
              src={player.avatar}
              fallback={NO_AVATAR}
              alt={player.nickname + "Avatar"}
            />
            <div className={style.nicknameContainer}>
              <div className={style.nickname}>{player.nickname}</div>
              {player.verified && <VerifySVG width={16} height={16} />}
              <ReactCountryFlag
                countryCode={player.country.toUpperCase()}
                svg
              />
            </div>
          </div>
          <div className={style.levelContainer}>
            <Image
              src={icons[player.games.cs2.skill_level]}
              alt={player.games.cs2.skill_level.toString()}
              className={style.levelIcon}
            />
          </div>
        </div>
      </Link>
    </div>
  );
};
