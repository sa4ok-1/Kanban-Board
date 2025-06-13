import { Paper, Box } from '@mui/material';
import TaskCard from '../TaskCard';
import EmptyState from '../EmptyState';
import TaskListSkeleton from './TaskSkeleton';
import type { TaskListProps } from './type';

export default function TaskList({
  tasks,
  viewMode = 'list',
  onEditTask,
  onDeleteTask,
  isLoading = false,
  error,
}: TaskListProps & { error?: string | null }) {
  if (isLoading) {
    return <TaskListSkeleton viewMode={viewMode} />;
  }

  if (error) {
    return (
      <Box sx={{ p: 2, color: 'error.main', textAlign: 'center' }}>
        Помилка при завантаженні: {error}
      </Box>
    );
  }

  if (!tasks || tasks.length === 0) {
    return <EmptyState />;
  }

  return (
    <Paper
      sx={{
        transition: 'all 0.5s ease',
        height: 'calc(100vh - 150px)',
        overflowY: 'auto',
        boxShadow: 'none',
        flex: 1,
        display: viewMode === 'list' ? 'flex' : 'grid',
        flexDirection: viewMode === 'list' ? 'column' : undefined,
        gap: 2,
        gridTemplateColumns:
          viewMode === 'grid'
            ? 'repeat(auto-fill, minmax(250px, 1fr))'
            : undefined,
        gridAutoRows: 'minmax(150px, auto)',
        p: 2,
        mb: 2,
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          viewMode={viewMode}
          onEdit={onEditTask ?? (() => {})}
          onDelete={onDeleteTask ?? (() => {})}
        />
      ))}
    </Paper>
  );
}
