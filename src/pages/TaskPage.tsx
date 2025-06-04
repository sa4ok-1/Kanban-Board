import { useState, useMemo, useCallback } from "react";
import { Box, Stack } from "@mui/material";
import type { CreateTask } from "../types/type";
import AddTaskModal from "../layout/TaskBoard/modals/CreateTaskDialogWindow";
import HeaderActions from "../layout/TaskBoard/HeaderActions";
import FilterBar from "../layout/TaskBoard/FilterBar";
import TaskList from "../layout/TaskBoard/TaskList";
import type { SortOption } from "../types/type";

export default function TasksPage() {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState<CreateTask[]>([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>("byName");

  const handleSubmit = useCallback((data: CreateTask) => {
    setTasks((prev) => [...prev, data]);
  }, []);

  const handleEditTask = useCallback((updatedTask: CreateTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  }, []);

  const handleDeleteTask = useCallback((taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  }, []);

  const filterTasks = useCallback((tasks: CreateTask[], filter: string) => {
    return filter === "All"
      ? tasks
      : tasks.filter((task) => task.status === filter);
  }, []);

  const searchTasks = useCallback((tasks: CreateTask[], query: string) => {
    if (!query) return tasks;
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description?.toLowerCase().includes(query.toLowerCase())
    );
  }, []);

  const sortTasks = useCallback(
    (tasks: CreateTask[], option: SortOption): CreateTask[] => {
      const tasksCopy = [...tasks];
      switch (option) {
        case "byName":
          return tasksCopy.sort((a, b) => a.title.localeCompare(b.title));
        case "completedFirst":
          return tasksCopy.sort((a) => (a.status === "Done" ? -1 : 1));
        case "pendingFirst":
          return tasksCopy.sort((a) => (a.status === "Done" ? 1 : -1));
        default:
          return tasksCopy;
      }
    },
    []
  );

  const filteredAndSortedTasks = useMemo(() => {
    const filtered = filterTasks(tasks, statusFilter);
    const searched = searchTasks(filtered, searchQuery);
    return sortTasks(searched, sortOption);
  }, [
    tasks,
    statusFilter,
    searchQuery,
    sortOption,
    filterTasks,
    searchTasks,
    sortTasks,
  ]);

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
          sortOption={sortOption}
          onSearch={setSearchQuery}
          setSortOption={setSortOption}
        />
        <TaskList
          tasks={filteredAndSortedTasks}
          viewMode={viewMode}
          onEditTask={handleEditTask}
          onDeleteTask={handleDeleteTask}
        />
        <AddTaskModal
          open={openModal}
          onClose={() => setOpenModal(false)}
          onSubmit={handleSubmit}
        />
      </Stack>
    </Box>
  );
}
