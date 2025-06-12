import { type Task, TaskStatus, TaskPrivacy, TaskPriority } from 'types/task';

export interface CreateTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: Task) => void;
}

export const initialValues: Task = {
  id: '',
  title: '',
  description: '',
  status: TaskStatus.TODO,
  priority: TaskPriority.MEDIUM,
  author: '',
  executor: '',
  privacy: TaskPrivacy.PUBLIC,
};
