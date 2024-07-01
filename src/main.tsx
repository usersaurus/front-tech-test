import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/index.tsx';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Theme appearance='dark' accentColor='teal'>
      <ToastContainer theme="dark" />
      <App />
    </Theme>
  </React.StrictMode>,
);
