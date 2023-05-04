import { Navigate, createMemoryRouter } from "react-router-dom";
import App from "./pages/App";
import FileBrowser from "./pages/file-browser";

export default createMemoryRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/file-browser" replace /> },
      {
        path: "file-browser",
        element: <FileBrowser />,
      },
    ],
  },
], {
  initialEntries: ["/file-browser"]
});
