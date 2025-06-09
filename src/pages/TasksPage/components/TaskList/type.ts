import type { CreateTask } from 'types/task';

export interface TaskListProps {
  tasks: CreateTask[];
  viewMode: 'list' | 'grid';
  onLoadMore?: () => void;
  hasMore?: boolean;
  loading?: boolean;
  onEditTask?: (updatedTask: CreateTask) => void;
  onDeleteTask?: (taskId: string) => void;
}
