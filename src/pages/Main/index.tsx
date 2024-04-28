import About from '../../components/Home/About';
import Project from '../../components/Home/Project';
import Skills from '../../components/Home/Skills';
import Title from '../../components/Home/Title';
import Footer from '../../components/common/Footer';
import * as S from './style';

const MainPage = () => {
  return (
    <>
      <S.AllWrap>
        <Title />
        <About />
        <Skills />
        <Project />
        <Footer />
      </S.AllWrap>
    </>
  );
};

export default MainPage;
