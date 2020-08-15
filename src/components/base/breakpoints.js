export const size = {
  laptop: 1024,
  tablet: 768,
  mobile: 425,
};

export const breakpoint = key => {
  return style => `@media (max-width:${key}px){${style}}`;
};
