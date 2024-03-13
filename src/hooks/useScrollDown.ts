import { useState, useEffect } from 'react';

const useScrollDown = () => {
  const [scrollDownHeight, setScrollDownHeight] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log('Scroll event detected!'); // 스크롤 이벤트 감지 확인
      setScrollDownHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    console.log('Scroll down button clicked!'); // 버튼 클릭 이벤트 감지 확인
    window.scrollTo({
      top: window.scrollY + scrollDownHeight,
      behavior: 'smooth',
    });
  };

  return handleScrollDown;
};

export default useScrollDown;
