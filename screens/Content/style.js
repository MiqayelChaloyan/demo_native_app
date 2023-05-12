import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
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
    },
    headerTextContainer: {},
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
        padding: 10,
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
    headerText: {
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