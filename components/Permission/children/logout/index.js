import {useCallback} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {setDataStorage} from '../../../../utils/AsyncStorageApiUtils';
import styles from './style';

const LogoutModal = ({navigation, setModalVisible}) => {
  const handleLogout = useCallback(async key => {
    setModalVisible(false);
    await setDataStorage(key, false);
    Alert.alert('Logout successful');
    navigation.navigate('Auth', {screen: 'SignIn'});
  }, []);
  const handleCloseModal = useCallback(() => setModalVisible(false), []);
  return (
    <View style={styles.root}>
      <View style={styles.modal}>
        <Text style={styles.question}>Are you sure you want to log out?</Text>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.button_1}
            onPress={() => handleLogout('loggedIn')}>
            <Text style={styles.text_1}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button_2} onPress={handleCloseModal}>
            <Text style={styles.text_2}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

LogoutModal.propTypes = {
  navigation: PropTypes.object,
  setModalVisible: PropTypes.func,
};

export default LogoutModal;
