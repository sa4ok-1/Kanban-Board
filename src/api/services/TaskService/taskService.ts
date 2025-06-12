import type { Task } from 'types/task';
import { httpClient } from '../httpClient';
import type {
  CreateTaskPayload,
  UpdateTaskPayload,
  TaskResponse,
} from './types/type';

export const taskService = {
  async getTasks(): Promise<Task[]> {
    const response = await httpClient.get<TaskResponse>('/task');
    return response.data.data;
  },

  async createTask(payload: CreateTaskPayload): Promise<Task> {
    const response = await httpClient.post<Task>('/task', payload);
    return response.data;
  },

  async deleteTask(taskId: string): Promise<void> {
    await httpClient.delete(`/task/${taskId}`);
  },

  async updateTask(taskId: string, payload: UpdateTaskPayload): Promise<Task> {
    const response = await httpClient.patch<Task>(`/task/${taskId}`, payload);
    return response.data;
  },
};
