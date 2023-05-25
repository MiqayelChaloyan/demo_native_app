import {Medium, Regular, SemiBold} from '../../constants/font';

const palette = {
  green: '#5DB075',
  darkGreen: '#4B9460',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#E8E8E8',
  red: '#ff0000',
  lightGray: '#BDBDBD',
  darkGray: '#F6F6F6',
  mediumLightGray: '#666666',
  transparent: 'transparent',
  orange: '#FFB84E',
};

export const theme = {
  colors: {
    primary: palette.white,
    background: palette.white,
    green: palette.green,
    foreground: palette.black,
    success: palette.green,
    danger: palette.red,
    darkGreen: palette.darkGreen,
    lightGray: palette.lightGray,
    darkGray: palette.darkGray,
    gray: palette.gray,
    mediumLightGray: palette.mediumLightGray,
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
    background: palette.white,
    green: palette.green,
  },
};
