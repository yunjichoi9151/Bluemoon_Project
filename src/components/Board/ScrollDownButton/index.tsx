import { useLottie } from 'lottie-react';
import * as S from './style';
import useScrollDown from '../../../hooks/useScrollDown';
import Scroll_Down from '../../../../public/Animation/Scroll_Down.json';

const ScrollDownButton = () => {
  const options = {
    animationData: Scroll_Down,
    loop: true,
  };

  const { View } = useLottie(options);
  const handleScrollDown = useScrollDown();

  return (
    <S.ScrollDownButton onClick={handleScrollDown}>{View}</S.ScrollDownButton>
  );
};

export default ScrollDownButton;
