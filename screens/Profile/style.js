import {Dimensions, StatusBar, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerProfile: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    backgroundColor: '#5DB075',
    height: 245,
    position: 'relative',
    paddingTop: 9,
    paddingRight: 10,
  },
  imageContainer: {
    width: 150,
    height: 150,
    position: 'absolute',
    borderRadius: 100,
    marginTop: '35%',
    left: '31%',
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
    bottom: 16.5,
    left: 8,
  },
  imageBackground: {
    backgroundColor: 'white',
    width: 165,
    height: 165,
    borderRadius: 100,
    bottom: '55%',
    right: -5.5,
  },
  addImage: {
    position: 'absolute',
    left: '80%',
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
    marginTop: 10,
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
    marginTop: '4%',
  },
  switchBox: {
    width: windowWidth * 0.9,
  },
  contentsBlockContainer: {
    width: windowWidth * 0.9,
    marginVertical: windowWidth * 0.03,
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
