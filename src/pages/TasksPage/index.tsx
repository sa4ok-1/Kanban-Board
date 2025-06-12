import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import { useFetchTasks } from './hooks/useFetchTasks';
import CreateTaskDialog from './modals/CreateTaskDialog';
import HeaderActions from './components/HeaderAction';
import FilterBar from './components/Filterbar';
import TaskList from './components/TaskList';
import type { CreateTaskPayload } from 'api/services/TaskService/types/type';
import { TaskSortOption, type Task } from 'types/task';
import { taskService } from 'api/services/TaskService/taskService';
import { handleError } from 'api/utils/errorHandler';

export default function TasksPage() {
  const { tasks, setTasks, isLoading } = useFetchTasks();
  const [openModal, setOpenModal] = useState(false);
  const [statusFilter, setStatusFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState(TaskSortOption.CompletedFirst);

  const handleSubmit = async (data: CreateTaskPayload) => {
    const newTask = await taskService.createTask(data);
    setTasks((prev) => [...prev, newTask]);
  };

  const handleEditTask = async (updatedTask: Task) => {
    try {
      const updated = await taskService.updateTask(updatedTask.id, {
        title: updatedTask.title,
        description: updatedTask.description,
        completed: updatedTask.completed,
      });
      setTasks((prev) =>
        prev.map((task) => (task.id === updated.id ? updated : task)),
      );
    } catch (err) {
      handleError(err);
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await taskService.deleteTask(taskId);
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
    } catch (err) {
      handleError(err);
    }
  };

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
          isLoading={isLoading}
          tasks={tasks}
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
