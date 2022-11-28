import React, { useContext } from "react";
import { Typography } from "@mui/material";

import { ThemeContext } from "../../context/ThemeContextProvider";

const Footer = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <footer sx={{ bottom: 0 }}>
      <Typography
        component="p"
        variant="p"
        bgcolor={darkMode ? "#272727" : "#f7f7f7"}
        color="primary"
        padding="10px"
        textAlign="center"
        mt={10}
      >
        پروژه وبلاگ با React و GraphQL
      </Typography>
    </footer>
  );
};

export default Footer;
