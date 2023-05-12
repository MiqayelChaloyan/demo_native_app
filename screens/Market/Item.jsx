import React from 'react';
import { Dimensions, Text, View, Image } from 'react-native';
import styles from './style';

const windowWidth = Dimensions.get('window').width;

const Item = ({ item }) => {
  return (
    <View>
      <View style={styles.itemImageContainer}>
        <Image
          source={{ uri: item.imageUri }}
          style={{
            width: windowWidth * 0.29,
            height: windowWidth * 0.29,
            borderRadius: 8,
          }}
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
