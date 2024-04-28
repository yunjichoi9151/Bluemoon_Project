import { useLottie } from 'lottie-react';
import * as S from './style';
import useScrollDown from '../../../hooks/useScrollDown';
import Scroll_Down from '../../../../public/Animation/Scroll_Down.json';
import { useState, useEffect } from 'react';

const ScrollDownButton = () => {
  const options = {
    animationData: Scroll_Down,
    loop: true,
  };

  const { View } = useLottie(options);
  const handleScrollDown = useScrollDown();

  const [isEndOfPage, setIsEndOfPage] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;

      if (windowHeight + scrollTop >= documentHeight) {
        setIsEndOfPage(true);
      } else {
        setIsEndOfPage(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <S.BtnWrap>
      <S.ScrollDownButton
        onClick={handleScrollDown}
        style={{ display: isEndOfPage ? 'none' : 'block' }}
      >
        {View}
      </S.ScrollDownButton>
    </S.BtnWrap>
  );
};

export default ScrollDownButton;
