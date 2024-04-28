import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import * as S from './style';

const Email = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const sendEmail = (e) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm('service_7ro17rh', 'template_aqo4id6', form.current, {
          publicKey: 'kxD88VPIXnPfDALGc',
        })
        .then(
          () => {
            setIsSuccess(true);
          },
          (error) => {
            setIsError(true);
            console.log('FAILED...', error.text);
          }
        );
    }
  };
  return (
    <S.EmailForm ref={form} onSubmit={sendEmail}>
      <S.EmailTitle>Contact</S.EmailTitle>
      <S.EmailLabel>Name</S.EmailLabel>
      <S.EmailInput type='text' name='user_name' placeholder='Name' />
      <S.EmailLabel>Email</S.EmailLabel>
      <S.EmailInput type='email' name='user_email' placeholder='Email' />
      <S.EmailLabel>Message</S.EmailLabel>
      <S.EmailArea name='message' placeholder='Send Your Message' />
      <S.EmailSubmit type='submit' value='Send' />
      {isSuccess && (
        <S.SubmitResult>
          전송에 성공했습니다. 빠른 시일 내에 연락드리겠습니다.
        </S.SubmitResult>
      )}
      {isError && (
        <S.SubmitResult>전송에 실패했습니다. 다시 시도해주세요.</S.SubmitResult>
      )}
    </S.EmailForm>
  );
};

export default Email;
