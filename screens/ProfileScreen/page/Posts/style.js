import {StyleSheet} from 'react-native';
import {theme} from '../../../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../../../assets/metrics/Metrics';

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: theme.colors.background,
  },
  contentBlock: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  postImage: {
    height: verticalScale(50),
    borderRadius: moderateScale(8),
  },
  contentInfo: {
    width: horizontalScale(269),
    height: verticalScale(70),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: theme.colors.gray,
    marginBottom: verticalScale(20),
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(5),
  },
  aboutContentDate: {
    fontSize: moderateScale(14),
    fontWeight: 400,
    lineHeight: verticalScale(17),
    paddingTop: verticalScale(2),
    color: theme.colors.lightGray,
    // TODO: This part needs to be updated.
    ...theme.textVariants.Regular,
  },
  feedTextContainer: {
    paddingRight: horizontalScale(8),
  },
  feedText: {
    fontSize: moderateScale(14),
    fontWeight: 400,
    color: theme.colors.foreground,
    lineHeight: verticalScale(17),
    // TODO: This part needs to be updated.
    ...theme.textVariants.Regular,
  },
  headerText: {
    fontSize: moderateScale(16),
    fontWeight: 600,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.SemiBold,
  },
});

export default styles;
