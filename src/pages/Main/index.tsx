import * as S from './style';
import Footer from '../../components/common/Footer';
import About from '../../components/Home/About';
import Title from '../../components/Home/Title';
import Project from '../../components/Home/Project';
import ScrollDownButton from '../../components/Board/ScrollDownButton';

const MainPage = () => {
  return (
    <>
      <S.AllWrap>
        <Title />
        <About />
        <ScrollDownButton />
        <Project />
      </S.AllWrap>
      <Footer />
    </>
  );
};

export default MainPage;
