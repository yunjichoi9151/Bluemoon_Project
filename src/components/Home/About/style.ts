import styled from 'styled-components';

export const AllWrap = styled.div`
  width: 100%;
  padding: 0 calc(var(--vw, 1vw) * 20);
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
`;

export const TopWrap = styled.div`
  height: 50px;
  margin-top: 8rem;
  /* padding: 0rem 5rem; */
`;

export const MiddleWrap = styled.div`
  height: calc(var(--vh, 1vh) * 50);
  /* padding: 100px; */
  justify-content: space-between;
`;

export const BtnWrap = styled.div`
  width: 375px;
  display: flex;
  /* padding: 20px 0px; */
  justify-content: space-between;
`;

export const Avatar = styled.video`
  width: 25rem;
  height: 25rem;
  z-index: 999;
  margin-left: -5rem;
  margin-top: 2rem;
`;

export const Content = styled.div`
  width: calc(var(--vw, 1vw) * 100);
  /* padding: 0rem 10rem; */
`;

export const OneLine = styled.div`
  display: flex;
`;
