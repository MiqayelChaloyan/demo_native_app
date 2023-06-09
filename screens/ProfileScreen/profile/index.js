import {memo, useContext, useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {GlobalDataContext} from '../../../contexts/context';
import requestCameraPermission from '../../../utils/CameraPermissionUtils.android';
import {launchImageLibrary} from 'react-native-image-picker';
import PermissionModal from '../../../components/Permission/Modal';
import ProfileModal from '../../../components/Permission/children/profile';
import HeaderBar from './HeaderBar';
import ToggleSwitch from './ToggleSwitch';
import {useFocusEffect} from '@react-navigation/native';
import styles from './style';

const Profile = ({navigation}) => {
  const {
    arrayImages,
    setArrayImages,
    imageUrl,
    setImageUrl,
    userData,
    setChangeStatusBar,
  } = useContext(GlobalDataContext);
  const [isModalVisible, setModalVisible] = useState(false);
  const [addImage, setAddImage] = useState('');

  useFocusEffect(
    useCallback(() => {
      setChangeStatusBar(true);
      return () => {
        setChangeStatusBar(false);
      };
    }, []),
  );

  const selectFile = () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, res => {
      const url = res.assets && res.assets[0].uri;

      if (url) {
        setImageUrl(url);
        setArrayImages([
          ...arrayImages,
          {id: arrayImages.length + 1, imageSource: url, isChecked: false},
        ]);
      }
    });
  };

  const accessCamera = async () => await requestCameraPermission(selectFile);

  const handleAnswerChange = () => {
    setModalVisible(false);

    if (addImage === 'PHONE') {
      accessCamera();
    } else if (addImage === 'STORAGE') {
      navigation.navigate('Images');
    }

    setAddImage('');
  };

  useEffect(() => {
    handleAnswerChange();
  }, [addImage]);

  return (
    <View style={styles.container}>
      <HeaderBar
        navigation={navigation}
        imageUrl={imageUrl}
        userData={userData}
        arrayImages={arrayImages}
        setModalVisible={setModalVisible}
        accessCamera={accessCamera}
      />
      <ToggleSwitch navigation={navigation} />
      <PermissionModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}>
        <ProfileModal setAddImage={setAddImage} />
      </PermissionModal>
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default memo(Profile);
