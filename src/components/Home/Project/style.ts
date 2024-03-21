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
  /* margin: 100px; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.video`
  width: 300px;
  height: 300px;
`;
