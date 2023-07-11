import PropTypes from 'prop-types';
import React, {useContext, useMemo} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import CheckIcon from '../../assets/icons/Check.svg';
import {horizontalScale, verticalScale} from '../../assets/metrics/Metrics';
import {GlobalDataContext} from '../../contexts/context';
import styles from './style';

const PictureGridItem = ({image, changeProfileImage, isModalVisible}) => {
  const {imageUrl, arrayImages} = useContext(GlobalDataContext);
  const {imageSource, id, isChecked} = image;

  const flexSize = useMemo(() => {
    const minSize = 2;
    const maxSize = 4;
    return Math.floor(Math.random() * (maxSize - minSize + 1)) + minSize;
  }, []);

  const handlePress = () => {
    if (arrayImages.length === 1 && arrayImages[0].imageSource === imageUrl) {
      return;
    }
    changeProfileImage(id);
  };

  return (
    <TouchableOpacity
      style={[styles.imageBlock, {flex: flexSize}]}
      onPress={handlePress}>
      <Image source={{uri: imageSource}} style={styles.image} />
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
  image: PropTypes.object.isRequired,
  changeProfileImage: PropTypes.func,
  isModalVisible: PropTypes.bool,
};

export default React.memo(PictureGridItem);
