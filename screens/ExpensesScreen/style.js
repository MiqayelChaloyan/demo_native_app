import {Dimensions, StyleSheet} from 'react-native';
import {theme} from '../../assets/theme/theme';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: theme.colors.background,
  },
  barChartContainer: {
    marginVertical: 32,
    paddingTop: 16,
    paddingBottom: 25,
    height: windowWidth * 0.6,
    borderRadius: 20,
    borderColor: theme.colors.gray,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    width: windowWidth * 0.9,
  },
  itemsContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  progressContainer: {
    height: 159,
    width: 16,
    backgroundColor: theme.colors.darkGray,
    borderRadius: 8,
    justifyContent: 'flex-end',
  },
  progressStyle: {
    height: 50,
    width: 16,
    borderRadius: 8,
  },
  itemTextContainer: {
    top: 8,
    right: 8,
    height: 12,
    transform: [{rotate: '315deg'}],
    alignItems: 'center',
    width: 30,
  },
  expenseItem: {
    marginLeft: 14,
    flex: 1,
    alignItems: 'center',
    height: 200,
  },
  itemText: {
    fontSize: 10,
    fontWeight: 400,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  headerTextContainer: {
    width: windowWidth * 0.9,
    height: 29,
    marginBottom: 11,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 500,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  itemListContainer: {
    flex: 1,
    width: windowWidth * 0.9,
    marginBottom: 70,
  },
  expenseItemOfList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 51,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray,
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    borderRadius: 8,
    width: 16,
    height: 16,
    backgroundColor: theme.colors.green,
  },
  titleContainer: {
    marginLeft: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 400,
    color: theme.colors.foreground,
    // TODO: This part needs to be updated.
    ...theme.textVariants.body,
  },
});

export default styles;
