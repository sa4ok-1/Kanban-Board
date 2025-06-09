import type { CreateTask } from "types/task";

export interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  task: CreateTask;
  editMode?: boolean;
  onSave?: (updatedTask: CreateTask) => void;
}