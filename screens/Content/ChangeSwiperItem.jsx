import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View} from 'react-native';
import styles from './style';

const diffMonths = item => {
  const todaysDate = new Date();
  const createdDate = new Date(item.createdData);
  return (
    (todaysDate.getFullYear() - createdDate.getFullYear()) * 12 +
    (todaysDate.getMonth() - createdDate.getMonth())
  );
};

const ChangeSwiperItem = ({item}) => {
  const monthsAgo = diffMonths(item);
  return (
    <View style={styles.contentItem}>
      <Image
        resizeMode="stretch"
        style={styles.image}
        source={{uri: item.imageUri}}
      />
      <Text style={styles.titleStyle}>{item.title}</Text>
      <View>
        <Text style={styles.postMessage} numberOfLines={2} ellipsizeMode="tail">
          {item.message}
        </Text>

        <Text style={styles.dateStyle}>{monthsAgo}m ago</Text>
      </View>
    </View>
  );
};

ChangeSwiperItem.propTypes = {
  item: PropTypes.object,
};

export default ChangeSwiperItem;
