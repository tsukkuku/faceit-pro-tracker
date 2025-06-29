import { useNavigate } from "react-router-dom";
import { ThemeToggle } from "@/modules/theme";
import style from "./Header.module.scss";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={style.header}>
      <img
        src="https://corporate.faceit.com/wp-content/uploads/icon-pheasant-preview-2.png"
        alt="FACEIT LOGO"
        onClick={() => navigate("/")}
      />
      {/* Временно */}
      <ThemeToggle />
    </header>
  );
};
