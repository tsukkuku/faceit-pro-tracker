import { useParams } from "react-router-dom";

export const PlayerPage = () => {
  const { id } = useParams();
  return <div>Player {id} page</div>;
};
