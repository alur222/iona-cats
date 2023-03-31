import React from 'react';
import ReactDOM from 'react-dom/client';
import WithRouter from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <WithRouter />
  </React.StrictMode>
);
