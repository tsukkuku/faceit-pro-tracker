import { useGetPlayerStatsQuery } from "@/modules/player/api";
import { Button } from "@/shared/ui";
import { useParams } from "react-router-dom";

export const PlayerBanner = () => {
  const { id } = useParams();
  const { data } = useGetPlayerStatsQuery(id || "");
  return (
    <div>
      <Button onClick={() => console.log(data)}>Статистика игрока</Button>
    </div>
  );
};
