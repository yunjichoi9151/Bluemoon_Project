import { GlobalStyle } from './styles/GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';
import ScrollTopButton from './components/Board/ScrollTopButton';
import Particle from './components/common/Particles';
import ContactBtn from './components/Board/ContactBtn';
import NavBar from './components/common/NavBar';
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
    <>
      <RouterProvider router={router} />
      <NavBar />
      <GlobalStyle />
      <Particle />
      {/* <ScrollTopButton /> */}
      <Analytics />
      <ContactBtn />
    </>
  );
};

export default App;
