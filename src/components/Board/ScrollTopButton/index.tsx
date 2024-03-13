import { FaChevronUp } from 'react-icons/fa';
import IconButton from '../../common/IconButton';
import * as S from './style';
import useScrollTop from '../../../hooks/useScrollTop';

const ScrollTopButton = () => {
  const handleScrollTop = useScrollTop();
  return (
    <S.ScrollTopButton>
      <IconButton size='50px' handleOnClickButton={handleScrollTop}>
        <FaChevronUp size='30px' />
      </IconButton>
    </S.ScrollTopButton>
  );
};

export default ScrollTopButton;
