import * as S from './style';
import BasicText from '../../common/BasicText';
import ME from '../../../assets/img/Me.webm';
import ScrollAnimation from 'react-animate-on-scroll';

const About = () => {
  return (
    <>
      <S.AllWrap id='about'>
        <S.TopWrap>
          <BasicText
            text='ABOUT ME'
            color='white'
            font='Raleway'
            fontStyle='--font-heading-xxxl'
          />
        </S.TopWrap>
        <S.MiddleWrap>
          <S.Avatar muted autoPlay loop>
            <source src={ME} type='video/webm' />
          </S.Avatar>
          <S.Content>
            <BasicText
              text='안녕하세요. 장인정신을 가진 개발자 최윤지입니다.'
              color='white'
              font='Gowun Dodum'
              fontStyle='--font-paragraph-large'
            />
            <S.OneLine>
              <BasicText
                text="저는 '"
                color='white'
                font='Gowun Dodum'
                fontStyle='--font-paragraph-large'
              />
              <BasicText
                text='사용자의 입장에서 생각하고, 개발하고, 개선하자'
                color='#C961DE'
                font='Gowun Dodum'
                fontStyle='--font-paragraph-large'
              />
              <BasicText
                text="'라는 마음가짐으로 개발에 임합니다."
                color='white'
                font='Gowun Dodum'
                fontStyle='--font-paragraph-large'
              />
            </S.OneLine>

            <BasicText
              text='서비스를 여러 번 테스트하며 사소한 오류나 불편함을 개선하기 위해 노력합니다.'
              color='white'
              font='Gowun Dodum'
              fontStyle='--font-paragraph-large'
            />
            <BasicText
              text='언제나 더 나은 방향을 모색하고, 새로운 기술에도 즐거운 마음으로 도전합니다.'
              color='white'
              font='Gowun Dodum'
              fontStyle='--font-paragraph-large'
            />
            <BasicText
              text='높은 재사용성을 가진 컴포넌트 설계와, 클린 코드 작성을 목표로 두고 있습니다.'
              color='white'
              font='Gowun Dodum'
              fontStyle='--font-paragraph-large'
            />
          </S.Content>
        </S.MiddleWrap>
      </S.AllWrap>
    </>
  );
};

export default About;
