import type { FC } from "react";
import type { Player, PlayerRanked } from "@/modules/player/api";
import { REGION_FLAG } from "@/modules/player/constants";
import { Image } from "@/shared/ui";
import ReactCountryFlag from "react-country-flag";
import style from "./PositionCard.module.scss";

type CardVariant = "region" | "country";

interface PositionCardProps {
  variant: CardVariant;
  titleCard: string;
  player: Player;
  position?: PlayerRanked;
  countryPosition?: PlayerRanked;
}

export const PositionCard: FC<PositionCardProps> = ({
  titleCard,
  player,
  position,
  countryPosition,
  variant,
}) => {
  const positionNumber =
    variant === "region"
      ? position?.position.toLocaleString() ?? "N/A"
      : countryPosition?.position.toLocaleString() ?? "N/A";

  const location =
    variant === "region"
      ? player.games.cs2.region
      : player.country.toUpperCase();

  const flag =
    variant === "region" ? (
      <Image
        src={REGION_FLAG[player.games.cs2.region]}
        style={{ width: "24px", height: "24px" }}
        alt={player.games.cs2.region}
      />
    ) : (
      <ReactCountryFlag
        style={{ borderRadius: "8px" }}
        countryCode={player.country.toUpperCase()}
        svg
        alt={player.country}
      />
    );

  return (
    <>
      <div className={style.positionCardTitle}>{titleCard}</div>
      <div className={style.positionInTop}>
        <span className={style.position}>{positionNumber}</span>
        <span className={style.country}>
          {location}
          {flag}
        </span>
      </div>
    </>
  );
};
