import PropTypes from 'prop-types';
import React, {useState, useContext, useEffect} from 'react';
import {Image, ScrollView, View} from 'react-native';
import ImagesModal from '../../components/Permission/children/images';
import PermissionModal from '../../components/Permission/Modal';
import {GlobalDataContext} from '../../contexts/context';
import RenderImagePairs from './RenderImagePairs';
import styles from './style';


const ImageList = ({navigation}) => {
    const {arrayImages, setArrayImage, setImageUrl, imageUrl} = useContext(GlobalDataContext);
    const [sheet, setSheet] = useState('');
    const [isModalVisible, setModalVisible] = useState(false);
    const [photoId, setPhotoId] = useState(null);

    useEffect(() => {
      if (sheet === 'Add') {
        const result = arrayImages.find(item => item.id === photoId);
        if (result) {
          setImageUrl(result.url);
          navigation.navigate('Profile');
        }
      } else if (sheet === 'Remove') {
        const updatedArrayImages = arrayImages.filter(item => {
          if (item.id === photoId && item.url === imageUrl) {
            setImageUrl(null);
          }
          return item.id !== photoId
        }
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
        <>
            <ScrollView>
                {arrayImages && (
                    <View style={styles.app}>
                        {RenderImagePairs(changeProfileImage, isModalVisible)}
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
            <PermissionModal
                isModalVisible={isModalVisible}
                setModalVisible={setModalVisible}>
                <ImagesModal setSheet={setSheet} />
            </PermissionModal>
        </>
    )
}

ImageList.propTypes = {
    navigation: PropTypes.object.isRequired,
};

export default React.memo(ImageList);