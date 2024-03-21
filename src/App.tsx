import { GlobalStyle } from './styles/GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';
import ScrollTopButton from './components/Board/ScrollTopButton';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <GlobalStyle />
      <ScrollTopButton />
    </>
  );
};

export default App;
