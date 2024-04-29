import styled from 'styled-components';

export const AllWrap = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    max-height: calc(var(--vh, 1vh) * 90);
  }
`;

export const MTWrap = styled.div`
  padding: 1.5rem 0rem;
  display: flex;
`;

export const TextWrap = styled.div`
  padding-top: 0.25rem;
  color: white;
`;

export const TitleText = styled.div`
  color: var(--white);
  font: var(--font-heading-xxxl) 'Raleway';
`;

export const ContentWrap = styled.div`
  /* height: calc(var(--vh, 1vh) * 25); */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MiddleContent = styled.div`
  /* width: 100%; */
  margin-right: calc(var(--vw, 1vw) * 10);
  z-index: 999;
  @media screen and (max-width: 768px) {
    margin-right: 0;
  }
`;

export const BtnWrap = styled.div`
  width: 22.5rem;
  display: flex;
  padding: 2rem 0rem;
  justify-content: space-between;
  align-self: flex-end;
  @media (max-width: 768px) {
    padding: 2rem 0rem 0rem 0rem;
  }
`;

export const SpaceContent = styled.div`
  padding-bottom: 5rem;
  width: 25rem;
  z-index: 999;
  @media (max-width: 1023px) {
    width: 22.5rem;
  }
  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    max-width: 20rem;
  }
`;

export const WaveEmoji = styled.span`
  animation-name: wave-animation;
  animation-duration: 2.1s;
  animation-iteration-count: infinite;
  transform-origin: 70% 70%;
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    }
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
`;

export const Circle1 = styled.img`
  width: 20rem;
  position: absolute;
  top: 5rem;
  left: 0rem;
  opacity: 75%;
  overflow: hidden;

  @media screen and (max-width: 1023px) {
    width: 15rem;
  }

  @media screen and (max-width: 768px) {
    width: 10rem;
  }
`;

export const Circle2 = styled.img`
  width: 62.5rem;
  position: absolute;
  bottom: 2.5rem;
  right: -10rem;
  opacity: 50%;
  overflow: hidden;

  @media screen and (max-width: 1023px) {
    width: 57.5rem;
  }

  @media screen and (max-width: 768px) {
    width: 30rem;
    right: 0rem;
  }
`;

export const ContactBtnWrap = styled.div`
  display: flex;
  width: 200px;
  justify-content: space-between;
  padding: 2rem 0rem;
`;
