import { useNavigate } from "react-router-dom";
import style from "./Header.module.scss";
import { Button } from "@/shared/ui";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={style.header}>
      <img
        className={style.logo}
        src="https://corporate.faceit.com/wp-content/uploads/icon-pheasant-preview-2.png"
        alt="FACEIT LOGO"
        onClick={() => navigate("/")}
      />
      <Button>Войти</Button>
    </header>
  );
};
