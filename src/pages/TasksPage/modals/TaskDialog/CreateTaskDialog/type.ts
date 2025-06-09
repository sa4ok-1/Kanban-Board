import type { CreateTask } from "types/task";

export interface CreateTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateTask) => void;
}