import * as S from './style';

interface IconButtonProps {
  size?: string;
  border?: string;
  radius?: string;
  color?: string;
  children: React.ReactNode;
  handleOnClickButton?: () => void;
}

const IconButton = ({
  size,
  border,
  radius,
  color,
  children,
  handleOnClickButton,
}: IconButtonProps) => {
  return (
    <S.IconButton
      size={size}
      border={border}
      radius={radius}
      color={color}
      onClick={handleOnClickButton}
    >
      {children}
    </S.IconButton>
  );
};

export default IconButton;
