import { Button } from "@/shared/ui";
import { useNavigate } from "react-router-dom";

export const PlayerPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Player ID Page</div>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </>
  );
};
