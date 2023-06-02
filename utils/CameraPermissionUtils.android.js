import {Alert, PermissionsAndroid} from 'react-native';

const requestCameraPermission = async func => {
  try {
    const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
    await PermissionsAndroid.request(permission);
    Promise.resolve();
    func();
  } catch (error) {
    Promise.reject(error);
    Alert.alert(error);
  }
};

export default requestCameraPermission;
