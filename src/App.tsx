import { useLottie } from 'lottie-react';
import spaceDeveloper from '../public/Animation/space_developer.json';

const App = () => {
  const options = {
    animationData: spaceDeveloper,
    loop: true,
  };

  const { View } = useLottie(options);

  return (
    <div>
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
    </div>
  );
};

export default App;
