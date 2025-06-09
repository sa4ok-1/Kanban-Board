import { useState, useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import { type CreateTask, TaskSortOption } from 'types/task';
import CreateTaskDialog from './modals/TaskDialog/CreateTaskDialog/CreateTaskDialog';
import HeaderActions from './components/HeaderAction/HeaderActions';
import FilterBar from './components/Filterbar/FilterBar';
import TaskList from './components/TaskList/TaskList';

export default function TasksPage() {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState<CreateTask[]>([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<TaskSortOption>(
    TaskSortOption.CompletedFirst,
  );

  const handleSubmit = (data: CreateTask) => {
    setTasks((prev) => [...prev, data]);
  };

  const handleEditTask = (updatedTask: CreateTask) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const filterTasks = (tasks: CreateTask[], filter: string) => {
    return filter === 'All'
      ? tasks
      : tasks.filter((task) => task.status === filter);
  };

  const searchTasks = (tasks: CreateTask[], query: string) => {
    if (!query) return tasks;
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description?.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const sortTasks = (
    tasks: CreateTask[],
    option: TaskSortOption,
  ): CreateTask[] => {
    const tasksCopy = [...tasks];
    switch (option) {
      case 'byName':
        return tasksCopy.sort((a, b) => a.title.localeCompare(b.title));
      case 'completedFirst':
        return tasksCopy.sort((a) => (a.status === 'Done' ? -1 : 1));
      case 'pendingFirst':
        return tasksCopy.sort((a) => (a.status === 'Done' ? 1 : -1));
      default:
        return tasksCopy;
    }
  };

  const filteredAndSortedTasks = useMemo(() => {
    const filtered = filterTasks(tasks, statusFilter);
    const searched = searchTasks(filtered, searchQuery);
    return sortTasks(searched, sortOption);
  }, [tasks, statusFilter, searchQuery, sortOption]);

  return (
    <Box sx={{ width: '100%', p: 1, boxSizing: 'border-box' }}>
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
        <CreateTaskDialog
          open={openModal}
          onClose={() => setOpenModal(false)}
          onSubmit={handleSubmit}
        />
      </Stack>
    </Box>
  );
}
