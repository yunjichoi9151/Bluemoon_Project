import React, { useState } from 'react';
import * as S from './style';
import { saveAs } from 'file-saver';
import CYJ_CV from '../../../assets/files/CYJ_CV.pdf';
import BasicText from '../../common/BasicText';
import BasicLine from '../../common/BasicLine';
import TextButton from '../../common/TextButton';
import BasicModal from '../../common/BasicModal';
import { useLottie } from 'lottie-react';
import spaceDeveloper from '../../../..//public/Animation/space_developer.json';
import Type from '../../common/TypeWriter';
import Circle1 from '../../../assets/img/circle1.png';
import Circle2 from '../../../assets/img/circle2.png';
import Email from '../../common/Email';
import ImgButton from '../../common/ImgButton';
import GitHub from '../../../assets/img/GitHub.png';
import Instagram from '../../../assets/img/Instagram.png';
import Tistory from '../../../assets/img/Tistory.png';

const Title = () => {
  const options = {
    animationData: spaceDeveloper,
    loop: true,
  };
  const { View } = useLottie(options);
  const [modalOpen, setModalOpen] = useState(false);

  const setModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleDownPDF = () => {
    saveAs(CYJ_CV, 'CYJ_CV.pdf');
  };
  return (
    <>
      <S.AllWrap id='home'>
        <S.MiddleContent>
          <S.ContentWrap>
            <S.MTWrap>
              <S.TextWrap>Hello World!</S.TextWrap>
              <S.WaveEmoji role='img' aria-labelledby='wave'>
                👋🏻
              </S.WaveEmoji>
            </S.MTWrap>
            <S.TitleText>I'm Yunji Choi</S.TitleText>
            <Type strings={['Front-End Developer', 'Junior Developer']} />
          </S.ContentWrap>
          <S.BtnWrap>
            <TextButton
              text='Contact me'
              color='grey'
              handleOnClickButton={setModal}
              fontStyle='--font-label-medium'
              font='Raleway'
              size='10rem'
            />
            <TextButton
              text='Download CV'
              handleOnClickButton={handleDownPDF}
              fontStyle='--font-label-medium'
              font='Raleway'
              size='12rem'
            />
          </S.BtnWrap>
        </S.MiddleContent>
        <S.SpaceContent>{View}</S.SpaceContent>
        <S.Circle1 src={Circle1} />
        <S.Circle2 src={Circle2} />
        {modalOpen && (
          <BasicModal
            closeModal={setModal}
            children={
              <S.ContactBtnWrap>
                <ImgButton
                  src={GitHub}
                  size='50px'
                  handleOnClickButton={() =>
                    window.open('https://github.com/yunjichoi9151', '_blank')
                  }
                />
                <ImgButton
                  src={Instagram}
                  imgSize='50px'
                  handleOnClickButton={() =>
                    window.open(
                      'https://www.instagram.com/bluemoon_cyj/',
                      '_blank'
                    )
                  }
                />
                <ImgButton
                  src={Tistory}
                  imgSize='50px'
                  handleOnClickButton={() =>
                    window.open('https://bluemoon99.tistory.com/', '_blank')
                  }
                />
              </S.ContactBtnWrap>
            }
          />
        )}
      </S.AllWrap>
    </>
  );
};

export default Title;
