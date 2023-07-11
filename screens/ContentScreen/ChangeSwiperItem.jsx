import {memo, useMemo} from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import {calculateMonthDifference} from '../../assets/features/calculateDiffMonths';
import styles from './style';

const ChangeSwiperItem = ({item}) => {
  const {title, imageUri, message} = item;
  const diffMonths = useMemo(() => calculateMonthDifference(item), [item]);

  return (
    <View style={styles.contentItem}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: imageUri}} />
      </View>
      <View style={styles.itemInfoContainer}>
        <View>
          <Text style={styles.titleStyle}>{title}</Text>
        </View>
        <View>
          <Text
            style={styles.postMessage}
            numberOfLines={2}
            ellipsizeMode="tail">
            {message}
          </Text>
          <Text style={styles.dateStyle}>{diffMonths}m ago</Text>
        </View>
      </View>
    </View>
  );
};

ChangeSwiperItem.propTypes = {
  item: PropTypes.object,
};

export default memo(ChangeSwiperItem);
