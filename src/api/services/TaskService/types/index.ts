import type { Task } from 'types/task';

export interface TaskResponse {
  data: Task[];
  total: number;
  page: number;
  per_page: number;
}

export interface GetTasksParams {
  order?: string;
  sortBy?: string;
  per_page?: number;
  page?: number;
  search?: string;
}
export interface CreateTaskPayload {
  title: string;
  description: string;
  completed: boolean;
}

export interface UpdateTaskPayload {
  title?: string;
  description?: string;
  completed?: boolean;
}
