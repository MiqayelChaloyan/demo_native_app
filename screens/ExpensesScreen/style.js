import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../assets/metrics/Metrics';
import {theme} from '../../assets/theme/theme';

const styles = StyleSheet.create({
  expenses: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: horizontalScale(16),
    backgroundColor: theme.colors.background,
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
    backgroundColor: theme.colors.darkGray,
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
    transform: [{rotate: '315deg'}],
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
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  headerTextContainer: {
    marginBottom: verticalScale(32),
  },
  headerText: {
    fontSize: moderateScale(24),
    fontWeight: 500,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  itemListContainer: {
    flex: 1,
    width: '100%',
    marginBottom: verticalScale(70),
  },
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
    backgroundColor: theme.colors.green,
  },
  titleContainer: {
    marginLeft: horizontalScale(16),
  },
  itemTitle: {
    fontSize: moderateScale(16),
    fontWeight: 500,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  priceText: {
    fontSize: moderateScale(16),
    fontWeight: 400,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
});

export default styles;
