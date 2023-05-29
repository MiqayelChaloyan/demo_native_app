import { StyleSheet } from 'react-native';
import { theme } from '../../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  signUpRoot: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
    paddingHorizontal: 16,
  },
  headerContainer: {
    height: verticalScale(36),
    marginTop: verticalScale(30),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },
  cancel: {
    top: verticalScale(10),
    height: verticalScale(50),
    width: horizontalScale(2),
    right: 0,
  },
  headerBox: {
    height: horizontalScale(110),
  },
  signUp: {
    fontSize: moderateScale(30),
    fontWeight: 600,
    color: theme.colors.black,
    textAlign: 'center',
    lineHeight: verticalScale(36.31),
    left: verticalScale(10),
    ...theme.textVariants.SemiBold,
  },
  passwordBox: {
    width: '100%',
  },
  passHide: {
    position: 'relative',
  },
  login: {
    fontSize: moderateScale(16),
    color: theme.colors.primary_green,
    lineHeight: verticalScale(36.31),
    fontWeight: 500,
    ...theme.textVariants.Medium,
  },
  hidePassword: {
    fontSize: verticalScale(16),
    color: theme.colors.primary_green,
    fontWeight: 500,
    left: verticalScale(15),
    ...theme.textVariants.Medium,
  },
  checkBox: {
    justifyContent: 'flex-start',
    marginTop: 32,
  },
  inputsContainer: {
    width: '100%',
    marginTop: verticalScale(37),
    gap: verticalScale(16),
    marginBottom: verticalScale(50),
  },
  nameInputStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailInputStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordInputStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  input: {
    width: horizontalScale(343),
    height: verticalScale(51),
    borderWidth: moderateScale(1),
    borderColor: theme.colors.gray,
    padding: verticalScale(10),
    borderRadius: moderateScale(8),
    backgroundColor: theme.colors.light_gray,
    paddingVertical: horizontalScale(7),
    fontSize: moderateScale(15),
    ...theme.textVariants.Medium,
  },
  inputError: {
    color: theme.colors.danger,
    fontSize: moderateScale(11),
    marginTop: verticalScale(7),
    marginBottom: verticalScale(-10),
    ...theme.textVariants.Regular,
  },
  button: {
    marginTop: verticalScale(43),
    width: horizontalScale(343),
    height: verticalScale(51),
    backgroundColor: theme.colors.primary_green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: verticalScale(100),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: theme.colors.primary_white,
    fontWeight: 600,
    lineHeight: 19.36,
  },
  visibilityBtn: {
    position: 'absolute',
    right: verticalScale(30),
    height: verticalScale(25),
    width: horizontalScale(50),
    padding: 0,
    marginTop: verticalScale(13),
  },
  signUpFooter: {
    alignItems: 'center',
  },
  iconStyle: {
    borderRadius: moderateScale(7),
  },
  innerIconStyle: {
    borderWidth: 1,
    borderRadius: moderateScale(4),
    borderColor: theme.colors.gray,
    color: theme.colors.black,
  },
  textStyle: {
    fontFamily: 'JosefinSans-Regular',
    textDecorationLine: 'none',
    top: verticalScale(7),
    color: theme.colors.dark_gray,
    fontWeight: 400,
    fontSize: moderateScale(14),
    ...theme.textVariants.Regular,
  },
});

export default styles;
