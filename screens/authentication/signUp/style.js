import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  signUpRoot: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  root: {
    flex: 1,
    paddingTop: verticalScale(20),
  },
  headerContainer: {
    width: windowWidth * 0.9,
    height: verticalScale(14),
    marginTop: verticalScale(14),
    marginBottom: verticalScale(17),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginTop: verticalScale(15),
    marginHorizontal: horizontalScale(20),
  },
  cancel: {
    top: verticalScale(8),
    height: verticalScale(50),
    width: windowWidth * 0.01,
  },
  headerBox: {
    width: windowWidth * 0.79,
    height: windowHeight * 0.1,
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
    width: windowWidth,
  },
  passHide: {
    position: 'relative',
  },
  login: {
    fontSize: moderateScale(16),
    color: theme.colors.green,
    lineHeight: verticalScale(36.31),
    fontWeight: 500,
    width: windowWidth * 0.3,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: verticalScale(15),
  },
  hidePassword: {
    fontSize: verticalScale(16),
    color: theme.colors.green,
    fontWeight: 500,
  },
  checkBox: {
    padding: verticalScale(15),
    justifyContent: 'flex-start',
    margin: verticalScale(5),
  },
  checkBoxText: {
    fontSize: verticalScale(15),
    color: theme.colors.mediumLightGray,
    left: verticalScale(10),
    top: verticalScale(7),
    fontWeight: 400,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  inputsContainer: {
    width: '100%',
    marginTop: '20%',
    gap: verticalScale(15),
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
    marginTop: verticalScale(30),
  },
  input: {
    width: horizontalScale(343),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: theme.colors.gray,
    padding: verticalScale(10),
    borderRadius: 8,
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
  },
  visibilityBtn: {
    position: 'absolute',
    right: verticalScale(30),
    height: verticalScale(25),
    width: windowWidth * 0.12,
    padding: 0,
    marginTop: verticalScale(15),
  },
  signUpFooter: {
    alignItems: 'center',
  },
});

export default styles;
