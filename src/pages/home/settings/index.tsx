import { useAppContext } from "@/pages/App";
import { useEffect } from "react";

export default function Settings() {
  const state = useAppContext();

  useEffect(() => {
    console.log(state);
  }, []);

  return <div>Settings</div>;
}
