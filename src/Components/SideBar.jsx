import React from "react";
import { styled, useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MuiDrawer from "@mui/material/Drawer";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MedicationIcon from "@mui/icons-material/Medication";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from '@mui/material/Avatar';
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});


const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}))


const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Array1 = [
  { text: "Dashboard", icon: <HomeOutlinedIcon />, path: "" },
  { text: "Medications", icon: <MedicationIcon />, path: "MedicationsShow" },
  { text: "Appointments", icon: <EventAvailableIcon />, path: "AppointmentsShow" },
  { text: "My Rminders", icon: <NotificationsActiveOutlinedIcon />, path: "MyRmindersShow" }
];

const Array2 = [
  { text: "Setting", icon: <SettingsIcon />, path: "SettingShow" },
    { text: "Account", icon: <AccountCircleOutlinedIcon />, path: "AccountShow" },

];
   


export default function SideBar({open, handleDrawerClose}) {
    const navigate = useNavigate();
     const theme = useTheme();
  return (
          <Drawer variant="permanent" open={open}>

        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <Avatar sx={{mx:"auto", width:open?88:45 , height:open?88:45 ,transition:"0.25s", my:2, border:"2px solid gray"}}
         alt="Remy Sharp" 
         src="src\assets\images.jpeg"/>

       <Typography align ="center" sx={{fontSize:open?17:0 , transition:"0.25"}} color="initial">
        Menna
        </Typography>

       <Typography align ="center" sx={{fontSize:open?15:0 , transition:"0.25s"}} color="gray">
        Mona1234@gmail.com
       </Typography>

        <Divider />

        <List>
          {Array1.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton  
              onClick={() => { 
                navigate(item.path)
               }}
                sx={[
                  {
                    minHeight: 48,
                    justifyContent : open ? "initial" : "center" ,
                    px: 3,
                    bgcolor : false? "gray" : null
                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <Divider />

        <List>
          {Array2.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ display: "block" }}>
              <ListItemButton
               onClick={() => { 
                navigate(item.path)
               }}
                sx={[
                  {
                    minHeight: 48,
                    justifyContent : open ? "initial" : "center" ,
                    px: 3,
                    bgcolor : false? "gray" : null

                  },
                  open
                    ? {
                        justifyContent: "initial",
                      }
                    : {
                        justifyContent: "center",
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: "center",
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: "auto",
                        },
                  ]}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={[
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>


        
      </Drawer>
  )
}
