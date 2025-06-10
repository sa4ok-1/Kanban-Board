import type { ChangeEvent } from 'react';
import type { CreateTask } from 'types/task';

export interface TaskEditFieldsProps {
  task: CreateTask;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
