import styled from 'styled-components';

interface SlideProps {
  bgcolor?: string;
}

export const AllWrap = styled.div`
  display: flex;
  align-items: center;
  width: calc(var(--vw, 1vw) * 100);
`;

export const SlideC = styled.div`
  position: relative;
  perspective: 1500px;
  transform-style: preserve-3d;
  width: 362px;
  height: 272px;
  margin: 0 auto;
`;

export const Slide = styled.div<SlideProps>`
  width: 362px;
  height: 272px;
  transition:
    transform 500ms ease 0s,
    opacity 300ms ease 0s,
    visibility 500ms ease 0s;
  position: absolute;
  top: 0;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow:
    0 8px 16px rgba(0, 0, 0, 0.2),
    0 0 20px rgba(0, 0, 0, 0.2) inner;
  background: ${(props) => props.bgcolor};
  border: none;
  &:hover {
    background-color: rgba(0, 3, 255, 1);
  }
`;

export const Reflection = styled.div<SlideProps>`
  position: absolute;
  width: 100%;
  height: 60px;
  bottom: -60px;
  border-radius: 12px;
  background: ${(props) =>
    `linear-gradient(to bottom, ${props.bgcolor}40, transparent)`};
  transition:
    transform 500ms ease 0s,
    opacity 300ms ease 0s,
    visibility 500ms ease 0s;
`;

export const SliderContent = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  padding: 30px;
  align-items: flex-start;
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
