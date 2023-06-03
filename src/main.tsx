import '@/styles/global.css';

import React from 'react';
import ReactDOM from 'react-dom/client';

import App from '@/App';
import { worker } from '@/mocks/browser';

worker.start({
  onUnhandledRequest: 'bypass',
});

ReactDOM.createRoot(document.querySelector('#root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
