import { useRoutes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import MainLayout from '../components/MainLoyout/MainLayout';
import Dashboard from '../pages/Dashboard/DashBoard';
import TasksPage from '../pages/TasksPage/TaskPage';
import KanbanPage from '../pages/Kanban/KanbanPage';
import { AppRoutes } from './config';
import ProfilePage from '../pages/Profile/ProfilePage';
import LoginPage from '../pages/Login/Login';
import RegisterPage from 'pages/Register/RegisterPage';

export const appRouter = [
  {
    path: AppRoutes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: AppRoutes.REGISTER,
    element: <RegisterPage />,
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: AppRoutes.DASHBOARD,
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: AppRoutes.TASKS,
        element: (
          <ProtectedRoute>
            <TasksPage />
          </ProtectedRoute>
        ),
      },
      {
        path: AppRoutes.KANBAN,
        element: (
          <ProtectedRoute>
            <KanbanPage />
          </ProtectedRoute>
        ),
      },
      {
        path: AppRoutes.PROFILE,
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
    ],
  },
];

const AppRouter = () => {
  const element = useRoutes(appRouter);
  return element;
};

export default AppRouter;
