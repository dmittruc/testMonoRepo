import {useCallback} from 'react';
import useTasks from '../../hooks/useTasks';
import {ITask} from '../../interfaces';
import {useNavigate} from 'react-router-dom';

interface IProps {
  task: ITask;
}

const TaskListItem = ({task}: IProps) => {
  const navigate = useNavigate();

  const {deleteTask} = useTasks();

  const onSuccess = () => {
    console.log('delete task', task.id);
  };

  const handleDeleteTask = useCallback(() => {
    deleteTask(task.id, onSuccess);
  }, [task]);

  const goToTaskEditor = useCallback(() => {
    navigate(`tasks/edit/${task.id}`);
  }, []);

  return (
    <div>
      <button onClick={goToTaskEditor}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
      <p>Task title: {task.title}</p>
      <p>Task description: {task.description}</p>
    </div>
  );
};

export default TaskListItem;
