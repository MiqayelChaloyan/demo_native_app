import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import { theme } from '../../assets/theme/theme';

const styles = StyleSheet.create({
  expenseItemOfList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    height: verticalScale(35),
    borderBottomWidth: moderateScale(1),
    borderBottomColor: theme.colors.gray,
    marginBottom: verticalScale(16),
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    borderRadius: verticalScale(8),
    width: verticalScale(16),
    height: horizontalScale(16),
    backgroundColor: theme.colors.primary_green,
  },
  titleContainer: {
    marginLeft: horizontalScale(16),
  },
  itemTitle: {
    fontSize: moderateScale(16),
    fontWeight: 500,
    color: theme.colors.black,
    ...theme.textVariants.Medium,
  },
  priceText: {
    fontSize: moderateScale(16),
    fontWeight: 400,
    color: theme.colors.black,
    ...theme.textVariants.Regular,
  },
});

export default styles;
