import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import CancelIcon from '../../../../assets/icons/Cancel.svg';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/metrics/Metrics';
import {theme} from '../../../../assets/theme/theme';
import styles from './style';

const ProfileModal = ({setAnswer}) => {
  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <TouchableOpacity
          onPress={() => setAnswer('Cancel')}
          style={styles.cancel}>
          <CancelIcon
            width={horizontalScale(25)}
            height={verticalScale(25)}
            fill={theme.colors.black}
          />
        </TouchableOpacity>
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
  );
};

ProfileModal.propTypes = {
  setAnswer: PropTypes.func,
};

export default ProfileModal;
