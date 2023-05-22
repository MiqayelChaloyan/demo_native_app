import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  root: {
    marginTop: 20,
    marginBottom: 20,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  input: {
    width: '90%',
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
  listUsers: {
    marginTop: 5,
    marginBottom: 100,
  },
  userRoot: {
    margin: 2,
    padding: 20,
  },
  user: {
    flexDirection: 'row',
  },
  profileImage: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  userName: {
    fontSize: 17,
    fontWeight: 600,
    left: 12,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  activeChat: {
    borderWidth: 3,
    borderColor: theme.colors.green,
    width: 12,
    height: 12,
    backgroundColor: theme.colors.primary,
    borderRadius: 50,
    position: 'absolute',
    bottom: 1,
    left: 40,
  },
  messages: {
    left: 67,
    bottom: 15,
    flexDirection: 'row',
  },
  messagesText: {
    fontSize: 15,
  },
  line: {
    borderWidth: 0.2,
    width: 290,
    justifyContent: 'center',
    backgroundColor: theme.colors.foreground,
    left: 60,
    bottom: 15,
  },
  skeleton: {
    margin: 25,
  },
});

export default styles;
