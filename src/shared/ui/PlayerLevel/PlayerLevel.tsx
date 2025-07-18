import { type FC } from "react";
import { PlayerPlace } from "../PlayerPlace/PlayerPlace";
import { getVariant } from "@/shared/helpers/getVariant/getVariant";
import { LEVEL_ICONS } from "@/shared/constants";
import { Image } from "../Image/Image";

interface PlayerLevelProps {
  position: number;
  skill_level: number;
  className?: string;
}

const icons: Record<number, string> = LEVEL_ICONS;

export const PlayerLevel: FC<PlayerLevelProps> = ({
  position,
  skill_level,
  className,
}) => {
  if (position !== 0 && position <= 1000) {
    return (
      <PlayerPlace variant={getVariant(position)}>#{position}</PlayerPlace>
    );
  } else {
    return (
      <Image
        src={icons[skill_level]}
        alt={`Level ${skill_level.toString()}`}
        className={className}
      />
    );
  }
};
