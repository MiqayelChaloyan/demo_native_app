import {StyleSheet} from 'react-native';
import {theme} from '../../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  signUpRoot: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  headerContainer: {
    height: verticalScale(36),
    marginTop: verticalScale(32),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginTop: verticalScale(15),
    marginHorizontal: horizontalScale(20),
  },
  cancel: {
    top: verticalScale(10),
    height: verticalScale(50),
    width: horizontalScale(2),
    right: 5,
  },
  headerBox: {
    width: horizontalScale(293),
    height: horizontalScale(110),
  },
  signUp: {
    fontSize: moderateScale(30),
    fontWeight: 600,
    color: theme.colors.foreground,
    textAlign: 'center',
    lineHeight: verticalScale(36.31),
    left: verticalScale(10),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  passwordBox: {
    width: '100%',
  },
  passHide: {
    position: 'relative',
  },
  login: {
    fontSize: moderateScale(16),
    color: theme.colors.green,
    lineHeight: verticalScale(36.31),
    fontWeight: 500,
    width: horizontalScale(43),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  hidePassword: {
    fontSize: verticalScale(16),
    color: theme.colors.green,
    fontWeight: 500,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  checkBox: {
    padding: verticalScale(15),
    justifyContent: 'flex-start',
    margin: verticalScale(5),
  },
  checkBoxText: {
    width: horizontalScale(325),
    fontSize: verticalScale(14),
    color: theme.colors.mediumLightGray,
    left: verticalScale(8),
    top: verticalScale(7),
    fontWeight: 400,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  inputsContainer: {
    width: '100%',
    marginTop: verticalScale(64),
    gap: verticalScale(16),
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
  checkBoxStyle: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(35),
  },
  input: {
    width: horizontalScale(343),
    height: verticalScale(51),
    borderWidth: moderateScale(1),
    borderColor: theme.colors.gray,
    padding: verticalScale(10),
    borderRadius: moderateScale(8),
    backgroundColor: theme.colors.darkGray,
    paddingHorizontal: horizontalScale(15),
    paddingVertical: horizontalScale(7),
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
    marginTop: verticalScale(43),
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
  signUpFooter: {
    alignItems: 'center',
  },
});

export default styles;
