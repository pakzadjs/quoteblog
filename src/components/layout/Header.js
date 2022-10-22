import React from "react";
import { Link } from "react-router-dom";

// MaterialUI
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              QUOTE"BLOG
            </Link>
          </Typography>
          <Link to="/" style={{ color: "#fff" }}>
            <MenuBookIcon />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
