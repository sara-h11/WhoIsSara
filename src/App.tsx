import { Provider } from 'react-redux';
import { store } from 'store/store';
import './App.css';
import AppLayout from './core/AppLayout';
import BaseLayout from './core/BaseLayout';

function App() {
  return (
    <>
      <Provider store={store}>
        <AppLayout />
      </Provider>
      
    </>
  );
}

export default App;
