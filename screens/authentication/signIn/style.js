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
    backgroundColor: theme.colors.primary_white,
    paddingHorizontal: horizontalScale(16),
  },
  headerContainer: {
    height: verticalScale(36),
    marginTop: verticalScale(30),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
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
    color: theme.colors.black,
    textAlign: 'center',
    lineHeight: verticalScale(36.31),
    ...theme.textVariants.SemiBold,
  },
  hidePassword: {
    fontSize: moderateScale(16),
    color: theme.colors.primary_green,
    left: verticalScale(15),
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
    color: theme.colors.primary_green,
    lineHeight: verticalScale(19.36),
    ...theme.textVariants.SemiBold,
  },
  input: {
    width: horizontalScale(343),
    height: verticalScale(51),
    paddingEnd: horizontalScale(80),
    borderWidth: 1,
    borderColor: theme.colors.gray,
    padding: verticalScale(16),
    borderRadius: moderateScale(8),
    backgroundColor: theme.colors.light_gray,
    paddingVertical: verticalScale(7),
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
    marginTop: verticalScale(167),
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
    ...theme.textVariants.SemiBold,
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
    bottom: verticalScale(13.5),
    marginTop: verticalScale(20),
    backgroundColor: theme.colors.primary_white,
  },
});

export default styles;
