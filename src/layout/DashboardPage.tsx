import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import CssBaseline from "@mui/material/CssBaseline";
import TasksIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KanbanIcon from "@mui/icons-material/ViewKanban";
import ProfileIcon from "@mui/icons-material/Person";
import { Outlet } from "react-router-dom";
import AppTitle from "../components/DashBoard/AppTitle";
import ToolbarActionsSearch from "../components/DashBoard/Toolbar";
import SidebarFooter from "../components/DashBoard/Sidebar";
import PageContent from "../components/DashBoard/PageContent";
import theme from "components/theme/theme";

import { useTranslation } from "react-i18next";

export default function DashboardLayoutSlots() {
  const { t } = useTranslation();

  const NAVIGATION: Navigation = [
    { segment: "Tasks", title: t("Tasks"),  icon: <TasksIcon /> },
    { segment: "Dashboard", title: t("Dashboard"), icon: <DashboardIcon /> },
    { segment: "Kanban", title: t("Kanban"), icon: <KanbanIcon /> },
    { segment: "Profile", title: t("Profile"), icon: <ProfileIcon /> },
  ];

  return (
    <AppProvider navigation={NAVIGATION} theme={theme}>
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