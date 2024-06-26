import Particles from 'react-tsparticles';
import * as S from './style';

const Particle = () => {
  return (
    <S.ParticleContainer>
      <Particles
        id='tsparticles'
        options={{
          particles: {
            number: {
              value: 160,
              density: {
                enable: true,
                value_area: 1000,
              },
            },
            line_linked: {
              enable: false,
              opacity: 0.03,
            },
            move: {
              direction: 'right',
              speed: 0.05,
            },
            size: {
              value: 1,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 2,
                opacity_min: 0.05,
              },
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              push: {
                particles_nb: 1,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </S.ParticleContainer>
  );
};

export default Particle;
