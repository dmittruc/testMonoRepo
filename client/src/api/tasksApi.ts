import axiosInstance from './axios';

export const fetchTasksApi = async () => {
  const res = await axiosInstance.get('/tasks');
  return res.data;
};

export const fetchTaskApi = async (taskId: number) => {
  const res = await axiosInstance.get(`/task${taskId}`);
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
) => {
  const res = await axiosInstance.put(`/tasks/${taskId}`, {
    title,
    description,
  });
  return res.data;
};
