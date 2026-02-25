import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import DashBoard from "./pages/DashBoard";

import DashBoardShow from "./pages/DBShows/DashBoardShow";
import MedicationsShow from "./pages/DBShows/MedicationsShow";
import AppointmentsShow from "./pages/DBShows/AppointmentsShow";
import MyRmindersShow from "./pages/DBShows/MyRmindersShow";
import SettingShow from "./pages/DBShows/SettingShow";
import AccountShow from "./pages/DBShows/AccountShow";
import Notifications from "./pages/DBShows/Notifications";
import ForgotPassword from "./pages/ForgotPassword";




function App() {
  const location = useLocation();
  const isDashboard = location.pathname.toLowerCase().includes("dashboard");

  const [darkMode, setDarkMode] = useState(() => localStorage.getItem("darkMode") === "true");

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const theme = createTheme({ palette: { mode: darkMode ? "dark" : "light" } });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {!isDashboard && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/ForgotPassword" element={<ForgotPassword/>} />



        <Route
          path="/DashBoard"
          element={<DashBoard darkMode={darkMode} setDarkMode={setDarkMode} />}
        >
          
          <Route index element={<DashBoardShow />} />
          <Route path="MedicationsShow" element={<MedicationsShow />} />
          <Route path="AppointmentsShow" element={<AppointmentsShow />} />
          <Route path="MyRmindersShow" element={<MyRmindersShow />} />
          <Route
            path="SettingShow"
            element={<SettingShow darkMode={darkMode} setDarkMode={setDarkMode} />}
            
          />
          <Route path="AccountShow" element={<AccountShow />} />
          <Route
               path="notifications"
               element={<Notifications darkMode={darkMode} />}
/>

        </Route>
      </Routes>

      {!isDashboard && <Footer />}
    </ThemeProvider>
  );
}

export default App;
