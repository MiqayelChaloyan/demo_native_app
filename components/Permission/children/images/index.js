import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import DeleteIcon from '../../../../assets/icons/Delete.svg';
import ProfileIcon from '../../../../assets/icons/ProfileAdd.svg';
import {theme} from '../../../../assets/theme/theme';
import CancelIcon from '../../../../assets/icons/Cancel.svg';

import styles from './style';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/metrics/Metrics';

const ImagesModal = ({setSheet}) => {
  return (
    <View style={styles.root}>
      <View style={styles.modal}>
        <TouchableOpacity
          style={styles.cancel}
          onPress={() => setSheet('Cancel')}>
          <CancelIcon
            width={horizontalScale(25)}
            height={verticalScale(25)}
            fill={theme.colors.black}
          />
        </TouchableOpacity>
        <View style={styles.questionsContainer}>
          <TouchableOpacity
            style={styles.button_1}
            onPress={() => setSheet('Add')}>
            <ProfileIcon
              width={15}
              height={15}
              fill={theme.colors.light_blue}
            />
            <Text style={styles.text_1}>Change profile Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_2}
            onPress={() => setSheet('Remove')}>
            <DeleteIcon width={20} height={20} fill={theme.colors.light_blue} />
            <Text style={styles.text_2}>Remove Image</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

ImagesModal.propTypes = {
  setSheet: PropTypes.func,
};

export default ImagesModal;
