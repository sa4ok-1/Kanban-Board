import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import type { CreateTask } from "../types/type";
import AddTaskModal from "../components/TaskBoard/modals/CreateTaskDialogWindow";
import HeaderActions from "../components/TaskBoard/components/HeaderActions";
import FilterBar from "../components/TaskBoard/components/FilterBar";
import TaskList from "../components/TaskBoard/components/TaskList";
import type { SortOption } from "../types/type";

export default function TasksPage() {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState<CreateTask[]>([]);
  const [statusFilter, setStatusFilter] = useState("All");
  const [viewMode, setViewMode] = useState<"list" | "grid">("list");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<SortOption>("completed_asc");

  const handleSubmit = (data: CreateTask) => {
    setTasks((prev) => [...prev, data]);
  };

  const handleEditTask = (updatedTask: CreateTask) => {
    setTasks(
      tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filterTasks = (tasks: CreateTask[], filter: string) => {
    return filter === "All"
      ? tasks
      : tasks.filter((task) => task.status === filter);
  };

  const searchTasks = (tasks: CreateTask[], query: string) => {
    if (!query) return tasks;
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description?.toLowerCase().includes(query.toLowerCase())
    );
  };

  const sortTasks = (tasks: CreateTask[], option: SortOption): CreateTask[] => {
    const tasksCopy = [...tasks];
    switch (option) {
      case "title":
        return tasksCopy.sort((a, b) => a.title.localeCompare(b.title));
      case "completed_asc":
        return tasksCopy.sort((a) => (a.status === "Done" ? -1 : 1));
      case "completed_desc":
        return tasksCopy.sort((a) => (a.status === "Done" ? 1 : -1));
      default:
        return tasksCopy;
    }
  };

  const [filteredAndSortedTasks, setFilteredAndSortedTasks] = useState<
    CreateTask[]
  >([]);

  useEffect(() => {
    const filtered = filterTasks(tasks, statusFilter);
    const searched = searchTasks(filtered, searchQuery);
    const sorted = sortTasks(searched, sortOption);
    setFilteredAndSortedTasks(sorted);
  }, [tasks, statusFilter, searchQuery, sortOption]);

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
          onSearch={(query) => setSearchQuery(query)}
          sortOption={sortOption}
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
