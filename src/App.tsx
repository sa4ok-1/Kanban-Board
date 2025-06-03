import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./config/ProtectedRoute";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./layout/DashBoard";
import TasksPage from "./layout/TaskPage";
import KanbanPage from "./layout/KanbanPage";
import { AppRoutes } from "./config/routes";
import ProfilePage from "layout/ProfilePage";
import LoginPage from "./components/LoginRegister/LoginPage";
import RegisterPage from "components/LoginRegister/RegisterPage";

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
