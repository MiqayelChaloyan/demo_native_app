import PropTypes from 'prop-types';
import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './style';

const diffMonths = createdData => {
  const currentDate = new Date();
  const createdDate = new Date(createdData);
  return (
    (currentDate.getFullYear() - createdDate.getFullYear()) * 12 +
    (currentDate.getMonth() - createdDate.getMonth())
  );
};

const ChangeSwiperItem = ({item}) => {
  const {title, imageUri, message} = item;
  const monthsAgo = diffMonths(item.createdData);

  return (
    <View style={styles.contentItem}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: imageUri }} />
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
          <Text style={styles.dateStyle}>{monthsAgo}m ago</Text>
        </View>
      </View>
    </View>
  );
};

ChangeSwiperItem.propTypes = {
  item: PropTypes.object,
};

export default React.memo(ChangeSwiperItem);
