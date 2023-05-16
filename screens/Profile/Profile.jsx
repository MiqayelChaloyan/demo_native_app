import {useContext, useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import AddProfileIcon from '../../assets/icons/AddProfileImage.svg';
import {DNAdataContext} from '../../Data/data';
import requestCameraPermission from '../../utils/CameraPermissionUtils';
import {launchImageLibrary} from 'react-native-image-picker';
import SkeletonPosts from '../../components/Skeleton/SkeletonPosts';
import Posts from './page/Posts/Posts';
import styles from './style';

const Profile = ({navigation}) => {
  const [showHide, setShowHide] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const {feedData} = useContext(DNAdataContext);
  const [loading, setLoading] = useState(true);

  // TODO: This part is for a test and will be changed lately.
  useEffect(() => {
    setTimeout(() => setLoading(false), 2500);
  }, []);

  const selectFile = () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
    };

    launchImageLibrary(options, res => {
      const url = res?.assets && res.assets[0].uri;
      setImageUrl(url);
    });
  };

  const accessCamera = async () => await requestCameraPermission(selectFile);

  return (
    <View style={styles.root}>
      <View style={styles.headerProfile}>
        <View style={styles.profileTextContainer}>
          <TouchableOpacity>
            <Text style={styles.profileText}>Settings</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.profile}>Profile</Text>
        </View>
        <View style={styles.profileTextContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Auth', {screen: 'LogIn'})}>
            <Text style={styles.profileText}>Logout</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <View>
            {imageUrl ? (
              <View style={styles.profileImgUrl}>
                <Image style={styles.userImg} source={{uri: imageUrl}} />
                <View style={styles.imageBackground} />
              </View>
            ) : (
              <View style={styles.addImageContainer}>
                <TouchableOpacity onPress={accessCamera}>
                  <AddProfileIcon width={150} height={150} fill="#5DB075" />
                </TouchableOpacity>
              </View>
            )}
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
        <View style={styles.photos}>
          <Text>Photos</Text>
        </View>
      ) : (
        <FlatList
          data={feedData}
          key={item => item.id}
          style={styles.contentsBlockContainer}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return loading ? (
              <SkeletonPosts />
            ) : (
              <Posts item={item} itemIndex={index} navigation={navigation} />
            );
          }}
        />
      )}
    </View>
  );
};

export default Profile;
