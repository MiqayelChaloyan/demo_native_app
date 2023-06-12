import PropTypes from 'prop-types';
import {useState, useContext, useEffect} from 'react';
import {Image, ScrollView, View} from 'react-native';
import Header from '../../components/Header/Header';
import ImagesModal from '../../components/Permission/children/images';
import PermissionModal from '../../components/Permission/Modal';
import {GlobalDataContext} from '../../contexts/context';
import RenderImagePairs from './RenderImagePairs';
import styles from './style';

const ImagesScreen = ({navigation}) => {
  const [sheet, setSheet] = useState('');
  const {arrayImages, setArrayImage, setImageUrl} =
    useContext(GlobalDataContext);
  const [photoId, setPhotoId] = useState(null);
  const [isModalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (sheet === 'Add') {
      const result = arrayImages.find(item => item.id === photoId);
      if (result) {
        setImageUrl(result.url);
        navigation.navigate('Profile');
      }
    } else if (sheet === 'Remove') {
      const updatedArrayImages = arrayImages.filter(
        item => item.id !== photoId,
      );
      setArrayImage(updatedArrayImages);
    }
    setModalVisible(false);
    setSheet('');
  }, [sheet]);

  const changeProfileImage = id => {
    setPhotoId(id);
    const updatedArrayImages = arrayImages.map(item => ({
      ...item,
      isChecked: item.id === id,
    }));
    setModalVisible(true);
    setArrayImage(updatedArrayImages);
  };

  return (
    <View style={styles.images}>
      <View style={styles.container}>
        <Header
          screen="Images"
          navigation={navigation}
          back="Profile"
          continueTo="Profile"
          left="Back"
          right="Next"
        />
        <ScrollView>
          {arrayImages && (
            <View style={styles.app}>
              {RenderImagePairs(changeProfileImage, photoId)}
            </View>
          )}
          {!arrayImages.length && (
            <View style={styles.contain}>
              <Image
                style={styles.empty}
                source={require('../../assets/images/EmptyFile.png')}
              />
            </View>
          )}
        </ScrollView>
      </View>

      <PermissionModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}>
        <ImagesModal setSheet={setSheet} />
      </PermissionModal>
    </View>
  );
};

ImagesScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ImagesScreen;
