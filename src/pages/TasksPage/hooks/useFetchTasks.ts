import { useState, useEffect } from 'react';
import { taskService } from 'api/services/TaskService';
import { handleError } from 'api/utils/errorHandler';
import type { Task } from 'types/task';

export function useFetchTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await taskService.getTasks();
        setTasks(data);
        setError(null);
      } catch (err: any) {
        handleError(err);
        setError(err.message || 'Помилка при завантаженні задач');
      } finally {
        setLoading(false);
        setTimeout(() => setShowSkeleton(false), 1000);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, setTasks, isLoading: loading || showSkeleton, error };
}
