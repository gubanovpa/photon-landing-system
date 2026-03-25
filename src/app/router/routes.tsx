import { createBrowserRouter } from 'react-router-dom';
import { LoginPage, RegisterPage } from '@pages/auth';
import { BackgroundsPage } from '@pages/backgrounds';
import { ElementsPage } from '@pages/elements';
import { HomePage } from '@pages/home';
import { APP_ROUTES } from '@shared/lib/constants';
import { AppLayout } from '@widgets/layout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: APP_ROUTES.elements,
        element: <ElementsPage />,
      },
      {
        path: APP_ROUTES.backgrounds,
        element: <BackgroundsPage />,
      },
      {
        path: APP_ROUTES.login,
        element: <LoginPage />,
      },
      {
        path: APP_ROUTES.register,
        element: <RegisterPage />,
      },
    ],
  },
]);
