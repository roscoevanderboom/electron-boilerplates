import { Navigate, createMemoryRouter } from "react-router-dom";
import App from "./pages/App";
import Home from "./pages/home";
import Welcome from "./pages/welcome";
import MultichainInfo from "./pages/home/profilePage";

export default createMemoryRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          path: "welcome",
          element: <Welcome />,
        }, 
        {
          path: "home",
          element: <Home />,
          children: [
            { index: true, element: <Navigate to="home/info" replace /> },
            {
              path: "info",
              element: <MultichainInfo />,
            }, 
          ],
        },
      ],
    },
  ],
  {
    initialEntries: ["/home/info"],
  }
);
