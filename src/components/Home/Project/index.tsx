import * as S from './style';
import Slider from '../../Board/Slider';
import data from '../../../../public/data/data.json';
import BasicText from '../../common/BasicText';

const Project = () => {
  return (
    <>
      <S.AllWrap id='project'>
        <S.MiddleWrap>
          <S.TopWrap>Project</S.TopWrap>
          <Slider data={data} activeSlide={1} />
        </S.MiddleWrap>
      </S.AllWrap>
    </>
  );
};

export default Project;
