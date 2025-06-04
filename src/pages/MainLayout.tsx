import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import AppTitle from "../layout/DashBoard/AppTitle";
import ToolbarActionsSearch from "../layout/DashBoard/Toolbar";
import SidebarFooter from "../layout/DashBoard/Sidebar";
import PageContent from "../layout/DashBoard/PageContent";
import theme from "infrastructure/theme/theme";
import { useTranslation } from "react-i18next";
import { NAVIGATION_CONFIG } from "config/navigation";
import { useMemo } from "react";

export default function MainLayout() {
  const { t, i18n } = useTranslation();

  const navigation: Navigation = useMemo(
    () =>
      NAVIGATION_CONFIG.map((item) => ({
        segment: item.segment,
        title: t(item.translationKey),
        icon: <item.icon />,
      })),
    [t, i18n.language]
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
