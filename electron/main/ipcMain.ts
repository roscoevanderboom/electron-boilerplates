import { BrowserWindow, app, dialog, ipcMain } from "electron";
import { join } from "path";
import getDriveList from "./handleFS/getDrives";
import { readDirectory } from "./handleFS/readDirectory";

type Props = {
  preload: string;
  url?: string;
  indexHtml: string;
  win?: BrowserWindow | null;
};

export const handleIPCmain = ({ preload, url, indexHtml, win }: Props) => {
  // New window example arg: new windows url
  ipcMain.handle("open-win", (_, arg) => {
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

  ipcMain.on("window_control", (_, args) => {
    switch (args) {
      case "minimize":
        return win?.minimize();
      case "maximize":
        return win?.isMaximized() ? win?.unmaximize() : win?.maximize();
      case "hide":
        return win?.hide();
      case "close":
        return app.quit();
      default:
        return;
    }
  });

  ipcMain.handle("get_drives", async () => {
    try {
      let drives = await getDriveList();
      return drives;
    } catch (error) {
      return error;
    }
  });

  ipcMain.handle("read_directory", async (_, path) => {
    let res = readDirectory(path);
    return res;
  });

  ipcMain.handle("path_join", (_event, segments) => {
    const result = join(...segments);
    return result;
  });
};
