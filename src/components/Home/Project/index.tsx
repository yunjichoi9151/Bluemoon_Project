import * as S from './style';
import Slider from '../../Board/Slider';
import data from '../../../../public/data/data.json';

const Project = () => {
  return (
    <>
      <S.AllWrap>
        <Slider data={data} activeSlide={1} />
      </S.AllWrap>
    </>
  );
};

export default Project;
