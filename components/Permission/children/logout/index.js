import {memo, useContext, useCallback} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {setDataStorage} from '../../../../utils/AsyncStorageApiUtils';
import {GlobalDataContext} from '../../../../contexts/context';
import styles from './style';

const LogoutModal = ({setModalVisible}) => {
  const {setLoggedIn} = useContext(GlobalDataContext);

  const handleLogout = useCallback(async key => {
    setModalVisible(false);
    await setDataStorage(key, false);
    Alert.alert('Logout successful');
    setLoggedIn(false);
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
  setModalVisible: PropTypes.func,
};

export default memo(LogoutModal);
