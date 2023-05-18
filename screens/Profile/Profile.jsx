import {useContext, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import AddIcon from '../../assets/icons/AddProfileImage.svg';
import {DNAdataContext} from '../../Data/data';
import requestCameraPermission from '../../utils/CameraPermissionUtils';
import {launchImageLibrary} from 'react-native-image-picker';
import SkeletonPosts from '../../components/Skeleton/SkeletonPosts';
import SkeletonPhotos from '../../components/Skeleton/SkeletonPhotos';
import Posts from './page/Posts/Posts';
import Photos from './page/Photos/Photos';
import Header from '../../components/Header/Header';
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

  return (
    <View style={styles.root}>
      <View style={styles.headerProfile}>
        <Header
          screen={'Profile'}
          navigation={navigation}
          back={'Feed'}
          continueTo={'LogIn'}
          root={'Auth'}
          left={'Settings'}
          right={'Logout'}
          headerTextColor={'white'}
        />
        <View style={styles.imageContainer}>
          <View style={styles.profile}>
            {imageUrl ? (
              <View style={styles.profileImgUrl}>
                <Image style={styles.userImg} source={{uri: imageUrl}} />
                <View style={styles.imageBackground} />
              </View>
            ) : (
              <View style={styles.addImageContainer}>
                <Image
                  style={styles.defaultProfileImage}
                  source={require('../../assets/images/Profile.png')}
                />
              </View>
            )}
            <TouchableOpacity onPress={accessCamera}>
              <View style={[styles.addImage, {bottom: imageUrl ? 180 : 10}]}>
                <AddIcon width={40} height={40} fill="#5DB075" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.informationContainer}>
        <View style={styles.informationBlog}>
          <Text style={styles.profileFullName}>Victoria Robertson</Text>
          <Text style={styles.profileContent}>A mantra goes here</Text>
        </View>
      </View>
      <View style={styles.switchPageContainer}>
        <View style={styles.switchBox}>
          <SwitchSelector
            initial={0}
            onPress={value => setShowHide(value)}
            textColor={'#BDBDBD'}
            selectedColor={'#5DB075'}
            backgroundColor={'#F6F6F6'}
            buttonColor={'#FFFFFF'}
            borderColor={'#E8E8E8'}
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
      {showHide ? (
        <FlatList
          data={feedData}
          key={item => item.id}
          style={styles.contentsBlockContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            loading ? <SkeletonPhotos /> : <Photos item={item} />
          }
        />
      ) : (
        <FlatList
          data={feedData}
          key={item => item.id}
          style={styles.contentsBlockContainer}
          keyExtractor={item => item.id}
          renderItem={({item}) =>
            loading ? <SkeletonPosts /> : <Posts item={item} />
          }
        />
      )}
    </View>
  );
};

Profile.propTypes = {
  navigation: PropTypes.object,
};

export default Profile;
