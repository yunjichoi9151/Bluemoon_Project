import React, { useState, useEffect } from 'react';
import * as S from './style';
import IconButton from '../../common/IconButton';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import ddoingScreen from '../../../assets/img/ddoing_Screen.png';
import LILACScreen from '../../../assets/img/LILAC_Screen.png';
import promiSpotScreen from '../../../assets/img/promiSpot_Screen.png';
import WhiteRabbitScreen from '../../../assets/img/White_Rabbit_Screen.png';
import { useMediaQuery } from 'react-responsive';

interface SliderProps {
  data: {
    id: number;
    bgcolor: string;
    title: string;
    desc: string;
  }[];
  activeSlide: number;
}

interface OwnStyle {
  opacity: number;
  transform: string;
  zIndex: number;
  backgroundColor?: string;
}

const Slider = ({ data, activeSlide }: SliderProps) => {
  const [activeIndex, setActiveIndex] = useState(activeSlide);
  const totalCount = data.length;
  const prevIndex = (activeIndex - 1 + totalCount) % totalCount;
  const nextIndex = (activeIndex + 1) % totalCount;

  const getScreenImage = {
    1: ddoingScreen,
    2: LILACScreen,
    3: promiSpotScreen,
    4: WhiteRabbitScreen,
  };

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
        transform:
          'translateX(calc(var(--vw, 1vw) * -18)) translateZ(-400px) rotateY(0deg)',
        backgroundColor: 'linear-gradient(to bottom, #91ff9a40, transparent)',
        zIndex: 9,
      };
    } else if (index === nextIndex) {
      return {
        opacity: 1,
        transform:
          'translateX(calc(var(--vw, 1vw) * 18)) translateZ(-400px) rotateY(0deg)',
        backgroundColor: 'linear-gradient(to bottom, #91ff9a40, transparent)',
        zIndex: 9,
      };
    } else {
      return {
        opacity: 0,
        transform:
          'translateX(calc(var(--vw, 1vw) * -17)) translateZ(-500px) rotateY(35deg)',
        zIndex: 7,
      };
    }
  };

  const next = () => setActiveIndex(nextIndex);
  const prev = () => setActiveIndex(prevIndex);

  return (
    <S.AllWrap>
      <IconButton
        handleOnClickButton={prev}
        color='rgba(0, 0, 0, 0)'
        size='5rem'
        style={{ zIndex: 999 }}
      >
        <FaChevronLeft color='white' />
      </IconButton>
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
                <S.SilderImage src={getScreenImage[item.id]} />
                <S.SliderText
                  style={{
                    fontFamily: item.id == 1 ? 'Gowun Dodum' : 'Raleway',
                  }}
                >
                  {item.title}
                </S.SliderText>
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
      <IconButton
        handleOnClickButton={next}
        color='rgba(0, 0, 0, 0)'
        size='5rem'
        style={{ zIndex: 999 }}
      >
        <FaChevronRight color='white' />
      </IconButton>
    </S.AllWrap>
  );
};

export default Slider;
