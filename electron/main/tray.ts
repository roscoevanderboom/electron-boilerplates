import { BrowserWindow, Menu, Tray, app } from "electron";

const createTray = (icon: string, win: BrowserWindow) => {
  const tray = new Tray(icon);
  const contextMenu = Menu.buildFromTemplate([
    { label: "Show app", click: () => win?.show() },
    { label: "Quit app", click: () => app.quit() },
  ]);

  tray.setToolTip(app.name);
  tray.setContextMenu(contextMenu);
  tray.on("click", () => {
    win?.show();
  });
};

export default createTray;
