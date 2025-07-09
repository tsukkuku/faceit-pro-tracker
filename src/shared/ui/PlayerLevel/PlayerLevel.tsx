import { type FC } from "react";
import { PlayerPlace } from "../PlayerPlace/PlayerPlace";
import { getVariant } from "@/shared/helpers/getVariant";
import { LEVEL_ICONS } from "@/modules/player/constants";
import { Image } from "../Image/Image";

interface PlayerLevelProps {
  position: number;
  skill_level: number;
}

const icons: Record<number, string> = LEVEL_ICONS;

export const PlayerLevel: FC<PlayerLevelProps> = ({
  position,
  skill_level,
}) => {
  if (position !== 0 && position <= 1000) {
    return (
      <PlayerPlace variant={getVariant(position)}>#{position}</PlayerPlace>
    );
  } else {
    return (
      <Image src={icons[skill_level]} alt={`Level ${skill_level.toString()}`} />
    );
  }
};
