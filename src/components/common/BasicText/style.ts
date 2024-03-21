import styled from 'styled-components';

interface TextProps {
  font?: string;
  fontStyle?: string;
  color?: string;
}

export const Text = styled.div<TextProps>`
  color: ${(props) => props.color || `var(--white)`};
  font: ${(props) =>
    props.fontStyle ? `var(${props.fontStyle}) ${props.font}` : 'inherit'};
  padding: auto;
  display: flex;
  align-items: center;
`;
