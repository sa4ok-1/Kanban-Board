import type{ SvgIconComponent } from "@mui/icons-material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ViewKanbanIcon from "@mui/icons-material/ViewKanban";
import PersonIcon from "@mui/icons-material/Person";
import { AppRoutes } from "./routes";

export type NavigationConfigItem = {
  segment: AppRoutes;
  translationKey: string;
  icon: SvgIconComponent;
};

export const NAVIGATION_CONFIG: NavigationConfigItem[] = [
  { segment: AppRoutes.TASKS, translationKey: "Tasks", icon: AssignmentIcon },
  { segment: AppRoutes.DASHBOARD, translationKey: "Dashboard", icon: DashboardIcon },
  { segment: AppRoutes.KANBAN, translationKey: "Kanban", icon: ViewKanbanIcon },
  { segment: AppRoutes.PROFILE, translationKey: "Profile", icon: PersonIcon },
];
