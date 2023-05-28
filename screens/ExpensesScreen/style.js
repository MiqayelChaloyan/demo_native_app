import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import { theme } from '../../assets/theme/theme';

const styles = StyleSheet.create({
  expenses: {
    flex: 1,
    backgroundColor: theme.colors.primary_white,
  },
  container: {
    flex: 1,
    paddingHorizontal: horizontalScale(16),
  },
  barChartContainer: {
    marginVertical: verticalScale(32),
    paddingTop: verticalScale(16),
    paddingBottom: verticalScale(25),
    height: verticalScale(232),
    borderRadius: moderateScale(20),
    borderColor: theme.colors.gray,
    borderWidth: moderateScale(1),
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  itemsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  progressContainer: {
    height: verticalScale(159),
    width: horizontalScale(16),
    backgroundColor: theme.colors.light_gray,
    borderRadius: moderateScale(8),
    justifyContent: 'flex-end',
  },
  progressStyle: {
    width: horizontalScale(16),
    borderRadius: moderateScale(8),
  },
  itemTextContainer: {
    top: verticalScale(8),
    right: horizontalScale(8),
    height: verticalScale(12),
    transform: [{ rotate: '315deg' }],
    alignItems: 'center',
    width: verticalScale(28),
  },
  expenseItem: {
    marginLeft: horizontalScale(14),
    flex: 1,
    alignItems: 'center',
    height: verticalScale(200),
  },
  itemText: {
    fontSize: moderateScale(10),
    fontWeight: 400,
    ...theme.textVariants.Regular,
  },
  headerTextContainer: {
    marginBottom: verticalScale(32),
  },
  headerText: {
    fontSize: moderateScale(24),
    fontWeight: 500,
    color: theme.colors.black,
    ...theme.textVariants.Medium,
  },
  itemListContainer: {
    flex: 1,
    width: '100%',
    marginBottom: verticalScale(70),
  },
});

export default styles;
