import React, { useState } from 'react';
import { useLottie } from 'lottie-react';
import * as S from './style';
import { saveAs } from 'file-saver';
import CYJ_CV from '../../../assets/files/CYJ_CV.pdf';
import BasicText from '../../common/BasicText';
import BasicLine from '../../common/BasicLine';
import TextButton from '../../common/TextButton';
import BasicModal from '../../common/BasicModal';

const Title = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const setModal = () => {
    setModalOpen(!modalOpen);
  };

  const handleDownPDF = () => {
    saveAs(CYJ_CV, 'CYJ_CV.pdf');
  };
  return (
    <>
      <S.AllWrap>
        <S.TopWrap>
          <BasicText
            text='Front-end Developer'
            color='white'
            fontStyle='labelLarge'
          />
          <BasicLine width='100%' border='1px solid white' />
        </S.TopWrap>
        <S.MiddleWrap>
          <BasicText
            text='Hello World!'
            color='white'
            fontStyle='headingXXXL'
          />
          <BasicText
            text="I'm Yunji Choi"
            color='white'
            fontStyle='headingXXXL'
          />
          <BasicText
            text='Front-end Developer'
            color='white'
            fontStyle='headingXXXL'
          />
          <S.BtnWrap>
            <TextButton
              text='Contact me'
              color='grey'
              handleOnClickButton={setModal}
            />
            <TextButton
              text='Download CV'
              handleOnClickButton={handleDownPDF}
            />
          </S.BtnWrap>
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
