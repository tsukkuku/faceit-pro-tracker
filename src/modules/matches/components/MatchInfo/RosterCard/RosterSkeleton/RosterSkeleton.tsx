import style from "./RosterSkeleton.module.scss";

export const RosterSkeleton = () => {
  return (
    <div className={style.rosterSkeleton}>
      <div className={style.rosterSkeletonContainer}>
        <div className={style.rosterSkeletonPlayerInfo}>
          <div className={style.rosterSkeletonAvatar}></div>
          <div className={style.rosterNickname}>
            <div className={style.nickname}></div>
            <div className={style.steamNickname}></div>
          </div>
        </div>
        <div className={style.playerLevel}>
          <div className={style.playerElo}></div>
          <div className={style.playerRank}></div>
        </div>
      </div>
    </div>
  );
};
