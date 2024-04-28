import styled from 'styled-components';

export const AllWrap = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  padding: 5rem 3rem;
  display: flex;
  justify-content: center;
`;

export const MiddleContent = styled.div`
  z-index: 999;
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
  padding: 3rem 0rem;
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
  /* margin-left: -5rem; */
  /* margin-top: 2rem; */
`;

export const Content = styled.div`
  /* width: calc(var(--vw, 1vw) * 100); */
  /* padding: 0rem 10rem; */
  font: var(--font-paragraph-intermediate) Gowun Dodum;
  color: white;
`;

export const OneLine = styled.div`
  display: flex;
`;

export const SkillsWrap = styled.div`
  width: 100%;
  max-width: 75rem;
  height: calc(var(--vh, 1vh) * 65);
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media screen and (max-width: 1023px) {
    /* width: 70rem; */
  }
`;

export const IconWrap = styled.div`
  color: var(--purpleBlue);
  width: 3rem;
  height: 3rem;
`;

export const OneSkill = styled.div`
  font-size: 1rem;
  margin: 1rem;
  padding: 1rem;
  opacity: 0.93;
  border: 0.1rem solid rgba(137, 154, 230, 0.637);
  vertical-align: middle;
  text-align: center;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0.25rem 0.3rem 0.25rem 0.2rem rgba(89, 4, 168, 0.137);
  overflow: hidden;
  transition: all 0.4s ease 0s;
  flex: 0 0 auto;
  width: 10rem;
  height: 9rem;
  align-items: center;
  justify-content: center;

  @media (max-width: 81rem) {
    margin: 0.5rem;
    width: 9rem;
    height: 8.5rem;
  }

  @media (max-width: 70rem) {
    margin: 0.5rem;
    width: 7rem;
    height: 6.5rem;
  }

  &:hover {
    transform: scale(1.05);
    overflow: hidden;
  }
`;

export const IconText = styled.div`
  font: var(--font-paragraph-medium) Raleway;
  color: white;
  display: flex;
  padding-top: 0.5rem;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    font: var(--font-paragraph-small) Raleway;
  }
`;

export const Circle4 = styled.img`
  width: 75rem;
  position: absolute;
  opacity: 50%;
`;
