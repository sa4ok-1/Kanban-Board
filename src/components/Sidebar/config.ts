import TaskIcon from '@mui/icons-material/Task';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import PersonIcon from '@mui/icons-material/Person';
import { AppRoutes } from 'routes/config';

export const navConfig = [
  { to: AppRoutes.TASKS, labelKey: 'tasks', icon: TaskIcon },
  { to: AppRoutes.DASHBOARD, labelKey: 'dashboard', icon: DashboardIcon },
  { to: AppRoutes.KANBAN, labelKey: 'kanban', icon: ViewKanbanIcon },
  { to: AppRoutes.PROFILE, labelKey: 'profile', icon: PersonIcon },
];
