import type { Task } from 'types/task';

export interface TaskListProps {
  tasks: Task[];
  viewMode: 'list' | 'grid';
  onLoadMore?: () => void;
  hasMore?: boolean;
  loading?: boolean;
  onEditTask?: (updatedTask: Task) => void;
  onDeleteTask?: (taskId: string) => void;
  isLoading?: boolean;
}
