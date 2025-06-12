import { Paper } from '@mui/material';
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
}: TaskListProps) {
  if (isLoading) {
    return <TaskListSkeleton viewMode={viewMode} />;
  }

  if (tasks.length === 0) {
    return <EmptyState />;
  }

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
        mb: 2,
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
