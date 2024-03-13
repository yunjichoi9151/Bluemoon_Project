import BasicText from '../BasicText';
import * as S from './style';

interface TextButtonProps {
  text: string;
  fontStyle?: string;
  fontColor?: string;
  size?: string;
  border?: string;
  radius?: string;
  color?: string;
  handleOnClickButton?: () => void;
}

const TextButton = ({
  text,
  fontStyle,
  fontColor,
  size,
  border,
  radius,
  color,
  handleOnClickButton,
}: TextButtonProps) => {
  return (
    <S.TextButton
      size={size}
      border={border}
      radius={radius}
      color={color}
      onClick={handleOnClickButton}
    >
      <BasicText text={text} fontStyle={fontStyle} color={fontColor} />
    </S.TextButton>
  );
};

export default TextButton;
