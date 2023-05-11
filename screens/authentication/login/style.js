import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: '100%',
    paddingTop: 20,
  },
  headerContainer: {
    width: '100%',
    height: '2%',
    marginTop: '2%',
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
  logIn: {
    fontSize: 30,
    fontWeight: 600,
    color: '#000000',
    textAlign: 'center',
    marginLeft: '37%',
  },
  login: {
    fontSize: 16,
    color: '#5DB075',
    lineHeight: 36.31,
    textAlign: 'right',
    fontWeight: 500,
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    marginTop: '5%',
  },
  hidePassword: {
    fontSize: 16,
    color: '#5DB075',
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
  },
  inputsContainer: {
    width: '100%',
    marginTop: '20%',
    gap: 15,
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
  },
  button: {
    marginTop: '5%',
    width: '90%',
    height: 60,
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
    marginTop: 15,
  },
});

export default styles;
