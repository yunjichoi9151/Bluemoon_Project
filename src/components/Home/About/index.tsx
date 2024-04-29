import * as S from './style';
import BasicText from '../../common/BasicText';
import ME from '../../../assets/img/Me.webm';
import ScrollAnimation from 'react-animate-on-scroll';
import Circle3 from '../../../assets/img/circle3.png';
import { IoPerson } from 'react-icons/io5';
import { FaGithub } from 'react-icons/fa';
import { FaPhone, FaInstagram } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { SiTistory } from 'react-icons/si';

const About = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:example@example.com';
  };

  const handlePhoneClick = () => {
    window.location.href = 'tel:+1234567890';
  };
  return (
    <>
      <S.AllWrap id='about'>
        <S.TopWrap>ABOUT ME</S.TopWrap>
        <S.MiddleContent>
          <S.IntroAllWrap>
            <S.IntroWrap>
              <S.OneIntroWrap>
                <S.IntroIcon>
                  <IoPerson color='white' size='100%' />
                </S.IntroIcon>
                <S.IntroTextWrap>
                  <S.IntroCategory>Name</S.IntroCategory>
                  <S.IntroContent>최윤지</S.IntroContent>
                </S.IntroTextWrap>
              </S.OneIntroWrap>
              <S.OneIntroWrap>
                <S.IntroIcon>
                  <MdEmail color='white' size='100%' />
                </S.IntroIcon>
                <S.IntroTextWrap>
                  <S.IntroCategory>Email</S.IntroCategory>
                  <S.IntroContent onClick={handleEmailClick}>
                    cyjcode99@gmail.com
                  </S.IntroContent>
                </S.IntroTextWrap>
              </S.OneIntroWrap>
              <S.OneIntroWrap>
                <S.IntroIcon>
                  <FaPhone color='white' size='100%' />
                </S.IntroIcon>
                <S.IntroTextWrap>
                  <S.IntroCategory>Phone</S.IntroCategory>
                  <S.IntroContent onClick={handlePhoneClick}>
                    010-6831-9152
                  </S.IntroContent>
                </S.IntroTextWrap>
              </S.OneIntroWrap>
            </S.IntroWrap>
            <S.IntroWrap>
              <S.OneIntroWrap>
                <S.IntroIcon>
                  <FaGithub color='white' size='100%' />
                </S.IntroIcon>
                <S.IntroTextWrap>
                  <S.IntroCategory>GitHub</S.IntroCategory>
                  <S.IntroContent
                    onClick={() =>
                      window.open('https://github.com/yunjichoi9151/', '_blank')
                    }
                  >
                    yunjichoi9151
                  </S.IntroContent>
                </S.IntroTextWrap>
              </S.OneIntroWrap>
              <S.OneIntroWrap>
                <S.IntroIcon>
                  <SiTistory color='white' size='100%' />
                </S.IntroIcon>
                <S.IntroTextWrap>
                  <S.IntroCategory>Blog</S.IntroCategory>
                  <S.IntroContent
                    onClick={() =>
                      window.open('https://bluemoon99.tistory.com/', '_blank')
                    }
                  >
                    bluemoon99.tistory.com
                  </S.IntroContent>
                </S.IntroTextWrap>
              </S.OneIntroWrap>
              <S.OneIntroWrap>
                <S.IntroIcon>
                  <FaInstagram color='white' size='100%' />
                </S.IntroIcon>
                <S.IntroTextWrap>
                  <S.IntroCategory>Instagram</S.IntroCategory>
                  <S.IntroContent
                    onClick={() =>
                      window.open(
                        'https://www.instagram.com/bluemoon_cyj/',
                        '_blank'
                      )
                    }
                  >
                    bluemoon_cyj
                  </S.IntroContent>
                </S.IntroTextWrap>
              </S.OneIntroWrap>
            </S.IntroWrap>
          </S.IntroAllWrap>
          <S.MiddleWrap>
            <S.Avatar muted autoPlay loop>
              <source src={ME} type='video/webm' />
            </S.Avatar>
            <S.Content>
              <S.ContentP>
                안녕하세요.{' '}
                <S.ContentSpan>장인정신을 가진 개발자 </S.ContentSpan>
                최윤지입니다.
              </S.ContentP>
              <S.ContentP>
                저는 '
                <S.ContentSpan>
                  사용자의 입장에서 생각하고, 개발하고, 개선하자
                </S.ContentSpan>
                '라는 마음가짐으로 개발에 임합니다.
              </S.ContentP>
              <S.ContentP>
                서비스를 여러 번 <S.ContentSpan>테스트</S.ContentSpan>하며
                사소한 오류나 불편함을 개선하기 위해 노력합니다.
              </S.ContentP>
              <S.ContentP>
                언제나 더 나은 방향을 모색하고, 새로운 기술에도 즐거운 마음으로
                <S.ContentSpan> 도전</S.ContentSpan>합니다.
              </S.ContentP>
              <S.ContentP>
                <S.ContentSpan>
                  높은 재사용성을 가진 컴포넌트 설계
                </S.ContentSpan>
                와, <S.ContentSpan>클린 코드 작성</S.ContentSpan>을 목표로 두고
                있습니다.
              </S.ContentP>
            </S.Content>
          </S.MiddleWrap>
        </S.MiddleContent>
        <S.Circle3 src={Circle3} />
      </S.AllWrap>
    </>
  );
};

export default About;
