import type { TaskPriority, TaskPrivacy, TaskStatus } from "types/task";

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  author: string;
  executor: string;
  privacy: TaskPrivacy;
}

export interface TaskListProps {
  tasks: Task[];
  viewMode: 'list' | 'grid';
  onLoadMore?: () => void;
  hasMore?: boolean;
  loading?: boolean;
  onEditTask?: (updatedTask: Task) => void;
  onDeleteTask?: (taskId: string) => void;
}
