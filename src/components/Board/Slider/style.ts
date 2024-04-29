import styled from 'styled-components';

interface SlideProps {
  bgcolor?: string;
}

export const AllWrap = styled.div`
  display: flex;
  align-items: center;
  width: calc(var(--vw, 1vw) * 100);
  padding: 3rem 0rem;
`;

export const SlideC = styled.div`
  position: relative;
  perspective: 1500px;
  transform-style: preserve-3d;
  width: 25rem;
  height: 20rem;
  margin: 0 auto;
`;

export const Slide = styled.div<SlideProps>`
  width: 25rem;
  height: 20rem;
  transition:
    transform 500ms ease 0s,
    opacity 300ms ease 0s,
    visibility 500ms ease 0s;
  position: absolute;
  top: 0;
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 999;
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(0, 0, 0, 0.2) inner;
  background: ${(props) => props.bgcolor};
  border: none;
  &:hover {
    filter: brightness(1.1);
  }
  @media screen and (max-width: 500px) {
    width: calc(var(--vw, 1vw) * 70);
    height: calc(var(--vw, 1vw) * 65);
  }
`;

export const Reflection = styled.div<SlideProps>`
  position: absolute;
  width: 25rem;
  height: 4rem;
  bottom: -4rem;
  border-radius: 1rem;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.bgcolor}40, transparent)`};
  transition:
    transform 500ms ease 0s,
    opacity 300ms ease 0s,
    visibility 500ms ease 0s;
  @media screen and (max-width: 500px) {
    width: calc(var(--vw, 1vw) * 70);
  }
`;

export const SliderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  /* padding: 30px; */
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const SilderImage = styled.img`
  width: 15rem;
  margin-bottom: 2rem;
  @media screen and (max-width: 500px) {
    width: calc(var(--vw, 1vw) * 50);
  }
`;

export const SliderText = styled.div`
  font: var(--font-label-large) Raleway;
  width: 25rem;
  text-align: center;
  background-color: #0000002e;
  position: absolute;
  bottom: 0;
  padding: 0.75rem 0rem;
  border-radius: 0rem 0rem 1rem 1rem;
  @media screen and (max-width: 500px) {
    width: calc(var(--vw, 1vw) * 70);
  }
`;

export const Btns = styled.div`
  padding-top: 100px;

  .btn {
    cursor: pointer;
  }

  .btn:last-child {
    margin-left: 40px;
  }
`;
