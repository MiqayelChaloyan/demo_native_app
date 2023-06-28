import PropTypes from 'prop-types';
import React, {useMemo} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import CheckIcon from '../../assets/icons/Check.svg';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import styles from './style';

const PictureGridItem = ({image, changeProfileImage, isModalVisible}) => {
  const {imageSource, id, isChecked} = image;

  const flexSize = useMemo(() => {
    const minSize = 2;
    const maxSize = 4;
    return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
  }, []);

  const handlePress = () => {
    changeProfileImage(id);
  };

  return (
    <TouchableOpacity style={[styles.imageBlock, { flex: flexSize }]} onPress={handlePress}>
      <Image source={{ uri: imageSource }} style={styles.image} />
      {isChecked && isModalVisible && (
        <View style={styles.checked}>
          <View style={styles.checkedBox}>
            <CheckIcon width={horizontalScale(21)} height={verticalScale(21)} />
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

PictureGridItem.propTypes = {
  image: PropTypes.object,
  changeProfileImage: PropTypes.func,
  isModalVisible: PropTypes.bool,
};

export default React.memo(PictureGridItem);
