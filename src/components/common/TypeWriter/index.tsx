import Typewriter from 'typewriter-effect';
import * as S from './style';

const Type = ({ strings }) => {
  return (
    <S.TypeWrap>
      <Typewriter
        options={{
          strings: strings,
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </S.TypeWrap>
  );
};

export default Type;
