const validScrollTypes = ['vertical', 'horizontal'];
const FPS = 40;
const animationLengthS = 1;

const smoothScroll = (elm, type) => {
  if (validScrollTypes.indexOf(type) === -1) {
    throw new Error('Invalid scroll type ' + type);
  }

  let current = type === 'vertical' ? elm.scrollTop : elm.scrollLeft;
  const end = type === 'vertical' ? elm.scrollHeight : elm.scrollWidth;
  const addPerFrame = (end - current) / (animationLengthS * FPS);

  let scrollInterval = setInterval(() => {
    if (current >= end) {
      clearInterval(scrollInterval);
    } else {
      current += addPerFrame;
      if (type === 'vertical') {
        elm.scrollTo({ top: current, left: 0 });
      } else {
        elm.scrollTo({ top: 0, left: current });
      }
    }
  }, 1000 / FPS);
};

export default smoothScroll;
