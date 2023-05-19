import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  contentContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  contentBlock: {
    width: windowWidth * 0.133,
    height: windowWidth * 0.133,
    backgroundColor: '#F6F6F6',
  },
  postImage: {
    width: windowWidth * 0.133,
    height: windowWidth * 0.133,
    borderRadius: 8,
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
  headerText: {
    fontSize: 16,
    fontWeight: 600,
    color: 'black',
  },
});

export default styles;
