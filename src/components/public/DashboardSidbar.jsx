import React from 'react';
import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, ClipboardList } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../core/constants/routes.constant';

const drawerWidth = 240;

const DashboardSidbar = ({ role, mobileOpen, handleDrawerToggle }) => {
  const navigate = useNavigate();

  const drawer = (
    <Box>
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => {
            navigate(role === 'USER' ? ROUTES.USER_DASHBOARD : (role === 'ADMIN' ? ROUTES.ADMIN_DASHBOARD : ROUTES.DETECTIVE_DASHBOARD));
            handleDrawerToggle && handleDrawerToggle();
          }}>
            <ListItemIcon>
              <Home size={20} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>

        {role === 'USER' && (
          <ListItem disablePadding>
            <ListItemButton onClick={() => {
              navigate(ROUTES.REQUEST_INVESTIGATION);
              handleDrawerToggle && handleDrawerToggle();
            }}>
              <ListItemIcon>
                <ClipboardList size={20} />
              </ListItemIcon>
              <ListItemText primary="Request Investigation" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, mt: '64px' },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, mt: '64px' },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  );
};

export default DashboardSidbar;