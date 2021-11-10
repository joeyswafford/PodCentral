import * as React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
// import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from "@mui/icons-material/Notifications";


import Button from "@mui/material/Button";

import podcastLogo from '../../assets/podcast-logo.png';

const styles = {
  podcastLogo: {
    height: '25px',
    aspectRatio: '1 / 1'
  }
}

const GlobalAppBar = () => {
  const darkBar = createTheme({
    palette: {
      secondary: {
        main: "#000000",
        contrastText: "#FFFFFF",
      },
    },
    typography: {
      fontFamily: [
        "Oswald",
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
      ].join(","),
    },
  });

  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <Box sx={{ flexGrow: 1 }}>
          <ThemeProvider theme={darkBar}>
            <AppBar position="static" color={"secondary"}>
              <Toolbar>
                <Box mt={1} mx={2}>
                  <a href="/"><img src={podcastLogo} alt="podcast microphone" style={styles.podcastLogo} /></a>
                </Box>
                <Typography
                  variant="h6"
                  noWrap
                  component={Link}
                  to="/profile"
                  sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
                >
                  PodcastCentral
                </Typography>
                <MenuItem>
                  <IconButton
                    size="large"
                    aria-label="show 17 new notifications"
                    color="inherit"
                  >
                    <Badge badgeContent={17} color="error">
                      <NotificationsIcon />
                    </Badge>
                  </IconButton>
                </MenuItem>
                <Button href="/" color="inherit" onClick={() => Auth.logout()}>
                  Logout
                </Button>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </Box>
      );
    } else {
      return (
        <Box>
          <ThemeProvider theme={darkBar}>
            <AppBar position="static" color={"secondary"}>
              <Toolbar>
                <IconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                ></IconButton>
                <Typography
                  component={Link}
                  to="/"
                  variant="h6"
                  sx={{ flexGrow: 1 }}
                >
                  PodCentral
                </Typography>
                <Button component={Link} color="inherit" to="/login">
                  Login
                </Button>
              </Toolbar>
            </AppBar>
          </ThemeProvider>
        </Box>
      );
    }
  }

  return <>{showNavigation()}</>;
};
export default GlobalAppBar;
