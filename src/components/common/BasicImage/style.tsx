import styled, { css } from 'styled-components';
import { keyframes } from 'styled-components';

interface ImageProps {
  size?: string;
  radius?: number;
}

export const BasicImage = styled.img<ImageProps>`
  width: ${(props) => props.size || '100%'};
  height: ${(props) => props.size || '100%'};
  border-radius: ${(props) => props.radius || '1'}rem;
  object-fit: cover;
`;
