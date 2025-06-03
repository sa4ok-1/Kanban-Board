import { useState } from "react";
import { Box, Stack } from "@mui/material";
import type { CreateTask } from "../types/type";
import AddTaskModal from "../components/TaskBoard/modals/CreateTaskDialogWindow";
import HeaderActions from "../components/TaskBoard/components/HeaderActions";
import FilterBar from "../components/TaskBoard/components/FilterBar";
import TaskList from "../components/TaskBoard/components/TaskList";

export default function TasksPage() {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState<CreateTask[]>([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSubmit = (data: CreateTask) => {
    setTasks((prev) => [...prev, data]);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus =
      statusFilter === "All" || task.status === statusFilter;
    const matchesSearch =
      task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      task.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesStatus && matchesSearch;
  });

  return (
    <Box sx={{ width: "100%", p: 1, boxSizing: "border-box" }}>
      <Stack spacing={3}>
        <HeaderActions onAddTask={() => setOpenModal(true)} />
        <FilterBar
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          viewMode={viewMode}
          setViewMode={setViewMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          onSearch={(query: string) => setSearchQuery(query)}
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
