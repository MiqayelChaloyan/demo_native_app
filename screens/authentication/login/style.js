import {StyleSheet} from 'react-native';
import {theme} from '../../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  loginRoot: {
    flex: 1,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 16,
  },
  headerContainer: {
    height: verticalScale(36),
    marginTop: verticalScale(30),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  cancel: {
    top: verticalScale(10),
    height: verticalScale(50),
    width: horizontalScale(10),
    right: 0,
  },
  headerBox: {
    width: horizontalScale(300),
    height: verticalScale(50),
  },
  logIn: {
    fontSize: moderateScale(30),
    fontWeight: 600,
    color: theme.colors.foreground,
    textAlign: 'center',
    lineHeight: verticalScale(36.31),
    left: verticalScale(10),
    // TODO: This part needs to be updated.
    ...theme.textVariants.Medium,
  },
  login: {
    fontSize: moderateScale(16),
    color: theme.colors.green,
    lineHeight: verticalScale(36.31),
    fontWeight: 500,
  },
  hidePassword: {
    fontSize: moderateScale(16),
    color: theme.colors.green,
    fontWeight: 500,
    left: verticalScale(15),
    // TODO: This part needs to be updated.
    ...theme.textVariants.Medium,
  },
  inputsContainer: {
    width: '100%',
    marginTop: verticalScale(37),
    gap: verticalScale(16),
    marginBottom: verticalScale(50),
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
  forgotPassText: {
    fontSize: moderateScale(16),
    color: theme.colors.green,
    lineHeight: verticalScale(19.36),
    // TODO: This part needs to be updated.
    ...theme.textVariants.SemiBold,
  },
  input: {
    width: horizontalScale(343),
    height: verticalScale(51),
    borderWidth: 1,
    borderColor: theme.colors.gray,
    padding: verticalScale(16),
    borderRadius: moderateScale(8),
    backgroundColor: theme.colors.darkGray,
    // paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(7),
    fontSize: moderateScale(15),
    // TODO: This part needs to be updated.
    ...theme.textVariants.Medium,
  },
  inputError: {
    color: theme.colors.danger,
    fontSize: moderateScale(11),
    marginTop: verticalScale(7),
    marginBottom: verticalScale(-10),
    // TODO: This part needs to be updated.
    ...theme.textVariants.Regular,
  },
  button: {
    marginTop: verticalScale(167),
    width: horizontalScale(343),
    height: verticalScale(51),
    backgroundColor: theme.colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: verticalScale(100),
  },
  buttonText: {
    textAlign: 'center',
    fontSize: moderateScale(16),
    color: theme.colors.primary,
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
  forgotPass: {
    alignItems: 'center',
    marginTop: verticalScale(16),
  },
  navigateSignUp: {
    alignItems: 'center',
    marginTop: verticalScale(10),
  },
  loginFooter: {
    alignItems: 'center',
    marginTop: verticalScale(70),
    bottom: verticalScale(13.5),
  },
});

export default styles;
