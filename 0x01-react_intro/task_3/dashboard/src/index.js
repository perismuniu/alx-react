import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Notifications } from './Notifications';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Notifications />
  </React.StrictMode>,
  document.getElementById('root')
);

ReactDOM.render(
  <Notifications/>,
  document.getElementById('root-notifications')
)