import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loginRoot: {
    flex: 1,
  },
  root: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
  },
  headerContainer: {
    width: '100%',
    height: '2%',
    marginTop: '2%',
    marginBottom: '6%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    marginTop: '4%',
    marginHorizontal: 20,
  },
  cancel: {
    top: '4%',
    height: 50,
  },
  headerBox: {
    height: 50,
  },
  logIn: {
    fontSize: 30,
    fontWeight: 600,
    color: '#000000',
    textAlign: 'center',
    left: '130%',
  },
  login: {
    fontSize: 16,
    color: '#5DB075',
    lineHeight: 36.31,
    textAlign: 'right',
    fontWeight: 500,
  },
  passworddBox: {
    width: '100%',
  },
  passHide: {
    position: 'relative',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: '21%',
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
    width: '90%',
    height: 51,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 15,
  },
  inputError: {
    color: 'red',
    fontSize: 12.5,
    marginTop: '1%',
    marginBottom: -10,
  },
  button: {
    marginTop: '45%',
    width: '90%',
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
    width: 50,
    padding: 0,
    marginTop: 13,
  },
  forgotPass: {
    alignItems: 'center',
    marginTop: '2%',
  },
  forgotPassText: {
    fontSize: 16,
    color: '#5DB075',
  },
  navigateSignUp: {
    alignItems: 'center',
    marginTop: '2%',
  },
  loginFooter: {
    alignItems: 'center',
    marginTop: 50,
  },
});

export default styles;
