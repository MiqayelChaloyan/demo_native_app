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
  },
  root: {
    flex: 1,
  },
  headerContainer: {
    height: verticalScale(14),
    marginTop: verticalScale(14),
    marginBottom: verticalScale(17),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: verticalScale(15),
    marginHorizontal: horizontalScale(20),
  },
  cancel: {
    top: verticalScale(8),
    height: verticalScale(50),
    width: horizontalScale(10),
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
    ...theme.textVariants.body,
  },
  login: {
    fontSize: moderateScale(16),
    color: theme.colors.green,
    lineHeight: verticalScale(36.31),
    fontWeight: 500,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    // gap: verticalScale(150),
  },
  hidePassword: {
    fontSize: moderateScale(16),
    color: theme.colors.green,
    fontWeight: 500,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  inputsContainer: {
    width: horizontalScale(375),
    marginTop: verticalScale(64),
    gap: moderateScale(16),
  },
  emailInputStyle: {
    width: horizontalScale(375),
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordInputStyle: {
    width: horizontalScale(375),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  forgotPassText: {
    fontSize: moderateScale(16),
    color: theme.colors.green,
    lineHeight: verticalScale(19.36),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  input: {
    width: horizontalScale(343),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: theme.colors.gray,
    padding: verticalScale(16),
    borderRadius: moderateScale(8),
    backgroundColor: theme.colors.darkGray,
    paddingHorizontal: verticalScale(15),
    paddingVertical: verticalScale(7),
    fontSize: moderateScale(15),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  inputError: {
    color: theme.colors.danger,
    fontSize: moderateScale(11),
    marginTop: verticalScale(7),
    marginBottom: verticalScale(-10),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  button: {
    marginTop: verticalScale(183),
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
    marginTop: verticalScale(7),
    bottom: verticalScale(13.5),
  },
});

export default styles;
