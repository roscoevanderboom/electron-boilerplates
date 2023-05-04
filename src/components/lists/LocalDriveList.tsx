import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import LocalDrivesListItem from "../listItems/LocalDriveListItem";
import { DiskObject } from "src/data/interfaces";
import { preload } from "@/data/constants";

export default function LocalDrivesList() {
  const [localDrives, setLocalDrives] = useState<DiskObject[]>([]);

  useEffect(() => {
    preload.getDrives().then((drives: DiskObject[]) => setLocalDrives(drives));
  }, []);

  return (
    <Grid item xs={2} sx={{ borderRight: "1px solid gray" }}>
      {localDrives.map((drive, i) => (
        <LocalDrivesListItem key={i.toString()} drive={drive} />
      ))}
    </Grid>
  );
}
