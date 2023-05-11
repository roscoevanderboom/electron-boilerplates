import { DeepPartial } from "@/data/interfaces";
import { ColorScheme, MantineProvider } from "@mantine/core";
import { ReactNode } from "react";

function StyleProvider({
  children,
  colorScheme,
}: {
  children: ReactNode;
  colorScheme: DeepPartial<ColorScheme> | undefined;
}) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{
        colorScheme: colorScheme,
        colors: {
          // override dark colors to change them for all components
          dark: [
            "#d5d7e0",
            "#acaebf",
            "#8c8fa3",
            "#666980",
            "#4d4f66",
            "#34354a",
            "#2b2c3d",
            "#1d1e30",
            "#0c0d21",
            "#01010a",
          ],
        },
        components: {
          Button: {
            variants: {
              danger: (theme) => ({
                root: {
                  backgroundColor: theme.colors.red[9],
                  color: theme.colors.red[0],
                  ...theme.fn.hover({ backgroundColor: theme.colors.red[6] }),
                },
              }),
              warning: (theme) => ({
                root: {
                  backgroundColor: theme.colors.yellow[9],
                  color: theme.colors.yellow[0],
                  ...theme.fn.hover({
                    backgroundColor: theme.colors.yellow[6],
                  }),
                },
              }),
              success: (theme) => ({
                root: {
                  backgroundImage: theme.fn.linearGradient(
                    45,
                    theme.colors.cyan[theme.fn.primaryShade()],
                    theme.colors.teal[theme.fn.primaryShade()],
                    theme.colors.green[theme.fn.primaryShade()]
                  ),
                  backgroundColor: theme.colors.teal[5],
                  color: theme.white,
                  ...theme.fn.hover({
                    backgroundImage: theme.fn.linearGradient(
                      90,
                      theme.colors.green[theme.fn.primaryShade()],
                      theme.colors.teal[theme.fn.primaryShade()],
                      theme.colors.cyan[theme.fn.primaryShade()]
                    ),
                  }),
                },
              }),
              info: (theme) => ({
                root: {
                  backgroundImage: theme.fn.linearGradient(
                    45,
                    theme.colors.grape[theme.fn.primaryShade()],
                    theme.colors.violet[theme.fn.primaryShade()],
                    theme.colors.indigo[theme.fn.primaryShade()]
                  ),
                  backgroundColor: theme.colors.teal[5],
                  color: theme.white,
                  ...theme.fn.hover({
                    backgroundImage: theme.fn.linearGradient(
                      90,
                      theme.colors.indigo[theme.fn.primaryShade()],
                      theme.colors.violet[theme.fn.primaryShade()],
                      theme.colors.grape[theme.fn.primaryShade()]
                    ),
                  }),
                },
              }),
            },
          },
        },
      }}
    >
      {children}
    </MantineProvider>
  );
}

export default StyleProvider;
