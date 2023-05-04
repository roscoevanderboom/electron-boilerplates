import { useAppContext } from "@/pages/App";
import { AppBar, Button, IconButton, Stack, Toolbar } from "@mui/material";
import { BiHome } from "react-icons/bi";

export default function FileBrowserToolbar() {
  const { handleNavigateBack, breadcrumbs, handleNavigateHome } =
    useAppContext();

  return (
    <AppBar sx={{ mt: "48px", backgroundColor: "whitesmoke", color: "black" }}>
      <Toolbar variant="dense">
        <Stack spacing={2} direction="row" alignItems="center" flexWrap="wrap">
          <IconButton edge="start" color="inherit" onClick={handleNavigateHome}>
            <BiHome />
          </IconButton>
          <Stack direction="row" spacing={1}>
            {breadcrumbs.map((val, i) => (
              <Button
                size="small"
                color="primary"
                variant="outlined"
                sx={{ borderRadius: 8, boxShadow: 1 }}
                key={i.toString()}
                onClick={() => handleNavigateBack(val)}
              >
                {val}
              </Button>
            ))}
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
