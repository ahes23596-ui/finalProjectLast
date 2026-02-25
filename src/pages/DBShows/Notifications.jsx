import React from "react";
import {
  Box,
  Typography,
  Paper,
  Stack,
  Button,
} from "@mui/material";
import MedicationIcon from "@mui/icons-material/Medication";
import EventIcon from "@mui/icons-material/Event";
import LocalPharmacyIcon from "@mui/icons-material/LocalPharmacy";
import CampaignIcon from "@mui/icons-material/Campaign";

export default function Notifications({ darkMode }) {
  const notifications = [
    {
      title: "Medication Reminder",
      description: "Take your Metformin now.",
      time: "10:00 AM",
      icon: <MedicationIcon />,
    },
    {
      title: "Appointment Alert",
      description: "Upcoming appointment with Dr. Smith tomorrow at 10:00 AM.",
      time: "Yesterday",
      icon: <EventIcon />,
    },
    {
      title: "Pharmacy Order Update",
      description: "Your prescription for Lisinopril is ready for pickup.",
      time: "Yesterday",
      icon: <LocalPharmacyIcon />,
    },
    {
      title: "General Announcement",
      description: "New feature: You can now track your blood pressure.",
      time: "2 days ago",
      icon: <CampaignIcon />,
    },
  ];

  return (
    <Box
      sx={{
        p: 4,
        minHeight: "100vh",
        backgroundColor: darkMode ? "#121212" : "#f5f5f5",
        color: darkMode ? "#fff" : "#000",
      }}
    >
      {/* Header */}
      <Paper
        sx={{
          p: 3,
          mb: 4,
          borderRadius: 3,
          backgroundColor: darkMode ? "#1e1e1e" : "#cfe8f3",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography variant="h4" fontWeight="bold">
          Notifications
        </Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: darkMode ? "#1976d2" : "#1565c0",
          }}
        >
          Clear All
        </Button>
      </Paper>

      {/* Notifications List */}
      <Stack spacing={3}>
        {notifications.map((item, index) => (
          <Paper
            key={index}
            sx={{
              p: 3,
              borderRadius: 3,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: darkMode ? "#1e1e1e" : "#fff",
            }}
          >
            <Stack direction="row" spacing={2} alignItems="center">
              <Box
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: 2,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: darkMode ? "#2c2c2c" : "#e3f2fd",
                }}
              >
                {item.icon}
              </Box>

              <Box>
                <Typography fontWeight="bold">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </Box>
            </Stack>

            <Typography variant="body2" color="text.secondary">
              {item.time}
            </Typography>
          </Paper>
        ))}
      </Stack>
    </Box>
  );
}
