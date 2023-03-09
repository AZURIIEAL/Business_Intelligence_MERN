import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import createTheme from "@mui/material";
import { useSelector } from "react-redux";

function App() {

  //Setting up the theme.Material Ui has a createTheme function that takes in a theme object and returns a theme object.
  const mode = useSelector((state) => state.global.mode); //Way to grab states that are in the global slice.
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); //Way to create a theme based on the mode.
  return <div className="app">

    <ThemeProvider theme={theme}>
      <CssBaseline />
    </ThemeProvider>
  </div>;
}

export default App;
