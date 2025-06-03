import DashboardLayoutPage from "./layout/DashboardPage";
import { Route,Routes } from "react-router-dom";
import TasksPage from "./layout/TaskPage";
import KanbanPage from "layout/KanbanPage";
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
