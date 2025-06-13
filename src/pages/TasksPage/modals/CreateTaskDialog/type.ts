import type { CreateTaskPayload } from 'api/services/TaskService/types';

export interface CreateTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateTaskPayload) => void;
}

export const initialValues: CreateTaskPayload = {
  title: '',
  description: '',
  completed: false,
};
