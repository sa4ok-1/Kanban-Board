import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import CssBaseline from "@mui/material/CssBaseline";
import TasksIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KanbanIcon from "@mui/icons-material/ViewKanban";
import ProfileIcon from "@mui/icons-material/Person";
import { Outlet } from "react-router-dom";

import theme from "styles/theme";
import AppTitle from "../components/layout/AppTitle";
import ToolbarActionsSearch from "../components/layout/ToolbarSearch";
import SidebarFooter from "../components/layout/Sidebar";
import PageContent from "../components/layout/PageContent";

const NAVIGATION: Navigation = [
  { kind: "header", title: "Main items" },
  { segment: "Tasks", title: "Tasks", icon: <TasksIcon /> },
  { segment: "Dashboard", title: "Dashboard", icon: <DashboardIcon /> },
  { segment: "Kanban", title: "Kanban", icon: <KanbanIcon /> },
  { segment: "Profile", title: "Profile", icon: <ProfileIcon /> },
];

export default function DashboardLayoutSlots() {
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
