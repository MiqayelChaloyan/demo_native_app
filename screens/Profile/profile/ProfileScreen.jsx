import {useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import AddIcon from '../../../assets/icons/AddProfileImage.svg';
import {DNAdataContext} from '../../../Data/data';
import requestCameraPermission from '../../../utils/CameraPermissionUtils';
import {launchImageLibrary} from 'react-native-image-picker';
import SkeletonPosts from '../../../components/Skeleton/SkeletonPosts';
import SkeletonPhotos from '../../../components/Skeleton/SkeletonPhotos';
import Posts from '../page/Posts/Posts';
import Photos from '../page/Photos/Photos';
import Header from '../../../components/Header/Header';
import {theme} from '../../../assets/theme/theme';
import styles from './style';

const Profile = ({navigation}) => {
  const [showHide, setShowHide] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const {feedData} = useContext(DNAdataContext);
  const [loading, setLoading] = useState(true);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(timer);
  }, []);

  const selectFile = () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, res => {
      const url = res.assets && res.assets[0].uri;
      setImageUrl(url);
    });
  };

  const accessCamera = async () => await requestCameraPermission(selectFile);

  const renderSwitchValue = (item) => {
    if(showHide) {
     return loading ?  <SkeletonPhotos /> : <Photos item={item} />
    } else {
     return loading ? <SkeletonPosts /> : <Posts item={item}/>
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header
          screen={'Profile'}
          navigation={navigation}
          back={'Feed'}
          continueTo={'LogIn'}
          root={'Auth'}
          left={'Settings'}
          right={'Logout'}
          headerTextColor={theme.colors.primary}
        />
        <View style={styles.profileImage}>
          <View>
            {imageUrl ? (
              <View>
                <Image style={styles.userImage} source={{uri: imageUrl}} />
              </View>
            ) : (
              <View>
                <Image
                  style={styles.defaultProfileImage}
                  source={require('../../../assets/images/Profile.png')}
                />
              </View>
            )}
            <TouchableOpacity onPress={accessCamera}>
              <View style={styles.addProfileImage}>
                <AddIcon width={40} height={40} fill={theme.colors.green} />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.section}>
        <View>
          <Text style={styles.userFullName}>Victoria Robertson</Text>
          <Text style={styles.userAbount}>A mantra goes here</Text>
        </View>
        <View style={styles.switchContainer}>
          <SwitchSelector
            initial={0}
            onPress={value => setShowHide(value)}
            textColor={theme.colors.lightGray}
            selectedColor={theme.colors.green}
            backgroundColor={theme.colors.darkGray}
            buttonColor={theme.colors.primary}
            borderColor={theme.colors.gray}
            height={50}
            borderRadius={100}
            fontSize={20}
            valuePadding={2}
            hasPadding
            options={[
              {label: 'Posts', value: false},
              {label: 'Photos', value: true},
            ]}
          />
        </View>
      </View>
      <FlatList
          data={feedData}
          key={item => item.id}
          style={styles.contentsBlockContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) => renderSwitchValue(item)}
        />
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
