import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  input: {
    width: '90%',
    height: 51,
    borderWidth: 2,
    borderColor: '#E5E5E5',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 15,
    borderRadius: 100,
  },
  messageProfile: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    height: 150,
    position: 'relative',
    paddingTop: 50,
  },
  messegeTextContainer: {
    alignItems: 'center',
    marginTop: '2.5%',
  },
  messegeText: {
    fontSize: 16,
    color: '#5DB075',
    fontWeight: 500,
  },
  messege: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 600,
  },
  messegesList: {
    height: 570,
  },
  newMessage: {
    position: 'relative',
    width: '100%',
    bottom: 10,
  },
  inputBox: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  sendBox: {
    position: 'absolute',
    right: 30,
    bottom: 9,
  },
  send: {
    width: 34,
    height: 34,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    paddingVertical: 10,
    marginVertical: 5,
  },
  messageView: {
    backgroundColor: 'transparent',
    maxWidth: '80%',
  },
  messageContainerisRight: {
    backgroundColor: '#5DB075',
    maxWidth: '70%',
    alignSelf: 'flex-end',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
    right: 20,
  },
  messageisRight: {
    color: 'white',
  },
  messageIsLeft: {
    color: '#000',
  },
  message: {
    alignSelf: 'flex-start',
    fontSize: 15,
  },
  messageContainerisLeft: {
    alignSelf: 'flex-start',
    backgroundColor: '#E8E8E8',
    borderBottomLeftRadius: 0,
    maxWidth: '70%',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
    left: 20,
  },
  arrow: {
    position: 'absolute',
    backgroundColor: '#E8E8E8',
    width: 20,
    height: 30,
    bottom: 0,
    zIndex: -1,
  },
  leftArrow: {
    borderBottomRightRadius: 25,
    left: 20,
  },
  rightArrow: {
    borderBottomLeftRadius: 25,
    right: 20,
  },
});

export default styles;