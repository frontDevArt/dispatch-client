import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Form from './components/Form';
import App from './components/App';

import './styles/index.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <App />
    ),
  },
  {
    path: '/Account/Login',
    element: (
      <Form />
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
