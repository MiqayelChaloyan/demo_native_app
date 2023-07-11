import {memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';

const MarketItem = ({item, navigation}) => {
  const navigateTo = useCallback(() => {
    navigation.navigate({
      name: 'Description',
      params: {item},
    });
  }, [item]);
  
  return (
    <View>
      <TouchableOpacity onPress={navigateTo}>
        <View style={styles.itemImageContainer}>
          <Image
            source={{uri: item.imageUri}}
            style={styles.itemImageContainer}
          />
        </View>
        <View style={styles.itemNameContainer}>
          <Text
            style={styles.itemNameText}
            numberOfLines={2}
            ellipsizeMode="tail">
            Item #{item.id} {item.title}
          </Text>
        </View>
        <View style={styles.itemPriceContainer}>
          <Text style={styles.itemPriceText}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

MarketItem.propTypes = {
  item: PropTypes.object,
  navigation: PropTypes.object.isRequired,
};

export default memo(MarketItem);
