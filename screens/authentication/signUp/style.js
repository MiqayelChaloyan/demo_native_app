import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    width: '100%',
  },
  headerContainer: {
    width: '100%',
    height: '2%',
    marginTop: '4%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginTop: '4%',
    marginHorizontal: 20,
  },
  cancel: {
    top: '4%',
    height: 50,
  },
  signUp: {
    fontSize: 30,
    fontWeight: 600,
    color: '#000000',
    // lineHeight: 36.31,
    textAlign: 'center',
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
  input: {
    width: '90%',
    height: '13%',
    // margin: 5,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
  },
  inputError: {
    color: 'red',
    fontSize: 12,
  },
  button: {
    marginTop: '5%',
    width: '90%',
    height: '27%',
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
    marginTop: 21,
    bottom: '42%',
  },
});

export default styles;
