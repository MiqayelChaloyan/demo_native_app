import PropTypes from 'prop-types';
import {Image, TouchableOpacity, View} from 'react-native';
import CheckIcon from '../../assets/icons/Check.svg';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import styles from './style';

const ImageItem = ({elem, changeProfileImage}) => {
  return (
    <TouchableOpacity
      style={elem.isChecked && styles.specifiedImage}
      onPress={() => changeProfileImage(elem.id)}>
      <Image source={{uri: elem.url}} style={styles.image} />
      {elem.isChecked && (
        <View style={styles.checked}>
          <View style={styles.checkedBox}>
            <CheckIcon width={horizontalScale(21)} height={verticalScale(21)} />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

ImageItem.propTypes = {
  elem: PropTypes.object,
  changeProfileImage: PropTypes.func,
};

export default ImageItem;
