import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  header: {
    left: 20,
    marginBottom: 25,
  },
  input: {
    width: '90%',
    height: 51,
    borderWidth: 1,
    borderColor: theme.colors.lightGray,
    padding: 10,
    borderRadius: 50,
    backgroundColor: theme.colors.gray,
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 15,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
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
    backgroundColor: theme.colors.transparent,
    maxWidth: '80%',
  },
  messageContainerisRight: {
    backgroundColor: theme.colors.green,
    maxWidth: '70%',
    alignSelf: 'flex-end',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 10,
    right: 20,
  },
  messageisRight: {
    color: theme.colors.primary,
  },
  messageIsLeft: {
    color: theme.colors.foreground,
  },
  message: {
    alignSelf: 'flex-start',
    fontSize: 15,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  messageContainerisLeft: {
    alignSelf: 'flex-start',
    backgroundColor: theme.colors.gray,
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
    width: 20,
    height: 30,
    bottom: 0,
    zIndex: -1,
  },
  leftArrow: {
    backgroundColor: theme.colors.gray,
    borderBottomRightRadius: 25,
    left: 20,
  },
  rightArrow: {
    backgroundColor: theme.colors.green,
    borderBottomLeftRadius: 25,
    right: 20,
  },
  userContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    left: 15,
    alignItems: 'flex-start',
  },
  userImageProfile: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  activeChat: {
    borderWidth: 3,
    borderColor: theme.colors.green,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.background,
    borderRadius: 50,
    position: 'absolute',
    bottom: 1,
    left: 40,
  },
  userFullName: {
    fontSize: 15,
    left: 5,
    color: theme.colors.foreground,
    top: 5,
    fontWeight: 600,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
});

export default styles;
