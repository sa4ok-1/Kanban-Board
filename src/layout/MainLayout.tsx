import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import CssBaseline from "@mui/material/CssBaseline";
import { Outlet } from "react-router-dom";
import AppTitle from "../components/DashBoard/AppTitle";
import ToolbarActionsSearch from "../components/DashBoard/Toolbar";
import SidebarFooter from "../components/DashBoard/Sidebar";
import PageContent from "../components/DashBoard/PageContent";
import theme from "components/theme/theme";
import { useTranslation } from "react-i18next";
import { NAVIGATION_CONFIG } from "config/navigation";

export default function MainLayout() {
  const { t } = useTranslation();

  const navigation: Navigation = NAVIGATION_CONFIG.map((item) => ({
    segment: item.segment,
    title: t(item.translationKey),
    icon: <item.icon />,
  }));

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
