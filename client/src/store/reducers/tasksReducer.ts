import {createReducer} from '@reduxjs/toolkit';
import {ITasksReducerState} from '../../interfaces/reducers/tasksReducer';
import {
  addTasksAction,
  deleteTasksAction,
  setErrorAction,
  setLoadingAction,
  setTasksAction,
  updateTasksAction,
} from '../actions/tasksActions';
import {ITask} from '../../interfaces';

const initialState: ITasksReducerState = {
  tasks: [],
  loading: false,
  error: undefined,
};

const tasksReducer = createReducer<ITasksReducerState>(initialState, builder =>
  builder
    .addCase(setTasksAction, (store, {payload: {tasks}}) => ({
      ...store,
      tasks: tasks,
    }))
    .addCase(setLoadingAction, (store, {payload: {loading}}) => ({
      ...store,
      loading: loading,
    }))
    .addCase(setErrorAction, (store, {payload: {error}}) => ({
      ...store,
      error: error,
    }))
    .addCase(deleteTasksAction, (store, {payload: {task}}) => ({
      ...store,
      tasks: store.tasks.filter(
        (currentTask: ITask) => currentTask.taskId !== task.taskId,
      ),
    }))
    .addCase(addTasksAction, (store, {payload: {task}}) => ({
      ...store,
      tasks: [...store.tasks, task],
    }))
    .addCase(updateTasksAction, (store, {payload: {task}}) => ({
      ...store,
      tasks: store.tasks.map((currentTask: ITask) =>
        currentTask.taskId === task.taskId ? task : currentTask,
      ),
    })),
);

export default tasksReducer;
