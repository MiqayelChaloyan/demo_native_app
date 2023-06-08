import {useContext, useState, useEffect} from 'react';
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

const Profile = ({navigation}) => {
  const {
    arrayImages,
    setArrayImage,
    imageUrl,
    setImageUrl,
    feeds,
    userData,
    loggedIn,
    setLoggedIn,
  } = useContext(GlobalDataContext);
  const [showHide, setShowHide] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isModalVisible, setModalVisible] = useState(false);
  const [isAnswer, setAnswer] = useState(null);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const fetchData = async () => {
      const result = await getDataStorage('loggedIn');
      setLoggedIn(result);
    };
    fetchData();
  }, [navigation, setLoggedIn]);

  const selectFile = () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, res => {
      const url = res.assets && res.assets[0].uri;
      setImageUrl(url);
      setArrayImage([
        ...arrayImages,
        {id: arrayImages.length + 1, url: url, isChecked: false},
      ]);
    });
  };

  const accessCamera = async () => await requestCameraPermission(selectFile);

  useEffect(() => {
    const handleAnswerChange = () => {
      setModalVisible(false);

      if (isAnswer === 'PHONE') {
        accessCamera();
      } else if (isAnswer === 'STORAGE') {
        navigation.navigate('Images');
      }

      setAnswer('');
    };
    handleAnswerChange();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAnswer]);

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
        feeds={feeds}
        loading={loading}
        showHide={showHide}
        setShowHide={setShowHide}
        navigation={navigation}
      />
      <PermissionModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}>
        <ProfileModal setAnswer={setAnswer} />
      </PermissionModal>
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
