import {useCallback, useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import useTasks from '../../hooks/useTasks';
import TaskList from '../../components/TaskList';
import {TStatusTask} from '../../interfaces';
import './style.css';

const TasksPage = () => {
  const {tasks, loading, error, fetchTasks} = useTasks();
  const navigate = useNavigate();
  const [filter, setFilter] = useState<TStatusTask>('all');

  useEffect(() => {
    fetchTasks(filter);
  }, [filter, fetchTasks]);

  const goToTaskCreator = useCallback(() => {
    navigate('/create');
  }, []);

  return (
    <div className="container">
      <h3>projects page</h3>
      <div>
        <button onClick={goToTaskCreator}>Create task</button>
      </div>
      <div>
        <button onClick={() => setFilter('all')}>all tasks</button>
        <button onClick={() => setFilter('completed')}>completed tasks</button>
        <button onClick={() => setFilter('active')}>active tasks</button>
      </div>
      <TaskList loading={loading} tasks={tasks} error={error} />
    </div>
  );
};

export default TasksPage;
