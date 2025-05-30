import React from "react";
import { Box, Stack } from "@mui/material";
import type { TaskFormValues } from "../components/types/type";
import AddTaskModal from "../components/modals/AddTaskModal";
import HeaderActions from "../components/TaskBoard/HeaderActions";
import FilterBar from "../components/TaskBoard/FilterBar";
import TaskList from "../components/TaskBoard/TaskList";

export default function TasksPage() {
  const [openModal, setOpenModal] = React.useState(false);
  const [tasks, setTasks] = React.useState<TaskFormValues[]>([]);
  const [statusFilter, setStatusFilter] = React.useState("All");
  const [viewMode, setViewMode] = React.useState<"list" | "grid">("list");

  const handleSubmit = (data: TaskFormValues) => {
    setTasks((prev) => [...prev, data]);
  };

  const filteredTasks =
    statusFilter === "All"
      ? tasks
      : tasks.filter((task) => task.status === statusFilter);

  return (
    <Box sx={{ width: "100%", p: 1, boxSizing: "border-box" }}>
      <Stack spacing={3}>
        <HeaderActions onAddTask={() => setOpenModal(true)} />
        <FilterBar
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          viewMode={viewMode}
          setViewMode={setViewMode}
        />
        <TaskList tasks={filteredTasks} viewMode={viewMode} />
        <AddTaskModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onSubmit={handleSubmit}
        />
      </Stack>
    </Box>
  );
}
