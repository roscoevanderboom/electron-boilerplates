import { Box, Paper } from "@mantine/core";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

function MainContainer({ children }: Props) {
  return (
    <Paper p={30}>
      {children}
    </Paper>
  );
}

export default MainContainer;
