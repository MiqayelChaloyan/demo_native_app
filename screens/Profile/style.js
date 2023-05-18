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
    height: '32%',
    position: 'relative',
    paddingTop: '1%',
    paddingRight: 10,
  },
  profile: {
    position: 'relative',
  },
  imageContainer: {
    width: 150,
    height: 150,
    position: 'absolute',
    borderRadius: 100,
    bottom: -40,
    left: '33%',
  },
  profileImgUrl: {
    position: 'relative',
    right: 10,
  },
  userImg: {
    width: 160,
    height: 160,
    borderRadius: 100,
    zIndex: 111,
    bottom: '5%',
    left: '5%',
  },
  imageBackground: {
    backgroundColor: 'white',
    width: 165,
    height: 165,
    borderRadius: 100,
    bottom: '55%',
    right: '-3.5%',
  },
  addImage: {
    position: 'absolute',
    left: 120,
  },
  addImageContainer: {
    backgroundColor: 'white',
    width: 150,
    height: 150,
    borderRadius: 100,
    position: 'relative',
  },
  informationContainer: {
    marginTop: '12%',
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
    marginTop: '2%',
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
  defaultProfileImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});

export default styles;
