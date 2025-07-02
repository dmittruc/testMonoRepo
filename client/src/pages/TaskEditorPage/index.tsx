import {useCallback, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import useTasks from '../../hooks/useTasks';
import useTask from '../../hooks/useTask';

interface IProps {
  taskId: number;
  currentTitle: string;
  currentDescription: string;
  currentCompleted: boolean;
}
const TaskEditorPage = ({
  taskId,
  currentTitle,
  currentDescription,
  currentCompleted,
}: IProps) => {
  const [title, setTitle] = useState<string>(currentTitle);
  const [description, setDescription] = useState<string>(currentDescription);
  const [completed, setCompleted] = useState<boolean>(currentCompleted);

  const {updateTask} = useTasks();
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate(`/`);
  };

  const handleToggle = useCallback(() => {
    setCompleted(prev => !prev);
  }, []);

  const handleUpdateTask = () => {
    updateTask(taskId, title, description, onSuccess, completed);
  };

  return (
    <div>
      <div>
        <input
          value={title}
          onChange={e => {
            setTitle(e.target.value);
          }}
        />
        <input
          value={description}
          onChange={e => {
            setDescription(e.target.value);
          }}
        />
        <input type="checkbox" checked={completed} onChange={handleToggle} />
      </div>
      <div>
        <button onClick={handleUpdateTask}>Update task</button>
      </div>
    </div>
  );
};

const TaskEditorPageWrapper = () => {
  const {taskId} = useParams();

  const {task, error, loading} = useTask(taskId);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error || !task) {
    return <div>Task was not found</div>;
  }

  return (
    <TaskEditorPage
      taskId={parseInt(taskId!)}
      currentTitle={task.title}
      currentDescription={task.description}
      currentCompleted={task.completed}
    />
  );
};

export default TaskEditorPageWrapper;
