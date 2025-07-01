import {useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import useTasks from '../../hooks/useTasks';
import useTask from '../../hooks/useTask';

interface IProps {
  taskId: number;
  currentTitle: string;
  currentDescription: string;
}
const TaskEditorPage = ({taskId, currentTitle, currentDescription}: IProps) => {
  const [title, setTitle] = useState<string>(currentTitle);
  const [description, setDescription] = useState<string>(currentDescription);

  const {updateTask} = useTasks();
  const navigate = useNavigate();

  const onSuccess = () => {
    navigate(`/`);
  };

  const handleUpdateTask = () => {
    updateTask(taskId, currentTitle, currentDescription, onSuccess);
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
    />
  );
};

export default TaskEditorPageWrapper;
