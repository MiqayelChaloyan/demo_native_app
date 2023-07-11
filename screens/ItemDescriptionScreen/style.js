import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
  },
  itemDataBox: {
    paddingHorizontal: horizontalScale(16),
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: verticalScale(251),
    marginTop: verticalScale(48),
    marginBottom: verticalScale(32),
  },
  image: {
    width: '100%',
    height: verticalScale(250),
    borderRadius: moderateScale(8),
  },
  headDescContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleContainer: {
    maxWidth: '70%',
  },
  title: {
    fontSize: moderateScale(24),
    lineHeight: verticalScale(29),
    color: theme.colors.black,
    ...theme.textVariants.Medium,
  },
  descriptionContainer: {
    marginTop: verticalScale(8),
    marginBottom: verticalScale(16),
  },
  description: {
    fontSize: moderateScale(16),
    lineHeight: verticalScale(19),
    color: theme.colors.black,
    ...theme.textVariants.SemiBold,
  },
  text: {
    fontSize: moderateScale(16),
    lineHeight: verticalScale(19),
    color: theme.colors.dark_gray,
    ...theme.textVariants.Regular,
  },
});

export default styles;
