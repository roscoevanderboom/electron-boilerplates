import {
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Switch,
  Paper,
} from "@mui/material";
import { toggleDarkMode } from "src/utils/handleIPC";
import { useEffect, useState } from "react";

export default function Settings() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleThemeToggle = async () => {
    let res = await toggleDarkMode();
    setIsDarkMode(res)
  }


  useEffect(() => {
  }, []);

  return (
    <Grid sx={{ pt: 2 }} container justifyContent="center">
      <Grid item xs={12} sm={10} md={9} lg={7}>
        <Paper sx={{ pt: 2, boxShadow: 4 }}>
          <Typography sx={{ mb: 2 }} variant="h4" textAlign="center">
            Electron Settings
          </Typography>
          <List>
            <ListItem divider>
              <ListItemText primary="Toggle darkmode" />
              <ListItemIcon>
                <Switch onClick={handleThemeToggle} checked={isDarkMode} />
              </ListItemIcon>
            </ListItem>
          </List>
        </Paper>
      </Grid>
    </Grid>
  );
}
