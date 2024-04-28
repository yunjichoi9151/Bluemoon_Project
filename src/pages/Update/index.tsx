import * as S from './style';
import Construction from '../../../public/Animation/Construction.json';
import { useLottie } from 'lottie-react';

const UpdatePage = () => {
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
      </S.AllWrap>
    </>
  );
};

export default UpdatePage;
