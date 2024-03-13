import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyle';

interface FunctionDetailProps {
  color?: string;
  location?: string;
}

export const FunctionDetail = styled.div<FunctionDetailProps>`
  color: ${(props) => props.color || CS.color.white};
  background-color: transparent;
  padding: auto;
  display: flex;
  align-items: center;
`;
