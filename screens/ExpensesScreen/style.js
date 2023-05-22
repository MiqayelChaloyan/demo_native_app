import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  barChartContainer: {
    marginVertical: 32,
    paddingTop: 16,
    paddingBottom: 25,
    height: windowWidth * 0.6,
    borderRadius: 20,
    borderColor: '#E8E8E8',
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
    backgroundColor: '#F0F0F0',
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
  },
  headerTextContainer: {
    width: windowWidth * 0.9,
    height: 29,
    marginBottom: 11,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 500,
    color: 'black',
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
    borderBottomColor: '#E8E8E8',
  },
  leftSide: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    borderRadius: 8,
    width: 16,
    height: 16,
    backgroundColor: '#5DB075',
  },
  titleContainer: {
    marginLeft: 16,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 500,
    color: 'black',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 400,
    color: 'black',
  },
});

export default styles;
