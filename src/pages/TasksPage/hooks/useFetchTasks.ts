import { useState, useEffect } from 'react';
import { taskService } from 'api/services/TaskService/taskService';
import { handleError } from 'api/utils/errorHandler';
import type { Task } from 'types/task';

export function useFetchTasks() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loading, setLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await taskService.getTasks();
        setTasks(data);
      } catch (err) {
        handleError(err);
      } finally {
        setLoading(false);
        setTimeout(() => setShowSkeleton(false), 1000);
      }
    };

    fetchTasks();
  }, []);

  return { tasks, setTasks, isLoading: loading || showSkeleton };
}
