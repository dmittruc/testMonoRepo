import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useTasks from '../../hooks/useTasks';

const TaskCreatorPage = () => {
  const {createTask} = useTasks();
  const [title, setTitle] = useState<string>('');
  const [description, setDescription] = useState<string>('');

  const navigate = useNavigate();

  const onSuccess = () => {
    navigate(`/`);
  };

  const handleCreateTask = () => {
    createTask(title, description, onSuccess);
  };

  return (
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
      <button onClick={handleCreateTask}>Create task</button>
    </div>
  );
};

export default TaskCreatorPage;
