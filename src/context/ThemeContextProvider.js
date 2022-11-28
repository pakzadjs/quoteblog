import React, { createContext, useEffect, useState } from "react";

import { createTheme } from "@mui/material";

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mode, setMode] = useState();

  useEffect(() => {
    if (darkMode) {
      setMode("dark");
    } else {
      setMode("light");
    }
  }, [darkMode, setMode]);

  const theme = createTheme({
    palette: {
      mode: mode,
    },

    typography: {
      fontFamily: `'YekanBakh', 'Arial', 'sans-serif'`,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      fontWeightHeavy: 800,
      fontWeightFat: 900,
    },
    direction: "rtl",
  });

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
