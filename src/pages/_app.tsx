import * as React from "react";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { CssBaseline, PaletteMode, useMediaQuery } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ColorModeProvider } from "@/context";

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  const modePreference = useMediaQuery("(prefers-color-scheme: dark)") ? "dark" : "light";
  const [mode, setMode] = React.useState(modePreference as PaletteMode);

  const toggleColorMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <SessionProvider session={session}>
      <ColorModeProvider value={{ toggleColorMode, mode }}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </ColorModeProvider>
    </SessionProvider>
  );
}
