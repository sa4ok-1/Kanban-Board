import type { Task } from 'types/task';

export interface TaskCardProps {
  task: Task;
  viewMode: 'list' | 'grid';
  onEdit: (task: Task) => void;
  onDelete: (taskId: string) => void;
}

export interface TaskMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
}
