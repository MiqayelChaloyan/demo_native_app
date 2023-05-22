import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../assets/theme/theme';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    backgroundColor: theme.colors.green,
    height: 245,
    paddingHorizontal: 16,
    marginBottom: 50,
  },
  profileImage: {
    paddingTop: '15%',
    alignItems: 'center',
  },
  userImage: {
    width: 158,
    height: 158,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    left: 3,
    bottom: -3,
  },
  defaultProfileImage: {
    width: 158,
    height: 158,
    borderRadius: 100,
  },
  addProfileImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  userFullName: {
    fontSize: 30,
    color: theme.colors.foreground,
    fontWeight: 600,
    textAlign: 'center',
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  userAbount: {
    marginTop: 2,
    fontSize: 16,
    color: theme.colors.foreground,
    fontWeight: 600,
    textAlign: 'center',
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  switchContainer: {
    width: '87%',
    marginTop: 24,
  },

  contentsBlockContainer: {
    width: windowWidth * 0.9,
    marginVertical: windowWidth * 0.03,
    marginHorizontal: windowWidth * 0.05,
  },
});

export default styles;
