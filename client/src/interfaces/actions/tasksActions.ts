import {ITask} from '..';

export interface ISetLoadingAction {
  loading: boolean;
}

export interface ISetTasksAction {
  tasks: ITask[];
}

export interface ISetErrorAction {
  error: any;
}

export interface IAddTasksAction {
  task: ITask;
}

export interface IUpdateTasksAction {
  task: ITask;
}

export interface IDeleteTasksAction {
  task: ITask;
}

export interface ICreateTasksAsyncAction {
  title: string;
  description: string;
  onSuccess?: () => void;
}

export interface IUpdateTasksAsyncAction {
  taskId: number;
  title: string;
  description: string;
  onSuccess?: () => void;
}

export interface IDeleteTasksAsyncAction {
  taskId: number;
  onSuccess?: () => void;
}
