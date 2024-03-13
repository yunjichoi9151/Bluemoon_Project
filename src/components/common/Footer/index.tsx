import BasicText from '../BasicText';
import * as S from './style';
import * as CS from '../../../styles/CommonStyle';
import GitHub from '../../../assets/img/GitHub.png';
import Instagram from '../../../assets/img/Instagram.png';
import Tistory from '../../../assets/img/Tistory.png';
import ImgButton from '../ImgButton';

const Footer = () => {
  return (
    <S.Footer>
      <S.BtnWrap>
        <ImgButton
          src={GitHub}
          size='50px'
          imgSize='45px'
          color={CS.color.white}
          handleOnClickButton={() =>
            window.open('https://github.com/yunjichoi9151', '_blank')
          }
        />
        <ImgButton
          src={Instagram}
          imgSize='50px'
          handleOnClickButton={() =>
            window.open('https://www.instagram.com/bluemoon_cyj/', '_blank')
          }
        />
        <ImgButton
          src={Tistory}
          imgSize='50px'
          handleOnClickButton={() =>
            window.open('https://bluemoon99.tistory.com/', '_blank')
          }
        />
      </S.BtnWrap>
      <BasicText text='© 2024. Choi Yun Ji. All rights reserved.' />
    </S.Footer>
  );
};

export default Footer;
