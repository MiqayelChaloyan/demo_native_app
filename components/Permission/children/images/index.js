import PropTypes from 'prop-types';
import {Text, TouchableOpacity, View} from 'react-native';
import DeleteIcon from '../../../../assets/icons/Delete.svg';
import ProfileIcon from '../../../../assets/icons/ProfileAdd.svg';
import {theme} from '../../../../assets/theme/theme';
import CancelIcon from '../../../../assets/icons/Cancel.svg';
import {
  horizontalScale,
  verticalScale,
} from '../../../../assets/metrics/Metrics';
import styles from './style';
import {memo} from 'react';
const ImagesModal = ({setAction}) => {
  return (
    <View style={styles.root}>
      <View style={styles.modal}>
        <TouchableOpacity
          style={styles.cancel}
          onPress={() => setAction('Cancel')}>
          <CancelIcon
            width={horizontalScale(25)}
            height={verticalScale(25)}
            fill={theme.colors.black}
          />
        </TouchableOpacity>
        <View style={styles.questionsContainer}>
          <TouchableOpacity
            style={styles.button_1}
            onPress={() => setAction('Add')}>
            <ProfileIcon
              width={27}
              height={27}
              fill={theme.colors.light_blue}
            />
            <Text style={styles.text_1}>Upload Image</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button_2}
            onPress={() => setAction('Remove')}>
            <DeleteIcon width={30} height={30} fill={theme.colors.light_blue} />
            <Text style={styles.text_2}>Remove Image</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

ImagesModal.propTypes = {
  setAction: PropTypes.func,
};

export default memo(ImagesModal);
