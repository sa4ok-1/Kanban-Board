import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./config/ProtectedRoute";
import MainLayout from "./layout/MainLayout";
import Dashboard from "./layout/DashBoard";
import TasksPage from "./layout/TaskPage";
import KanbanPage from "./layout/KanbanPage";
import { AppRoutes } from "./config/routes";

export default function App() {
  const element = useRoutes([
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
        // опційно:
        // {
        //   path: AppRoutes.PROFILE,
        //   element: <ProfilePage />,
        // },
      ],
    },
  ]);

  return element;
}
