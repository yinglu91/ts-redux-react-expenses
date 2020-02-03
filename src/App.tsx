import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/configureStore';
import AppRouter from './router';
import './App.css';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppRouter />>
    </Provider>
  );
};

export default App;
