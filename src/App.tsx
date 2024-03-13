import { useLottie } from 'lottie-react';
import spaceDeveloper from '../public/Animation/space_developer.json';
import GlobalFonts from './styles/GlobalFonts';
import { GlobalStyle } from './styles/GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';
import ScrollTopButton from './components/Board/ScrollTopButton';

const App = () => {
  const options = {
    animationData: spaceDeveloper,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <>
      <RouterProvider router={router} />
      <GlobalFonts />
      <GlobalStyle />
      <ScrollTopButton />
    </>
  );
};

export default App;
