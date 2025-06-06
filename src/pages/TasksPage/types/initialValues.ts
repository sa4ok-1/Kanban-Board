import {
  type CreateTask,
  TaskStatus,
  TaskPrivacy,
  TaskPriority,
} from 'types/task';

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
