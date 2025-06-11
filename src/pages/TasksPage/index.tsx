import { useState, useMemo } from 'react';
import { Box, Stack } from '@mui/material';
import { type Task, TaskSortOption } from 'types/task';
import CreateTaskDialog from './modals/CreateTaskDialog';
import HeaderActions from './components/HeaderAction';
import FilterBar from './components/Filterbar';
import TaskList from './components/TaskList';

export default function TasksPage() {
  const [openModal, setOpenModal] = useState(false);
  const [tasks, setTasks] = useState<Task[]>([]);
  const [statusFilter, setStatusFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOption, setSortOption] = useState<TaskSortOption>(
    TaskSortOption.CompletedFirst,
  );

  const handleSubmit = (data: Task) => {
    setTasks((prev) => [...prev, data]);
  };

  const handleEditTask = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task)),
    );
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  const filterTasks = (tasks: Task[], filter: string) => {
    return filter === 'All'
      ? tasks
      : tasks.filter((task) => task.status === filter);
  };

  const searchTasks = (tasks: Task[], query: string) => {
    if (!query) return tasks;
    return tasks.filter(
      (task) =>
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.description?.toLowerCase().includes(query.toLowerCase()),
    );
  };

  const sortTasks = (tasks: Task[], option: TaskSortOption): Task[] => {
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
