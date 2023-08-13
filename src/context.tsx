import * as React from "react";
import { PaletteMode } from "@mui/material";

type ColorModeContextType = {
  toggleColorMode: () => void;
  mode: PaletteMode;
};

const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
  mode: "light" as PaletteMode,
});

export const useColorMode = () => React.useContext(ColorModeContext);

export const ColorModeProvider = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: ColorModeContextType;
}) => {
  return <ColorModeContext.Provider value={value}>{children}</ColorModeContext.Provider>;
};
