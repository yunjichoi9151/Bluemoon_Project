import BasicText from '../../common/BasicText';
import TextButton from '../../common/TextButton';
import * as S from './style';

interface FunctionDetailProps {
  color?: string;
  location?: string;
  data: {
    num: number;
    title: string;
    eTitle: string;
    detail: string;
  };
}

const FunctionDetail = ({ color, location, data }: FunctionDetailProps) => {
  return (
    <S.FunctionDetail color={color} location={location}>
      <TextButton text={data.num + ''} />
      <BasicText text={data.title} />
      <BasicText text={data.eTitle} />
      <BasicText text={data.detail} />
    </S.FunctionDetail>
  );
};

export default FunctionDetail;
