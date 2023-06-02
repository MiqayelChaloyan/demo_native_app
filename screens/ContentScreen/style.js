import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
  },
  contentBox: {
    paddingHorizontal: horizontalScale(16),
  },
  outletContainer: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
  },
  swiperItemContainer: {
    marginTop: verticalScale(16),
    width: horizontalScale(375),
  },
  itemInfoContainer: {
    width: horizontalScale(343),
  },
  contentItem: {
    width: horizontalScale(375),
    justifyContent: 'center',
    alignItems: 'center',
  },
  paginationStyle: {
    right: horizontalScale(16),
    bottom: verticalScale(0),
  },
  imageContainer: {
    width: horizontalScale(343),
    height: verticalScale(240),
  },
  image: {
    borderRadius: moderateScale(8),
    width: horizontalScale(343),
    height: verticalScale(240),
  },
  dotStyle: {
    backgroundColor: theme.colors.gray,
    width: horizontalScale(8),
    height: verticalScale(8),
    borderRadius: moderateScale(4),
    marginHorizontal: horizontalScale(4),
    marginVertical: verticalScale(33),
  },
  titleStyle: {
    width: '100%',
    marginTop: horizontalScale(8),
    fontSize: moderateScale(16),
    color: theme.colors.black,
    lineHeight: verticalScale(19),
    ...theme.textVariants.SemiBold,
  },
  itemTitle: {
    fontSize: moderateScale(16),
    color: theme.colors.dark_gray,
    ...theme.textVariants.Medium,
  },
  postMessage: {
    fontSize: moderateScale(14),
    color: theme.colors.black,
    marginVertical: verticalScale(8),
    lineHeight: verticalScale(17),
    ...theme.textVariants.Regular,
  },
  dateStyle: {
    fontSize: moderateScale(14),
    lineHeight: verticalScale(17),
    color: theme.colors.cool_gray,
    ...theme.textVariants.Regular,
  },
  headerTextContainer: {
    width: '100%',
    marginVertical: verticalScale(16),
  },
  headerText: {
    fontSize: moderateScale(24),
    color: theme.colors.black,
    ...theme.textVariants.SemiBold,
  },
  itemListContainer: {
    flex: 1,
    width: '100%',
    marginBottom: verticalScale(30),
  },
  contentItemOfList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: verticalScale(45),
    borderBottomWidth: moderateScale(1),
  },
  circle: {
    borderRadius: moderateScale(8),
    width: horizontalScale(16),
    height: verticalScale(16),
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleContainer: {
    marginLeft: horizontalScale(10),
  },
  warning: {
    width: '100%',
    marginTop: verticalScale(10),
  },
  warningText: {
    fontSize: moderateScale(14),
    ...theme.textVariants.Regular,
    color: theme.colors.dark_gray,
    textAlign: 'center',
  },
});

export default styles;
