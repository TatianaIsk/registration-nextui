import { Particles as TSParticles, IParticlesProps } from 'react-tsparticles';

const ParticlesAnimation: React.FC = () => {
  const particlesConfig: IParticlesProps = {
    options: {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: '#000000',
        },
        shape: {
          type: 'circle',
        },
      },
    },
  };

  return <TSParticles options={particlesConfig.options} />;
};

export default ParticlesAnimation;
