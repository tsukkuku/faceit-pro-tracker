import { Outlet } from "react-router-dom";
import { Header } from "@/modules/subscribe";
import { ThemeToggle } from "@/modules/theme";
import style from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={style.mainContent}>
        <Outlet />
        <ThemeToggle />
      </main>
    </>
  );
};
