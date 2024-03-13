import styled from 'styled-components';
import * as CS from '../../../styles/CommonStyle';

interface TextProps {
  fontStyle?: string;
  color?: string;
}

export const Text = styled.div<TextProps>`
  color: ${(props) => props.color || CS.color.white};
  font: ${(props) =>
    props.fontStyle ? CS.font[props.fontStyle] : CS.font.paragraphMedium};
  padding: auto;
  display: flex;
  align-items: center;
`;
