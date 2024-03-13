import { useLottie } from 'lottie-react';
import spaceDeveloper from '../public/Animation/space_developer.json';
import GlobalFonts from './styles/GlobalFonts';
import { GlobalStyle } from './styles/GlobalStyle';
import { RouterProvider } from 'react-router-dom';
import { router } from './router/routes';
import { FaChevronUp } from 'react-icons/fa';
import IconButton from './components/common/IconButton';
import useScrollTop from './hooks/useScrollTop';
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
      {/* <div>
        <div
          style={{
            width: '100%',
            display: 'grid',
            justifyContent: 'center',
          }}
        >
          {View}
        </div>
        <div
          style={{
            textAlign: 'center',
            paddingLeft: '15px',
            fontSize: '30px',
            fontWeight: '1000',
          }}
        >
          Bluemoon Project
        </div>
      </div> */}
    </>
  );
};

export default App;
