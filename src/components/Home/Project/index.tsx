import * as S from './style';
import Slider from '../../Board/Slider';
import data from '../../../../public/data/data.json';
import BasicText from '../../common/BasicText';

const Project = () => {
  return (
    <>
      <S.AllWrap id='project'>
        <S.TopWrap>
          <BasicText
            text='PROJECT'
            color='white'
            font='Raleway'
            fontStyle='--font-heading-xxxl'
          />
        </S.TopWrap>
        <S.MiddleWrap>
          <Slider data={data} activeSlide={1} />
        </S.MiddleWrap>
      </S.AllWrap>
    </>
  );
};

export default Project;
