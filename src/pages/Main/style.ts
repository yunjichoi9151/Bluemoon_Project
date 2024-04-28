import styled from 'styled-components';

export const AllWrap = styled.div`
  width: 100%;
  height: 100%;
  /* height: calc(var(--vh, 1vh) * 100); */
  display: flex;
  flex-direction: column;
  /* padding-bottom: 200px; */
  justify-content: center;
  align-items: center;
`;

export const TopWrap = styled.div`
  height: 50px;
  margin-top: 50px;
  padding: 0rem 5rem;
`;

export const MiddleWrap = styled.div`
  width: 40%;
  /* margin: 100px; */
`;

export const BtnWrap = styled.div`
  width: 375px;
  display: flex;
  padding: 20px 0px;
  justify-content: space-between;
`;

export const Text = styled.div`
  font-family: Gowun Dodum;
  padding: 0.5rem;
  font-weight: bold;
  font-size: 1rem;
  color: white;
`;
