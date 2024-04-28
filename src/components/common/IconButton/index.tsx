import * as S from './style';

interface IconButtonProps {
  size?: string;
  border?: string;
  radius?: string;
  color?: string;
  style?: any;
  children: React.ReactNode;
  handleOnClickButton?: () => void;
}

const IconButton = ({
  size,
  border,
  radius,
  color,
  style,
  children,
  handleOnClickButton,
}: IconButtonProps) => {
  return (
    <S.IconButton
      size={size}
      border={border}
      radius={radius}
      color={color}
      style={style}
      onClick={handleOnClickButton}
    >
      {children}
    </S.IconButton>
  );
};

export default IconButton;
