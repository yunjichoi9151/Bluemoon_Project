import BasicImage from '../BasicImage';
import * as S from './style';

interface ImgButtonProps {
  src: string;
  size?: string;
  imgSize?: string;
  border?: string;
  radius?: string;
  color?: string;
  handleOnClickButton?: () => void;
}

const ImgButton = ({
  src,
  size,
  imgSize,
  border,
  radius,
  color,
  handleOnClickButton,
}: ImgButtonProps) => {
  return (
    <S.ImgButton
      size={size}
      border={border}
      radius={radius}
      color={color}
      onClick={handleOnClickButton}
    >
      <BasicImage src={src} size={imgSize} />
    </S.ImgButton>
  );
};

export default ImgButton;
