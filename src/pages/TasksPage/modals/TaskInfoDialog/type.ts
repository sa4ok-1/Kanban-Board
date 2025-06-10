import type { Task } from 'pages/TasksPage/components/TaskList/type';

export interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  task: Task;
  editMode?: boolean;
  onSave?: (updatedTask: Task) => void;
}
