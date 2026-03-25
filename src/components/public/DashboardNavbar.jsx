import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  InputBase,
} from "@mui/material";
import { Menu, Bell, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../core/constants/routes.constant";

const DashboardNavbar = ({ title, onMenuClick, role }) => {
  const isAdmin = role === "ADMIN";
  const navigate = useNavigate();

  return (
    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        background: isAdmin
          ? "linear-gradient(90deg, #0d0d0d, #0f1a1f)"
          : "primary.main",
        boxShadow: isAdmin ? "none" : undefined,
        borderBottom: isAdmin ? "1px solid #1a1a1a" : "none",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: { xs: "60px", sm: "70px" }, // ✅ responsive height
          px: { xs: 1, sm: 2 } // ✅ responsive padding
        }}
      >

        {/* LEFT */}
        <Box display="flex" alignItems="center" gap={2}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>

          {isAdmin ? (
            <Box display="flex" alignItems="center" gap={1.5}>
              <Box
                sx={{
                  width: { xs: 30, sm: 36 },
                  height: { xs: 30, sm: 36 },
                  borderRadius: "50%",
                  border: "1px solid #909090",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#909090",
                  fontSize: "14px",
                }}
              >
                👤
              </Box>

              <Typography
                sx={{
                  color: "#FFF2EF",
                  fontSize: { xs: "14px", sm: "16px" },
                }}
              >
                Profile name
              </Typography>
            </Box>
          ) : (
            <Typography variant="h6">{title}</Typography>
          )}
        </Box>

        {/* RIGHT */}
        {isAdmin && (
          <Box display="flex" alignItems="center" gap={{ xs: 1.5, sm: 3 }}>

            {/* 🔍 SEARCH (responsive fix) */}
            <Box
              sx={{
                display: { xs: "none", sm: "flex" }, // ❗ hide on mobile
                alignItems: "center",
                backgroundColor: "#1a1a1a",
                px: 2,
                py: 0.6,
                borderRadius: "999px",
                width: { sm: "220px", md: "300px", lg: "350px" } // ✅ responsive width
              }}
            >
              <Search size={16} color="#909090" />

              <InputBase
                placeholder="Search"
                sx={{
                  ml: 1,
                  color: "#FFF2EF",
                  fontSize: "14px",
                  width: "100%",
                }}
              />
            </Box>

            {/* 🔔 NOTIFICATION */}
            <Box
              sx={{
                position: "relative",
                cursor: "pointer",
                "&:hover": { opacity: 0.8 },
              }}
              onClick={() => navigate(ROUTES.ADMIN_NOTIFICATION)}
            >
              <Bell color="#FFF2EF" size={20} />

              <Box
                sx={{
                  position: "absolute",
                  top: -6,
                  right: -6,
                  backgroundColor: "#D92B3A",
                  color: "white",
                  fontSize: "10px",
                  px: 0.6,
                  borderRadius: "50%",
                }}
              >
                2
              </Box>
            </Box>

          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default DashboardNavbar;