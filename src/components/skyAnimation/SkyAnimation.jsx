import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './skyanimation.scss';

const ParticleBackground = () => {
  const particlesInit = useCallback(async engine => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
      await console.log(container);
  }, []);


  const particlesOptions = {
    
    fpsLimit: 120,
    interactivity: {
        events: {
            onClick: {
                enable: true,
                mode: "push",
            },
            onHover: {
                enable: true,
                mode: "repulse",
            },
            resize: true,
        },
        modes: {
            push: {
                quantity: 4,
            },
            repulse: {
                distance: 20,
                duration: 2,
            },
        },
    },
    particles: {
        color: {
            value: "#f9f9f9",
        },
        collisions: {
            enable: true,
        },
        move: {
            directions: "none",
            enable: true,
            outModes: {
                default: "bounce",
            },
            random: false,
            speed: 0.07,
            straight: false,
        },
        number: {
            density: {
                enable: true,
                area: 800,
            },
            value: 80,
        },
        opacity: {
          anim: { enable: true, opacity_min: 0.1, speed: 0.5, sync: false },
          random: {
            enable: true,
            minimumValue: 0.3
          },
          value: 0.6
        },
        shape: {
            type: "circle",
        },
        size: {
            value: { min: 1, max: 2.5 },
        },
    },
    detectRetina: true,
  };

  return (
    <Particles id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={particlesOptions}
    />
  );
};

export default ParticleBackground;