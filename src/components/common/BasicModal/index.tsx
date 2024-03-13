import React from 'react';
import * as S from './style';
import IconButton from '../IconButton';
import { IoCloseSharp } from 'react-icons/io5';

interface ModalProps {
  closeModal: () => void;
  children: React.ReactNode;
}

const BasicModal = ({ closeModal, children }: ModalProps) => {
  return (
    <S.BasicModal
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <S.ModalContent>
        <S.CloseBtn>
          <IconButton handleOnClickButton={closeModal}>
            <IoCloseSharp />
          </IconButton>
        </S.CloseBtn>
        <S.ModalChildren>{children}</S.ModalChildren>
      </S.ModalContent>
    </S.BasicModal>
  );
};

export default BasicModal;
