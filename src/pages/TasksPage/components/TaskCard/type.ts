import type { CreateTask } from "types/task";

export interface TaskCardProps {
  task: CreateTask;
  viewMode: 'list' | 'grid';
  onEdit: (task: CreateTask) => void;
  onDelete: (taskId: string) => void;
}

export interface TaskMenuProps {
  anchorEl: HTMLElement | null;
  onClose: () => void;
  onEditClick: () => void;
  onDeleteClick: () => void;
}

