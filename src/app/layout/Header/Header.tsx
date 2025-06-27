import { Button } from "@/shared/ui";
import style from "./Header.module.scss";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={style.header}>
      <img
        src="https://corporate.faceit.com/wp-content/uploads/icon-pheasant-preview-2.png"
        alt="FACEIT LOGO"
        onClick={() => navigate("/")}
      />
      <Button>Войти</Button>
    </header>
  );
};
