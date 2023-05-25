import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  header: {
    width: '100%',
    backgroundColor: theme.colors.green,
    height: horizontalScale(245),
    paddingHorizontal: 16,
    marginBottom: verticalScale(55),
  },
  profileImage: {
    paddingTop: verticalScale(60),
    alignItems: 'center',
  },
  userImage: {
    width: horizontalScale(158),
    height: horizontalScale(158),
    borderRadius: 100,
    borderWidth: 2,
    borderColor: 'white',
    left: verticalScale(3),
    bottom: verticalScale(-3),
  },
  defaultProfileImage: {
    width: horizontalScale(158),
    height: horizontalScale(158),
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
    bottom: verticalScale(4),
  },
  userFullName: {
    fontSize: moderateScale(30),
    color: theme.colors.foreground,
    fontWeight: 600,
    textAlign: 'center',
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  userAbount: {
    marginTop: verticalScale(2),
    fontSize: moderateScale(16),
    color: theme.colors.foreground,
    fontWeight: 600,
    textAlign: 'center',
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  switchContainer: {
    width: horizontalScale(343),
    marginTop: verticalScale(9),
  },

  contentsBlockContainer: {
    width: windowWidth * 0.9,
    marginVertical: windowWidth * 0.03,
    marginHorizontal: windowWidth * 0.05,
  },
});

export default styles;
