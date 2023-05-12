import {useContext, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  PermissionsAndroid,
  FlatList,
  ScrollView,
} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import {launchImageLibrary} from 'react-native-image-picker';
import AddProfileIcon from '../../assets/icons/AddProfileImage.svg';
import styles from './style';
import {DNAdataContext} from '../../Data/data';
import Posts from './page/Posts/Posts';

const Profile = ({navigation}) => {
  const [showHide, setShowHide] = useState(false);
  const [imageUrl, setImageUrl] = useState('');
  const {feedData} = useContext(DNAdataContext);

  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        selectFile();
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

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

  return (
    <View style={{flex: 1}}>
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
                <TouchableOpacity onPress={requestCameraPermission}>
                  <AddProfileIcon width={170} height={170} fill="#5DB075" />
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
          renderItem={({item}) => {
            return <Posts item={item} />;
          }}
        />
      )}
    </View>
  );
};

export default Profile;
