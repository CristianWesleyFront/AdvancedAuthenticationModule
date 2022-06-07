/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import 'antd/dist/antd.css';

import { AppRoutes } from './router/Routes';
import { AuthProvider, setupAxios } from './components/Auth';

setupAxios(axios);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  </React.StrictMode>,
);
