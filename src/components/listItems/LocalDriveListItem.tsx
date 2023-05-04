import { reducer_types } from "@/context/reducer";
import { preload } from "@/data/constants";
import { useAppContext } from "@/pages/App";
import { ListItemButton, ListItemText } from "@mui/material";
import { DiskObject } from "src/data/interfaces";

type Props = {
  drive: DiskObject;
};

export default function LocalDrivesListItem({ drive }: Props) {
  const { dispatch } = useAppContext();

  async function handleDrives(drive: string) {
    let res = await preload.readDirectory(drive);
    dispatch(reducer_types.SET_FILELIST, res.files);
    dispatch(reducer_types.SET_FOLDERLIST, res.folders);
    res && dispatch(reducer_types.SET_BREADCRUMBS, [drive]);
  }

  return (
    <ListItemButton divider onClick={() => handleDrives(`${drive.drive}\\`)}>
      <ListItemText primary={drive.drive} secondary={drive.volume} />
    </ListItemButton>
  );
}
