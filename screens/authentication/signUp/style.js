import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../assets/theme/theme';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  signUpRoot: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  root: {
    flex: 1,
    paddingTop: 20,
  },
  headerContainer: {
    width: windowWidth * 0.9,
    height: 14,
    marginTop: 14,
    marginBottom: 17,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginTop: 15,
    marginHorizontal: 20,
  },
  cancel: {
    top: 8,
    height: 50,
    width: windowWidth * 0.01,
  },
  headerBox: {
    width: windowWidth * 0.79,
    height: windowHeight * 0.1,
  },
  signUp: {
    fontSize: 30,
    fontWeight: 600,
    color: theme.colors.foreground,
    textAlign: 'center',
    lineHeight: 36.31,
    left: 10,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  passworddBox: {
    width: windowWidth,
  },
  passHide: {
    position: 'relative',
  },
  login: {
    fontSize: 16,
    color: theme.colors.green,
    lineHeight: 36.31,
    fontWeight: 500,
    width: windowWidth * 0.3,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  hidePassword: {
    fontSize: 16,
    color: theme.colors.green,
    fontWeight: 500,
  },
  checkBox: {
    padding: 15,
    justifyContent: 'flex-start',
    margin: 5,
  },
  checkBoxText: {
    fontSize: 15,
    color: theme.colors.mediumLightGray,
    left: '15%',
    top: '2.2%',
    fontWeight: 400,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  inputsContainer: {
    width: '100%',
    marginTop: '20%',
    gap: 15,
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
    marginTop: '15%',
  },
  input: {
    width: windowWidth * 0.9,
    height: 51,
    borderWidth: 1,
    borderColor: theme.colors.gray,
    padding: 10,
    borderRadius: 8,
    backgroundColor: theme.colors.darkGray,
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 15,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  inputError: {
    color: theme.colors.danger,
    fontSize: 11,
    marginTop: 7,
    marginBottom: -10,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  button: {
    marginTop: 40,
    width: windowWidth * 0.9,
    height: 55,
    backgroundColor: theme.colors.green,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: theme.colors.primary,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  visibilityBtn: {
    position: 'absolute',
    right: 30,
    height: 25,
    width: windowWidth * 0.12,
    padding: 0,
    marginTop: 15,
  },
  signUpFooter: {
    alignItems: 'center',
  },
});

export default styles;
