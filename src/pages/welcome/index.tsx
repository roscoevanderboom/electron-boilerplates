import { Box, Stack, Text, createStyles } from "@mantine/core";

const useStyles = createStyles({
  box: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    flexGrow: 1
  },
});

function WelcomePage() {
  const { classes } = useStyles();
  return (
    <Box className={classes.box}>
      <Stack spacing={2}>
        <Text>Welcome</Text>
        <Text>
          Multichain does not seem to be installed or no local chains have been
          initiated.
        </Text>
        <Text>Requirements:</Text>
        <Box sx={{ pl: 2 }}>
          <Text>Linux & Mac OS:</Text>
          <Text>Build Multichain binaries and move to /usr/local/bin/</Text>
          <Text>Blockchains need to be located in /$HOME/.multichain/</Text>
        </Box>
        <Box sx={{ pl: 2 }}>
          <Text>Windows:</Text>
          <Text>Currently not supported.</Text>
        </Box>
      </Stack>
    </Box>
  );
}

export default WelcomePage;
