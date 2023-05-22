
import {StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';


const styles = StyleSheet.create({
  feedScreen: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  feedScreenContainer: {
    paddingHorizontal: horizontalScale(16),
    flex: 1,
    alignItems: 'center',
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
  contentsBlockContainer: {
    width: '100%',
    height: verticalScale(356),
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
    fontWeight: 600,
    lineHeight: verticalScale(19),
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  aboutContentDate: {
    fontSize: moderateScale(14),
    fontWeight: 400,
    lineHeight: verticalScale(17),
    paddingTop: verticalScale(2),
    color: theme.colors.lightGray,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
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
    ...theme.textVariants.body,
  },
  skeleton: {
    marginTop: verticalScale(25),
  },
});

export default styles;
