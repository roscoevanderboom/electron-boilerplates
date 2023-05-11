import {
  createStyles,
  Header,
  Autocomplete,
  Group,
  Burger,
  rem,
} from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";
import ToggleThemeBtn from "../Buttons/ToggleTheme";
import { useAppContext } from "@/pages/App";

const useStyles = createStyles((theme) => ({
  header: {
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    position: "sticky",
    top: 0,
    left: 0,
    borderBottom: "1px solid slategrey",
    borderTop: "1px solid slategrey",
    width: "100vw"
  },

  inner: {
    height: rem(56),
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  links: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  search: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: `${rem(8)} ${rem(12)}`,
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },
}));

export default function WindowBar() {
  const { leftDrawer,toggleDrawer } = useAppContext();
  const { classes } = useStyles();

  return (
    <Header height={56} className={classes.header}>
      <div className={classes.inner}>
        <Group>
          <Burger opened={leftDrawer} onClick={toggleDrawer} size="sm" />
        </Group>

        <Group position="right" variant="right">
          <Autocomplete
            className={classes.search}
            placeholder="Search"
            icon={<IconSearch size="1rem" stroke={1.5} />}
            data={[
              "React",
              "Angular",
              "Vue",
              "Next.js",
              "Riot.js",
              "Svelte",
              "Blitz.js",
            ]}
          />
          <ToggleThemeBtn />
        </Group>
      </div>
    </Header>
  );
}
