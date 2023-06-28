import PropTypes from 'prop-types';
import React, {useState, useContext, useCallback} from 'react';
import {Image, View} from 'react-native';
import ImagesModal from '../../components/Permission/children/images';
import PermissionModal from '../../components/Permission/Modal';
import {GlobalDataContext} from '../../contexts/context';
import PictureGrid from './PictureGrid';
import useEffectAfterMount from '../../customHooks/useEffectAfterMount';
import styles from './style';

const ImageList = ({navigation}) => {
  const {arrayImages, setArrayImage, setImageUrl, imageUrl} = useContext(GlobalDataContext);
  const [action, setAction] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [photoId, setPhotoId] = useState(null);

  const modifyPictureList = useCallback(() => {
    switch (action) {
      case 'Add':
        const result = arrayImages.find(item => item.id === photoId);
        if (result) {
          setImageUrl(result.imageSource);
          navigation.navigate('Profile');
        }
        break;
      case 'Remove':
        const updatedArrayImages = arrayImages.filter(item => {
          if (item.id === photoId && item.url === imageUrl) {
            setImageUrl(null);
          }
          return item.id !== photoId;
        });
        setArrayImage(updatedArrayImages);
        break;
      default:
        const updated = arrayImages.map(item => ({
          ...item,
          isChecked: !item.isChecked,
        }));
        setArrayImage(updated);
        break;
    }

    setModalVisible(false);
    setAction('');
  }, [action]);

  useEffectAfterMount(() => {
    modifyPictureList();
  }, [modifyPictureList]);

  return (
    <>
      {arrayImages.length ? (
        <View style={styles.app}>
          <PictureGrid isModalVisible={isModalVisible} setModalVisible={setModalVisible} setPhotoId={setPhotoId} />
        </View>
      ) : (
        <View style={styles.contain}>
          <Image style={styles.empty} source={require('../../assets/images/EmptyFile.png')} />
        </View>
      )}
      <PermissionModal isModalVisible={isModalVisible} setModalVisible={setModalVisible}>
        <ImagesModal setAction={setAction} />
      </PermissionModal>
    </>
  );
};

ImageList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default React.memo(ImageList);
