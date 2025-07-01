import {Provider} from 'react-redux';
import './App.css';
import store from './store';
import AppNavigation from './components/AppNavigation';

const App = () => {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
};

export default App;
