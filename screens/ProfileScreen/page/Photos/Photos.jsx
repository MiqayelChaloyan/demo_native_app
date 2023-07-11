import PropTypes from 'prop-types';
import {Text, View, Image} from 'react-native';
import React from 'react';
import styles from './style';

const Photos = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: item.imageUri}} style={styles.itemImage} />
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );
};

Photos.propTypes = {
  item: PropTypes.object,
};

export default React.memo(Photos);
