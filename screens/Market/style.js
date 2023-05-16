import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  market: {
    flex: 1,
    backgroundColor: 'white',
  },
  marketScreenContainer: {
    flex: 1,
    alignItems: 'center',
  },
  contentInfo: {
    width: windowWidth * 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  searchContainer: {
    width: windowWidth * 0.9,
    marginTop: windowHeight * 0.05,
    marginHorizontal: windowWidth * 0.05,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  hotDealsContainer: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.04,
    marginLeft: windowWidth * 0.05,
    marginTop: windowHeight * 0.04,
    marginBottom: windowHeight * 0.02,
  },
  hotDealsText: {
    fontSize: 24,
    fontWeight: 500,
    color: 'black',
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginLeft: windowWidth * 0.05,
  },
  itemImageContainer: {
    width: windowWidth * 0.29,
    height: windowWidth * 0.29,
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    marginRight: windowWidth * 0.035,
  },
  itemNameContainer: {
    width: windowWidth * 0.3,
    height: windowHeight * 0.045,
    marginVertical: windowHeight * 0.01,
  },
  itemNameText: {
    fontSize: 14,
    fontWeight: 400,
    color: 'black',
  },
  itemPriceContainer: {
    width: windowWidth * 0.128,
  },
  itemPriceText: {
    fontSize: 14,
    fontWeight: 600,
    color: 'black',
  },
});

export default styles;
