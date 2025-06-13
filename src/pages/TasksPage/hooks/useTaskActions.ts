import { taskService } from 'api/services/TaskService';
import { handleError } from 'api/utils/errorHandler';
import { toast } from 'sonner';
import type { Task } from 'types/task';
import type { CreateTaskPayload } from 'api/services/TaskService/types';
import type { Dispatch, SetStateAction } from 'react';

export const useTaskActions = (setTasks: Dispatch<SetStateAction<Task[]>>) => {
  const handleSubmit = async (data: CreateTaskPayload) => {
    try {
      const newTask = await taskService.createTask(data);
      setTasks((prev) => [...prev, newTask]);
      toast.success('Задача створена успішно');
      return true;
    } catch (err) {
      handleError(err);
      toast.error('Не вдалося створити задачу');
      return false;
    }
  };

  const handleEditTask = async (updatedTask: Task) => {
    try {
      const updated = await taskService.updateTask(updatedTask.id, {
        title: updatedTask.title,
        description: updatedTask.description,
        completed: updatedTask.completed,
      });
      setTasks((prev) =>
        prev.map((task) => (task.id === updated.id ? updated : task)),
      );
      toast.success('Задача оновлена');
    } catch (err) {
      handleError(err);
      toast.error('Помилка оновлення задачі');
    }
  };

  const handleDeleteTask = async (taskId: string) => {
    try {
      await taskService.deleteTask(taskId);
      setTasks((prev) => prev.filter((task) => task.id !== taskId));
      toast.success('Задача видалена');
    } catch (err) {
      handleError(err);
      toast.error('Помилка видалення задачі');
    }
  };

  return {
    handleSubmit,
    handleEditTask,
    handleDeleteTask,
  };
};
