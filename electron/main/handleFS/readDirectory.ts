import { dialog, shell } from "electron";
import { readdirSync } from "fs";
import { join } from "path";
import { FileBrowserListItem, ReadDirReturnArray } from ".";

function handleErrors(error: any) {
  switch (error.code) {
    case "ENOENT":
      return dialog.showErrorBox("Error", "File or directory does not exist");
    case "EPERM":
      return dialog.showErrorBox(
        "Error",
        "This application does not have permission to read this file or directory"
      );
    case "EBUSY":
      return dialog.showErrorBox(
        "Error",
        "This resource is busy and can't be read now."
      );
    default:
      break;
  }
}

export const readDirectory = (
  directoryPath: string
): ReadDirReturnArray | undefined => {
  const files: FileBrowserListItem[] = [];
  const folders: FileBrowserListItem[] = [];
  try {
    const entries = readdirSync(directoryPath, { withFileTypes: true });

    entries.forEach((entry) => {
      const entryPath = join(directoryPath, entry.name);

      entry.isDirectory() &&
        folders.push({
          name: entry.name,
          path: entryPath,
        });

      entry.isFile() &&
        files.push({
          name: entry.name,
          path: entryPath,
        });
    });

    return {
      files,
      folders,
    };
  } catch (error: any) {
    if (error.code !== "ENOTDIR") {
      handleErrors(error);
    }
    shell
      .openExternal(directoryPath)
      .catch((err) => dialog.showErrorBox("Error", err));
    return;
  }
};
