import DashboardLayoutPage from "./pages/MainPage";
import { Routes, Route } from "react-router";
import TasksPage from "./pages/TaskPage";
import KanbanPage from "pages/KanbanPage";
function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayoutPage />}>
        <Route path="Tasks" element={<TasksPage />} />
        <Route path="Dashboard" element={<div>Dashboard Content</div>} />
        <Route path="Kanban" element={<KanbanPage />} />
        <Route path="profile" element={<div>Profile Content</div>} />
      </Route>
    </Routes>
  );
}

export default App;