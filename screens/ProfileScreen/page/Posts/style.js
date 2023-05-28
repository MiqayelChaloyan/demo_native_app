import { StyleSheet } from 'react-native';
import { theme } from '../../../../assets/theme/theme';
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
    backgroundColor: theme.colors.primary_white,
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
    color: theme.colors.cool_gray,
    ...theme.textVariants.Regular,
  },
  feedTextContainer: {
    paddingRight: horizontalScale(8),
  },
  feedText: {
    fontSize: moderateScale(14),
    fontWeight: 400,
    color: theme.colors.black,
    lineHeight: verticalScale(17),
    ...theme.textVariants.Regular,
  },
  headerText: {
    fontSize: moderateScale(16),
    fontWeight: 600,
    color: theme.colors.black,
    ...theme.textVariants.SemiBold,
  },
});

export default styles;
