import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/Main';
import DetailPage from '../pages/Detail';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
  },
  {
    path: '/:project',
    element: <DetailPage />,
  },
]);
