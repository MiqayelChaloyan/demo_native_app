import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.05,
    marginTop: windowHeight * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    color: 'black',
    lineHeight: 36.31,
  },
  headerButtonContainer: {
    width: windowWidth * 0.1,
    height: windowHeight * 0.024,
  },
  headerButtonText: {
    width: 64,
    height: 19,
    fontSize: 16,
    fontWeight: 500,
    position: 'absolute',
    lineHeight: 19.36,
  },
});

export default styles;
