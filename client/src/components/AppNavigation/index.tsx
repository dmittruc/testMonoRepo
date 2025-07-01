import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import TasksPage from '../../pages/TasksPage';
import TaskCreatorPage from '../../pages/TaskCreatorPage';
import TaskEditorPage from '../../pages/TaskEditorPage';

const AppNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TasksPage />} />
        <Route path="/create" element={<TaskCreatorPage />} />
        <Route path="/edit/:taskId" element={<TaskEditorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppNavigation;
