import {useDispatch, useSelector} from 'react-redux';
import {ITask, TStatusTask} from '../interfaces';
import {TAppDispatch, TRootState} from '../store';
import {
  createTasksAsyncAction,
  deleteTasksAsyncAction,
  tasksAsyncAction,
  updateTasksAsyncAction,
} from '../store/actions/tasksActions';
import {useCallback} from 'react';

const useTasks = () => {
  const dispatch = useDispatch<TAppDispatch>();

  const tasks = useSelector<TRootState, ITask[]>(
    (state: TRootState) => state.tasks.tasks,
  );
  const loading = useSelector<TRootState, boolean>(
    (state: TRootState) => state.tasks.loading,
  );
  const error = useSelector<TRootState, any>(
    (state: TRootState) => state.tasks.error,
  );

  const fetchTasks = useCallback((filter: TStatusTask = 'all') => {
    dispatch(tasksAsyncAction({filter}));
  }, []);

  const createTask = useCallback(
    (title: string, description: string, onSuccess: () => void) => {
      dispatch(createTasksAsyncAction({title, description, onSuccess}));
    },
    [],
  );

  const updateTask = useCallback(
    (
      taskId: number,
      title: string,
      description: string,
      onSuccess: () => void,
      completed: boolean,
    ) => {
      dispatch(
        updateTasksAsyncAction({
          taskId,
          title,
          description,
          onSuccess,
          completed,
        }),
      );
    },
    [],
  );

  const deleteTask = useCallback((taskId: number, onSuccess: () => void) => {
    dispatch(deleteTasksAsyncAction({taskId, onSuccess}));
  }, []);

  return {
    tasks,
    loading,
    error,
    fetchTasks,
    createTask,
    updateTask,
    deleteTask,
  };
};

export default useTasks;
