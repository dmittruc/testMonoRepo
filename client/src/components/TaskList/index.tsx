import {ITask} from '../../interfaces';
import TaskListItem from '../TaskListItem';

interface IProps {
  tasks: ITask[];
  loading: boolean;
  error: any;
}

const TaskList = ({tasks, loading, error}: IProps) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  if (loading) {
    return <p>Something went wrong</p>;
  }

  return (
    <>
      {tasks.map((task: ITask) => {
        return (
          <div key={task.id}>
            <TaskListItem task={task} />
          </div>
        );
      })}
    </>
  );
};

export default TaskList;
