import {Alert, PermissionsAndroid} from 'react-native';

const requestCameraPermission = async func => {
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
      func();
      Alert.alert('You can use the camera');
    } else {
      Alert.alert('Camera permission denied');
    }
  } catch (err) {
    Alert.alert(err);
  }
};

export default requestCameraPermission;
