import TasksIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import KanbanIcon from "@mui/icons-material/ViewKanban";
import ProfileIcon from "@mui/icons-material/Person";
import type { Navigation } from "@toolpad/core/AppProvider";

import React from "react";

export const getNavigation = (t: (key: string) => string): Navigation => [
  { segment: "tasks", title: t("Tasks"), icon: React.createElement(TasksIcon) },
  { segment: "dashboard", title: t("Dashboard"), icon: React.createElement(DashboardIcon) },
  { segment: "kanban", title: t("Kanban"), icon: React.createElement(KanbanIcon) },
  { segment: "profile", title: t("Profile"), icon: React.createElement(ProfileIcon) },
];
