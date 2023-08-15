import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Lottie from 'react-lottie';
import animationData from './Animation/space_developer.json';

function App() {
  const options = (lottiefile: any) => {
    return {
      loop: true,
      autoplay: true,
      animationData: lottiefile,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    };
  };
  return (
    <>
      <Lottie options={options(animationData)} width={500} height={500} />
    </>
  );
}

export default App;
