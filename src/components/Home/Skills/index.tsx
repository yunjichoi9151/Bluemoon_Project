import * as S from './style';
import BasicText from '../../common/BasicText';
import ME from '../../../assets/img/Me.webm';
import ScrollAnimation from 'react-animate-on-scroll';
import Circle4 from '../../../assets/img/circle4.png';
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiStyledcomponents,
  SiSass,
  SiJavascript,
  SiTypescript,
  SiCss3,
  SiPostman,
  SiVisualstudiocode,
  SiVercel,
} from 'react-icons/si';
import {
  FaJava,
  FaPython,
  FaGithub,
  FaGitlab,
  FaJira,
  FaFigma,
} from 'react-icons/fa';

const Skills = () => {
  const icons = [
    { icon: SiReact, text: 'React' },
    { icon: SiNextdotjs, text: 'Next.js' },
    { icon: SiRedux, text: 'Redux-Toolkit' },
    { icon: SiStyledcomponents, text: 'Styled-Components' },
    { icon: SiSass, text: 'Scss' },
    { icon: SiCss3, text: 'CSS' },
    { icon: SiJavascript, text: 'JavaScript' },
    { icon: SiTypescript, text: 'TypeScript' },
    { icon: FaJava, text: 'Java' },
    { icon: FaPython, text: 'Python' },
    { icon: FaGithub, text: 'GitHub' },
    { icon: FaGitlab, text: 'GitLab' },
    { icon: FaFigma, text: 'Figma' },
    { icon: FaJira, text: 'Jira' },
    { icon: SiVercel, text: 'Vercel' },
    { icon: SiPostman, text: 'Postman' },
    // { icon: SiVisualstudiocode, text: 'VSCode' },
  ];
  const iconStyle = {
    color: 'var(--white)',
    width: '4rem',
    height: '4rem',
  };
  return (
    <>
      <S.AllWrap id='skills'>
        <S.MiddleContent>
          <S.TopWrap>Skills</S.TopWrap>
          <S.SkillsWrap>
            {icons.map((item, index) => (
              <S.OneSkill key={index}>
                <item.icon style={iconStyle} />
                <S.IconText>
                  <p>{item.text}</p>
                </S.IconText>
              </S.OneSkill>
            ))}
          </S.SkillsWrap>
        </S.MiddleContent>
        <S.Circle4 src={Circle4} />
      </S.AllWrap>
    </>
  );
};

export default Skills;
