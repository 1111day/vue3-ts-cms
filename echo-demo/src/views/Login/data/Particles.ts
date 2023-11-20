export const option = {
  background: {
    color: {
      value: "#060044",
    },
  },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "repulse",
      },
      onHover: {
        enable: true,
        mode: "bubble",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 100,
        duration: 2,
        opacity: 0.8,
        size: 8,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 400,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#d8ff7d",
    },
    shape: {
      type: "star",
      stroke: {
        width: 2.5, //原子的宽度
        color: "#796644", //原子颜色
      },
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 0.12,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 600,
      },
      value: 240,
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 3,
        opacity_min: 0,
        sync: true,
      },
    },
    size: {
      random: true,
      value: 3.8,
      anim: {
        enable: true,
        speed: 20,
        size_min: 0.9,
        sync: true,
      },
    },
  },
  detectRetina: true,
};
