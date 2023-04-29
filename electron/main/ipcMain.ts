import { BrowserWindow, app, desktopCapturer, dialog, ipcMain } from "electron";

type Props = {
  preload: string;
  url?: string;
  indexHtml: string;
  win?: BrowserWindow | null;
};
export const handleIPCmain = ({ preload, url, indexHtml, win }: Props) => {
  // New window example arg: new windows url
  ipcMain.handle("open-win", (_, arg) => {
    console.log("open-win called");
    const childWindow = new BrowserWindow({
      webPreferences: {
        preload,
        nodeIntegration: true,
        contextIsolation: false,
      },
    });

    if (process.env.VITE_DEV_SERVER_URL) {
      childWindow.loadURL(`${url}#${arg}`);
    } else {
      childWindow.loadFile(indexHtml, { hash: arg });
    }
  });

  ipcMain.on("dialog", (_, args) => {
    const { type, message } = args;
    if (win) {
      switch (type) {
        case "error":
          dialog.showErrorBox("Error", message);
          break;

        default:
          dialog.showMessageBox(win, {
            title: "Renderer",
            message: message,
          });
          break;
      }
    }
  });

  ipcMain.on("window-control", (_, args) => {
    switch (args) {
      case "minimize":
        return win?.minimize();
      case "maximize":
        return win?.isMaximized() ? win?.unmaximize() : win?.maximize();
      case "hide":
        return win?.hide();
      case "close":
        return win?.close();
      default:
        return;
    }
  });
  ipcMain.on("app-menu", (_, args) => {
    switch (args) {
      case "reload":
        return win?.reload();
      case "devTools":
        return win?.webContents.openDevTools();
      case "exit":
        return win?.close();
      default:
        return;
    }
  });
};
