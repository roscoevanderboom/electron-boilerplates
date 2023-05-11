import { useAppContext } from "@/pages/App";
import { ActionIcon, Group, useMantineTheme } from "@mantine/core";
import { IconSun, IconMoonStars } from "@tabler/icons-react";

export default function ToggleThemeBtn() {
  const theme = useMantineTheme();
  const { toggleTheme } = useAppContext();

  return (
    <Group position="center" my="xl">
      <ActionIcon
        onClick={toggleTheme}
        size="lg"
        sx={(theme) => ({
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[6]
              : theme.colors.gray[0],
          color:
            theme.colorScheme === "dark"
              ? theme.colors.yellow[4]
              : theme.colors.blue[6],
        })}
      >
        {theme.colorScheme === "dark" ? (
          <IconSun size="1.2rem" />
        ) : (
          <IconMoonStars size="1.2rem" />
        )}
      </ActionIcon>
    </Group>
  );
}
