import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import { ROUTES } from '../../core/constants/routes.constant';

const drawerWidth = 240;

const DashboardSidbar = ({ role, mobileOpen, handleDrawerToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isAdmin = role === "ADMIN";

  // ✅ ADMIN MENU WITH ROUTES
  const adminMenu = [
    { name: "Dashboard", path: ROUTES.ADMIN_DASHBOARD },

    { name: "Case Management", path: ROUTES.ADMIN_CASE_MANAGEMENT },

    { name: "Detective Management", path: ROUTES.ADMIN_DETECTIVE_MANAGEMENT },

    { name: "User Management", path: ROUTES.ADMIN_USER_MANAGEMENT },

    { name: "Activity History", path: ROUTES.ADMIN_HISTORY },

    { name: "Blogs", path: "/admin-blogs" }, // ⚠️ not in routes, temporary

    { name: "Profile", path: ROUTES.ADMIN_PROFILE },

    { name: "Settings", path: ROUTES.ADMIN_SETTINGS }
  ];

  const drawer = (
    <Box
      sx={{
        backgroundColor: "#0f1a1f",
        height: "100%",
        color: "white",
        p: 2
      }}
    >
      <List>

        {/* ADMIN MENU */}
        {isAdmin && adminMenu.map((item, index) => {
          const isActive = location.pathname === item.path;

          return (
            <ListItem key={index} disablePadding>
              <ListItemButton
                onClick={() => {
                  navigate(item.path);
                  handleDrawerToggle && handleDrawerToggle();
                }}
                sx={{
                  borderRadius: "8px",
                  mb: 1,
                  backgroundColor: isActive ? "#D92B3A" : "transparent",
                  "&:hover": {
                    backgroundColor: "#590202"
                  }
                }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          );
        })}

        {/* USER / DETECTIVE */}
        {!isAdmin && (
          <>
            <ListItem disablePadding>
              <ListItemButton onClick={() => {
                navigate(
                  role === 'USER'
                    ? ROUTES.USER_DASHBOARD
                    : ROUTES.DETECTIVE_DASHBOARD
                );
              }}>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>
          </>
        )}

      </List>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>

      {/* MOBILE */}
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            mt: '64px',
            backgroundColor: "#0f1a1f",
            borderRight: "1px solid #1f2f3a"
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* DESKTOP */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            mt: '64px',
            backgroundColor: "#0f1a1f",
            borderRight: "1px solid #1f2f3a"
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default DashboardSidbar;