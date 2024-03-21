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
      <S.AllWrap id='title'>
        {/* <S.TopWrap> */}
        {/* <BasicText text='Front-end Developer' color='white' font='Raleway' /> */}
        {/* <BasicLine width='100%' border='1px solid white' /> */}
        {/* </S.TopWrap> */}
        <S.MiddleWrap>
          <S.MiddleContent>
            <S.ContentWrap>
              <S.MTWrap>
                <S.TextWrap>
                  <BasicText text='Hello World!' color='white' font='Raleway' />
                </S.TextWrap>
                <S.WaveEmoji role='img' aria-labelledby='wave'>
                  👋🏻
                </S.WaveEmoji>
              </S.MTWrap>
              <BasicText
                text="I'm Yunji Choi"
                color='white'
                font='Raleway'
                fontStyle='--font-heading-xxxl'
              />
              <Type strings={['Front-End Developer', 'Junior Developer']} />
            </S.ContentWrap>
            <S.BtnWrap>
              <TextButton
                text='Contact me'
                color='grey'
                handleOnClickButton={setModal}
                fontStyle='--font-label-medium'
                font='Raleway'
              />
              <TextButton
                text='Download CV'
                handleOnClickButton={handleDownPDF}
                fontStyle='--font-label-medium'
                font='Raleway'
              />
            </S.BtnWrap>
          </S.MiddleContent>
          <S.SpaceContent>{View}</S.SpaceContent>
        </S.MiddleWrap>
        {modalOpen && (
          <BasicModal
            closeModal={setModal}
            children={
              <>
                <BasicText text='hello' />
              </>
            }
          />
        )}
      </S.AllWrap>
    </>
  );
};

export default Title;
