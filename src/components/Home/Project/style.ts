import styled from 'styled-components';

export const AllWrap = styled.div`
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  padding: 5rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;

export const TopWrap = styled.div`
  padding: 2rem 0rem;
  font: var(--font-heading-xxl) Raleway;
  color: white;
  text-align: center;
  @media screen and (max-width: 500px) {
    padding-bottom: 5rem;
  }
`;

export const MiddleWrap = styled.div`
  height: calc(var(--vh, 1vh) * 50);
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Avatar = styled.video`
  width: 300px;
  height: 300px;
`;
