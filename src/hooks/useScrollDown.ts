import { useState, useEffect } from 'react';

const useScrollDown = () => {
  const [scrollDownHeight, setScrollDownHeight] = useState<number>(
    window.innerHeight
  );

  useEffect(() => {
    const handleScroll = () => {
      setScrollDownHeight(window.innerHeight);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScrollDown = () => {
    window.scrollTo({
      top: window.scrollY + scrollDownHeight,
      behavior: 'smooth',
    });
  };

  return handleScrollDown;
};

export default useScrollDown;
