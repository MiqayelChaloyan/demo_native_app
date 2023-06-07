import PropTypes from 'prop-types';
import {useContext} from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import Modal from 'react-native-modal';
import {theme} from '../../assets/theme/theme';
import {GlobalDataContext} from '../../contexts/context';
import {setDataStorage} from '../../utils/AsyncStorageApiUtils';
import styles from './style';

const LogoutModal = ({isModalVisible, setModalVisible, navigation}) => {
  const {setUserData} = useContext(GlobalDataContext);

  const handleLogout = async key => {
    setModalVisible(false);
    await setDataStorage(key, false);
    Alert.alert('Logout successful');
    navigation.navigate('Auth', {screen: 'LogIn'});
    return setUserData({
      name: '',
      email: '',
      password: '',
      isChecked: false,
    });
  };

  return (
    <Modal
      isVisible={isModalVisible}
      coverScreen
      transparent
      backdropColor={theme.colors.primary_green}
      backdropOpacity={0.3}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      onSwipeComplete={() => setModalVisible(false)}
      hideModal={() => setModalVisible(false)}>
      <View style={styles.root}>
        <View style={styles.modal}>
          <Text style={styles.question}>Log out from page?</Text>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.button_1}
              onPress={() => handleLogout('loggedIn')}>
              <Text style={styles.text_1}>Yes</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button_2}
              onPress={() => setModalVisible(false)}>
              <Text style={styles.text_2}>No</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

LogoutModal.propTypes = {
  navigation: PropTypes.object,
  isModalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
};

export default LogoutModal;
