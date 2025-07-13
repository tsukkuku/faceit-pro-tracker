import { useNavigate } from "react-router-dom";
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
import style from "./RosterCard.module.scss";

interface RosterCardProps {
  roster: RosterInfo;
}

export const RosterCard: FC<RosterCardProps> = ({ roster }) => {
  const navigate = useNavigate();
  const { data: player } = useGetPlayerInMatchInfoQuery(roster.player_id);
  const { data: position } = useGetPlayerPositionQuery({
    id: player?.player_id || "",
    region: player?.games.cs2.region || "",
  });

  if (!position && !player?.games.cs2.skill_level) return;
  return (
    <div
      className={style.rosterCard}
      onClick={() => navigate(`/player/${player?.player_id}`)}
    >
      <div className={style.avatarContainer}>
        <Avatar
          size="sm"
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
  );
};
