import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./config/ProtectedRoute";
import MainLayout from "./pages/MainLayout";
import Dashboard from "./pages/DashBoard";
import TasksPage from "./pages/TaskPage";
import KanbanPage from "./pages/KanbanPage";
import { AppRoutes } from "./config/routes";
import ProfilePage from "pages/ProfilePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "pages/RegisterPage";

export default function App() {
  const element = useRoutes([
    {
      path: AppRoutes.LOGIN,
      element: <LoginPage />,
    },
    {
      path: AppRoutes.REGISTER,
      element: <RegisterPage />,
    },
    {
      path: "/",
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
  ]);

  return element;
}
