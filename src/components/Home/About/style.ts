import styled from 'styled-components';

export const AllWrap = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  display: flex;
  flex-direction: column;
`;

export const TopWrap = styled.div`
  height: 50px;
  margin-top: 50px;
  padding: 0rem 5rem;
`;

export const MiddleWrap = styled.div`
  height: calc(var(--vh, 1vh) * 50);
  padding: 100px;
`;

export const BtnWrap = styled.div`
  width: 375px;
  display: flex;
  padding: 20px 0px;
  justify-content: space-between;
`;

export const Avatar = styled.video`
  width: 300px;
  height: 300px;
`;

export const Content = styled.div`
  width: calc(var(--vw, 1vw) * 100);
  padding: 0rem 10rem;
`;

export const OneLine = styled.div`
  display: flex;
`;
