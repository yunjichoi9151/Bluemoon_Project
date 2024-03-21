import { useScrollAnimation } from '../../hooks/useScrollAnimation';
import { Container } from './styled';

type PropsType = {
  children: React.ReactNode;
};

export const ScrollAnimationContainer = ({ children }: PropsType) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <Container ref={ref} className={isInViewport ? 'frame-in' : ''}>
      {children}
    </Container>
  );
};
