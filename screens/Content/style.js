import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  contentBox: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: horizontalScale(16),
  },
  swiperItem: {
    width: '100%',
    marginTop: verticalScale(16),
  },
  paginationStyle: {
    right: horizontalScale(0),
    bottom: verticalScale(0),
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: horizontalScale(343),
    height: verticalScale(240),
  },
  image: {
    borderRadius: 8,
    width: horizontalScale(343),
    height: verticalScale(240),
  },
  dotStyle: {
    backgroundColor: theme.colors.gray,
    width: horizontalScale(8),
    height: verticalScale(8),
    borderRadius: moderateScale(4),
    marginHorizontal: horizontalScale(3),
    marginVertical: verticalScale(33),
  },
  titleStyle: {
    width: '100%',
    marginTop: horizontalScale(8),
    fontSize: moderateScale(16),
    color: theme.colors.foreground,
    fontWeight: 600,
    lineHeight: verticalScale(19),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  postMessage: {
    width: '90%',
    fontSize: moderateScale(14),
    color: theme.colors.foreground,
    fontWeight: 400,
    marginVertical: verticalScale(8),
    lineHeight: verticalScale(17),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  dateStyle: {
    fontSize: moderateScale(14),
    lineHeight: verticalScale(17),
    color: theme.colors.lightGray,
    fontWeight: 400,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  searchContainer: {
    width: '100%',
    marginTop: verticalScale(32),
  },
  searchInput: {
    height: verticalScale(50),
    borderWidth: moderateScale(1),
    borderColor: theme.colors.gray,
    borderRadius: moderateScale(100),
    paddingTop: verticalScale(16),
    paddingLeft: horizontalScale(16),
    paddingBottom: verticalScale(15),
    backgroundColor: theme.colors.darkGray,
    fontSize: moderateScale(16),
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  contentItem: {
    width: horizontalScale(375),
  },
  headerTextContainer: {
    width: '100%',
    marginVertical: verticalScale(16),
  },
  headerText: {
    fontSize: moderateScale(24),
    fontWeight: 600,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
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
});

export default styles;
