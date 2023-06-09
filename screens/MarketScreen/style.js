import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  marketContainer: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
  },
  headerPartContainer: {
    paddingHorizontal: horizontalScale(16),
    flex: 1,
    alignItems: 'center',
  },
  contentContainer: {
    marginLeft: horizontalScale(16),
  },
  hotDealsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginTop: verticalScale(32),
    marginBottom: verticalScale(16),
  },
  warningContainer: {
    marginTop: verticalScale(32),
  },
  playButton: {
    paddingRight: horizontalScale(16),
  },
  hotDealsText: {
    fontSize: moderateScale(24),
    color: theme.colors.black,
    maxWidth: horizontalScale(250),
    verticalAlign: 'top',
    ...theme.textVariants.Medium,
  },
  itemImageContainer: {
    width: horizontalScale(110),
    height: horizontalScale(110),
    backgroundColor: theme.colors.light_gray,
    borderRadius: moderateScale(8),
    marginRight: horizontalScale(16),
  },
  itemNameContainer: {
    width: horizontalScale(110),
    marginVertical: verticalScale(8),
  },
  itemNameText: {
    fontSize: moderateScale(14),
    color: theme.colors.black,
    ...theme.textVariants.Regular,
  },
  itemPriceContainer: {
    maxWidth: horizontalScale(110),
  },
  itemPriceText: {
    fontSize: moderateScale(14),
    color: theme.colors.black,
    ...theme.textVariants.SemiBold,
  },
  searchView: {
    marginHorizontal: horizontalScale(16),
  }
});

export default styles;
