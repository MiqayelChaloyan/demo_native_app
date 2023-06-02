import {StyleSheet} from 'react-native';
import {theme} from '../../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: theme.colors.primary_white,
  },
  header: {
    width: '100%',
    backgroundColor: theme.colors.primary_green,
    height: verticalScale(230),
    paddingHorizontal: horizontalScale(16),
    zIndex: 1,
  },
  profileImage: {
    paddingTop: verticalScale(40),
    alignItems: 'center',
  },
  userImage: {
    width: horizontalScale(158),
    height: horizontalScale(158),
    borderRadius: moderateScale(100),
    borderWidth: moderateScale(2),
    borderColor: theme.colors.primary_white,
    left: verticalScale(3),
    bottom: verticalScale(-3),
  },
  defaultProfileImage: {
    width: horizontalScale(158),
    height: horizontalScale(158),
    borderRadius: moderateScale(100),
  },
  addProfileImage: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
  section: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: verticalScale(60),
    backgroundColor: theme.colors.primary_white,
  },
  userFullName: {
    fontSize: moderateScale(30),
    color: theme.colors.black,
    textAlign: 'center',
    ...theme.textVariants.SemiBold,
  },
  aboutUser: {
    marginTop: verticalScale(2),
    fontSize: moderateScale(16),
    color: theme.colors.black,
    textAlign: 'center',
    ...theme.textVariants.SemiBold,
  },
  switchContainer: {
    width: horizontalScale(343),
    height: horizontalScale(50),
    marginTop: verticalScale(19),
  },
  contentsBlockContainer: {
    paddingHorizontal: horizontalScale(16),
    height: verticalScale(356),
    marginTop: verticalScale(16),
  },
});

export default styles;
