import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Overview from './pages/Overview';
import Signup from './pages/Signup';
import Login from './pages/Login';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Overview />,
      children: [],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
