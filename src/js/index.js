import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import configureStore from './configureStore';
import App from './app';

ReactDOM.render(
  <configureStore.Provider store={configureStore.store}>
    <App />
  </configureStore.Provider>,
  document.getElementById('root')
);

registerServiceWorker();
