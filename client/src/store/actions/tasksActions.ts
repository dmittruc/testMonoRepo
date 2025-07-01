import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {
  createTasksApi,
  deleteTasksApi,
  fetchTasksApi,
  updateTasksApi,
} from '../../api/tasksApi';
import {
  IAddTasksAction,
  ICreateTasksAsyncAction,
  IDeleteTasksAsyncAction,
  ISetErrorAction,
  ISetLoadingAction,
  ISetTasksAction,
  IUpdateTasksAction,
  IUpdateTasksAsyncAction,
} from '../../interfaces/actions/tasksActions';

export const setLoadingAction = createAction<ISetLoadingAction>(
  'tasks/setLoadingAction',
);

export const setTasksAction = createAction<ISetTasksAction>(
  'tasks/setTasksAction',
);

export const addTasksAction = createAction<IAddTasksAction>(
  'tasks/addTasksAction',
);

export const updateTasksAction = createAction<IUpdateTasksAction>(
  'tasks/updateTasksAction',
);

export const deleteTasksAction = createAction<IUpdateTasksAction>(
  'tasks/deleteTasksAction',
);

export const setErrorAction = createAction<ISetErrorAction>(
  'tasks/setErrorAction',
);

export const tasksAsyncAction = createAsyncThunk(
  'tasks/tasksAsyncAction',
  async (_, {dispatch}) => {
    try {
      dispatch(setLoadingAction({loading: true}));
      const res = await fetchTasksApi();
      const tasks = res.tasks;
      dispatch(setTasksAction({tasks: tasks}));
      dispatch(setErrorAction({error: undefined}));
    } catch (e: any) {
      dispatch(setErrorAction({error: e}));
      console.log('Error/tasksAsyncAction:', e);
    } finally {
      dispatch(setLoadingAction({loading: false}));
    }
  },
);

export const deleteTasksAsyncAction = createAsyncThunk<
  void,
  IDeleteTasksAsyncAction
>(
  'tasks/deleteTasksAsyncAction',
  async ({taskId, onSuccess}: IDeleteTasksAsyncAction, {dispatch}) => {
    try {
      dispatch(setLoadingAction({loading: true}));
      const res = await deleteTasksApi(taskId);
      dispatch(tasksAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('Error:', e);
    } finally {
      dispatch(setLoadingAction({loading: false}));
    }
  },
);

export const updateTasksAsyncAction = createAsyncThunk<
  void,
  IUpdateTasksAsyncAction
>(
  'tasks/updateTasksAsyncAction',
  async (
    {taskId, title, description, onSuccess}: IUpdateTasksAsyncAction,
    {dispatch},
  ) => {
    try {
      dispatch(setLoadingAction({loading: true}));
      const res = await updateTasksApi(taskId, title, description);
      dispatch(tasksAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('Error:', e);
    } finally {
      dispatch(setLoadingAction({loading: false}));
    }
  },
);

export const createTasksAsyncAction = createAsyncThunk<
  void,
  ICreateTasksAsyncAction
>(
  'tasks/createTasksAsyncAction',
  async (
    {title, description, onSuccess}: ICreateTasksAsyncAction,
    {getState, dispatch},
  ) => {
    try {
      dispatch(setLoadingAction({loading: true}));
      const res = await createTasksApi(title, description);
      dispatch(tasksAsyncAction());
      if (onSuccess) {
        onSuccess();
      }
    } catch (e: any) {
      console.log('Error:', e);
    } finally {
      dispatch(setLoadingAction({loading: false}));
    }
  },
);
