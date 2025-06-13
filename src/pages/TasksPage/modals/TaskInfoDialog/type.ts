import type { Task } from 'types/task';

export interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  task: Task;
  editMode?: boolean;
  onSave?: (updatedTask: Task) => void;
}
