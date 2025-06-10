import { useRoutes } from 'react-router-dom';
import { AppRoutes } from './config';
import ProtectedRoute from './utils/ProtectedRoute';
import MainLayout from 'layout/MainLoyout';
import DashBoard from 'pages/Dashboard';
import TasksPage from 'pages/TasksPage';
import KanbanPage from 'pages/Kanban';
import ProfilePage from 'pages/Profile';
import Login from 'pages/Login';
import RegisterPage from 'pages/Register';
import NotFoundPage from 'pages/Page404';

export const routes = [
  {
    path: AppRoutes.LOGIN,
    element: <Login />,
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
            <DashBoard />
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
  {
    path: '*',
    element: <NotFoundPage />,
  },
];

const AppRouter = () => {
  const element = useRoutes(routes);
  return element;
};

export default AppRouter;
