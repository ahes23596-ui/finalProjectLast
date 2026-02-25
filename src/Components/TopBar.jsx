import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import SettingsIcon from "@mui/icons-material/Settings";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

export default function TopBar({
  open,
  handleDrawerOpen,
  darkMode,
  setDarkMode,
}) {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" open={open} >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" spacing={2} alignItems="center">
          <IconButton
            color="inherit"
            onClick={handleDrawerOpen}
            sx={{ ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            MediMinder
          </Typography>
        </Stack>

        <Stack direction="row" spacing={1.5} alignItems="center">
          <IconButton color="inherit"
           onClick={() => navigate("Notifications")}>
            <NotificationsIcon />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
          </IconButton>

          <IconButton
            color="inherit"
            onClick={() => navigate("SettingShow")}
          >
            <SettingsIcon />
          </IconButton>

          <IconButton
            color="inherit"
            onClick={() => navigate("/LogIn")}
          >
            <LogoutIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
