import {useCallback, useEffect, useState} from 'react';
import {fetchTaskApi} from '../api/tasksApi';
import {ITask} from '../interfaces';

const useTask = (taskId: string | undefined) => {
  const [task, setTasks] = useState<ITask | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(undefined);

  const fetchCurrentTask = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetchTaskApi(parseInt(taskId!));
      if (response.task) {
        setTasks(response.task);
      }
    } catch (e) {
      console.log(e);
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [taskId]);

  useEffect(() => {
    fetchCurrentTask();
  }, [task]);

  return {loading, error, task};
};
export default useTask;
