import type { Task } from 'types/task';
import { httpClient } from '../httpClient';
import type {
  CreateTaskPayload,
  UpdateTaskPayload,
  TaskResponse,
} from './types';

export const taskService = {
  async getTasks(): Promise<Task[]> {
    const response = await httpClient.get<TaskResponse>('/tasks');
    return response.data.data;
  },

  async createTask(payload: CreateTaskPayload): Promise<Task> {
    const response = await httpClient.post<Task>('/tasks', payload);
    return response.data;
  },

  async deleteTask(taskId: string): Promise<void> {
    await httpClient.delete(`/tasks/${taskId}`);
  },

  async updateTask(taskId: string, payload: UpdateTaskPayload): Promise<Task> {
    const response = await httpClient.patch<Task>(`/tasks/${taskId}`, payload);
    return response.data;
  },
};
