import React from 'react';
import PropTypes from 'prop-types';
import {Text, View, Image} from 'react-native';
import styles from './style';

const Photos = ({item}) => {
  return (
    <View>
      <View>
        <Image source={{uri: item.imageUri}} style={styles.itemImage} />
      </View>
      <Text style={styles.itemTitle}>{item.title}</Text>
    </View>
  );
};

Photos.propTypes = {
  item: PropTypes.object,
};

export default Photos;
