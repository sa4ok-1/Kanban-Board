import { Box, Stack } from '@mui/material';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

import CreateTaskDialog from './modals/CreateTaskDialog';
import HeaderActions from './components/HeaderAction';
import TaskList from './components/TaskList';
import { useTaskActions, useFetchTasks } from './hooks';
import type { TaskStatus, TaskSortOption } from 'types/task';

const allowedStatuses = ['All', 'todo', 'in-progress', 'done'] as const;

export default function TasksPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  const statusParam = searchParams.get('status');
  const initialStatusFilter = allowedStatuses.includes(statusParam as any)
    ? (statusParam as TaskStatus | 'All')
    : 'All';

  const initialViewMode = searchParams.get('view') === 'grid' ? 'grid' : 'list';

  const initialSearchQuery = searchParams.get('search') || '';

  const initialSortOption =
    (searchParams.get('sort') as TaskSortOption) || 'date-created';

  const [statusFilter, setStatusFilter] = useState<TaskStatus | 'All'>(
    initialStatusFilter,
  );
  const [viewMode, setViewMode] = useState<'list' | 'grid'>(initialViewMode);
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [sortOption, setSortOption] =
    useState<TaskSortOption>(initialSortOption);
  const [openModal, setOpenModal] = useState(false);

  const { tasks, setTasks, isLoading, error } = useFetchTasks();
  const { handleSubmit, handleEditTask, handleDeleteTask } =
    useTaskActions(setTasks);

  useEffect(() => {
    const params: Record<string, string> = {};

    params.view = viewMode;
    if (searchQuery) params.search = searchQuery;
    if (statusFilter !== 'All') params.status = statusFilter;
    if (sortOption) params.sort = sortOption;

    setSearchParams(params, { replace: true });
  }, [viewMode, searchQuery, statusFilter, sortOption, setSearchParams]);

  return (
    <Box sx={{ width: '100%', p: 1, boxSizing: 'border-box' }}>
      <Stack spacing={3}>
        <HeaderActions
          onAddTask={() => setOpenModal(true)}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
          viewMode={viewMode}
          setViewMode={setViewMode}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          sortOption={sortOption}
          setSortOption={setSortOption}
          onSearch={setSearchQuery}
        />
        <TaskList
          isLoading={isLoading}
          tasks={tasks}
          error={error}
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
