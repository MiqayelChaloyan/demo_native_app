import {memo} from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-native-modal';
import {theme} from '../../assets/theme/theme';

const PermissionModal = ({isModalVisible, setModalVisible, children}) => {
  return (
    <Modal
      isVisible={isModalVisible}
      coverScreen
      transparent
      backdropColor={theme.colors.primary_green}
      backdropOpacity={0.4}
      backdropTransitionInTiming={500}
      backdropTransitionOutTiming={600}
      onSwipeComplete={() => setModalVisible(false)}>
      {children}
    </Modal>
  );
};

PermissionModal.propTypes = {
  isModalVisible: PropTypes.bool,
  setModalVisible: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default memo(PermissionModal);
