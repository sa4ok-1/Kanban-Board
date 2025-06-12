import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import { useState } from 'react';
import Header from 'components/Header';
import Sidebar from 'components/Sidebar';

export default function MainLayout() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          minHeight: '100vh',
          backgroundColor: 'background.default',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            px: 3,
            py: 2,
            borderBottom: '1px solid',
            borderColor: 'divider',
            boxShadow: 4,
            backgroundColor: 'background.paper',
            zIndex: 1,
            position: 'sticky',
            top: 0,
          }}
        >
          <Header onMenuClick={handleDrawerToggle} />
        </Box>
        <Outlet />
      </Box>
    </Box>
  );
}
