import { Medium, Regular, SemiBold } from '../../constants/font';

const palette = {
  primary_green: '#5DB075',
  dark_green: '#4B9460',
  white: '#FFFFFF',
  black: '#000000',
  primary_gray: '#E8E8E8',
  red: '#ff0000',
  cool_gray: '#BDBDBD',
  light_gray: '#F6F6F6',
  dark_gray: '#666666',
  transparent: 'transparent',
  orange: '#FFB84E',
};

export const theme = {
  colors: {
    primary_white: palette.white,
    primary_green: palette.primary_green,
    black: palette.black,
    danger: palette.red,
    dark_green: palette.dark_green,
    cool_gray: palette.cool_gray,
    light_gray: palette.light_gray,
    gray: palette.primary_gray,
    dark_gray: palette.dark_gray,
    transparent: palette.transparent,
    orange: palette.orange,
  },
  textVariants: {
    SemiBold: {
      fontFamily: SemiBold,
      fontStyle: 'normal',
    },
    Medium: {
      fontFamily: Medium,
      fontStyle: 'normal',
    },
    Regular: {
      fontFamily: Regular,
      fontStyle: 'normal',
    },
  },
};

export const darkTheme = {
  ...theme,
  colors: {
    ...theme.colors,
  },
};
