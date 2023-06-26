import PropTypes from 'prop-types';
import React from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import CheckIcon from '../../assets/icons/Check.svg';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import styles from './style';

const ImageItem = ({elem, changeProfileImage, isModalVisible}) => {
  const {url, id, isChecked} = elem;

  return (
    <TouchableOpacity
      style={isChecked && !isModalVisible && styles.specifiedImage}
      onPress={() => changeProfileImage(id)}>
      <Image source={{uri: url}} style={styles.image} />
      {isChecked && !isModalVisible && (
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
  sheet: PropTypes.string,
};

export default React.memo(ImageItem);