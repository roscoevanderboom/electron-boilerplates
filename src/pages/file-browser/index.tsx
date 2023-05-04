import { Grid } from "@mui/material";
import FileBrowserToolbar from "@/components/toolbars/FileBrowserToolbar";
import LocalDrivesList from "@/components/lists/LocalDriveList";
import FileList from "@/components/lists/FileList";

function FileBrowser() {
  return (
    <>
      <FileBrowserToolbar />
      <Grid sx={{ mt: "50px" }} container>
        <LocalDrivesList />
        <FileList />
      </Grid>
    </>
  );
}

export default FileBrowser;
