const colors = {
  primary: '#18203a',
  secondary: '#32547f',
  beige: '#e1d3a4',
  gold: '#d0b053',
  dark: '#2d2b2d',
  white: '#ffffff',
  text: '#2d2b2d',
  yellow: '#efed6f',
  blue: '#33569F',
  darkBlue: '#121724',

  // social
  facebook: '#3b5998',
  twitter: '#1da1f2',
  instagram: '#e1306c',
};

const fonts = {
  title: 'DIN Pro Cond',
  highLightText: 'DIN Pro Cond',
  link: 'DIN Pro Cond',
};

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px',
};

const mediaQueries = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`,
};

export { colors, fonts, mediaQueries };
