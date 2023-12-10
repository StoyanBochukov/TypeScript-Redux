import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store'
import RepositoriesList from './components/RepositoriesList';

function App() {
  return (
    <Provider store={store}>
      <h1>Search for a Package</h1>
      <RepositoriesList />
    </Provider>
  );
}

export default App;
