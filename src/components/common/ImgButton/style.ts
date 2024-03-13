import styled from 'styled-components';

interface ImgButtonProps {
  size?: string;
  color?: string;
  radius?: string;
  border?: string;
}

export const ImgButton = styled.div<ImgButtonProps>`
  border: ${(props) => props.border || 'none'};
  border-radius: ${(props) => props.radius || '100%'};
  background: ${(props) => (props.color ? props.color : 'transparent')};
  width: ${(props) => props.size || '50px'};
  height: ${(props) => props.size || '50px'};
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
