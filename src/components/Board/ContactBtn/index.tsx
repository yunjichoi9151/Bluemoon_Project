import React, { useState } from 'react';
import * as S from './style';
import Contact from '../../../../public/Animation/Contact.json';
import { useLottie } from 'lottie-react';
import BasicModal from '../../common/BasicModal';
import Email from '../../common/Email';

const ContactBtn = () => {
  const options = {
    animationData: Contact,
    loop: true,
  };
  const { View } = useLottie(options);
  const [modalOpen, setModalOpen] = useState(false);

  const setModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <S.ContactBtnWrap onClick={setModal}>
        <div>{View}</div>
      </S.ContactBtnWrap>
      {modalOpen && (
        <BasicModal
          closeModal={setModal}
          children={
            <>
              <Email />
            </>
          }
        />
      )}
    </>
  );
};

export default ContactBtn;
