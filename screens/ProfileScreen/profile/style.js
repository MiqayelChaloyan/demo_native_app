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
    marginBottom: verticalScale(60),
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
    left: horizontalScale(30),
    backgroundColor: theme.colors.primary_white,
    borderRadius: moderateScale(50),
    width: horizontalScale(42),
    height: horizontalScale(42),
    paddingTop: verticalScale(2),
    paddingHorizontal: horizontalScale(1),
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
  listContainer: {
    paddingHorizontal: horizontalScale(16),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.primary_white,
    marginTop: verticalScale(24),
  },
  switchContainer: {
    width: horizontalScale(343),
  },
});

export default styles;
