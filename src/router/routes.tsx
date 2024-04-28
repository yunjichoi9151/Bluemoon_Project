import { createBrowserRouter } from 'react-router-dom';
import MainPage from '../pages/Main';
import DetailPage from '../pages/Detail';
import Layout from '../styles/Layout';
import UpdatePage from '../pages/Update';

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: 'test',
        element: <UpdatePage />,
      },
      {
        path: ':project',
        element: <DetailPage />,
      },
    ],
  },
]);
