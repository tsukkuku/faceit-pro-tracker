import type { FC } from "react";
import type { MatchInfo } from "@/modules/matches/api";
import { useNavigate } from "react-router-dom";
import { Button, Image } from "@/shared/ui";
import style from "./PickInformation.module.scss";

interface PickInformationProps {
  info: MatchInfo;
}

export const PickInformation: FC<PickInformationProps> = ({ info }) => {
  const navigate = useNavigate();

  const selectLocation = info?.voting?.location?.entities?.find(
    (item) => item.guid === info.voting.location.pick[0]
  );

  const selectMap = info?.voting?.map?.entities?.find(
    (item) => item.guid === info.voting.map.pick[0]
  );

  const handleHomeClick = () => {
    navigate("stats");
  };

  return (
    <div className={style.pickContainer}>
      {selectLocation && (
        <>
          <span className={style.pickText}>Сервер</span>
          <div className={style.pickInformation}>
            <Image
              src={selectLocation?.image_sm}
              alt={info.voting.location.pick}
            />
            <div className={style.pickTitle}>{info.voting.location.pick}</div>
          </div>
        </>
      )}
      <span className={style.pickText}>Карта</span>
      <div className={style.pickInformation}>
        <Image src={selectMap?.image_sm} alt={info.voting.map.pick} />
        <div className={style.pickTitle}>{selectMap?.name}</div>
      </div>
      <Button onClick={handleHomeClick}>К статистике</Button>
    </div>
  );
};
