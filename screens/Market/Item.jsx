import React from 'react';
import { Text, View, Image } from 'react-native';
import styles from './style';

const Item = ({ item }) => {
  return (
    <View>
      <View style={styles.itemImageContainer}>
        <Image
          source={{ uri: item.imageUri }}
          style={styles.itemImageContainer}
        />
      </View>
      <View style={styles.itemNameContainer}>
        <Text style={styles.itemNameText}>
          Item #{item.id} {item.title}
        </Text>
      </View>
      <View style={styles.itemPriceContainer}>
        <Text style={styles.itemPriceText}>{item.price}</Text>
      </View>
    </View>
  );
};

export default Item;
