import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "./pages/App";
import Login from "./pages/login";
import Home from "./pages/home";
import Profile from "./pages/home/profile";
import Settings from "./pages/home/settings";

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
