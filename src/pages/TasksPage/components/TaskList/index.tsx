import { Paper, CircularProgress, Box } from '@mui/material';
import TaskCard from '../TaskCard';
import type { TaskListProps } from './type';

export default function TaskList({
  tasks,
  viewMode,
  hasMore = true,
  loading = false,
  onEditTask,
  onDeleteTask,
}: TaskListProps) {
  return (
    <Paper
      sx={{
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
        gridAutoRows: viewMode === 'grid' ? 'minmax(150px, auto)' : undefined,
        p: 2,
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

      {hasMore && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            py: 3,
            gridColumn: viewMode === 'grid' ? '1 / -1' : undefined,
          }}
        >
          {loading && <CircularProgress />}
        </Box>
      )}
    </Paper>
  );
}
