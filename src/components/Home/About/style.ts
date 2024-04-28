import styled from 'styled-components';

export const AllWrap = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  padding: 5rem 3rem;
  display: flex;
  flex-direction: column;
`;

export const MiddleContent = styled.div`
  z-index: 999;
  margin: auto;
  padding: 2rem;
  /* width: 100%; */
  @media screen and (max-width: 87.5rem) {
    max-width: 82.5rem;
  }
  @media screen and (max-width: 75rem) {
    max-width: 71.25rem;
  }
  @media screen and (max-width: 62rem) {
    max-width: 60rem;
  }
  @media screen and (max-width: 48rem) {
    max-width: 45rem;
  }
  @media screen and (max-width: 36rem) {
    max-width: 33.75rem;
  }
`;

export const TopWrap = styled.div`
  /* height: 50px; */
  /* margin-top: 8rem; */
  padding: 1rem 0rem;
  font: var(--font-heading-xxl) Raleway;
  color: white;
  text-align: center;
`;

export const MiddleWrap = styled.div`
  /* height: 35rem; */
  /* padding: 100px; */
  justify-content: space-between;
  display: flex;
  align-items: center;
`;

export const BtnWrap = styled.div`
  /* width: 375px; */
  display: flex;
  /* padding: 20px 0px; */
  justify-content: space-between;
`;

export const Avatar = styled.video`
  width: 25rem;
  height: 25rem;
  z-index: 999;
  @media screen and (max-width: 1170px) {
    display: none;
  }
  /* margin-left: -5rem; */
  /* margin-top: 2rem; */
`;

export const Content = styled.div`
  /* width: calc(var(--vw, 1vw) * 100); */
  /* padding: 0rem 10rem; */
  font: var(--font-paragraph-intermediate) Gowun Dodum;
  color: white;
  /* height: calc(var(--vh, 1vh) * 70); */
`;

export const OneLine = styled.div`
  display: flex;
`;

export const ContentP = styled.p`
  padding: 0.5rem 0rem;
`;

export const ContentSpan = styled.span`
  color: #ffb700d8;
  font: var(--font-label-intermediate) Gowun Dodum;
`;

export const Circle3 = styled.img`
  width: 75rem;
  position: absolute;
  transform: scaleX(-1);
  left: -30rem;
  opacity: 50%;

  @media screen and (max-width: 1023px) {
    width: 72.5rem;
    padding-top: 5rem;
  }

  @media screen and (max-width: 768px) {
    width: 70rem;
    padding-top: 10rem;
  }
`;

export const IntroAllWrap = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1170px) {
    flex-direction: row;
  }
`;

export const IntroWrap = styled.div`
  width: 100%;
  display: flex;
  @media screen and (max-width: 1170px) {
    flex-direction: column;
    margin: 0.5rem;
  }
`;

export const OneIntroWrap = styled.div`
  width: 100%;
  display: flex;
  height: 6rem;
  background-color: rgba(143, 194, 255, 0.25);
  margin: 1rem 1rem 0rem 1rem;
  border-radius: 1rem;
  align-items: center;
  &:hover {
    filter: brightness(0.9);
  }
  @media screen and (max-width: 1170px) {
    margin: 0.5rem;
  }
`;

export const IntroIcon = styled.div`
  /* width: 5rem; */
  /* height: 5rem; */
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
`;

export const IntroTextWrap = styled.div`
  color: white;
`;

export const IntroCategory = styled.div`
  font: var(--font-label-intermediate) Raleway;
  color: white;
`;

export const IntroContent = styled.div`
  font: var(--font-label-medium) Raleway;
  cursor: pointer;
`;
