import {StyleSheet} from 'react-native';

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
    borderColor: '#E8E8E8',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#F6F6F6',
    paddingHorizontal: 15,
    paddingVertical: 7,
    fontSize: 15,
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
    color: 'black',
  },
  activeChat: {
    borderWidth: 3,
    borderColor: '#5DB075',
    width: 12,
    height: 12,
    backgroundColor: '#fff',
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
    backgroundColor: '#000000',
    left: 60,
    bottom: 15,
  },
  skeleton: {
    margin: 25,
  },
});

export default styles;
