import type { ChangeEvent } from 'react';
import type { Task } from 'types/task';

export interface TaskEditFieldsProps {
  task: Task;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
