import {StyleSheet, Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  headerContainer: {
    width: windowWidth * 0.9,
    height: windowHeight * 0.05,
    marginTop: windowWidth * 0.04,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    left: 15,
  },
  headerText: {
    fontSize: 30,
    fontWeight: 600,
    textAlign: 'center',
    color: 'black',
    right: 5,
  },
  headerButtonContainer: {
    width: windowWidth * 0.17,
    height: windowHeight * 0.024,
  },
  headerButtonText: {
    fontSize: 16,
    fontWeight: 500,
    position: 'absolute',
  },
});

export default styles;
