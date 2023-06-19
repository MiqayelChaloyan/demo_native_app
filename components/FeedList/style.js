import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  contentsBlockContainer: {
    width: '100%',
    marginTop: verticalScale(16),
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  feedItemImage: {
    height: verticalScale(50),
    borderRadius: moderateScale(8),
  },
  contentInfo: {
    width: horizontalScale(269),
    height: verticalScale(77),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: theme.colors.gray,
    marginBottom: verticalScale(16),
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(8),
  },
  headerFeedText: {
    fontSize: moderateScale(16),
    lineHeight: verticalScale(19),
    color: theme.colors.black,
    ...theme.textVariants.SemiBold,
  },
  aboutContentDate: {
    fontSize: moderateScale(14),
    lineHeight: verticalScale(17),
    paddingTop: verticalScale(2),
    color: theme.colors.cool_gray,
    ...theme.textVariants.Regular,
  },
  feedTextContainer: {
    paddingRight: horizontalScale(8),
  },
  feedText: {
    fontSize: moderateScale(14),
    color: theme.colors.black,
    lineHeight: verticalScale(17),
    ...theme.textVariants.Regular,
  },
  skeleton: {
    marginTop: verticalScale(25),
  },
});

export default styles;
