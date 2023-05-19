import {StyleSheet, Dimensions} from 'react-native';

// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {
    // width: windowWidth,
    // width: windowWidth,
    // height: windowHeight * 0.1,
    marginTop: 32,
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
    maxWidth: 94,
    maxHeight: 36,
  },
  // headerButtonContainer: {
  //   width: windowWidth * 0.1,
  //   height: windowHeight * 0.024,
  // },
  headerButtonText: {
    // width: 52,
    // height: 19,
    fontSize: 16,
    fontWeight: 500,
    // position: 'absolute',
    lineHeight: 19.36,
    maxWidth: 64,
    maxHeight: 19,
  },
});

export default styles;
