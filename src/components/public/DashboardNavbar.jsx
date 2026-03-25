import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  InputBase,
} from "@mui/material";
import { Menu } from "lucide-react";
import { FiSearch, FiBell } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../core/constants/routes.constant";

const DashboardNavbar = ({ title, onMenuClick, role }) => {
  const isAdmin = role === "ADMIN";
  const navigate = useNavigate();

  return (
 <AppBar
  position={isAdmin ? "fixed" : "sticky"}
  sx={{
    top: 0,
    zIndex: (theme) => theme.zIndex.drawer + 1,
    background: isAdmin
      ? "linear-gradient(90deg, #0B1220, #060A13)"
      : "#0B1220",
    boxShadow: isAdmin ? "none" : "0 2px 10px rgba(0,0,0,0.3)",
    borderBottom: "1px solid #1a1a1a",
  }}
>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "70px",
          px: 3,
        }}
      >
        {/* LEFT */}
        <Box display="flex" alignItems="center" gap={2}>
          {/* MOBILE MENU */}
          <IconButton
            color="inherit"
            edge="start"
            onClick={onMenuClick}
            sx={{ display: { sm: "none" } }}
          >
            <Menu />
          </IconButton>

          {/* ADMIN PROFILE */}
          {isAdmin ? (
            <Box display="flex" alignItems="center" gap={1.5}>
              <FaRegUserCircle size={22} color="#FFF2EF" />
              <Typography sx={{ color: "#FFF2EF", fontSize: "14px" }}>
                Profile name
              </Typography>
            </Box>
          ) : (
            <Typography variant="h6">{title}</Typography>
          )}
        </Box>

        {/* RIGHT */}
        {isAdmin && (
          <Box display="flex" alignItems="center" gap={3}>
            {/* 🔍 SEARCH */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#1a1a1a",
                px: 2,
                py: 0.6,
                borderRadius: "999px",
                width: { xs: "200px", sm: "300px", md: "350px" },
              }}
            >
              <FiSearch size={16} color="#909090" />

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
              <FiBell size={20} color="#FFF2EF" />

              {/* BADGE */}
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