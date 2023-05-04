import { Grid } from "@mui/material";
import FolderListItem from "../listItems/FolderListItem";
import FileListItem from "../listItems/FileListItem";
import { useAppContext } from "@/pages/App";

export default function FileList() {
  const { fileList, folderList } = useAppContext();
  return (
    <Grid
      item
      xs={10}
      sx={{ height: "calc(100vh - 100px)", overflowY: "scroll" }}
    >
      {folderList.map((folder, i) => (
        <FolderListItem key={i.toString()} folder={folder} />
      ))}
      {fileList.map((file, i) => (
        <FileListItem key={i.toString()} file={file} />
      ))}
    </Grid>
  );
}
