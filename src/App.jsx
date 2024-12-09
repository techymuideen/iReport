import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Toaster } from 'react-hot-toast';

import Overview from './pages/Overview';
import Signup from './pages/Signup';
import Login from './pages/Login';
import CompleteSignup from './pages/CompleteSignup';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import AppLayout from './ui/AppLayout';
import AboutUs from './pages/AboutUs';
import DashboardLayout from './ui/DashboardLayout';
import ManageReportPage from './pages/ManageReportPage';
import Settings from './pages/Settings';
import CreateReport from './pages/CreateReport';
import ReportDetailPage from './pages/ReportDetailPage';
import EditReportPage from './pages/EditReportPage';
import PageNotFound from './pages/PageNotFound';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 0,
      },
    },
  });

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
              element: <ManageReportPage />,
            },
            {
              path: '/profile',
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
          path: '/complete-signup/:token',
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
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />;
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: '16px',
            maxWidth: '500px',
            padding: '16px 24px',
            backgroundColor: 'var(--color-grey-0',
            color: 'var(--color-grey-700',
          },
        }}
      />
    </QueryClientProvider>
  );
}

export default App;
