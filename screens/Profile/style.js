import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerProfile: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    backgroundColor: '#5DB075',
    height: '40%',
    position: 'relative',
    paddingTop: '15%',
  },
  profileTextContainer: {
    alignItems: 'center',
    marginTop: '2.5%',
  },
  profileText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: 500,
  },
  profile: {
    fontSize: 30,
    color: '#FFFFFF',
    fontWeight: 600,
  },
  imageContainer: {
    width: 150,
    height: 150,
    position: 'absolute',
    borderRadius: 100,
    bottom: -50,
    left: '30%',
  },
  profileImgUrl: {
    position: 'relative',
  },
  userImg: {
    width: 160,
    height: 160,
    borderRadius: 100,
    zIndex: 111,
    bottom: '4.5%',
    left: '3%',
  },
  imageBackground: {
    backgroundColor: 'white',
    width: 170,
    height: 170,
    borderRadius: 100,
    bottom: '55%',
    right: '1%',
  },
  addImageContainer: {
    backgroundColor: 'white',
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  informationContainer: {
    marginTop: '15%',
  },
  informationBlog: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  profileFullName: {
    fontSize: 30,
    color: '#000000',
    fontWeight: 600,
  },
  profileContent: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 600,
  },
  switchPageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '7%',
  },
  switchBox: {
    width: '90%',
  },
  contentsBlockContainer: {
    width: windowWidth * 0.9,
    marginVertical: windowHeight * 0.02,
    marginHorizontal: windowWidth * 0.05,
  },
  container: {
    paddingTop: StatusBar.currentHeight,
    height: StatusBar.currentHeight + 650,
  },
  photos: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
});

export default styles;