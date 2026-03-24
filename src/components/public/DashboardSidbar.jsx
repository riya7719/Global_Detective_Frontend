import React from 'react';
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../core/constants/routes.constant';

const drawerWidth = 240;

const DashboardSidbar = ({ role, mobileOpen, handleDrawerToggle }) => {
  const navigate = useNavigate();
  const isAdmin = role === "ADMIN";

  const adminMenu = [
    "Dashboard",
    "Case Management",
    "Detective Management",
    "User Management",
    "Activity History",
    "Blogs",
    "Profile",
    "Settings"
  ];

  const drawer = (
    <Box
      sx={{
        backgroundColor: isAdmin ? "#140000" : "inherit",
        height: "100%",
        color: isAdmin ? "white" : "inherit",
        p: isAdmin ? 2 : 0
      }}
    >
      <List>

        {/* Admin UI */}
        {isAdmin ? (
          adminMenu.map((item, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton
                sx={{
                  borderRadius: "8px",
                  mb: 1,
                  backgroundColor: index === 0 ? "#D92B3A" : "transparent",
                  "&:hover": {
                    backgroundColor: "#590202"
                  }
                }}
              >
                <ListItemText primary={item} />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <>
            {/* Existing USER/DETECTIVE UI */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => {
                navigate(
                  role === 'USER'
                    ? ROUTES.USER_DASHBOARD
                    : (role === 'ADMIN'
                        ? ROUTES.ADMIN_DASHBOARD
                        : ROUTES.DETECTIVE_DASHBOARD)
                );
                handleDrawerToggle && handleDrawerToggle();
              }}>
                <ListItemText primary="Dashboard" />
              </ListItemButton>
            </ListItem>

            {role === 'USER' && (
              <ListItem disablePadding>
                <ListItemButton onClick={() => {
                  navigate(ROUTES.REQUEST_INVESTIGATION);
                  handleDrawerToggle && handleDrawerToggle();
                }}>
                  <ListItemText primary="Request Investigation" />
                </ListItemButton>
              </ListItem>
            )}
          </>
        )}
      </List>
    </Box>
  );

  return (
    <Box component="nav" sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}>
      
      {/* Mobile */}
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
            backgroundColor: isAdmin ? "#140000" : undefined
          },
        }}
      >
        {drawer}
      </Drawer>

      {/* Desktop */}
      <Drawer
        variant="permanent"
        open
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            mt: '64px',
            backgroundColor: isAdmin ? "#140000" : undefined
          },
        }}
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default DashboardSidbar;