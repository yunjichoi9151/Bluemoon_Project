import styled from 'styled-components';

interface LineProps {
  width?: string;
  $border?: string;
}
export const Line = styled.div<LineProps>`
  border-top: ${(props) => props.$border || `var(--white)`};
  width: ${(props) => props.width || '100%'};
`;
