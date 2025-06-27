import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import style from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <Header />
      <main className={style.mainContent}>
        <Outlet />
      </main>
    </>
  );
};
