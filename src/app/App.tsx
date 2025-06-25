import "./styles/reset.scss";
import "./styles/global.scss";
import { RouterProvider } from "react-router-dom";
import { route } from "./routing/router";

function App() {
  return <RouterProvider router={route} />;
}

export default App;
