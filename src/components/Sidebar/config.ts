import TaskIcon from '@mui/icons-material/Task';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ViewKanbanIcon from '@mui/icons-material/ViewKanban';
import PersonIcon from '@mui/icons-material/Person';

export const navConfig = [
  { to: '/tasks', labelKey: 'tasks', icon: TaskIcon },
  { to: '/dashboard', labelKey: 'dashboard', icon: DashboardIcon },
  { to: '/kanban', labelKey: 'kanban', icon: ViewKanbanIcon },
  { to: '/profile', labelKey: 'profile', icon: PersonIcon },
];
