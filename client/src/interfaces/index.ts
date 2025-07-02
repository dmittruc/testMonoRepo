export interface ITask {
  taskId: number;
  title: string;
  description: string;
  completed: boolean;
}

export type TStatusTask = 'all' | 'active' | 'completed';
