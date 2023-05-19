import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  feedScreen: {
    flex: 1,
    backgroundColor: 'white',
  },
  feedScreenContainer: {
    paddingHorizontal: 16,
    flex: 1,
    alignItems: 'center',
  },
  searchContainer: {
    width: '100%',
    marginTop: 32,
  },
  searchInput: {
    height: windowWidth * 0.133,
    minHeight: 40,
    maxHeight: 60,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 100,
    paddingTop: 16,
    paddingLeft: 16,
    paddingBottom: 15,
    backgroundColor: '#F6F6F6',
    fontSize: 16,
  },
  contentsBlockContainer: {
    width: '100%',
    height: windowHeight * 0.5,
    minHeight: 320,
    maxHeight: 445,
    marginTop: 16,
  },
  contentContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  imageContainer: {
    width: windowWidth * 0.133,
    height: windowWidth * 0.133,
    maxHeight: 60,
    maxWidth: 60,
  },
  feedItemImage: {
    height: windowWidth * 0.133,
    maxHeight: 60,
    borderRadius: 8,
  },
  contentInfo: {
    width: windowWidth * 0.74,
    height: windowHeight * 0.1,
    minWidth: 250,
    maxWidth: 304,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  headerFeedText: {
    fontSize: 16,
    fontWeight: 600,
    color: 'black',
    lineHeight: 19,
  },
  aboutContentDate: {
    fontSize: 14,
    fontWeight: 400,
    color: '#BDBDBD',
    lineHeight: 17,
    paddingTop: 2,
  },
  feedTextContainer: {
    paddingRight: 8,
  },
  feedText: {
    fontSize: 14,
    fontWeight: 400,
    color: 'black',
    lineHeight: 17,
  },
  skeleton: {
    marginTop: 25,
  },
});

export default styles;
