import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import Modal from 'react-native-modal';
import {theme} from '../../assets/theme/theme';
import styles from './style';

const PermissionModal = ({isModalVisible, setModalVisible, setAnswer}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      coverScreen
      transparent
      backdropColor={theme.colors.primary_green}
      backdropOpacity={0.7}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={500}
      swipeDirection={['down', 'up', 'right', 'left']}
      onSwipeComplete={() => setModalVisible(false)}
      hideModal={() => setModalVisible(false)}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={styles.question}>
            Do you want to download the picture from your phone or storage?
          </Text>
          <View style={styles.contain}>
            <TouchableOpacity onPress={() => setAnswer('STORAGE')}>
              <Text style={styles.answer}>Storage</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setAnswer('PHONE')}>
              <Text style={styles.answer}>Phone</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

PermissionModal.propTypes = {
  isModalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  setAnswer: PropTypes.func,
};

export default PermissionModal;
