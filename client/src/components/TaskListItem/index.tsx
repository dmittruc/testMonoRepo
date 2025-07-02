import {useCallback, useState} from 'react';
import useTasks from '../../hooks/useTasks';
import {ITask} from '../../interfaces';
import {useNavigate} from 'react-router-dom';

interface IProps {
  task: ITask;
}

const TaskListItem = ({task}: IProps) => {
  const navigate = useNavigate();

  const {deleteTask, updateTask} = useTasks();

  const onSuccess = () => {
    console.log('delete task', task.taskId);
  };

  const handleDeleteTask = useCallback(() => {
    deleteTask(task.taskId, onSuccess);
  }, [task]);

  const goToTaskEditor = useCallback(() => {
    navigate(`/edit/${task.taskId}`);
  }, []);

  const handleToggleCompleted = useCallback(() => {
    updateTask(
      task.taskId,
      task.title,
      task.description,
      onSuccess,
      !task.completed,
    );
  }, [task]);

  return (
    <div>
      <button onClick={goToTaskEditor}>Edit</button>
      <button onClick={handleDeleteTask}>Delete</button>
      <div>
        <span>Task title: {task.title}</span>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompleted}
        />
      </div>
      <p>Task description: {task.description}</p>
    </div>
  );
};

export default TaskListItem;
