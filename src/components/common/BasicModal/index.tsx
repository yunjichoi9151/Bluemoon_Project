import React from 'react';
import * as S from './style';
import IconButton from '../IconButton';
import { IoCloseSharp } from 'react-icons/io5';

interface ModalProps {
  closeModal: () => void;
  style?: any;
  children: React.ReactNode;
}

const BasicModal = ({ closeModal, style, children }: ModalProps) => {
  return (
    <S.BasicModal
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          closeModal();
        }
      }}
    >
      <S.ModalContent style={style}>
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
