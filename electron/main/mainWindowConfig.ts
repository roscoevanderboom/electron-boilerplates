import { join } from "node:path";
const mainWindowConfig = (preload: string) => ({
  title: "Main window",
  icon: join(process.env.PUBLIC, "favicon.ico"),
  frame: false,
  width: 1440,
  height: 1000,
  webPreferences: {
    preload,
  },
});

export default mainWindowConfig;
