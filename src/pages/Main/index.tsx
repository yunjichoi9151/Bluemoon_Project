import * as S from './style';
import Footer from '../../components/common/Footer';
import About from '../../components/Home/About';
import Title from '../../components/Home/Title';
import Project from '../../components/Home/Project';
import ScrollDownButton from '../../components/Board/ScrollDownButton';
import Particle from '../../components/common/Particles';
import NavBar from '../../components/common/NavBar';
import Construction from '../../../public/Animation/Construction.json';
import { useLottie } from 'lottie-react';

const MainPage = () => {
  const options = {
    animationData: Construction,
    loop: true,
  };
  const { View } = useLottie(options);
  return (
    <>
      <S.AllWrap>
        <S.MiddleWrap>{View}</S.MiddleWrap>
        <S.Text>방문해주셔서 진심으로 감사드립니다.</S.Text>
        <S.Text>현재 사이트를 업데이트하고 있으니 양해 부탁드립니다.</S.Text>
        {/* <NavBar />
        <Title />
        <About />
        <ScrollDownButton />
        <Project /> */}
        <Particle />
      </S.AllWrap>
      {/* <Footer /> */}
    </>
  );
};

export default MainPage;
