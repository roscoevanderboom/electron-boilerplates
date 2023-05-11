import { Box, Drawer } from "@mantine/core";
import { useAppContext } from "@/pages/App";

export default function LeftDrawer() {
  const { leftDrawer, toggleDrawer } = useAppContext();

  return (
    <Drawer size="xs" opened={leftDrawer} onClose={toggleDrawer} withCloseButton={false}>
      <Box pt={58}>
        Content
      </Box>
    </Drawer>
  );
}
