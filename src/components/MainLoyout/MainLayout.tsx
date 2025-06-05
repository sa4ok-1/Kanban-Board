import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import CssBaseline from '@mui/material/CssBaseline';
import { Outlet } from 'react-router-dom';
import AppTitle from '../Header/AppTitle';
import ToolbarActionsSearch from './Toolbar';
import SidebarFooter from './Sidebar';
import PageContent from './PageContent';
import theme from 'infrastructure/theme/theme';
import { useTranslation } from 'react-i18next';
import { NAVIGATION_CONFIG } from 'components/MainLoyout/config';
import { useMemo } from 'react';

export default function MainLayout() {
  const { t } = useTranslation('sidebar');

  const navigation: Navigation = useMemo(
    () =>
      NAVIGATION_CONFIG.map((item) => ({
        segment: item.segment,
        title: t(item.translationKey),
        icon: <item.icon />,
      })),
    [t],
  );

  return (
    <AppProvider navigation={navigation} theme={theme}>
      <CssBaseline />
      <DashboardLayout
        slots={{
          appTitle: AppTitle,
          toolbarActions: ToolbarActionsSearch,
          sidebarFooter: SidebarFooter,
        }}
      >
        <PageContent />
        <Outlet />
      </DashboardLayout>
    </AppProvider>
  );
}
