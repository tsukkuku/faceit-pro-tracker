import { useGetPlayerInMatchInfoQuery } from "@/modules/matches/api";
import { VerifySVG } from "@/shared/assets";
import { NO_AVATAR } from "@/shared/constants";
import { Avatar } from "@/shared/ui";
import type { FC } from "react";

interface PlayerRowProps {
  id: string;
}

export const PlayerRow: FC<PlayerRowProps> = ({ id }) => {
  const { data } = useGetPlayerInMatchInfoQuery(id);
  return (
    <>
      <Avatar
        src={data?.avatar}
        alt={data?.nickname}
        size="sm"
        fallback={NO_AVATAR}
      />
      {data?.nickname}
      {data?.verified && <VerifySVG width={15} height={15} />}
    </>
  );
};
