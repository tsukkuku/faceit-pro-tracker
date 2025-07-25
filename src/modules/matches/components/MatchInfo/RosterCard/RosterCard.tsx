import { Link } from "react-router-dom";
import {
  useGetPlayerInMatchInfoQuery,
  useGetPlayerPositionQuery,
  type RosterInfo,
} from "@/modules/matches/api";
import { Avatar, PlayerLevel } from "@/shared/ui";
import type { FC } from "react";
import ReactCountryFlag from "react-country-flag";
import { Elo, VerifySVG } from "@/shared/assets";
import { NO_AVATAR } from "@/shared/constants";
import { RosterSkeleton } from "./RosterSkeleton";
import style from "./RosterCard.module.scss";

interface RosterCardProps {
  roster: RosterInfo;
}

export const RosterCard: FC<RosterCardProps> = ({ roster }) => {
  const { data: player, isLoading } = useGetPlayerInMatchInfoQuery(
    roster.player_id
  );
  const { data: position, isLoading: isLoadingPosition } =
    useGetPlayerPositionQuery({
      id: player?.player_id || "",
      region: player?.games.cs2.region || "",
    });

  if (isLoading || isLoadingPosition) return <RosterSkeleton />;
  if (!player?.games.cs2.skill_level) return;
  return (
    <Link
      className={style.rosterCard}
      to={`/faceit-pro-tracker/player/${player?.player_id}`}
    >
      <div className={style.playerContainer}>
        <div className={style.playerInfo}>
          <div className={style.avatarContainer}>
            <Avatar
              size="md"
              src={player?.avatar}
              alt="Player avatar"
              fallback={NO_AVATAR}
            />
          </div>
          <div className={style.playerNickname}>
            <div className={style.nicknameContainer}>
              <div className={style.faceitNickname}>
                <div className={style.nickname}>{player?.nickname}</div>
                {player?.verified && <VerifySVG width={16} height={16} />}
                <span>
                  <ReactCountryFlag
                    countryCode={player?.country.toUpperCase() || ""}
                    svg
                  />
                </span>
              </div>
              <div className={style.steamNickname}>
                {player?.games.cs2.game_player_name}
              </div>
            </div>
          </div>
        </div>
        <div className={style.playerTop}>
          <div className={style.playerElo}>
            <Elo width={20} height={20} color="gray" />
            <div className={style.eloValue}>{player?.games.cs2.faceit_elo}</div>
          </div>
          {position && (
            <PlayerLevel
              position={position.position}
              skill_level={player?.games.cs2.skill_level || 0}
              className={style.rankImage}
            />
          )}
        </div>
      </div>
    </Link>
  );
};
