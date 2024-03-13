import * as S from './style';

interface LineProps {
  width?: string;
  border?: string;
}

const BasicLine = ({ width, border }: LineProps) => {
  return <S.Line width={width} $border={border} />;
};

export default BasicLine;
