import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Overview from './pages/Overview';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CompleteSignup from './pages/CompleteSignup';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import AppLayout from './ui/AppLayout';
import AboutUs from './pages/AboutUs';
import DashboardLayout from './ui/DashboardLayout';
import ManageReport from './pages/ManageReport';
import Settings from './pages/Settings';
import CreateReport from './pages/CreateReport';
import ReportDetailPage from './pages/ReportDetailPage';
import EditReportPage from './pages/EditReportPage';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <DashboardLayout />,
          children: [
            {
              path: '/',
              element: <Overview />,
            },
            {
              path: '/report/create',
              element: <CreateReport />,
            },
            {
              path: '/manage-report',
              element: <ManageReport />,
            },
            {
              path: '/settings',
              element: <Settings />,
            },
            {
              path: 'report/:reportId',
              element: <ReportDetailPage />,
            },
            { path: 'report/edit/:reportId', element: <EditReportPage /> },
          ],
        },
        {
          path: 'login',
          element: <Login />,
        },

        {
          path: '/signup',
          element: <Signup />,
        },
        {
          path: '/complete-signup',
          element: <CompleteSignup />,
        },
        {
          path: '/forget-password',
          element: <ForgetPassword />,
        },
        {
          path: '/reset-password/:token',
          element: <ResetPassword />,
        },
        {
          path: '/about',
          element: <AboutUs />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
