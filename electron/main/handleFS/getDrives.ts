import { exec } from "node:child_process";
import { platform } from "node:os";
import { DiskObject, MacOSDiskObject } from ".";

const windowsDriveList = () => {
  return new Promise<DiskObject[]>((resolve, reject) => {
    // Execute the command to get the current list of drives and volumes
    exec("wmic logicaldisk get caption, volumename", (err, stdout, _stderr) => {
      if (err) {
        reject(`exec error: ${err}`);
        return;
      }

      // Parse the output of the command and extract the drive letters and volume names
      let drives: DiskObject[] = stdout
        .trim()
        .split("\n")
        .slice(1)
        .map((line) => {
          const [drive, volume] = line.trim().split(/\s{2,}/);
          return { drive, volume };
        });
      resolve(drives);
    });
  });
};

const macOSDriveList = () => {
  return new Promise<DiskObject[]>((resolve, reject) => {
    exec("diskutil list -plist", (err, stdout, _stderr) => {
      if (err) {
        reject(`exec error: ${err}`);
        return;
      }

      // Parse the output of the command and extract the volumes
      const pl = require("plist");
      const data = pl.parse(stdout);
      resolve(
        data.AllDisksAndPartitions.filter(
          (item: MacOSDiskObject) => item.VolumeName
        ).map((item: MacOSDiskObject) => ({
          drive: item.DeviceIdentifier,
          volume: item.VolumeName!,
        }))
      );
    });
  });
};

const linuxDriveList = () => {
  return new Promise<DiskObject[]>((resolve, reject) => {
    exec("mount", (err, stdout, _stderr) => {
      if (err) {
        reject(`exec error: ${err}`);
        return;
      }

      // Parse the output of the command and extract the volumes
      resolve(
        stdout
          .trim()
          .split("\n")
          .map((line: string) => {
            const [device, mountpoint] = line.trim().split(/\s+/);
            return { drive: device, volume: mountpoint };
          })
      );
    });
  });
};

const getDriveList = async (): Promise<DiskObject[]> => {
  let list: DiskObject[] = [];
  switch (platform()) {
    case "win32":
      list = await windowsDriveList();
      break;
    case "darwin":
      list = await macOSDriveList();
      break;
    default:
      list = await linuxDriveList();
      break;
  }
  return list;
};

export default getDriveList;