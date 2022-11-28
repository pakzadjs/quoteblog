import React, { useContext } from "react";
import { Link } from "react-router-dom";

// Context
import { ThemeContext } from "../../context/ThemeContextProvider";

// MaterialUI
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LightModeIcon from "@mui/icons-material/LightMode";
import { AppBar, Container, Icon, Toolbar, Typography } from "@mui/material";

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ThemeContext);

  const darkModeHandler = () => {
    setDarkMode(!darkMode);
  };

  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              QUOTE"BLOG
            </Link>
          </Typography>
          <Icon sx={{ cursor: "pointer" }} onClick={darkModeHandler}>
            {darkMode ? <LightModeIcon /> : <Brightness3Icon />}
          </Icon>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
