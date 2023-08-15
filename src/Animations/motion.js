export const directionalFade = (direction, time, delay) => {
  return {
    hidden: {
      opacity: 0,
      y:
        direction === 'top'
          ? -100
          : direction === 'bottom'
          ? 100
          : 0,
    },
    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        delay: delay,
        duration: time,
      },
    },
  };
};
