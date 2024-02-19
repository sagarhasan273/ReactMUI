import { ThemeProvider, createTheme } from "@mui/material";
import { useMemo } from "react";
import Components from "./@components";
import GetPallete from "./pallete";


function Provider({ children }) {
  const customTheme = useMemo(() => {
      const theme = createTheme({
        palette: GetPallete()
      });
      theme.components = Components();
      return theme;
    }, []);

  return <ThemeProvider theme={customTheme}>{children}</ThemeProvider>;
}

export default Provider
