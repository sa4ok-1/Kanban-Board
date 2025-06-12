import type { Task } from 'types/task';

export interface TaskResponse {
  data: Task[];
  total: number;
  page: number;
  per_page: number;
}
