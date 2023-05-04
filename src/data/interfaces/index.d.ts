import { Electron } from "electron";
import { NavigateFunction } from "react-router-dom";

declare global {
  interface Window {
    electron: Electron;
  }
}

export interface ActionProps {
  payload: any;
  type: string;
}

export interface InitialState {
  breadcrumbs: string[],
  fileList: FileBrowserListItem[],
  folderList: FileBrowserListItem[],
  nav: NavigateFunction;
  dispatch: Dispatch;
  handleNavigateForward: (path: string) => void;
  handleNavigateBack: (val: string | false) => void;
  handleNavigateHome: () => void;
}

export type Dispatch = (type: string, payload: any) => void;

export interface DiskObject {
  drive: string;
  volume: string;
}

export interface MacOSDiskObject {
  DeviceIdentifier: string;
  VolumeName?: string;
}

export interface FileBrowserListItem {
  name: string;
  path: string;
}

export interface ReadDirReturnArray {
  files: FileBrowserListItem[];
  folders: FileBrowserListItem[];
}
