import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./layouts/App";
import Login from "./pages/login";
import Home from "./layouts/Home";
import Profile from "./pages/profile";
import Settings from "./pages/settings";

export default createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "home",
        element: <Home />,
        children: [
          { index: true, element: <Navigate to="home/profile" replace /> },
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "settings",
            element: <Settings />,
          },
        ],
      },
    ],
  },
]);
