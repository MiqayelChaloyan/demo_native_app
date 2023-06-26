import PropTypes from 'prop-types';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './style';
import {memo} from 'react';

const MarketItem = ({item, navigation}) => {
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate({
            name: 'Description',
            params: {item},
          });
        }}>
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
  navigation: PropTypes.object,
};

export default memo(MarketItem);
