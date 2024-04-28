import styled from 'styled-components';

export const ScrollDownButton = styled.button`
  position: fixed;
  width: 125px;
  bottom: 0px;
  z-index: 1000;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;

export const BtnWrap = styled.div`
  width: calc(var(--vw, 1vw) * 100);
  display: flex;
  align-items: center;
  justify-content: center;
`;
