import { Dimensions, StyleSheet } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  loginRoot: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  root: {
    flex: 1,
  },
  headerContainer: {
    height: 14,
    marginTop: 14,
    marginBottom: 17,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
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
  logIn: {
    fontSize: 30,
    fontWeight: 600,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 36.31,
    left: 10,
  },
  login: {
    fontSize: 16,
    color: '#5DB075',
    lineHeight: 36.31,
    fontWeight: 500,
    width: windowWidth * 0.3,
  },
  passworddBox: {
    width: windowWidth,
  },
  passHide: {
    position: 'relative',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  hidePassword: {
    fontSize: 16,
    color: '#5DB075',
    fontWeight: 500,
  },
  checkBox: {
    padding: 15,
    justifyContent: 'flex-start',
    margin: 5,
  },
  checkBoxText: {
    fontSize: 15,
    color: '#666666',
    left: '15%',
    top: '2.2%',
    fontWeight: 400,
  },
  inputsContainer: {
    width: windowWidth,
    marginTop: '20%',
    gap: 15,
  },
  nameInputStyle: {
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailInputStyle: {
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
  },
  passwordInputStyle: {
    width: windowWidth,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
  },
  forgotPassText: {
    fontSize: 16,
    color: '#5DB075',
    lineHeight: 19.36,
  },
  input: {
    width: windowWidth * 0.9,
    height: 51,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 15,
  },
  inputError: {
    color: 'red',
    fontSize: 11,
    marginTop: 7,
    marginBottom: -10,
  },
  button: {
    marginTop: '53%',
    width: windowWidth * 0.9,
    height: 55,
    backgroundColor: '#5DB075',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 100,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
  },
  visibilityBtn: {
    position: 'absolute',
    right: 30,
    height: 25,
    width: windowWidth * 0.12,
    padding: 0,
    marginTop: 13,
  },
  forgotPass: {
    alignItems: 'center',
    marginTop: 16,
  },
  navigateSignUp: {
    alignItems: 'center',
    marginTop: 10,
  },
  loginFooter: {
    alignItems: 'center',
    marginTop: '7%',
  },
});

export default styles;
