import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

// assets
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth="lg">
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="700" flex={1}>
            QUOTE"BLOG
          </Typography>
          <MenuBookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
