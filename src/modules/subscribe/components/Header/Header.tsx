import { useNavigate } from "react-router-dom";
import { Button } from "@/shared/ui";
import style from "./Header.module.scss";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={style.header}>
      <img
        className={style.logo}
        src="https://corporate.faceit.com/wp-content/uploads/icon-pheasant-preview-2.png"
        alt="FACEIT LOGO"
        onClick={() => navigate("/faceit-pro-tracker")}
      />
      <Button onClick={() => navigate("subscribe")}>Мои подписки</Button>
    </header>
  );
};
