import styled from 'styled-components';

export const AllWrap = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MiddleWrap = styled.div`
  padding: 0 calc(var(--vw, 1vw) * 20);
  display: flex;
  align-items: center;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  justify-content: space-between;
  @media (max-width: 960px) {
    margin: 6rem 0rem;
    flex-direction: column;
    justify-content: center;
  }
`;

export const MTWrap = styled.div`
  padding: 1.5rem 0rem;
  display: flex;
`;

export const TextWrap = styled.div`
  padding-top: 0.25rem;
`;

export const ContentWrap = styled.div`
  height: calc(var(--vh, 1vh) * 25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const MiddleContent = styled.div`
  /* width: 100%; */
`;

export const BtnWrap = styled.div`
  width: 22.5rem;
  display: flex;
  padding: 2rem 0px;
  justify-content: space-between;
  align-self: flex-end;
`;

export const SpaceContent = styled.div`
  padding-bottom: 5rem;
  width: 25rem;
  z-index: 999;
  @media (max-width: 960px) {
    width: 23rem;
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
