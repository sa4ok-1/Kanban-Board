import {
  type CreateTask,
  TaskStatus,
  TaskPrivacy,
  TaskPriority,
} from 'types/task';

export interface CreateTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateTask) => void;
}

export const initialValues: CreateTask = {
  id: '',
  title: '',
  description: '',
  status: TaskStatus.TODO,
  priority: TaskPriority.MEDIUM,
  author: '',
  executor: '',
  privacy: TaskPrivacy.PUBLIC,
};
