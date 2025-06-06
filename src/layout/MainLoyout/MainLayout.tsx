import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import AppTitle from '../../components/Header/components/AppTitle/AppTitle';
import { Header } from 'components/Header';
import Sidebar from 'components/Sidebar/Sidebar';
import PageContent from './components/PageContent';

export default function MainLayout() {
  return (
    <Box sx={{ display: 'flex' }}>
      <Sidebar />

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
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <AppTitle />
          </Box>
          <Header />
        </Box>

        <PageContent />
        <Outlet />
      </Box>
    </Box>
  );
}
