import {useCallback, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import useTasks from '../../hooks/useTasks';
import TaskList from '../../components/TaskList';

const TasksPage = () => {
  const {tasks, loading, error, fetchTasks} = useTasks();
  const navigate = useNavigate();

  useEffect(() => {
    fetchTasks();
  }, []);

  const goToTaskCreator = useCallback(() => {
    navigate('/create');
  }, []);

  return (
    <div className="container">
      <h3>projects page</h3>
      <button onClick={goToTaskCreator}>Create task</button>
      <TaskList loading={loading} tasks={tasks} error={error} />
    </div>
  );
};

export default TasksPage;
