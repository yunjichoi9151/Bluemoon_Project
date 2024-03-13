import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyle';

interface LineProps {
  width?: string;
  $border?: string;
}
export const Line = styled.div<LineProps>`
  border-top: ${(props) => props.$border || `1px solid ${CS.color.white}`};
  width: ${(props) => props.width || '100%'};
`;
