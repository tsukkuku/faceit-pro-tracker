import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "@/shared/config/routes";
import { Layout } from "../layout";
import { HomePage } from "@/pages/home/HomePage";
import { PlayerPage } from "@/pages/player-page/PlayerPage";
import { MatchPage } from "@/pages/MatchPage/MatchPage";

export const route = createBrowserRouter([
  {
    path: ROUTES.HOME,
    Component: Layout,
    children: [
      {
        index: true,
        Component: HomePage,
      },
      {
        path: ROUTES.PLAYER,
        Component: PlayerPage,
      },
      {
        path: ROUTES.MATCH,
        Component: MatchPage,
      },
    ],
  },
]);
