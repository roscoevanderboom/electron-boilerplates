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