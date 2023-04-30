import { ipcRenderer } from "electron";

export const handleWindow = (
  action: "minimize" | "maximize" | "close" | "hide"
) => {
  ipcRenderer.send("window-control", action);
};

export const handleWindowbarMenu = (action: "reload" | "devTools" | "exit") => {
  ipcRenderer.send("app-menu", action);
};

export const toggleDarkMode = async () => {
  let res = await ipcRenderer.invoke("dark-mode:toggle");
  return res;
};
