import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  feedScreenContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
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
  contentsBlockContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.5,
    marginHorizontal: windowWidth * 0.05,
    justifyContent: 'space-between',
  },
  contentContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginTop: 16,
  },
  contentBlock: {
    width: windowWidth * 0.133,
    height: windowWidth * 0.133,
    backgroundColor: '#F6F6F6',
  },
  contentInfo: {
    width: windowWidth * 0.74,
    height: windowHeight * 0.1,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
    flexDirection: 'column',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
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
  feedTextContainer: {
    paddingRight: 24,
  },
  feedText: {
    fontSize: 14,
    fontWeight: 400,
    color: 'black',
  },
  feedItemImage: {
    width: windowWidth * 0.133,
    height: windowWidth * 0.133,
    borderRadius: 8,
  },
  skeleton: {
    marginTop: 25,
  },
});

export default styles;
