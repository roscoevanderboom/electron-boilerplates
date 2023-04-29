import { Outlet } from "react-router-dom";
import { useAppContext } from "../App";

export default function Home() {
  const state = useAppContext();
  return <Outlet context={state} />;
}
