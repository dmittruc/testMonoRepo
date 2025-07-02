import {TStatusTask} from '../interfaces';
import axiosInstance from './axios';

export const fetchTasksApi = async (filter: TStatusTask = 'all') => {
  const res = await axiosInstance.get(`/tasks?filter=${filter}`);
  return res.data;
};

export const fetchTaskApi = async (taskId: number) => {
  const res = await axiosInstance.get(`/tasks/${taskId}`);
  return res.data;
};

export const deleteTasksApi = async (taskId: number) => {
  const res = await axiosInstance.delete(`/tasks/${taskId}`);
  return res.data;
};

export const createTasksApi = async (title: string, description: string) => {
  const res = await axiosInstance.post(`/tasks`, {
    title,
    description,
  });
  return res.data;
};

export const updateTasksApi = async (
  taskId: number,
  title: string,
  description: string,
  completed: boolean,
) => {
  const res = await axiosInstance.put(`/tasks/${taskId}`, {
    title,
    description,
    completed,
  });
  return res.data;
};
