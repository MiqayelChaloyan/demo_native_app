import {useContext, useState, useEffect, useCallback, memo} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {GlobalDataContext} from '../../../contexts/context';
import requestCameraPermission from '../../../utils/CameraPermissionUtils.android';
import {launchImageLibrary} from 'react-native-image-picker';
import PermissionModal from '../../../components/Permission/Modal';
import {getDataStorage} from '../../../utils/AsyncStorageApiUtils';
import ProfileModal from '../../../components/Permission/children/profile';
import HeaderBar from './HeaderBar';
import styles from './style';
import ToggleSwitch from './ToggleSwitch';
import useDelayedAction from '../../../customHooks/useDelayedAction';

const Profile = ({navigation}) => {
  const {
    arrayImages,
    setArrayImages,
    imageUrl,
    setImageUrl,
    userData,
    loggedIn,
    setLoggedIn,
  } = useContext(GlobalDataContext);
  const [showPostsOrPhotos, setShowPostsOrPhotos] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [addImage, setAddImage] = useState('');

  // TODO: This part is for a test and will be changed lately.
  useDelayedAction(() => setLoading(false), 2500);
  const fetchData = useCallback(async () => {
    const result = await getDataStorage('loggedIn');
    setLoggedIn(result);
  }, [setLoggedIn]);

  useEffect(() => {
    fetchData();
  }, [navigation, fetchData]);

  const selectFile = useCallback(() => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, res => {
      const url = res.assets && res.assets[0].uri;
      setImageUrl(url);
      setArrayImages([
        ...arrayImages,
        {id: arrayImages.length + 1, url: url, isChecked: false},
      ]);
    });
  }, [arrayImages]);

  const accessCamera = async () => await requestCameraPermission(selectFile);

  useEffect(() => {
    const handleAnswerChange = () => {
      setModalVisible(false);

      if (addImage === 'PHONE') {
        accessCamera();
      } else if (addImage === 'STORAGE') {
        navigation.navigate('Images');
      }

      setAddImage('');
    };
    handleAnswerChange();
  }, [addImage]);

  return !loggedIn ? (
    navigation.navigate('Auth', {screen: 'LogIn'})
  ) : (
    <View style={styles.container}>
      <HeaderBar
        navigation={navigation}
        imageUrl={imageUrl}
        userData={userData}
        arrayImages={arrayImages}
        setModalVisible={setModalVisible}
        accessCamera={accessCamera}
      />
      <ToggleSwitch
        loading={loading}
        showPostsOrPhotos={showPostsOrPhotos}
        setShowPostsOrPhotos={setShowPostsOrPhotos}
        navigation={navigation}
      />
      <PermissionModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}>
        <ProfileModal setAddImage={setAddImage} />
      </PermissionModal>
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default memo(Profile);
