import * as S from './style';

interface TextProps {
  text: string;
  font?: string;
  fontStyle?: string;
  color?: string;
}

const BasicText = ({ text, font, fontStyle, color }: TextProps) => {
  return (
    <S.Text font={font} fontStyle={fontStyle} color={color}>
      {text}
    </S.Text>
  );
};

export default BasicText;
