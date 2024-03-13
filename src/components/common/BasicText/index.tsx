import * as S from './style';

interface TextProps {
  text: string;
  fontStyle?: string;
  color?: string;
}

const BasicText = ({ text, fontStyle, color }: TextProps) => {
  return (
    <S.Text fontStyle={fontStyle} color={color}>
      {text}
    </S.Text>
  );
};

export default BasicText;
