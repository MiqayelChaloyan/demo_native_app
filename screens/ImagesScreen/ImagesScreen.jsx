import PropTypes from 'prop-types';
import {useState, useContext, useEffect} from 'react';
import {Image, ScrollView, View} from 'react-native';
import Header from '../../components/Header/Header';
import {GlobalDataContext} from '../../Data/context';
import MyBottomsheet from './BottomSheet';
import RenderImagePairs from './RenderImageParis';
import styles from './style';

const ImagesScreen = ({navigation}) => {
  const [sheet, setSheet] = useState('');
  const {arrayImages, setArrayImage, setImageUrl} =
    useContext(GlobalDataContext);
  const [isBottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [photoId, setPhotoId] = useState(null);

  useEffect(() => {
    if (sheet === 'Add') {
      const result = arrayImages.filter(item => item.id === photoId);
      setImageUrl(result[0].url);
      return navigation.navigate('Profile');
    } else if (sheet === 'Remove') {
      const result = arrayImages.filter(item => item.id !== photoId);
      setArrayImage(result);
    }
    setSheet('');
    return setBottomSheetVisible(false);
  }, [sheet, photoId]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBottomSheetVisible(!isBottomSheetVisible);
    }, 200);
    return () => clearTimeout(timer);
  }, [photoId, changeProfileImage]);

  const changeProfileImage = id => {
    setPhotoId(id);
    setBottomSheetVisible(!isBottomSheetVisible);
  };

  return (
    <View style={styles.images}>
      <View style={styles.container}>
        <Header
          screen={'Images'}
          navigation={navigation}
          back={'Profile'}
          continueTo={'Profile'}
          left={'Back'}
          right={'Next'}
        />
        <ScrollView>
          {arrayImages && (
            <View style={styles.app}>
              {RenderImagePairs(isBottomSheetVisible, changeProfileImage)}
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
      {isBottomSheetVisible && <MyBottomsheet sheet={setSheet} />}
    </View>
  );
};

ImagesScreen.propTypes = {
  navigation: PropTypes.object,
};

export default ImagesScreen;
