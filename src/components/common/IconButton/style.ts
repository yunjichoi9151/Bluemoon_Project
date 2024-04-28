import styled from 'styled-components';

interface IconButtonProps {
  size?: string;
  color?: string;
  radius?: string;
  border?: string;
}

export const IconButton = styled.div<IconButtonProps>`
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.radius || '100%'};
  background: ${(props) => (props.color ? props.color : `var(--white)`)};
  width: ${(props) => props.size || '1.5rem'};
  height: ${(props) => props.size || '1.5rem'};
  padding: 8px 0px 8px 0px;
  /* backdrop-filter: blur(12px); */
  padding: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  pointer-events: auto;
  cursor: pointer;
  &:active {
    filter: brightness(0.9);
  }
`;
