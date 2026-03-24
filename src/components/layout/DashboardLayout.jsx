import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import DashboardNavbar from '../public/DashboardNavbar';
import DashboardSidebar from '../public/DashboardSidbar';
import useResponsive from '../../hooks/useResponsive';

const drawerWidth = 240;

const DashboardLayout = ({ role, title, children }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isMobile } = useResponsive();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const getRoleTitle = () => {
    switch (role) {
      case 'USER': return 'User Dashboard';
      case 'DETECTIVE': return 'Detective Dashboard';
      case 'ADMIN': return 'Admin Dashboard';
      default: return 'Dashboard';
    }
  };

  return (
    <Box sx={{
      display: 'flex',
      minHeight: '100vh',
      overflowX: 'hidden',
      backgroundColor: "#0d0d0d"
    }}>
      <CssBaseline />

      <DashboardNavbar
        title={title || getRoleTitle()}
        onMenuClick={handleDrawerToggle}
        role={role}
      />

      <DashboardSidebar
        role={role}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: isMobile ? 1 : 3,
          width: {
            xs: "100%",
            sm: `calc(100% - ${drawerWidth}px)`
          },
          mt: { xs: '60px', sm: '70px' },
          minHeight: '100vh',
          backgroundColor: "#0d0d0d"
        }}
      >
        {children || <Outlet />}
      </Box>
    </Box>
  );
};

export default DashboardLayout;