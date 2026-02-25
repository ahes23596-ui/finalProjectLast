import React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import TopBar from "../Components/TopBar";
import SideBar from "../Components/SideBar";


export default function DashBoard({ darkMode, setDarkMode }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <TopBar
        open={open}
        handleDrawerOpen={handleDrawerOpen}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <SideBar open={open} handleDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 10  }}>
        <Outlet />
      </Box>
    </Box>
  );
}
