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
    backgroundColor: theme.colors.background,
  },
  itemDataBox: {
    paddingHorizontal: horizontalScale(16),
    flex: 1,
  },
  imageContainer: {
    width: '100%',
    height: verticalScale(196),
    marginTop: verticalScale(48),
    marginBottom: verticalScale(32),
  },
  image: {
    width: '100%',
    height: verticalScale(196),
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
    fontWeight: 500,
    lineHeight: verticalScale(29),
    color: theme.colors.foreground,
    ...theme.textVariants.body,
  },
  descriptionContainer: {
    marginTop: verticalScale(8),
    marginBottom: verticalScale(16),
  },
  description: {
    fontSize: moderateScale(16),
    fontWeight: 600,
    lineHeight: verticalScale(19),
    color: theme.colors.foreground,
    ...theme.textVariants.body,
  },
  text: {
    fontSize: moderateScale(16),
    fontWeight: 500,
    lineHeight: verticalScale(19),
    color: theme.colors.mediumLightGray,
    ...theme.textVariants.body,
  },
});

export default styles;
