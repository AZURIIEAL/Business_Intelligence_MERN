import React, { useMemo } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./theme";
import createTheme from "@mui/material/styles/createTheme";
import { useSelector } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "./scenes/layout/index"
import Dashboard from "./scenes/dashboard/index";


function App() {
  //Setting up the theme.Material Ui has a createTheme function that takes in a theme object and returns a theme object.
  const mode = useSelector((state) => state.global.mode); //Way to grab states that are in the global slice.
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]); //Way to create a theme based on the mode.
  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout/>}>
              <Route path="/" element={<Navigate to="/dashboard" replace/>}/>
              <Route path="/dashboard" element={<Dashboard/>}/>
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
