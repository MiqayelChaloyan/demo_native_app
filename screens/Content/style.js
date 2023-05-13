import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  slideItemContainer: {
    marginVertical: windowHeight * 0.02,
    marginHorizontal: windowWidth * 0.05,
    justifyContent: 'center',
    height: windowHeight * 0.3,
  },

  image: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.3,
    borderRadius: 8,
  },
  dotStyle: {
    backgroundColor: '#E8E8E8',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  activeDotStyle: {
    backgroundColor: '#5DB075',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginLeft: 3,
    marginRight: 3,
    marginTop: 3,
    marginBottom: 3,
  },
  paginationStyle: {
    bottom: -113,
    left: null,
    right: 10,
  },
  titleStyle: {
    width: windowWidth * 0.9,
    height: 19,
    marginLeft: -10,
    marginTop: 90,
    fontSize: 16,
    color: 'black',
    fontWeight: 600,
  },
  postMessage: {
    width: windowWidth * 0.9,
    height: 34,
    marginLeft: -10,
    marginVertical: 8,
    fontSize: 14,
    color: 'black',
    fontWeight: 400,
  },
  dateStyle: {
    width: windowWidth * 0.3,
    height: 17,
    marginLeft: -10,
    fontSize: 14,
    color: '#BDBDBD',
    fontWeight: 400,
  },

  headerContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.046,
    marginTop: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  contentInfo: {
    width: windowWidth * 0.9,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginHorizontal: windowWidth * 0.05,
  },

  headerText: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    color: 'black',
  },
  headerButtonContainer: {
    width: windowWidth * 0.105,
    height: windowHeight * 0.024,
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: 500,
    color: '#5DB075',
    position: 'absolute',
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
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 15,
    backgroundColor: '#F6F6F6',
  },
  contentsBlockContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.31,
    backgroundColor: '#F6F6F6',
    marginVertical: windowHeight * 0.02,
    marginHorizontal: windowWidth * 0.05,
    borderRadius: 8,
  },
  headerFeedText: {
    fontSize: 16,
    fontWeight: 600,
    color: 'black',
  },
  aboutContentDate: {
    fontSize: 14,
    fontWeight: 400,
    color: '#BDBDBD',
  },
  feedTextContainer: {},

  feedText: {
    fontSize: 14,
    fontWeight: 400,
    color: 'black',
    marginVertical: 8,
  },
});

export default styles;
