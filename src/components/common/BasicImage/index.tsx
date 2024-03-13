import * as S from './style';

interface BasicImageProps {
  src: string;
  size?: string;
  radius?: number;
  handleOnClick?: () => void;
}

const BasicImage = ({
  src,
  size = '100%',
  radius = 1,
  handleOnClick,
}: BasicImageProps) => {
  return (
    <>
      <S.BasicImage
        src={src}
        size={size}
        radius={radius}
        onClick={handleOnClick}
      />
    </>
  );
};

export default BasicImage;
