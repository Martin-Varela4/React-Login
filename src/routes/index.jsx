import { createBrowserRouter, Navigate } from 'react-router-dom';
import Login from '../views/Login/Login';
import Register from '../views/Register/Register';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/login" replace />, 
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '*',
    element: <div style={{ textHighlight: 'center', marginTop: '50px' }}>404 - Página no encontrada</div>,
  }
]);
