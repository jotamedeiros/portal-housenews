import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles/reset.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Importação das páginas [routers]
import Homepage from './routes/Homepage/Homepage.jsx';
import Login from './routes/Login/Login.jsx';
import Registration from './routes/Registration/Registration.jsx';
import NewPost from './routes/NewPost/NewPost.jsx';
import UserLobby from './routes/UserLobby/UserLobby.jsx';



// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Home />,
//   },
//   {
//     path: '/login',
//     element: <Login />,
//   }
// ]);

// Configuração das rotas
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/registration',
        element: <Registration />,
      },
      {
        path: '/newpost',
        element: <NewPost />
      },
      {
        path: '/userlobby',
        element: <UserLobby />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
