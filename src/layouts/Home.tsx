import { NavLink, Outlet } from "react-router-dom";
import "../styles/Home.scss";
import { useAppContext } from "./App";

export default function Home() {
  const state = useAppContext();
  return (
    <div>
      {/* Apply Home layout styles to appear on all children of Home. Similat to NextJS layout */}
      <Outlet context={state} />
    </div>
  );
}
