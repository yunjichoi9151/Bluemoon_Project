import React, { useState } from 'react';
import * as S from './style';
import IconButton from '../../common/IconButton';
import { IoPlayBack, IoPlayForward } from 'react-icons/io5';

interface SliderProps {
  data: {
    id: number;
    bgcolor: string;
    title: string;
    desc: string;
  }[];
  activeSlide: number;
}

const Slider = ({ data, activeSlide }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(activeSlide);
  const totalCount = data.length;
  const prevIndex = (activeIndex - 1 + totalCount) % totalCount;
  const nextIndex = (activeIndex + 1) % totalCount;

  const getStyles = (index: number) => {
    if (index === activeIndex) {
      return {
        opacity: 1,
        transform: 'translateX(0px) translateZ(0px) rotateY(0deg)',
        zIndex: 10,
        backgroundColor: 'linear-gradient(to bottom, #ff919140, transparent)',
      };
    } else if (index === prevIndex) {
      return {
        opacity: 1,
        transform: 'translateX(-400px) translateZ(-400px) rotateY(0deg)',
        backgroundColor: 'linear-gradient(to bottom, #91ff9a40, transparent)',
        zIndex: 9,
      };
    } else if (index === nextIndex) {
      return {
        opacity: 1,
        transform: 'translateX(400px) translateZ(-400px) rotateY(0deg)',
        backgroundColor: 'linear-gradient(to bottom, #91ff9a40, transparent)',
        zIndex: 9,
      };
    } else {
      return {
        opacity: 0,
        transform: 'translateX(-360px) translateZ(-500px) rotateY(35deg)',
        zIndex: 7,
      };
    }
  };

  const next = () => setActiveIndex(nextIndex);
  const prev = () => setActiveIndex(prevIndex);

  return (
    <>
      <S.SlideC>
        {data.map((item, i) => (
          <React.Fragment key={item.id}>
            <S.Slide
              bgcolor={item.bgcolor}
              style={{
                ...getStyles(i),
              }}
            >
              <S.SliderContent>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </S.SliderContent>
            </S.Slide>
            <S.Reflection
              bgcolor={item.bgcolor}
              style={{
                ...getStyles(i),
              }}
            />
          </React.Fragment>
        ))}
      </S.SlideC>

      <S.Btns>
        <IconButton handleOnClickButton={prev}>
          <IoPlayBack />
        </IconButton>
        <IconButton handleOnClickButton={next}>
          <IoPlayForward />
        </IconButton>
      </S.Btns>
    </>
  );
};

export default Slider;
