import { Outlet } from "react-router-dom";
import { useAppContext } from "../App";
import WindowBar from "@/components/Appbar";
import LeftDrawer from "@/components/LeftDrawer";

export default function Home() {
  const state = useAppContext();
  return (
    <> 
      <WindowBar />
      <LeftDrawer />
      <Outlet context={state} />
    </>
  );
}
