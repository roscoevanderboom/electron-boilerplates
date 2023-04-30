const mainWindowConfig = (preload: string, icon: string) => ({
  title: "Main window",
  icon: icon,
  frame: false,
  width: 1440,
  height: 1000,
  webPreferences: {
    preload,
    // Warning: Enable nodeIntegration and disable contextIsolation is not secure in production
    // Consider using contextBridge.exposeInMainWorld
    // Read more on https://www.electronjs.org/docs/latest/tutorial/context-isolation
    nodeIntegration: true,
    contextIsolation: false,
  },
});

export default mainWindowConfig;