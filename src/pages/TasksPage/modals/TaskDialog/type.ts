import type { ChangeEvent } from 'react';
import type { CreateTask } from 'types/task';

export interface CreateTaskDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: CreateTask) => void;
}

export interface DeleteDialogProps {
  open: boolean;
  taskTitle: string;
  onCancel: () => void;
  onConfirm: () => void;
}

export interface TaskEditFieldsProps {
  task: CreateTask;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface TaskDialogProps {
  open: boolean;
  onClose: () => void;
  task: CreateTask;
  editMode?: boolean;
  onSave?: (updatedTask: CreateTask) => void;
}

export interface TaskViewFieldsProps {
  task: CreateTask;
}
