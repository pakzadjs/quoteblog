import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";

// assets
import MenuBookIcon from "@mui/icons-material/MenuBook";

const Header = () => {
  return (
    <AppBar position="sticky">
      <Container maxWidth='lg'>
        <Toolbar>
          <Typography component="h1" variant="h5" fontWeight="bold" flex={1}>
            Quoteblog
          </Typography>
          <MenuBookIcon />
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
